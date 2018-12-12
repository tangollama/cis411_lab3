const newrelic = require("newrelic");
const { users, locations, bagelTypes } = require("./testdata");
const uuid = require("uuid");
const startCase = require("lodash.startcase");
//lokijs documentation https://rawgit.com/techfort/LokiJS/master/jsdoc/index.html
const loki = require("lokijs");

class Order {
  constructor(id, { request_date, location, items, account, source_system }) {
    this.id = id;
    this.request_date = request_date;
    this.location = location;
    this.source_system = source_system;
    this.account = account; //object
    this.items = items; //array of objects
  }
}
class Account {
  constructor(id, { email, cell, name }) {
    this.id = id;
    this.email = email;
    this.cell = cell;
    this.name = name;
  }
}
const loadOrder = async id => {
  return new Promise(resolve => {
    newrelic.startSegment("loadOrderById", false, () => {
      const orders = db.getCollection("orders");
      const accounts = db.getCollection("accounts");
      //Object.assign to ensure we're not creating circular references
      const order = Object.assign({}, orders.findOne({ id: id }));
      if (order) {
        const account = accounts.findOne({ id: order.account_id });
        order.customer = account;
        order.dateLastOpened = new Date().getTime();
        orders.update(order);
      }
      resolve(order);
    });
  });
};

const queryOrders = async args => {
  const { query, location, bagel } = args;
  if (location) {
    return new Promise(resolve => {
      newrelic.startSegment("queryOrdersByLocation", false, () => {
        const orders = db.getCollection("orders");
        const accounts = db.getCollection("accounts");
        const results = orders.find({ location: location });
        results.forEach(element => {
          if (element.account_id) {
            //Object.assign to ensure we're not creating circular references
            element.customer = Object.assign(
              {},
              accounts.findOne({ id: element.account_id })
            );
          }
        });
        resolve(results);
      });
    });
  } else if (bagel) {
    return new Promise(resolve => {
      newrelic.startSegment("queryOrdersByBagelType", false, () => {
        const orders = db.getCollection("orders");
        const accounts = db.getCollection("accounts");
        const results = orders.find({ "items.type": { $contains: bagel } });
        results.forEach(element => {
          if (element.account_id) {
            //Object.assign to ensure we're not creating circular references
            element.customer = Object.assign(
              {},
              accounts.findOne({ id: element.account_id })
            );
          }
        });
        resolve(results);
      });
    });
  } else if (query) {
    return new Promise(resolve => {
      newrelic.startSegment("queryOrdersByType", false, () => {
        const orders = db.getCollection("orders");
        const accounts = db.getCollection("accounts");
        const results = orders.find({
          $or: [
            { "items.type": { $contains: query } },
            { "items.label": { $contains: query } }
          ]
        });
        results.forEach(element => {
          if (element.account_id) {
            //Object.assign to ensure we're not creating circular references
            element.customer = Object.assign(
              {},
              accounts.findOne({ id: element.account_id })
            );
          }
        });
        resolve(results);
      });
    });
    //}
    /*else if (query) {
    return new Promise(resolve => {
      newrelic.startSegment("queryOrdersBySearchTerm", false, () => {
        const orders = db.getCollection("orders");
        const accounts = db.getCollection("accounts");
        const results = orders.find({
          $or: [
            {
              id: {
                $contains: query
              }
            },
            {
              request_date: {
                $contains: query
              }
            },
            {
              location: {
                $contains: query
              }
            },
            {
              source: {
                $contains: query
              }
            },
            {
              "items.type": {
                $contains: query
              }
            },
            {
              "items.label": {
                $contains: query
              }
            }
          ]
        });

        results.forEach(element => {
          if (element.account_id) {
            //Object.assign to ensure we're not creating circular references
            element.customer = Object.assign(
              {},
              accounts.findOne({ id: element.account_id })
            );
          }
        });

        /* const results = ids.map((result) => {
                    return loadOrder(result.id)
                }) //*/
    /* orders.forEach(element => {
          if (element.account_id) {
            //Object.assign to ensure we're not creating circular references
            element.customer = Object.assign(
              {},
              accounts.findOne({ id: element.account_id })
            );
          }//*
        resolve(results);
      });
    });*/
  } else {
    return new Promise(resolve => {
      newrelic.startSegment("queryOrdersOpen", false, () => {
        const orders = db.getCollection("orders");
        const accounts = db.getCollection("accounts");
        //return the entire database... this is probably going to take a moment.
        const results = orders.chain().data();
        results.forEach(element => {
          if (element.account_id) {
            //Object.assign to ensure we're not creating circular references
            element.customer = Object.assign(
              {},
              accounts.findOne({ id: element.account_id })
            );
          }
        });
        resolve(results);
      });
    });
  }
};
const upsertOrder = async input => {
  if (input.id) {
    return new Promise(resolve => {
      newrelic.startSegment("updateOrder", false, () => {
        const orders = db.getCollection("orders");
        var order = orders.findOne({ id: input.id });
        order = Object.assign(order, input);
        orders.update(order);
        resolve(order);
      });
    });
  } else {
    return new Promise(resolve => {
      newrelic.startSegment("insertOrder", false, () => {
        const orders = db.getCollection("orders");
        input.id = uuid();
        input.dateLastOpened = null;
        resolve(orders.insert(input));
      });
    });
  }
};
const loadAccount = async id => {
  return new Promise(resolve => {
    newrelic.startSegment("loadAccount", false, () => {
      const accounts = db.getCollection("accounts");
      const orders = db.getCollection("orders");
      //Object.assign to ensure we're not creating circular references
      const account = Object.assign({}, accounts.findOne({ id: id }));
      const myOrders = orders.find({ account_id: id });
      account.orders = myOrders;
      resolve(account);
    });
  });
};
const queryAccounts = async query => {
  if (query) {
    return new Promise(resolve => {
      newrelic.startSegment("queryAccountsBtSearchTerm", false, () => {
        const accountsCollection = db.getCollection("accounts");
        const accounts = accountsCollection.find({
          $or: [
            {
              email: {
                $contains: query
              }
            },
            {
              name: {
                $contains: query
              }
            }
          ]
        });
        resolve(accounts);
      });
    });
  } else {
    return new Promise(resolve => {
      newrelic.startSegment("queryAccountsBtSearchTerm", false, () => {
        const accountsCollection = db.getCollection("accounts");
        resolve(
          accountsCollection
            .chain()
            .simplesort("name")
            .data()
        );
      });
    });
  }
};

const upsertAccount = async input => {
  if (input.id) {
    return new Promise(resolve => {
      newrelic.startSegment("updateAccount", false, () => {
        const accounts = db.getCollection("accounts");
        var account = accounts.findOne({ id: input.id });
        account = Object.assign(account, input);
        accounts.update(account);
        resolve(account);
      });
    });
  } else {
    return new Promise(resolve => {
      newrelic.startSegment("insertAccount", false, () => {
        const accounts = db.getCollection("accounts");
        input.id = uuid();
        resolve(accounts.insert(input));
      });
    });
  }
};
const deleteAccount = async id => {
  return new Promise(resolve => {
    newrelic.startSegment("insertAccount", false, () => {
      const accounts = db.getCollection("accounts");
      var account = accounts.findOne({ id: id });
      accounts.remove(account);
      resolve();
    });
  });
};

const db = new loki("bagels.db", {
  autoload: true,
  autoloadCallback: _dbInit,
  autosave: true,
  autosaveInterval: 4000
});

function _dbInit() {
  var accounts = db.getCollection("accounts");
  if (!accounts) {
    accounts = db.addCollection("accounts");
    users.forEach(user => {
      upsertAccount(user);
    });
    db.saveDatabase();
  }

  var orders = db.getCollection("orders");
  if (!orders) {
    orders = db.addCollection("orders");
    for (var i = 0; i < 100000; i++) {
      const location = locations[Math.floor(Math.random() * locations.length)];
      const bagelType =
        bagelTypes[Math.floor(Math.random() * bagelTypes.length)];
      const account_id = users[Math.floor(Math.random() * users.length)].id;
      const order = {
        request_date: new Date(
          "2018",
          "11",
          Math.floor(Math.random() * 30 + 1)
        ),
        location: location,
        items: [
          {
            label: startCase(bagelType),
            type: bagelType,
            quantity: Math.floor(Math.random() * 5 + 1),
            perUnitPrice: 2.5
          }
        ],
        account_id: account_id,
        source_system: "dataload"
      };
      upsertOrder(order);
    }
  }
  db.saveDatabase();
  console.log(`Accounts: ${accounts.count()} Orders: ${orders.count()}`);
}

module.exports = {
  loadOrder,
  queryOrders,
  upsertOrder,
  loadAccount,
  upsertAccount,
  deleteAccount,
  queryAccounts,
  Order,
  Account
};

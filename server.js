const newrelic = require('newrelic')
const { ApolloServer, gql } = require('apollo-server')
const { loadOrder, queryOrders, upsertOrder, loadAccount, upsertAccount, deleteAccount, queryAccounts } = require('./dbutil')

// GraphQL schema
const getOrder = (parent, args, context, info) => { 
    var id = args.id
    return new Promise(resolve => {
        newrelic.startSegment('getOrder', false, () => {
            loadOrder(id).then(order => {
                console.log("resolving order", order)
                resolve(order)
            })
        })
    })
}
const getOrders = (parent, args, context, info) => {
    return new Promise(resolve => {
        newrelic.startSegment('getOrders', false, () => {
            queryOrders(args).then(results => {
                resolve(results)
            })
        })
    })
}
const createOrder = (parent, args, context, info) => {
    var input = args.input
    if (!input.request_date)
        input.request_date = new Date()
    return new Promise(resolve => {
        newrelic.startSegment('createOrder', false, () => {
            resolve(upsertOrder(input))
        })
    })
}
const crudAccount = (parent, args, context, info) => {
    var input = args.input
    input.mutation = input.mutation.toLowerCase()
    return new Promise(resolve => {
        newrelic.startSegment('crudAccount', false, () => {
            if (input.mutation == "delete") {
                resolve(deleteAccount(input))
            } else {
                resolve(upsertAccount(input))
            }                    
        })
    })
}
const getAccount = (parent, args, context, info) => {
    return new Promise(resolve => {
        newrelic.startSegment('getAccount', false, () => {
            resolve(loadAccount(args.id))
        })
    })
}
const getAccounts = (parent, args, context, info) => {
    return new Promise(resolve => {
        newrelic.startSegment('getAccounts', false, () => {
            resolve(queryAccounts(args.query))
        })
    })
}

// The GraphQL schema
const typeDefs = gql`
scalar Date
type Query {
    account(id: String!): AccountHistory
    accounts(query: String): [Account]
    order(id: String!): Order
    orders(query: String, location: String, bagel: String
    ): [Order]
}
type Mutation {
    mutateAccount(input: AccountInput!): AccountHistory
    addOrder(input: OrderInput!): Order
}  
input OrderInput {
    request_date: Date
    location: String! 
    items: [ItemInput]!
    account_id: String
    source_system: String!
}
input AccountInput {
    id: String
    email: String
    cell: String
    name: String
    mutation: String
}
input ItemInput {
    label: String
    type: String
    quantity: Int
    perUnitPrice: Float
}  
type Order {
    id: String
    request_date: Date
    location: String
    items: [OrderItem]
    account_id: String
    customer: Account
    source: String
    dateLastOpened: Date
}
type OrderItem {
    label: String
    type: String
    quantity: Int
    perUnitPrice: Float
}
type Account {
    id: String
    email: String
    cell: String
    name: String
}
type AccountHistory {
    id: String
    email: String
    cell: String
    name: String
    orders: [Order]
}`

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        order: getOrder,
        orders: getOrders,
        account: getAccount,
        accounts: getAccounts
    
    },
    Mutation: {
        addOrder: createOrder,
        mutateAccount: crudAccount  
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen(4001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
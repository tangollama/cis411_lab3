# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Caleb Weaver<br/>

GitHub: [Cweaver136](https://github.com/Cweaver136)<br/>

# Step 1: Fork this repository
- https://github.com/Cweaver136/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "72213c6e-38c7-47b3-a13d-5b04080adad8",
      "name": "Caleb Weaver",
      "email": "cw1368@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['CIS 411 Lab 3']
```

# Step 5: Explore your performance data

- My Host
Apdex .45
Resp. Time 13,300 ms
Throughput 1 rpm
Error Rate 9.09%
CPU Usage 9%
Memory 180MB

Transaction 1 (74,347 ms): **remainder** takes 71,900 ms - **94%**
Transaction 2 (814 ms): **ExpressJs** takes 635 ms - **78%**
Transaction 3 (72,500 ms): **remainder** takes 68,300 ms - **94%**
Transaction 4 (83,000 ms): **remainder** takes 78,400 ms - **94%**

Specifically, inside **remainder**, getOrders and then queryOrdersBySearchTerm takes up the most time

# Step 6: Diagnosing an issue based on telemetry data

**getOrders** calls **queryOrdersBySearchTerm** which calls **loadOrderById** and if you could find a way to simplify and speed up this getOrders function, you would find better performance.

There appears to be 890 calls to the loadOrderById functions, which is in server.js Presumably this would be running through a list of ids and "loading an order by a given Id". 

I'm not sure if you have to load every order in able to run it through the query, but if you could just load the orders that matched the search query that would help. It would reduce the amount of times that **loadOrderById** is called and speed things up.
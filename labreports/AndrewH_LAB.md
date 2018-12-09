# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Andrew Hoffman<br/>

GitHub: [PinlekDLies](https://github.com/PinlekDLies)<br/>

# Step 1: Fork this repository
- The [URL](https://github.com/PinlekDLies/cis411_lab3) of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "debd6188-7b7c-4b56-877d-663248a54fab",
      "name": "YOUR FULL NAME",
      "email": "YOUR EMAIL"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['thebestcislab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application?<br/>
  It spikes whenever a query takes too long
* Is performance even or uneven?<br/> 
  It is uneven
* Between queries and mutations, what requests are less performant?<br/> 
  mutations
* Among the less performant requests, which ones are the most problematic?<br/>
  I found Remainder, queryOrdersBySearchTerm, ExpressJs
  
# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?<br/>
  Remainder - 131,000ms
* Using New Relic, identify and record the least performant request(s).<br/>
  getOrders - 0.333ms
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.<br/>
  The slowest components in each of the requests are queryOrdersBySearchTerm, Middleware: <anonymous>, loadOrderById, post /, 	  Middleware: jsonParser, getOrders, Remainder, 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).<br/>
  GraphQL tries to grab the least amount of data possible so by specifying everything the performace of the program falls off so in order to mitigate this we would want to break down the query into smaller chunks. 
  
# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

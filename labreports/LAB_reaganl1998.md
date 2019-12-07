# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Reagan Lyle<br/>

GitHub: [reaganl1998](https://github.com/reaganl1998)<br/>

# Step 1: Fork this repository
- The [URL](https://github.com/reaganl1998/cis411_lab3) of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "4f501026-5164-444f-9428-64f1674683b8",
      "name": "Reagan Lyle",
      "email": "rl1299@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['cislab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? With the example queries and transactions, the application performed worse with the more general of requests. For example, a sample transaction was one requesting for orders that were from PA, but queried the whole database for orders containing PA rather than query for orders that have PA in their location column.
* Is performance even or uneven? Performance seemed to be even. After a query has been ran, it is cached. 
* Between queries and mutations, what requests are less performant? Out of the example queries, the search for all orders with containing the word PA was the least performant. Out of the queries I experimented with, the query that pulled the entire database was the most demanding. 
* Among the less performant requests, which ones are the most problematic? The one that was searching for all orders that were everything bagels. There was an issue with declaring the item's column as a search parameter.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?  Expressjs: post / @ 2,990 MS and Middleware <anonymous> / @ 192 MS
* Using New Relic, identify and record the least performant request(s). The all orders query that I made was the least performant. 
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings. The Middleware:<anonymous> / segment was the most problematic with an avg call of 3. 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s). Better query optimization. If the queries were made with more precision, there would be less calls and faster response times.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Ben Underwood<br/>

GitHub: [benunderw](https://github.com/benunderw)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "fb53dda9-ff18-44a8-8112-3d52eb0b91a4",
      "name": "Benjamin Lee Underwood",
      "email": "bu1157@messiah.edu"
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
* What are your observations regarding the performance of this application? 
* Is performance even or uneven? 
* Between queries and mutations, what requests are less performant? 
* Among the less performant requests, which ones are the most problematic?

Some of the queries were fast, some were slow. The first query took a bit of time, but returned quickly when it ran again. Performance was uneven, but only because each query was requesting different types of data that were easier/more difficult to process. The given commands were all queries, and they all seemed to take some time to load. I assume mutations would take less time generally, but if they were combined with a query, they might still take some time. The most "problematic" queries were ones that returned a lot of results.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
* Using New Relic, identify and record the least performant request(s).
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

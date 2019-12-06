# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: William Webb<br/>

GitHub: [ww1173](https://github.com/ww1173)<br/>

# Step 1: Fork this repository
- The URL of my forked repository:
 https://github.com/ww1173/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "f2a10341-292f-4689-8825-1e4056f5cca2",
      "name": "William Webb",
      "email": "ww1173@messiah.edu"
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
    All mutations ran quickly while the queries seemed to take longer.
* Is performance even or uneven? 
    Seems to be rather uneven
* Between queries and mutations, what requests are less performant? 
    Queries
* Among the less performant requests, which ones are the most problematic?
    Expressjs: post / took the longest consistantly.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
    Expressjs: post /
* Using New Relic, identify and record the least performant request(s).
    the second to last request took the longest and performed the poorest
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation 
is/are the most problematic and record your findings.
 The 'Remainder' and 'queryOrdersBySearchTerm' were listed as the two slowest segments.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
    Querying took the longest so finding a way to increase that would benefit the application the most. A way 
    that could be fixed is to query only the first 10 best matching results. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
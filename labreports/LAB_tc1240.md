# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Tyler Collins<br/>

GitHub: tc1240 (https://github.com/tc1240)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "6781d3ce-4fec-4f0a-9093-89e1386ed8d8",
      "name": "Tyler Collins",
      "email": "tc1240@messiah.edu"
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
- I can observe the amount of errors that happen, time it takes to access certain nodes, and even the percentage of get vs post's. This application runs for the most part unacceptably due to its slow node fetch time.
* Is performance even or uneven? 
- Uneven
* Between queries and mutations, what requests are less performant? 
- Queries are less performant as they take longer to run
* Among the less performant requests, which ones are the most problematic?
- Ones that require the program to fetch broad searches

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
- Expressjs: post/
* Using New Relic, identify and record the least performant request(s).
- Expressjs: post/ and midleware: anonymous / are the least performant by far due to their time
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
- Expressjs: post/ and midleware: anonymous / are the least performant by far due to their time
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
- I would recomend using less broad queries

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
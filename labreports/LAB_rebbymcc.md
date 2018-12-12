# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Rebekah McClelland <br/>

GitHub: [@rebbymcc](https://github.com/rebbymcc)<br/>

# Step 1: Fork this repository
[URL](https://github.com/rebbymcc/cis411_lab3) of forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "297f270b-f286-465d-83b0-903e5e12f9dc",
      "name": "Rebekah McClelland",
      "email": "rm1400@messiah.edu"
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
  **My observations regarding the performance of this application is that the response time is slightly under the node. 
* Is performance even or uneven? 
  **This performance is uneven
* Between queries and mutations, what requests are less performant? 
  **Requests that are queries are less performant.
* Among the less performant requests, which ones are the most problematic?
  **Orders by search term. 

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  **general queries that were not very specific took the most amount of time. 
* Using New Relic, identify and record the least performant request(s).
  **The 6th request (query: "everything") was the least performant. 
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  **The 6th request (query:"everything") was the least performant. 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  **Using more specific queries would help improve the performance of these requests. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Joe King<br/>

GitHub: [jk1551](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- git@github.com:jk1551/cis411_lab3.git

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "d7e9e53a-2b9b-46ef-9b99-e18f1c2c2517",
      "name": "Joe King",
      "email": "jk1551@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```cislab``` configuration
```
app_name: ['cislab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 

This application performed fairly well except for one request that took quite a while. 
* Is performance even or uneven? 

The performance between differrent orders is uneven. 

* Between queries and mutations, what requests are less performant? 

Orders are less performant than queries. Some performants take seconds to load while queries are small fractions of a second. 

* Among the less performant requests, which ones are the most problematic?

The orders for everything are least performing requests because they take so long to search. 

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

The "Remainder" segment took the most time. It took significantly more time than the rest of the of the actions put together

* Using New Relic, identify and record the least performant request(s).
The least performant request was searching for "everything"

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

Expressjs actions are by far the most problematic consuming 96.8% of the actions time and slowing the action down significantly. 

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

Being able to implement pagination to the lines in graphgl would be the best solution grabbing only small pieces of data per request. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 

The main thing I mentioned above to improve performance on a request is to implement pagination. To do this there is a certain request in the javascript I could not figure out how to reconfigure to paginate the code. Im sure with enough time and effort it is possible. 

2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.

2. Check in those changes and **note your solution(s)** in your lab report.
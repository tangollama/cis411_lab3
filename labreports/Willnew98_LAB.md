# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: YOUR NAME<br/>

GitHub: [Willnew98](https://github.com/Willnew98)<br/>

# Step 1: Fork this repository
- https://github.com/Willnew98/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "27d38d76-55e6-49d4-9ab8-771356527a87",
      "name": "Will Newcomb",
      "email": "wn1154@messiah.edu"
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
  * My Host says my apdex is .72, my response time is 10,400ms, my throughput 1 rpm, my error rate is 11.10%, my CPU usage is 3%, and my memory is 130MB
* Is performance even or uneven?
  * The performance is relatively uneven. Some of the transactions were done in less than a second, and others took around 80 seconds to complete

* Between queries and mutations, what requests are less performant? 
  * The queries seem to be less performant. The "everything" query took around 79,500 ms to complete.
* Among the less performant requests, which ones are the most problematic?
  * The everything query was the msot problematic, being almost 6x slower than the second slowest transaction

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

  * The segments that took the most time were the first and the second to last query. The second to last (everything query) taking the longest by far.
* Using New Relic, identify and record the least performant request(s).
  * The least preformant request was the everything query.
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  * The most problematic segments were the "Expressjs: post /" and the "Middleware: anonymous /", These were the everything request and the error respectively.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  * The best solution I can think of is to support multithreading. Right now, it can only do single threading, but being able to multithread would significantly reduce time.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
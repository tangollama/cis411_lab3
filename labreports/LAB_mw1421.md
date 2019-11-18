# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Michael Williams<br/>

GitHub: [YOUR_HANDLE](https://github.com/mw1421)<br/>

# Step 1: Fork this repository
- https://github.com/mw1421/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "Michael Williams",
      "email": "mw1421@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<cislab3>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 

There was not a error rate during the transactions, but it did take 1 min for one of the queries, while some of the others were instant and others took a couple of seconds. 

* Is performance even or uneven? 

The performance is uneven. There was a different response time for each of the queries by a pretty large margin. 

* Between queries and mutations, what requests are less performant? 

The last two were the least performant. 

* Among the less performant requests, which ones are the most problematic?

I think when the program had to find a long string of characters in a certain order it would fumble. It did not fumble much during PA with essentially the same query, but with "everything" and "gmail.com" it took a while. That would be my best guess. 

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

The last two segments took the most time. 

* Using New Relic, identify and record the least performant request(s).

The least performant requests were "Middleware: <anonymous>/" and "post/". 

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

It says that the transaction traces were not available. 
"If you were expecting traces, no transactions took longer than 0.4 seconds (apdex_f) or there is an error in the agent configuration."

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

I would recommend looking for smaller strings that can identify with what you want still. Like for the query of "everything," you could search for "rythi" and find mostly what you are looking for. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
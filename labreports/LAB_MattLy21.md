# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: YOUR NAME<br/>

GitHub: [MattLy21](https://github.com/MattLy21)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "eee1b5f4-abd2-42a2-abbc-30b7f0e7bed5",
      "name": "Matthew Ly",
      "email": "ml1390@messiah.edu"
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
* Apdex: 0.42
* Resp. time: 6,290
* Throughput: 1 rpm
* Error Rate: 8.33%
* CPU usage: 6%
* Memory: 140 MB
* What are your observations regarding the performance of this application? 
1. For some of the queries that we were testing they started to take a while. The everything query obviously took the longest becuase it was everything.
* Is performance even or uneven? 
1. I would say that the performance was even. I thought that some queries were obviously shorter than others but some queries had a heavier load to process than others. 
* Between queries and mutations, what requests are less performant? 
1. Since queires are focused more on the retrieval of data and mutations are rather trying to put information into places, I would have to say that queries are less of a perfmant than mutations. 
* Among the less performant requests, which ones are the most problematic?
1. The query that took the longest time was the everything query. The everything query obviously took the longest becuase it was everything. 
# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
1. The thing that took the most time was Expressjs: post / that took 96.8% time. The one transaction that was next to that was Middleware: <anonymous> / 3.1% time. That was all based on what New Relic was telling us. 
* Using New Relic, identify and record the least performant request(s).
1. The least performant requests was when the query asked for "everything".
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
1. It said that they were unavailable.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
1. I would try to do more specific queries instead of everytime the word "everything" is put in. I think that there could be a better used query that actually gets good information. Or you should be able to just request for the quantity of times "everything" is said.
# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
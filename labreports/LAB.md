# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Amber Li<br/>

GitHub: [al1384](https://github.com/al1384)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "Amber Li",
      "email": "al1384@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<cislab>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
There are a lot of spikes, especially when I run queries that return large amounts of data
* Is performance even or uneven? 
the performance is uneven, it is very flat until it reads activity, and then it spikes.
* Between queries and mutations, what requests are less performant? The one that searched for gmail accounts ran an error
* Among the less performant requests, which ones are the most problematic? The queries that searched for broader requests rather than specific, such as display all orders with "everything" or "PA"

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
retrieve all orders containing the word everything
* Using New Relic, identify and record the least performant request(s). same query
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings. QueryOrdersBySearchTerm
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
limit the number of orders returned on the query, make the search more specific
# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
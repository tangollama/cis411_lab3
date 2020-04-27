# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Billy Park<br/>

GitHub: [Strombilly](https://github.com/strombilly)<br/>

# Step 1: Fork this repository
- https://github.com/Strombilly/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "17ea371e-1f73-45ef-9f34-21a5624a1f92",
      "name": "Billy Park",
      "email": "bp1250@messiah.edu"
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
* What are your observations regarding the performance of this application? For the most part, it works fine, but it could be optimised greatly. Some parts to longer than they should have, but responded much faster than it would have been to manually search through the data.
* Is performance even or uneven? It is very uneven. It fuctuates from just a few milliseconds to more than 16 seconds.
* Between queries and mutations, what requests are less performant? From what I have tested, the seems that queries are less optimised for performance.
* Among the less performant requests, which ones are the most problematic? The most problematic request was the search for the gmail accounts. It had an issue with the parameter "items".

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time? The search for "everything" took the most time.
* Using New Relic, identify and record the least performant request(s). It took 16.1 seconds.
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings. From what I can tell, the "post /" held up the transaction the most.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s). Though not the best solution, heving this specific request preloaded would make it much faster.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
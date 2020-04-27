# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Eddie Daniel<br/>

GitHub: [eddiedaniel](https://github.com/eddiedaniel)<br/>

# Step 1: Fork this repository
https://github.com/eddiedaniel/cis411_lab3.git

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "Eddie Daniel",
      "email": "ed1322@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['cislab3']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
My graphql service/application is pretty slow relatively speaking

* Is performance even or uneven? 
Uneven

* Between queries and mutations, what requests are less performant? 
Queries

* Among the less performant requests, which ones are the most problematic?
The less performants are "queries by search term" which are categorized as queries.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
Queries that caterogized data/qualifications

* Using New Relic, identify and record the least performant request(s).
The last query involving the gmail accounts was the least performant one 

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
It was the query orders by search term that took the majority of time for that query

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s). You can find easier ways to query/mutate requests by involving less terms in each query or having terms that are less strenuous on the system applied all at once.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
# Lab Report: Monitoring
___
**Course:** CIS 411, Spring 2021  
**Instructor(s):** [Trevor Bunch](https://github.com/trevordbunch)  
**Name:** Shane Wahlberg
**GitHub Handle:** CuriousOcean 
**Repository:** Your Forked Repository  
**Collaborators:** 
___

# Step 1: Fork this repository
- The URL of my forked repository
- https://github.com/CuriousOcean/cis411_lab5_Monitoring

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "id": "b5a6b687-b043-405a-9189-1be5b43b88b7",
      "name": "Shane Wahlberg",
      "email": "sw1419@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<cis411>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
  > The response time of this app is 2536 ms and its throughput is 0.63 rpm. The error rate is 5.26%. The shortest response time was 0.22 seconds and the longest response time was 44 seconds, the everything bagel query. 
* Is performance even or uneven? 
  > Uneven. Some performed better than others. Some didn't even run.
* Between queries and mutations, what requests are less performant? 
  > Queries.
* Among the less performant requests, which ones are the most problematic?
  > queryOrdersBySearchTerm

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  > Middleware: anonymous :anonymous took the most time. It took 91.8 ms. 
* Using New Relic, identify and record the least performant request(s).
  > queryOrdersBySearchTerm was the lest performant request. It took 41746.487 ms, about 98.31% of the process time.
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permeation is/are the most problematic and record your findings.
  > Enter Response Here.
* Recommend a solution for improving the performance of those most problematic request(s) / permeation(s).
  > Enter Response Here.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
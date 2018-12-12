# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Nicholas DeSola<br/>

GitHub: [nd1227](https://github.com/nd1227)<br/>

# Step 1: Fork this repository
- [Forked Repository](https://github.com/nd1227/cis411_lab3.git)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "fe430f57-df3d-4271-9585-30678ce67aab",
      "name": "Nicholas DeSola",
      "email": "nd1227@messiah.edu"
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
```
Pertaining to the error rate of this application, it is sitting at 45.80%.  This is extremely high, however, I believe that this is because the final provided query does not run properly, which I think was intended.  When attempting to fix this query to successfully run, I still failed, cuasing the error rate to further rise.
 ```
* Is performance even or uneven?
```
Performance is uneven.
```
* Between queries and mutations, what requests are less performant?
```
Requests that require searching more than a compartamentalized table are less performant.  For example, when looking for state, the query looks directly in the location table, which compartamentalizes the request to 50 options.  However, when looking for all orders that contain the word "everything", the query must look through more records.
```
* Among the less performant requests, which ones are the most problematic?
```
The most problematic requests were the ones in which a general query of word containment was made.  By this, I mean that the requests that weren't searching specific tables, or categories, took a lot longer and sometimes returned an error.
```

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
```
The "Expressjs: post /" segment took the most time.  The least performant request was the gmail query, which returned an error and did not complete its iteration.
```
* Using New Relic, identify and record the least performant request(s).
```
The least performant request was the gmail query, which returned an error and did not complete its iteration.
```
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
```
The most problematic segment within the transaction trace is the queryOrdersBySearchTerm.  This component takes the most amount of time, besides the "Remainder", and slows the segment down considerably.  This segment took 
34,500 ms (99.07% of the total time).
```
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
```
A solution to these problematic requests would be to expedite the database processes.  For example, the database processes and functions, search and order, the data could remain unstructured until it is needed to be sorted.  By having a term be at the end of the alphabet, ordering the data would not make sense, and sending the search through the data in an unstructured manner may yield a faster response time.
```

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
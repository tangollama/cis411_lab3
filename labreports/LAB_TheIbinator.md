# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Ibinabo Braide<br/>

GitHub: TheIbinator(https://github.com/TheIbinator)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "f9bec1b4-5786-475c-9cf9-fe1ea07a490d",
      "name": "Ibinabo Braide",
      "email": "ib2163@messiah.edu"
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

Overall the permance of this application seemed to be a bit inconsistent. I noticed that with the large range of transaction times, some lasted for quite a while (>13 seconds) ,
while others seemed very fast (<2 seconds). Along with this observation, I noticed that the get/ transactions were significantly faster than the post/ transactions. Get/
transactions had an average response time of 362 ms, while Post/ transactions had an average response time of 7390 ms.


* Is performance even or uneven? 

The performance is uneven. Some of the transactions take longer than other transactions.
* Between queries and mutations, what requests are less performant? 

Queries are the less performant between the 2. This is because with queries, the system must go through all 
entries that the query would apply to.

* Among the less performant requests, which ones are the most problematic?

The most problematic request had to be the last query. This query showed a lot of errors after running , as it
requested items, which couldnt be queried for all accounts. The other query which was a bit problematic was the query 
which retrieved orders containing the word "everything". This one took the longest out of all the queries.


# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

Within the transactions examined, the segment that took  the most time was the Middleware segment. Middleware accounted for almost 
the entire duration of the transaction (nearly 100%).


* Using New Relic, identify and record the least performant request(s).

The least performant request was the query for orders containing the word everything.

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

The most problematic segment was the loadorderbyid method , which was called nearly 900 times.

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

A recommended solution for improing the performance of the problematic request, would be to reduce the number of times that its called. 
This way it would be much more efficient in displaying the results.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Josh Coldsmith<br/>

GitHub: [jc1581](https://github.com/jc1581)<br/>

# Step 1: Fork this repository
- The URL of my forked repository<br/>
- [My Forked Repository](https://github.com/jc1581/cis411_lab3)<br/>

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "f4ecc081-6f5d-4fc2-913a-9ee937c33519",
      "name": "Josh Coldsmith",
      "email": "jc1581@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<cis411_Lab3>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
  * <strong>Answer</strong>: Certain queries seem to take longer than others. 
* Is performance even or uneven? 
  * <strong>Answer</strong>: The performance is uneven.
* Between queries and mutations, what requests are less performant? 
  * <strong>Answer</strong>: Queries are the least performant.
* Among the less performant requests, which ones are the most problematic?
  * <strong>Answer</strong>: The query that searches for the word "everything" seems to be the most problematic.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  * <strong>Answer</strong>: "Middleware\<Anonymous>" took the most amount of time.
* Using New Relic, identify and record the least performant request(s).
  * <strong>Answer</strong>: The least performant request is the one where it queries for the word "everything."
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  * <strong>Answer</strong>: It seems that the segment "Middleware\<Anonymous>" which contains "getOrders" which contains "queryOrdersBySearchTerm" is the most problematic.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  * <strong>Answer</strong>: Something must be wrong with the getOrders function because it seems to be querying the database too many times when it could just query once.

```
Old Code

const getOrders = (parent, args, context, info) => {
    return new Promise(resolve => {
        newrelic.startSegment('getOrders', false, () => {
            queryOrders(args).then(results => {
                resolve(results)
            })
        })
    })
}
```

```
New Code Change

const getOrders = (parent, args, context, info) => {
    return new Promise(resolve => {
        newrelic.startSegment('getOrders', false, () => {
            resolve(queryOrders(args.query))
            })
        })
    })
}
```

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
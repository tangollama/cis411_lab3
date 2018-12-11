# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Ellis Madagan<br/>

GitHub: [em1382](https://github.com/em1382)<br/>

# Step 1: Fork this repository
- The URL of my forked repository: https://github.com/em1382/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "d9410440-ddca-43f4-b6f5-79a3bd865889",
      "name": "Ellis Madagan",
      "email": "em1382@messiah.edu"
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
  * The performance is nothing to write home about. Overall, pretty bad.
* Is performance even or uneven? 
  * Uneven.
* Between queries and mutations, what requests are less performant?
  * Queries.
* Among the less performant requests, which ones are the most problematic?
  * "Retrieve all orders containing the word 'everything'" stood out the most to me.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
* Using New Relic, identify and record the least performant request(s).
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
We can reduce the number of times ```getOrder``` needs to be invoked inside of ```getOrders```.
```
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

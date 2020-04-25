# Lab Report Template for CIS411_Lab3

Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Joshua Keong<br/>

GitHub: [jk1595](https://github.com/jk1595)<br/>

# Step 1: Fork this repository

- The URL of my forked repository

https://github.com/jk1595/cis411_lab3.git

# Step 2: Clone your forked repository from the command line

- My GraphQL response from adding myself as an account on the test project

```
{
  "data": {
    "mutateAccount": {
      "id": "4f1689fb-c63b-4825-ad20-d1eadfb8fd57",
      "name": "Joshua Keong",
      "email": "jk1595@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic

- The chosen name of your New Relic `app_name` configuration

```
app_name: ['cislab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data

- What are your observations regarding the performance of this application?

  Some queries took longer than others to run. There was a 16.90% error rate, a CPU usage of 3% and 120MB of memory used. Out of the seven queries that were run on the application, two of them took very long to process. The time taken was very much higher than the other 5 queries.

- Is performance even or uneven?

  The performance is uneven.

- Between queries and mutations, what requests are less performant?

  The two least performant requests were the ones searching for orders containing 'PA' and 'everything'.

- Among the less performant requests, which ones are the most problematic?

  The most problematic request was the 6th one when it requested for orders that contained the word 'everything'.

# Step 6: Diagnosing an issue based on telemetry data

- Within the transactions you're examining, what segment(s) took the most time?

  The segments that took the longest time was the 'Remainder' and "queryOrdersBySearchTerm" segments that took 51100ms and 3180ms respectively.

- Using New Relic, identify and record the least performant request(s).

  The least performant request is the 6th one where it requested for orders that contained the word 'everything'. It took a total time of 56000ms to process the request.

- Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

  The most problematic segment was the 'Remainder' segment that took 51100ms (91%) of the 56000ms.

- Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

  Performance goals should be clearly defined before any code is being written. This will ensure that the performance goal is constantly met throughout development.

# Step 7: Submitting a Pull Request

_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)

For the purposes of gaining 25% extra credit on the assignment, perform any of the following:

1. Adjust the diagnosed slow call(s) to improve performance.
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
3. Check in those changes and **note your solution(s)** in your lab report.

# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2019<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Issac Houck<br/>

GitHub: [icepop450](https://github.com/icepop450)<br/>

# Step 1: Fork this repository
https://github.com/icepop450/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "79a209a8-ec2f-4cc1-bfa1-a96c719f991e",
      "name": "Issac Houck",
      "email": "ih1163@messiah.edu"
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
* What are your observations regarding the performance of this application? expressjs took a lot of time on most queries, so there is likely an issue with it.
* Is performance even or uneven? Very uneven different queries ranged from 1434 ms all the way up to 94,201 ms. 
* Between queries and mutations, what requests are less performant? Queries mutations ran very quickly.
* Among the less performant requests, which ones are the most problematic?  The search by term query tended to be the slow, so when I searched for the word everything it took awhile.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time? Remainder took as long as 90,000ms when it was used so something is wrong with that, but overall expressjs took a lot of the time.
* Using New Relic, identify and record the least performant request(s).  I searched for the term everything and that took the longest by far at over 90,000 ms, and the second longest was loading an order by id which to over 9,000 ms.
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings. It is the remainder segment in both the first takes 94% and the second takes 62%.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s). The queries could be more specific by only search by type rather than literally everything like by only search for bagel types, and use short words for queries.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

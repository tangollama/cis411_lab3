# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Stephanie Tran<br/>

GitHub: [tran1996](https://github.com/tran1996)<br/>

# Step 1: Fork this repository
- https://github.com/tran1996/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "b4c31920-4a1e-4adb-a9e5-de8f439acbdb",
      "name": "Stephanie Tran",
      "email": "st1302@messiah.edu"
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
    The performance of these observations varied differently from one to the next. While the first and second to last observations took a while to load, some of the others were very fast, there was even one with an error. 

* Is performance even or uneven? 
  I would say this performance is uneven due to the speed at which the requests took varying from being either fast or slow. 

* Between queries and mutations, what requests are less performant? 
  The queries were less performant since some of the queries took a long time to process. The mutations were done very quickly. 

* Among the less performant requests, which ones are the most problematic?
  The queries for "PA " and "everything" took the longest to load, most likely due to it having to go through all the queries while the orders for bagels and by location did not take as long.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  The segment that took the most time was the 'Expressjs: post /'.

* Using New Relic, identify and record the least performant request(s).
  The least performant request was the query for "gmail.com" as there was and error and it did not work.

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  The segment that was the most problematic was the 'queryOrderBySearchTerm' since it took the longest to load, along with 'remainder.'

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  One solution I would do to improve this is to change 'query' to 'bagel' as the query took longer to load.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
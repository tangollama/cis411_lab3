# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Sam Gulinello<br/>

GitHub: [YOUR_HANDLE](https://github.com/SamGulinello)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
https://github.com/SamGulinello/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "e8cf88dc-3d07-4c39-bf61-e99904721d07",
      "name": "Sam Gulinello",
      "email": "sg1355@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['LAB_SamGulinello']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application?

The application started out performing very well. Near the end though some of the queries really slowed down the system. The "everything" query took almost 45 seconds to complete.

* Is performance even or uneven?

The performance was uneven. Some scripts seemed to happen instantly while others took a while.

* Between queries and mutations, what requests are less performant? 

It seemed that the queries took the most time.

* Among the less performant requests, which ones are the most problematic?

The "Pennsylvania" query was by far the most problematic. It took a long time to complete. Shortly behind that was the "everything" query. It was interesting to see the drastic difference between query:"Pennsylvania" and location:"Pennsylvania". The query performed a lot worse.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

New Relic is reporting that post/ is taking almost 98% of the time. It's averaging 12,300ms. The other segment that is taking up the most time is the <anonymous>/ segment. It averaged 301ms. The other segments are no where near these measurements.

* Using New Relic, identify and record the least performant request(s).

The query:"Pennsylvania" and the query:"Everything" were the least performant requests.

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

In the longest recorded request New Relic is saying that queryOrderBySearchTerm took the most percentage of time at 45,200 ms. I would imagine the most problematic segment would be the one that took the longest. It is not good to be waiting almost a minute for one query. 

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

I don't really know anything about queries or database interactions but I would imagine narrowing your query parameters might improve performance. With less parameters the query would have less data to handle. Getting all of the user id's, their orders and the order id's is a lot of data to be querying. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
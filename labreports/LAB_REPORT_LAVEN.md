# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Matt Laven<br/>

GitHub: [ml1402](https://github.com/ml1402)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "f8e10b08-1df1-44f8-8c6e-be16c16c4211",
      "name": "Matt Laven",
      "email": "ml1402@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<New Relic Tester>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
~~~
The performance varies based on what queries are run, but it seems like most of the transactions run relatively quickly. The last transaction returns an error. It seems that there is a limit on the amount of resources that the program uses, because even when it was processing the largest "everything" query, it would only be using 10% of my CPU. The application may not be multi-threaded to take advantage of a 16 thread chip. 

Edit: By looking in task manager, I was able to confirm my theory that the program is only using a single core, hence limiting its performance. 
~~~
![System Performance](Dashboard2.png)
* Is performance even or uneven? 
~~~
The performance is very uneven, with some transactions taking less than one second, and others taking up to 45 seconds. 
~~~
* Between queries and mutations, what requests are less performant? 
~~~
Queries are less performant than other requests. Most notably, the query for "everything" took the longest at 45 seconds, and the query for "PA" took second longest, at about 5 seconds.
~~~
* Among the less performant requests, which ones are the most problematic?
~~~
The query for everything was most problematic because it took 45 seconds to run the query, which would be an unacceptable response time in a real world database application. 
~~~

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
![Main Dashboard](Dashboard1.png)
~~~
As seen in the transaction time chart, the command that took the most time was the query for "everything". This query took 40-45 seconds to run, and was run twice for confirmation. The two large spikes on the performance graph are these two transactions. The second longest one was a query for "PA", which took just under 5 seconds. The small peak on the performance graph was this transaction. The rest of 
~~~
* Using New Relic, identify and record the least performant request(s).
~~~
The least performant requests were the ones where we were querying for "everything".
~~~
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
![Time Percent Breakdown](TimeTable.png)
~~~
Based on the results seen in the table in the transactions tab that breaks down time spent on each task, the Expressjs:post/ segment is taking on average 98.5% of the time spent on each transaction.
~~~
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
~~~
One solution that would speed up the operation of all transations would be to add multithreading support to the application. Adding this feature would allow the application to process queries 16 times faster on my computer, making the 45 second request take only 3 seconds. Alternatively, users could limit their queries to not search for everything. 


I did some experimentation with the speeds to see if I could get the queries to run faster. I always run a program that loads my CPU and GPUs to near 100% in the background to mine cryptocurrency. By disabling that program temporarily, the PC was able to dedicate more compute cycles to the processing of these transactions, and I was able to cut the time of the most problematic request from 45 seconds down to 18 seconds. Similar performance gain was seen on other transactions, such as the 5 second transaction being cut down to 2.2 seconds. This is still only single threaded, so a multithreaded application could see times as low as 1.1 seconds for the "everything" query on a 16 thread CPU under perfect scaling conditions.
~~~
![Better Performance](Dashboard3.png)
# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

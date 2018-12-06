# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Garrett Reichert<br/>

GitHub: g-reichert(https://github.com/g-reichert)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "Garrett Reichert",
      "email": "gr1192@messiah.edu"
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

![alt text](https://github.com/g-reichert/cis411_lab3/blob/master/lab3p1.png "Overview")

The overview tells me what times web transactions were completed, and the amount of miliseconds it took for it to be completed. The node and Response time are essentialy the same. The apdex score tells me how my app has been performing in response time, rating it from excellent to frusturating. There does not seem to be any error rate. Post time is taking up the majority of time and there is very little get time.

* What are your observations regarding the performance of this application? 
	It seems that it runs in an excellent manner most of the time, but occasionly the performance will drop signifigantly. 
* Is performance even or uneven? 
	Uneven, the apdex score shows huge jumps and dips in the performance.
* Between queries and mutations, what requests are less performant? 
	I believe the queries took longer to run than the mutations, but I was unable to find any specific data on New Relic pointing to this.
* Among the less performant requests, which ones are the most problematic?
	The least performant requests were ones that ran the method "queryOrdersBySearchTerm".

The longest segment of transaction time was definetly "queryOrderBySearchTerm". The method took up 3 times the amount of the second highest at its best. It took up 3%-4% of the time, while the rest always took up 1% or less. 

# Step 6: Diagnosing an issue based on telemetry data
![alt text](https://github.com/g-reichert/cis411_lab3/blob/master/lab3p2.png "Number 1")
![alt text](https://github.com/g-reichert/cis411_lab3/blob/master/lab3p3.png "Number 2")
![alt text](https://github.com/g-reichert/cis411_lab3/blob/master/lab3p4.png "Number 3")
* Within the transactions you're examining, what segment(s) took the most time?
	Any transaction that uses "queryOrderBySearchTerm" will take much longer, as the method was most likely written or included in a sub-optimal manner.
* Using New Relic, identify and record the least performant request(s).
	The least performant requests are searching for people from texas or those who ordered and "everything"
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
	The least performant request permiatation is "queryOrderBySearchTerm"
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
	I would look again at the method which is causing the most signifigant issues. There is either something incorrect with it, or it was not implemented efficently. 
	

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
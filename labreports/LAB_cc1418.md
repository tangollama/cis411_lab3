# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Cory Collette<br/>

GitHub: [YOUR_HANDLE](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "8b098515-fe42-410b-8141-8eaab5728562",
      "name": "Cory Collette",
      "email": "cc1418@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<I am confusion>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
	The overview page shows me the time in ms each transaction takes. It gives me an idea of what is taking too long and is potentially frustrating to my user in practical use. 
	My longest transaction spent the most time in the "remainder" section.
	Other transactions spent most of their time in middleware, remainder, and midddleware again.

* What are your observations regarding the performance of this application?
	At the very least, the application works. You can submit queries to it, and it will return relevant data. 
* Is performance even or uneven? 
	The performance is uneven. Some queries take excessive amounts of time compared to some that happen almost instantly. 
* Between queries and mutations, what requests are less performant? 
	Queries are the less performant.
* Among the less performant requests, which ones are the most problematic?
	The ones returning greater amounts of data are the most problematic. 

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
	"Remainder" is the segment that took the most time. 
* Using New Relic, identify and record the least performant request(s).
	The requests that are least performant are "queryOrdersBySearchTerm" requests. They perform searches based on a specified term, whereas other searches are based on details like "BagelType"
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
	Within the trace details, it looks like the specific request to query by search term takes up almost the entirety of the time taken to process the request. 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
	Instead of being allowed to search by an entered term, I think the process should be limited to only allow the user to search by prespecified categories and terms, as is the case when searching by bagel type. Instead of searching for records with the term "everything", the system should instead only search for the term "everything" within the categroy of bagel type. This would cut down on the system needing to sort through every piece of information in each record. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
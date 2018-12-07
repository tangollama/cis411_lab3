# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Andrew Douglass<br/>

GitHub: [douglassjohnandrew](https://github.com/douglassjohnandrew)<br/>

# Step 1: Fork this repository
- The URL of my forked repository<br/>
https://github.com/douglassjohnandrew/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a8066310-3eb6-41e9-a44f-9d79af78d6d4",
      "name": "Andrew Douglass",
      "email": "ad1373@messiah.edu"
    }
  }
}
```
![Alt text](/screenshots/graphql.PNG?raw=true "GraphQL response")

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['cislab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._<br/><br/>
Proof that I configured New Relic:<br/>
![Alt text](/screenshots/newrelic.png?raw=true "New Relic proof")

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application?<br/>
The application performs well under most circumstances, but a few transactions takes a lot more time than the others<br/>
* The host information:
```
LAPTOP-CLC5KPGS 1 app instance

Apdex	            Resp. time	 Throughput	  Error Rate	 CPU usage	 Memory
0.17/0.1	     1,020ms	   1 rpm	    0.00%	   1 %	         110 MB
```
* Is performance even or uneven?<br/>
Performance is uneven, because different queries take different amounts of time. Some queries take less than a second, but others take up to 15 seconds. A rare few even took over 100 seconds somehow, but that could just be my slow ancient laptop
* Between queries and mutations, what requests are less performant?<br/>
Mutations generally were far quicker than queries in what I tested. Queries, depending on what was being queried, would take anywhere from 1 second to 15 seconds
* Among the less performant requests, which ones are the most problematic?<br/>
Any query that uses queryOrdersBySearchTerm a lot. Essentially, any query that takes more than 2-3 seconds.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?<br/>
Easily the remainder category / component, which I do not know what it does. The second most time-consuming segment (likely the first most time-consuming controllable segment) is the queryOrdersBySearchTerm component
* Using New Relic, identify and record the least performant request(s).<br/>
What I initially thought the worst request was:
```
{
  #all orders containing the word PA
  orders(query: "PA") {
    id
    customer {
      id
      email
    }
    items {
      label
      quantity
    }
  }
}
```
But by far the worst query ended up being this, taking nearly a minute:
```
{
  #retrieve all orders container the word everything
  orders(query: "everything") {
    id
    customer {
      id
      email
    }
    items {
      label
      quantity
    }
  }
}
```
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.<br/>
As mentioned previously, the Remainder component took up 3/4 of the time in practically every transaction. The queryOrdersBySearchTerm would be the next most problematic, because of the number of times loadOrderById() is called
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).<br/>
For any query that takes a long time in the queryOrdersBySearchTerm component, the query should be optimized to call loadOrderById far fewer times, essentially accessing individual pieces of data less often to save resources

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
# Lab Report for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Kai Yuen Leong<br/>

GitHub: [kaiyuenleong](https://github.com/kaiyuenleong)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
https://github.com/kaiyuenleong/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "5a0baa7b-42b7-4ca6-ba0e-c0f9022c2ef5",
      "name": "YOUR FULL NAME",
      "email": "YOUR EMAIL"
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
The Overview page for my application tells me about the Average Throughput (1.13 rpm), an Error Rate (5.88%), and a Web Transactions Time (1,150 ms). Based on this data and the low number of requests I had made on the application, I must say that the application is performing particularly poorly.

* Is performance even or uneven?  
Uneven. Some transactions with the server was extremely quick, while some other ones took a comparatively larger amount of time.

* Between queries and mutations, what requests are less performant?  
Queries.

* Among the less performant requests, which ones are the most problematic?  
The query request that was set up to retrieve all orders containing the word "everything".  

* What does the Host section on the Overview page tell you about the health/performance of your compute device?
The Host section tells me about the Response Time, Throughput, Error Rate, CPU usage, and Memory of my computing device. For a Throughput of 1 rpm, an Error Rate of 5.56% is not ideal.   

* Within the transactions you're examining, what segment(s) took the most time?  
For the longest-running transaction (30.8 seconds), the "Middleware:<'anonymous'>/queryOrdersBySearchTerm" segments took the most time. The same can be said for the other three transactions examined. 

# Step 6: Diagnosing an issue based on telemetry data
* Using New Relic, identify and record the least performant request(s).  
The least performant request is the query that retrieves all orders containing the word "everything".
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

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.  
The "Middleware:<'anonymous'>" segment in the request permiatation is the most problematic. It made up 99.93% of the duration of the request, at 30,800 ms.

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).  
Restructuring the query in a manner that might be more efficient to execute.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
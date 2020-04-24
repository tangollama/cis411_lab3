# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Spring 2020<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>
 
Name: Belosan Jekale<br/>
 
GitHub: [belosanj](https://github.com/belosanj)<br/>
 
# Step 1: Fork this repository
- [Belosan's forked reporitory](https://github.com/belosanj/cis411_lab3)
 
# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "667aae85-d648-4943-9c87-0a2656960ab2",
      "name": "Belosan Jekale",
      "email": "bj1203@messiah.edu"
    }
  }
}
```
# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<cis411lab3>']
```
# Step 4: Exercising the application / generating performance data
 
_Note: No lab notes required._
 
# Step 5: Explore your performance data
* Observe and record what the Overview page for your application has to tell you about the performance of your GraphQL service.
 
  [Improved performance in New Relic](../assets/newrelic_OVERVIEW.png)
  This screenshot records the overview of my application.
 
* At the bottom of the Overview page, click on your Host, and record what it's telling you about the health/performance of your compute device.
 
  [Health/performance of my device](../assets/newrelic_health&performance.png)
  This screenshot records the performance and health of my device.
 
* What are your observations regarding the performance of this application? 
  
  My observtion is that different GraphQL requests took different periods of times to perform. For instance #all orders containing the word PA
  orders(query: "PA") and #retrieve all orders container the word everything
  orders(query: "everything") took longer than the other requests.
 
* Is performance even or uneven? 
  
  The performance was uneven as the different requests took different times to perform.
 
* Between queries and mutations, what requests are less performant? 
  
  Query requests were less performant as mentioned in the first answer, orders(query: "PA") and orders(query: "everything") took the longest times.
 
* Among the less performant requests, which ones are the most problematic?
  
  orders(query: "everything") was the most problematic as it took the longest time.
 
# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  
  The segments that took the most time was Reaminder with 43,100ms, queryOrdersBySearchTerm with 2,800ms, Middleware: <anonymous>, and loadOrderByld.
 
* Using New Relic, identify and record the least performant request(s).
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
  
  queryOrdersBySearchTerm with 2,800ms is the segment that takes the most time.
 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  
  A solution for this could be to make the request more specific so instead of having of having ```orders(query: "everything")``` we can change it to ```orders(bagel: "everything")```.
 
# Step 7: Submitting a Pull Request
_Note: No lab notes required._
 
  [circleCI success](../assets/circleCI%20success.png)
# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
   
   [Improved performance in New Relic](../assets/newrelic%20performace%20improved.png)
   In the screenshot, you can see that queryOrdersBySearchTerm has gone down to 339 ms compared to the previous queryOrdersBySearchTerm of 2,800ms.
 
3. Check in those changes and **note your solution(s)** in your lab report.
   
   As mentioned in step 6, instead of having of having ```orders(query: "everything")``` we can change it to ```orders(bagel: "everything")``` which improves the perfomance time.
```
 {
  #retrieve all orders container the word everything
  orders(bagel: "everything") {
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

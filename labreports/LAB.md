# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Keller Martin<br/>

GitHub: [kellerjmrtn](https://github.com/kellerjmrtn)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "241086fe-d0ba-4ce5-b12c-fab834d92e85",
      "name": "Keller Martin",
      "email": "km1609@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['411 Monitoring Lab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application?
  - **Below numbers are from the 'Host' section**
  - Apdex = 0.59
  - Response Time = 9,800ms
  - Throughput = 1 rpm
  - Error Rate = 0.00%
  - CPU Usage = 10%
  - Memory = 140 MB
* Is performance even or uneven?
  - If I'm interpreting this question properly, performance is uneven beause it typically takes much longer to perform a POST/ request than a GET/ request. Also, different queries take different amounts of time to execute (though executing the same query multiple times generally takes a similar amount of time).
* Between queries and mutations, what requests are less performant? 
  - Queries are less performant.
* Among the less performant requests, which ones are the most problematic?
  - By a long margin the following query took the longest:
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
  ```

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  - Express.js post/ is taking the most time by far (98.2%), while the 'Middleware: \<anonymous\>' segment is taking up most of the remainder. 
* Using New Relic, identify and record the least performant request(s).
  - As mentioned before, the least performant request is easily:
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
  ```
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  - `queryOrdersBySearchTerm` takes the most time. This is likely because this segment has to search through *everything* to find matching data. Like we learned in Data Structures and Algorithms, this is often the most inefficient task a program must do. 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  - To decrease search time, either the amount of total checks/compares done must be minimized, or the speed of each compare must be decreased. By searching for a specific property rather than just everything, the searching can be done much more quickly!

# Step 7: Submitting a Pull Request

# Step 8: [EXTRA CREDIT] Address the performance issue(s)

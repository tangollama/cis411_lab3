# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Andre Kerlin<br/>

GitHub: [AndreKerlin](https://github.com/AndreKerlin)<br/>

# Step 1: Fork this repository
- https://github.com/AndreKerlin/cis411_lab3.git

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "b6e9181c-bc65-48cb-b63e-a1bc0cbd3789",
      "name": "Andre Kerlin",
      "email": "ak1393@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```spacebar_3``` configuration
```
app_name: ['<spacebar_3>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
* Is performance even or uneven? 
-Id say uneven due to it seems that POSTs take much longer than GETs
* Between queries and mutations, what requests are less performant? 
-Queries are less performant
* Among the less performant requests, which ones are the most problematic?
-the one where you pulled everything that had the word "everything in it took an age

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
-post takes up about 99.5% of the work load
* Using New Relic, identify and record the least performant request(s).
- this request was defenitely the least performant 

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
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
-"queryOrdersBySearchTerm" takes up the most time and has the most issues. It has to go through literally everything to try and find a match and this O(n) is very inneficient.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
-Implement a way of sorting the data so that it makes it quicker to find specific items, or limit the searches to more specified searches.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
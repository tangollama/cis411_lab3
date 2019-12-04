Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Leanne Weaver<br/>

GitHub: [Leanne-Weaver](https://github.com/Leanne-Weaver)<br/>

# Step 1: Fork this repository :heavy_check_mark:
- The URL of [my forked repository](https://github.com/Leanne-Weaver/cis411_lab3)

# Step 2: Clone your forked repository from the command line :heavy_check_mark:
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "bf31549a-0562-481e-84ed-88fe0a6aa57e",
      "name": "Leanne Weaver",
      "email": "lw1298@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic 
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['Tango with Llamas']
```

# Step 4: Exercising the application / generating performance data :heavy_check_mark:

_Note: No lab notes required._

# Step 5: Explore your performance data

* What are your observations regarding the performance of this application? 
Some queries take much longer than others. However, there are no errors, so this
application is reliable, yet lacking in efficiency.
* Is performance even or uneven? 
The performance is uneven across different queries; however, it's fairly even when it
comes to the same query.
* Between queries and mutations, what requests are less performant? 
Mutations are much quicker than queries, so queries are less performant.
* Among the less performant requests, which ones are the most problematic?
The following query was the most problematic:
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
It took 42.6 seconds to respond. 
# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
* Using New Relic, identify and record the least performant request(s).
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
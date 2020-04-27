# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Drew Weaver<br/>

GitHub: [drewpoo99](https://github.com/drewpoo99)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
[drewpoo99/cis411_lab3](https://github.com/drewpoo99/cis411_lab3)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "3942316a-8bcf-4c35-95ef-00396f455d37",
      "name": "Drew Weaver",
      "email": "aw1518@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['cislab3']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 

Some queries seem to be much more performant than others. It would be nice to be able to look deeper into what queries are taking longer so we can observe what is specifiaclly slowing things down.

* Is performance even or uneven? 

Performance is even for some queries, and uneven for others 

* Between queries and mutations, what requests are less performant? 

It looks like queries are less performant and take a bit of time to process, while my mutations seem to process almost instantly

* Among the less performant requests, which ones are the most problematic?

The query that retrieves all orders containing the word "everything"

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

Expressjs: post/ seemed to take the most time. 

* Using New Relic, identify and record the least performant request(s).

This took the longest
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

queryOrdersBySearchTerm took the longest (7%) followed by middleware (1%). 

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

I would search for a certain property rather than searching for "everything". Doing so will greatly limit the amount of things that need to be searched through/parsed out and will greatly improve performance. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
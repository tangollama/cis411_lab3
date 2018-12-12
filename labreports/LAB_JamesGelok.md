# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: James Gelok<br/>

GitHub: [JamesGelok](https://github.com/JamesGelok)<br/>

# Step 1: Fork this repository ✅
- https://github.com/JamesGelok/cis411_lab3

# Step 2: Clone your forked repository from the command line ✅
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "38a67929-7061-479d-a552-9ea7a2260689",
      "name": "James Gelok",
      "email": "jdgelok@gmail.com"
    }
  }
}
```

# Step 3: Signup for and configure New Relic ✅
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['cislab']
```
(Note: `cislab` is _the creatively chosen_ name of my configuration)

# Step 4: Exercising the application / generating performance data ✅

_Note: No lab notes required._

# Step 5: Explore your performance data ✅
* What are your observations regarding the performance of this application?

It is performant on some queries but not others. It'd be interesting to specifically label which queries take the longest. So far, it seems like the queries where you were searching for a specific set of characters (looking for _containes the string everything?_, rather than _is everything the name of the type of bagel?_, takes longer.)

* Is performance even or uneven?

It is even for the same queries, uneven for different ones.

* Between queries and mutations, what requests are less performant?

Queries are less performant. The mutations I've done were almost instant.

* Among the less performant requests, which ones are the most problematic?

Looking for _containes the string everything?_, rather than _is everything the name of the type of bagel?_, takes longer and is more problematic.


# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

Among the transactions examined, `Expressjs: post /` took the most time at 603ms on average.

* Using New Relic, identify and record the least performant request(s).

This was the least performant request:

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
This took 33 seconds.


* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

The segment that was the most problematic (and took the most time) was `queryOrdersBySearchTerm`. The reason this took so much time was due to the sheer number of queries.


* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

To improve this, I would change `query` to `bagel.` This changes the query speed to be only milliseconds, rather than tens of seconds.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance.
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

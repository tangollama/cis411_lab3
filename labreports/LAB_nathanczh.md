# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2019<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Nathan Chan<br/>

GitHub: [nathanczh](https://github.com/nathanczh/)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "93d41ef6-9ab8-4382-a743-baa5b993c91f",
      "name": "Nathan Chan",
      "email": "nc1220@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['cis411_lab3']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data

## The NewRelic Pages
The main page of NewRelic contains many indicative statistics on site performance. The main potion of the screen displays a summary of response speed

![Web transcriptions histogram](https://raw.githubusercontent.com/nathanczh/cis411_lab3/master/assets/img1.png)

Around this main graph are other indicators, including:

- Apdex Score
![Apdex score](https://raw.githubusercontent.com/nathanczh/cis411_lab3/master/assets/img2.png)

- Throughput
![Web transcriptions histogram](https://raw.githubusercontent.com/nathanczh/cis411_lab3/master/assets/img3.png)

- Other various pieces of information
![Other various](https://raw.githubusercontent.com/nathanczh/cis411_lab3/master/assets/img4.png)

Clicking on the "Nathans-MacBook-Pro.local" entry under "Hosts" prompted me to install the NewRelic infrastructure app, no information given.

 ## Diagnosing Slow Transactions
The slowest transaction segments are the following:

 - queryOrdersBySearchTerm (twice)
 - ExpressJs' Anonymous Middleware (twice again)

* What are your observations regarding the performance of this application?

Once the application is booted up, the bulk of runtime is dedicated towards data processing.

* Is performance even or uneven?

Performance is rather uneven, some queries taking a lot longer than others.

* Between queries and mutations, what requests are less performant?

Mutations

* Among the less performant requests, which ones are the most problematic?

The ones which "queryOrdersBySearchTerm"

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

"Expressjs: post /", 85%

* Using New Relic, identify and record the least performant request(s).

"all orders containing the word PA" was the least performant

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

"queryOrdersBySearchTerm" extends the time of each request by a significant amount

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

Improve sorting algorithm. Or cache results.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance.
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

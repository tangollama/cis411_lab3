# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Luke Meads<br/>

GitHub: [lukemeads3](https://github.com/lukemeads3)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "a10db030-ded8-4397-a78f-30b79d3497ab",
      "name": "MY NAME",
      "email": "MY EMAIL"
    }
  }
}
```

{
  "data": {
    "mutateAccount": {
      "id": "a1bd1628-6fa9-46e4-8de2-9d0b89c1e6c1",
      "name": "Luke Meads",
      "email": "lm1374@messiah.edu"
    }
  }
}

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['cis411_lab3']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application?
 The performance of the application varies on how many items that are requested are returned.
* Is performance even or uneven? 
The performance is uneven and all depends on the amount of items that the query applies to 
* Between queries and mutations, what requests are less performant? 
Mutations have a higher rpm(request per minute) than queries do. My assumption is because mutations are adding something to the file where a query is retrieve information from the file so it has to sort through the whole file.
* Among the less performant requests, which ones are the most problematic?
The query that is coming back with an error when I run it is the accounts(query:"").

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
queryOrdersBySearchTerm was the segment that took the most time.
* Using New Relic, identify and record the least performant request(s).
The query that retrieved all orders that contained the word "everything"
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
queryOrdersBySearchTerm took the most time during this request taking 2,780 ms to perform the task while the next longest was 424 ms by Expressjs.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
To improve the performance of the queries, I would suggest to redesign the database with better organization.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
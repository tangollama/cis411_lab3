# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Eliezer Mwankenja<br/>

GitHub: [em1404](https://github.com/em1404)<br/>

# Step 1: Fork this repository
- https://github.com/em1404/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "f9c0a6c5-8982-4228-8be4-cedaba3a3916",
      "name": "Eliezer Mwankenja",
      "email": "em1404@messiah.edu"
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
> ``` The application perfoms differently depending on the type of transaction ```
* Is performance even or uneven? 
> ``` The perfomance is uneven, poor for some transaction and better for others ```
* Between queries and mutations, what requests are less performant? 
> ``` Mutations are less performant ```
* Among the less performant requests, which ones are the most problematic?
> ``` ```

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
>``` Response time and others ```
* Using New Relic, identify and record the least performant request(s).
> ``` Response time and others  ```
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
>``` queryOrdersBySearchTerm, Remainder ```
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
>``` ```

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
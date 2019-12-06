# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Howard Zhang<br/>

GitHub: [hz1165](https://github.com/hz1165)<br/>

# Step 1: Fork this repository
- https://github.com/hz1165/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "4cd29850-5ce8-4918-ad48-02e81833a62e",
      "name": "Howard Zhang",
      "email": "hz1165@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```411 lab``` configuration
```
app_name: ['<411 lab>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
![Overview page](https://github.com/hz1165/cis411_lab3/blob/master/assets/overview.JPG)</br>
![health/performance of my compute device](https://github.com/hz1165/cis411_lab3/blob/master/assets/host.JPG)
* What are your observations regarding the performance of this application? 
  </br>All the transactions are taking around 3000+ms
* Is performance even or uneven? 
  </br>All of them are taking similar times to complete
* Between queries and mutations, what requests are less performant? 
  </br>The longest request took 3876ms
* Among the less performant requests, which ones are the most problematic?
  </br>None of them were problematic

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  </br>Remainder took 65% of the time
* Using New Relic, identify and record the least performant request(s).
  ![least performant request](https://github.com/hz1165/cis411_lab3/blob/master/assets/trace.JPG)
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  </br>Remainder is taking the most time in multiple requests
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  </br>Have more specific request, for example, instead of searching "everything", search "apple"
# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

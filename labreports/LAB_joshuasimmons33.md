# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Joshua Simmons<br/>

GitHub: [joshuasimmons33](https://github.com/joshuasimmons33)<br/>

# Step 1: Fork this repository
- The URL of my forked repository
https://github.com/joshuasimmons33/cis411_lab3
# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "8769fdaa-c729-45da-9edf-f72d2c36f03b",
      "name": "Joshua Thomas Simmons",
      "email": "joshua.simmons33@gmail.com"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['CIS411 Lab 3']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application?
- Based on the data in the Apdex Score section, it appears as if this application does not run all that well. the values during request execution are routinely in the 'unacceptable' range.
* Is performance even or uneven?
- Uneven; some queries executed very quickly, and others took upwards of 25 seconds.
* Between queries and mutations, what requests are less performant?
- Queries
* Among the less performant requests, which ones are the most problematic?
- The query that requested every order containing "everything" was the one that took the most amount of time.
# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
- According to the data from the transaction trace, the segment that was the majority for me was called "Remainder". It doesn't seem to be any specific piece of software, it's just time that's being eaten up doing nothing.
* Using New Relic, identify and record the least performant request(s).
- The least performant request was the one about searching every order that contained the word "everything".
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permeation is/are the most problematic and record your findings.
- The 'Remainder' portion of the request is the most problematic, taking up 69% of the time required for the whole request. The next most problematic segment was the queryOrdersBySearchTerm, which tells me the sorting algorithm used to sort by the order type is not very efficient.
* Recommend a solution for improving the performance of those most problematic request(s) / permeation(s).
- Changing the algorithm to sort the data more efficiently would make the request more timely. In addition, whatever is causing the large amount of time spent in the "Remainder" segment should be examined and removed, if possible. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

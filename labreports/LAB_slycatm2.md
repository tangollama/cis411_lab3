# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Matthew Coates<br/>

GitHub: [slycatm2](https://github.com/slycatm2)<br/>

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

The response that GraphQL gave, including after I put in my personal information was:

{
  "data": {
    "mutateAccount": {
      "id": "03313755-1008-403a-ad4f-b3311192493b",
      "name": "Matthew Coates",
      "email": "MC1459@messiah.edu"
    }
  }
}

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```cislab3``` configuration
```
app_name: ['<YOUR APP NAME>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data

My host tells me that my Apdex is 0.40, my response time is 6,750 ms, my throughput is 1rpm, my error rate is 10.50%, my cpu usage is 4% and my memory is 110 MB.

The segment of the transaction that took place at 12:40 that took the most time was "remainder". The segment of the transaction that took place at 12:37 that took the most time was "middleware". The segment of the transaction that took place at 12:33 that took the most time was  also "middleware". The segment of the transaction that took place at 12:29 that took the most time was "remainder".

* What are your observations regarding the performance of this application? 
It seems that the newrelic monitoring software confirms that the second-to-last query that I ran (the "everything" query) took long than any other query to run clocking in at more than 2 minutes and running at almost 70k ms. Other than that, nothing else in my application came close to taking so long to perform or using up so much ms.
* Is performance even or uneven? 
Because of the performance of "Pa" and "everything" query, yes, they have  somewhat performance uneven in the app.
* Between queries and mutations, what requests are less performant? 
The ones between the "Pa" and "everything" queries. There was an ever-so-slight spike right before I tried the "everything" query, but for the most part they were okay. 
* Among the less performant requests, which ones are the most problematic?
The last query was the most problematic (the gmail.com query) because it had performance issues, giving me error messages everywhere.


# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
The "everything" request took the most time to run.
* Using New Relic, identify and record the least performant request(s).
The least performant one was the "gmail" request.
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
The segments that are the most problematic are queryOrdersBySearchTerm but by far is Remainder. 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
Perhaps find out if the sements queryOrderBySearchTerm and Remainder are truly essentially, and if not, remove them?

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
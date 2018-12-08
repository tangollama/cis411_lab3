# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Brandon Baumer<br/>

GitHub: bbaumer18(https://github.com/bbaumer18)<br/>

# Step 1: Fork this repository
- URL: https://github.com/bbaumer18/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "39b0b56d-ca59-4dce-b1c1-3309c2e50db6",
      "name": "Brandon Baumer",
      "email": "bb1351@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['Monitoring Lab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
    - My general observations from the dashboard are that post/ transactions take up a lot more time (4.2 seconds) than get/ transactions (13.5 ms). I also noticed that there is a large range of response times for the different requests. Some  had a negligible transaction time while others took over 15 seconds. 
* Is performance even or uneven? 
    - The performance is very uneven, it spikes with the different transactions as some take a lot more transaction time than others. 
* Between queries and mutations, what requests are less performant? 
    -  The less performant requests are generally queries because rather than adding or editing one entry, all entries must be sifted through to find all that apply to the query. 
* Among the less performant requests, which ones are the most problematic?
    - The most problematic request that was run was the last request for all gmail accounts. This request drew errors because it requested items which couldn't be queried for accounts. The second most problematic was the query for all orders containing the word everything because it took over 46,000 ms. 

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
    - The largest segment of time was spent in middleware. Middleware accounted for 99.97% of the duration of the transaction. 
* Using New Relic, identify and record the least performant request(s).
    - The least performant request, outside of the one that threw an error, was the query for orders containing the word everything. 
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
    - The segment that was most problematic was the loadorderbyid method that was called almost 900 times. 
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
    - My reccomendation to improve performance would be to reduce the number of calls to that method so that it doesn't need to be called for each individual response.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._


# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Nik Sloop<br/>

GitHub: [nik-sloop](https://github.com/nik-sloop)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "facfd3d8-d490-4546-97df-5835912e5cad",
      "name": "Nik Sloop",
      "email": ns1302@messiah.edu"
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
* What are your observations regarding the performance of this application? 
    I**t seemed like the performance was all over the place. I had some request that went through very fast, and others that were very slow. After looking at the data, there was a total of 5 transactions that were 'satisfied', 3 transactions that were 'tolerating' and 5 transactions that were 'frustrated".**
* Is performance even or uneven? 
  **I would say that performance is uneven given that different request take different amounts of time to complete.** 
* Between queries and mutations, what requests are less performant? 
  **The mutations never took long, but some of the queries did take a very long time, so I would say the queries are less performant.**
* Among the less performant requests, which ones are the most problematic?
  **The query for the everything containing the word 'everything' took a very long time to finish. I also tried 'blueberry' and that also took a long time. Both of them had lots of results, so I think anything where there are a lot of results are the most problimatic.** 

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  **The 'Remainder' segmant took almost all of the time according to the breakdown table, it took about 94% of the total time.**
* Using New Relic, identify and record the least performant request(s). **The least performing request was the 'retrieve all orders container the word everything'**
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings. **Middleware/getOrders/queryOrdersBySearchTerm**
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
**I can now see that the loadOrderById gets called 890 times, which takes a lot of time to do. It seems like it queries it once then adds that to the resutls, then queries again and again. It would be better to just query it once and get all the reults at one time.**
# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.

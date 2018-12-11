# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Thomas Wood<br/>

GitHub: [tw1255](https://github.com/tw1255)<br/>

# Step 1: Fork this repository
- https://github.com/tw1255/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "e546bb1d-f240-4973-a9b0-cd4f7419c87d",
      "name": "Thomas Wood",
      "email": "tw1255@messiah.edu"
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
  - Some queries went so fast that I was not completely sure if I did it correctly and others took quite a long time. 
* Is performance even or uneven?
  - Performance is quite uneven, the transactions spiked where some took upwards of 20 seconds and others were a second or less.
* Between queries and mutations, what requests are less performant?
  - Queries are looking to retrieve data rather than adding or editing one entry it has to go through all entries that apply to said query. Mutations are looking to insert information which makes queries less performant than mutations generally speaking. 
* Among the less performant requests, which ones are the most problematic?
  - The most problematic query for me was the one that wanted all of the orders that included the word 'everything.' This one took me the longest. The last request for all gmail accounts drew errors because it requested information that could not be queried.

# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?
  - New Relic appears to say that the transactions that spent the most time in Middleware which accounted for 99%.
* Using New Relic, identify and record the least performant request(s).
  - The least performant request was the one that sorted the bagels by the type of bagel such as raisin or onion.
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  - The segment Middleware which accounted for 99% duration actually had segments within it that took about half the time which means the other half of that time nothing was happening.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  - Reduce the number of calls to certain methods creating a more efficient sorting method would make the perfomance to the problematic requests better.
# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Lab Report for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Donovan Varney<br/>

GitHub: [dv1187](https://github.com/dv1187)<br/>

# Step 1: Fork this repository
- [The URL of my forked repository](https://github.com/dv1187/cis411_lab3.git)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "b4b39b62-731b-408a-978d-7d9ae357b0ec",
      "name": "Donovan Varney",
      "email": "dv1187@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['CIS411_Lab3']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 

- Some of the queries took a significant amount of time, while others went quickly enough where I wasn't actually sure if it had run or not.

* Is performance even or uneven? 

- As noted above, performance was very even. Some queries took upwards of 10-20 seconds, while others took less than a second.

* Between queries and mutations, what requests are less performant? 

- Because a query is looking to retrieve data and mutations are looking to insert information (as far as GraphQL is concerned), queries generally are less performant than mutations.

* Among the less performant requests, which ones are the most problematic?

- The query that gave me the longest wait time was the request that wanted all of the orders that included the word 'everything.' That request took (according to NewRelic) about 31,000 ms. The last query asking for all email accounts that had 'gmail.com' threw an error, so it had to be adjusted before running it again.


# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

- According to New Relic (and assuming I am reading it right), the transactions spent the most time in Middleware:anonymous 98% of the transaction time was there. 

* Using New Relic, identify and record the least performant request(s).

- The least performant request was the request that sorted the bagels by the type of bagel.

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

- The Middleware: anonymous took 98.06% of the total operation time, while the subsegments included in that only took 20.64% and 20.58% (41.22% total) and means that 50% of the total time was just blown into thin air.

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

- Trying to have better connection to the database and having a more optimal sorting method (assuming it is not already in use) would be able to make the performance time better than what it already is.


# Step 7: Submitting a Pull Request
_Note: No lab notes required._
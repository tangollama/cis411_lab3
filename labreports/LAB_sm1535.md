# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Stephen Maloney<br/>

GitHub: [sm1535](https://github.com/sm1535)<br/>

# Step 1: Fork this repository
- https://github.com/sm1535/cis411_lab3

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "e767e76f-5f39-4b94-bcbf-57e60ea480ba",
      "name": "Stephen Maloney",
      "email": "sm1535@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['<cislab>']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 

After running the queries and observing the data, some of the transactions were instantaneous. However, I did notice that two queries in particular seemed ineffiecient. There was also an error when running the very last query as well. So while some work well, others lack efficiency so I would say this application has some issues. 

* Is performance even or uneven? 

The performance is definately uneven between queries, but as for the same queries it is even.

* Between queries and mutations, what requests are less performant? 

Queries are less performant than mutations. 

* Among the less performant requests, which ones are the most problematic?

Retrieve all orders container the word everything is the least performant request as well as the most problematic. 


# Step 6: Diagnosing an issue based on telemetry data
* Within the transactions you're examining, what segment(s) took the most time?

 Under the transactions the Expressjs : post/ took the longest time on average at 
 1,115ms.

* Using New Relic, identify and record the least performant request(s).
{
  #retrieve all orders container the word everything
  orders(query: "everything") {
    id
    customer {
      id
      email
    }
    items {
      label
      quantity
    }
  }
}
It took 1 min and 20.2 seconds to respond

* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

The segment that was the most problematic and took the longest was queryOrdersBySearchTerm.

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

The reason the above request is taking so long is due to the immense number of queries. One of the possible changes that you could make is changing 'query' to 'bagel'. When this is done, it causes the speed to decrease to milliseconds. Otherwise you will be waiting a frustrating amount of time for a respond from the application.

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
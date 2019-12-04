# Lab Report Template for CIS411_Lab3

 

Course: Messiah College CIS 411, Fall 2018
 Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)

 

Name: Drew Feldman

 

GitHub: [DrewRFeldman](https://github.com/DrewRFeldman/)

 

# Step 1: Fork this repository

 

- https://github.com/DrewRFeldman/cis411_lab3

 

# Step 2: Clone your forked repository from the command line

 

- My GraphQL response from adding myself as an account on the test project

 

```
{
  "data": {
    "mutateAccount": {
      "id": "5f397a8a-09fd-4206-af64-6e8bfb99e729",
      "name": "Drew Feldman",
      "email": "df1239@messiah.edu"
    }
  }
}
```

 

# Step 3: Signup for and configure New Relic

 

- The chosen name of your New Relic `app_name` configuration

 

```
app_name: ['<YOUR APP NAME>']
```

 

# Step 4: Exercising the application / generating performance data

 

*Note: No lab notes required.*

 

# Step 5: Explore your performance data

 

- What are your observations regarding the performance of this application?

  For the most part, the queries were all executed very quickly. A few specific queries took longer than the others, but none of them took very long. Overall I would say this application performs well, although that is subjective because I don't have another application that is performing well to compare it to.

- Is performance even or uneven?

  The performance is uneven between queries.

- Between queries and mutations, what requests are less performant?

  Mutations are better than queries. 

- Among the less performant requests, which ones are the most problematic?

  I think the queries that search for text perform far worse than queries searching for items by text. For example, query: "raisin" would be much slower than bagel: "raisin". I believe this is because distinguishing that you're looking at bagel types allows you to search a much smaller amount of code than searching all text in every entry for the phrase "raisin". This allows you to search only the bagel type column rather than all data. I think.

 

# Step 6: Diagnosing an issue based on telemetry data

 

- Within the transactions you're examining, what segment(s) took the most time?

  Any queries where I query a string of text perform far slower than when I query an attribute of the items in the table. Example, querying location: "PA" instead of query: "PA" yields much quicker results.

- Using New Relic, identify and record the least performant request(s).

  This was the worst query. It was so bad, in fact, that I ran out of time to work on the lab before it concluded. I had to cancel the query.

  {
    #all orders containing the letter "a" 
    orders(query: "a") {
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

- Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

  The segments that take the most time are the queryOrderBySearchTerm componenet and the Remainder component. I'm not sure what remainder is, I'm assuming it's probably internet latency. 

- Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).

  To improve these problematic requests, be more specific with the requests. The more broad I make requests, the more work the system has to do and the more data has to be searched. Narrowing a query from query:"a" to query: "raisin" yields considerable improvement, and narrowing further from a text search of the database to a text search of a single column (from query: "raisin" to bagel: "raisin") improves these queries to nearly instant.

 

# Step 7: Submitting a Pull Request

 

*Note: No lab notes required.*

 

# Step 8: [EXTRA CREDIT] Address the performance issue(s)

 

For the purposes of gaining 25% extra credit on the assignment, perform any of the following:

 

1. Adjust the diagnosed slow call(s) to improve performance.

   Narrowing these searches as I mentioned in step 6 improved performance. When running a query, I first tried querying the database using query:"raisin"

   and noted the results. I then queried using bagel:"raisin" and the query was nearly ten times faster. I had similar results searching for other terms as well.

2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.

3. Check in those changes and **note your solution(s)** in your lab report.
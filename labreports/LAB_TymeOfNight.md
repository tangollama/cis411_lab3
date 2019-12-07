# Lab Report for CIS 411 Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Justin Kim<br/>

GitHub: [TymeOfNight](https://github.com/TymeOfNight)<br/>

# Step 1: Fork this repository
- [My forked repository](https://github.com/TymeOfNight/cis411_lab3)

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "682d835e-ea16-4de3-a861-38cdac30d6e7",
      "name": "Justin John Kim",
      "email": "jk1515@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['411_Lab3']
```

# Step 5: Eploring Performance Data

![Overview Page]()
![Host Health]()

### Examinations of long running traces:

Of the four long-running traces I found, there were three traces that identified "Remainder" as taking the majority of the time (92% of the total).  The fourth query identified "Middleware" as occupying the majority of execution (72%).

This app performs well when requests are short, or are limited to a search of a particular 'table' (orders, for example).  Performance seems pretty even among mutations, but varies widely when performing queries.  (Queries seem to be much less efficient, especially when searching for a common term.)  Queries that are the most problematic are those that request a full system search (i.e. a query instead of a mutation on a category like "orders") for a commonly occurring term (like "Everything" in a database full of bagel orders).  

# Step 6: Diagnosing an issue based on telemetry

1. Remainder and Middleware sections took the most time.
2. The least performant request was the one query the orders database for the term "Everything".
3. The Remainder section was most problematic, occupying 92% of the execution time.
4. Instead of using the query keyword (which searches the entire database), a more specific search range should be used.  For example, if by "Everything" one means everything-bagels, than the "bagels" keyword/table name should be used instead of query, because it limits the scope of the search.
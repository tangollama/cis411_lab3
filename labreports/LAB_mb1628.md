# Lab Report CIS_Lab3
Course: Messiah College CIS 411, Fall 2019<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Matthew Bromley<br/>

GitHub: [mb1628](https://github.com/mb1628)<br/>

# Forked Repository
Repository: [mb1628/cis411_lab3](https://github.com/mb1628/cis411_lab3)

# Setup GraphQL
GraphQL Response
```
{
  "data": {
    "mutateAccount": {
      "id": "6e5ac288-e095-4f09-a0e5-7bbcda7468a6",
      "name": "Matthew Bromley",
      "email": "mb1628@messiah.edu"
    }
  }
}
```

# Setup New Relic
App Name: ```TabsAreJustCapitalSpaces```
```
app_name: ['TabsAreJustCapitalSpaces']
```

# Performance Data
* What are your observations regarding the performance of this application?
  - Queries took much longer to preform than the mutations did. Mutations were almost instant in most cases.
* Is performance even or uneven? 
  - Uneaven. POST was much heavier on preformance than GET.
* Between queries and mutations, what requests are less performant? 
  - Queries.
* Among the less performant requests, which ones are the most problematic?
  - Expressjs.

# Diagnosis
* Within the transactions you're examining, what segment(s) took the most time?
  - Expressjs
* Using New Relic, identify and record the least performant request(s).
  - The query where we requested "everything" was the most preformance heavy and took the longets time to complete.
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.
  - "Remainder" and "queryOrdersBySearchTerm" were listed as the slowest segments.
* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
  - Too much is requested at once, this is probable what caused the lag in the application. To fix this we could lessen what is returned in our search results.
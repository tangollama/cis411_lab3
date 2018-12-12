# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Samuel Mahan<br/>

GitHub: [SamMahan](https://github.com/SamMahan)<br/>

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

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['Samuel Mahan CIS lab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
* What are your observations regarding the performance of this application? 
  - The performance varies by query. Most seemed to perform in less than half a second, but one in particular seems take incredibly long
* Is performance even or uneven? 
 - Even mostly, with a few variations, until I reach the query for orders("everything") and a slightly inefficient query searching for "PA" in all fields
* Between queries and mutations, what requests are less performant? 
 - queries are less performant
* Among the less performant requests, which ones are the most problematic?
 - orders("everything") is the least efficient
 - orders("pa") (where "pa" is searched in all fields) is ineficient as well. This seems to be because it is not limiting its search 
to the location field but rather searching everything.
# Step 6: Diagnosing an issue based on telemetry data

I talked with you about this where I could see some data but not specifics on new relic. I never did get it to work. I'll do my best
to  answer anyway based on what we went over in class. We went over the trace for the "everything" query, so I will look into that. 

* Within the transactions you're examining, what segment(s) took the most time?
 - the "everyhthing" query
* Using New Relic, identify and record the least performant request(s).
 - //not possible with my error
* Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings.

 - It looks like orders for ("everything") pulls all the entities it needs initially, but then loops through each entity and queries it again to add an account (loadOrder), making for O(n) queries where n is the total number of stored entities.
 
 -as for the inefficient "pa" query, simply use the "location" field searcher instead, as it limit its search to the location field

* Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s).
 - I found that "everything" is a designation that can be found in items.type and items.label. First, remove the O(n) loadOrder function call. Next, modify the query so that it only searches in two locations, items.type and items.label, for each order, since other locations like the id are highly unlikely to have "everything" in them. In this way, the function is similar to the one we are using to search for bagel types, with the addition of one more field to search through. 


# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
  - the (query:"everything") has ben given the changes I suggested above. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
 - here is the performance before the query https://github.com/SamMahan/cis411_lab3/blob/master/labreports/before.JPG
 - here is the performance after (see right) https://github.com/SamMahan/cis411_lab3/commit/ac43f0e13307bf64869b65ef588c65ffb99f6fd7
2. Check in those changes and **note your solution(s)** in your lab report.
 - here is the link to that commit https://github.com/SamMahan/cis411_lab3/commit/ac43f0e13307bf64869b65ef588c65ffb99f6fd7

# Lab Report Template for CIS411_Lab3
Course: Messiah College CIS 411, Fall 2018<br/>
Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: YOUR NAME<br/>

GitHub: [YOUR_HANDLE](https://github.com/YOUR_HANDLE)<br/>

# Step 1: Fork this repository
- The URL of my forked repository

# Step 2: Clone your forked repository from the command line
- My GraphQL response from adding myself as an account on the test project
```
{
  "data": {
    "mutateAccount": {
      "id": "0ea03032-e61a-482b-bd7c-aa576441c109",
      "name": "Gage Sapp",
      "email": "gs1226@messiah.edu"
    }
  }
}
```

# Step 3: Signup for and configure New Relic
- The chosen name of your New Relic ```app_name``` configuration
```
app_name: ['CisLab']
```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data
2. apdex score .18, throughput .567 rpm, avg web transaction time 13.2 seconds, and error rate 0.00%. 
3. Apdex	Resp. time	Throughput	Error Rate	     CPU usage	Memory
   0.18	13,200 ms	                      1 rpm	                      16.00 %	          9 %	                     150 MB

5. For the first query Middleware: <anonymous> was the slowest component. For the second query loadOrderById was the slowest component. For the third query Remainder was the slowest component. I picked the three slowest queries and then the slowest components from them. I mean for single queries it doesn't seem to be doing too poorly although it could be much quicker. The longer queries are ones where the Id of the thing being searched is not a primary key, or at least thats what it seems like. When you are searching attributes of things instead of keys. Queries are less performant, problematic ones are just the ones with more search results especially if searching attributes.

# Step 6: Diagnosing an issue based on telemetry data
* For me the "Everything query" took the longest and the slowest component of that was "remainder". I do not know how the database is setup or how the tables are connected so I would probably look at that and make sure that everything is connected in a way that makes sense and in as little steps as possible. 

# Step 7: Submitting a Pull Request
_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)
For the purposes of gaining 25% extra credit on the assignment, perform any of the following:
1. Adjust the diagnosed slow call(s) to improve performance. 
2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.
2. Check in those changes and **note your solution(s)** in your lab report.
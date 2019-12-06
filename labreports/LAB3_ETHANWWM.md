# Lab Report Template for CIS411_Lab3

Course: Messiah College CIS 411, Fall 2018<br/>

Instructors: [Joel Worrall](https://github.com/tangollama) & [Trevor Bunch](https://github.com/trevordbunch)<br/>

Name: Ethan Wong<br/>

GitHub: [ethanwwm](https://github.com/ethanwwm)<br/>

# Step 1: Fork this repository

[https://github.com/ethanwwm/cis411_lab3](https://github.com/ethanwwm/cis411_lab3)

# Step 2: Clone your forked repository from the command line

- My GraphQL response from adding myself as an account on the test project

```

{
  "data": {
    "mutateAccount": {
      "id": "0693a4c8-eec1-41ba-bea9-1cddc9feba50",
      "name": "Ethan Wong",
      "email": "ethanwwm@gmail.com"
    }
  }
}
```

# Step 3: Signup for and configure New Relic

- The chosen name of your New Relic `app_name` configuration

```

app_name: ['cislab']

```

# Step 4: Exercising the application / generating performance data

_Note: No lab notes required._

# Step 5: Explore your performance data

- What are your observations regarding the performance of this application? \* The queries ran smoothly even though the return time varied for each of them.

- Is performance even or uneven? \* Uneven.

- Between queries and mutations, what requests are less performant? \* Queries.

- Among the less performant requests, which ones are the most problematic? \* The queries that have too broad of a search scope can cause a significant drop in performance.

# Step 6: Diagnosing an issue based on telemetry data

- Within the transactions you're examining, what segment(s) took the most time? \* When searching for Strings instead of being specific to the item in a category can be much slower.

- Using New Relic, identify and record the least performant request(s).

```

```

{
#all accounts that contain gmail.com
accounts(query: "gmail.com") {
id
items {
label
quantity
}
}
}

```

```

- Using the Transaction Trace capability in New Relic, identify which segment(s) in that request permiatation is/are the most problematic and record your findings. \* queryOrderBySearchTerm and Remainder component

- Recommend a solution for improving the performance of those most problematic request(s) / permiatation(s). \* Basically be more specific with your queries than being so general.

# Step 7: Submitting a Pull Request

_Note: No lab notes required._

# Step 8: [EXTRA CREDIT] Address the performance issue(s)

For the purposes of gaining 25% extra credit on the assignment, perform any of the following:

1. Adjust the diagnosed slow call(s) to improve performance.

2. Verify the improved performance in New Relic, **including data and/or screenshots in your lab report**.

3. Check in those changes and **note your solution(s)** in your lab report.

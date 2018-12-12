# CIS 411 Lab 3

## Step 2

1.  Run the following GraphQL mutation in GraphiQL and **record the response**.

```
mutation {
  mutateAccount(input: {
    email: "YOUR EMAIL"
    name: "YOUR FULL NAME"
    mutation: "add"
  }) {
    id
    name
    email
  }
}
```

![alt text](https://github.com/da1238/cis411_lab3/blob/master/labreports/1.png)

# Step 4: Exercising the application / generating performance data

1\. #all orders containing the word PA

![alt text](https://github.com/da1238/cis411_lab3/blob/master/labreports/2.png)

2\. #all orders in Pennsylvania

![alt text](https://github.com/da1238/cis411_lab3/blob/master/labreports/3.png)

# Step 5: Explore your performance data

*** I zoomed in on the overview graph by accident and couldn't figure out how to zoom out. ***

Step 2

![alt text](https://github.com/da1238/cis411_lab3/blob/master/labreports/4.png)

Step 3

![alt text](https://github.com/da1238/cis411_lab3/blob/master/labreports/5.png)

Step 4

![alt text](https://github.com/da1238/cis411_lab3/blob/master/labreports/6.png)

# Step 6: Diagnosing an issue based on telemetry data

Step 1   
```
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
```


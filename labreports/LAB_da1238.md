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

**![]![alt text](https://github.com/da1238/cis411_lab3/blob/master/labreports/1.png)** 

# Step 4: Exercising the application / generating performance data

1\. #all orders containing the word PA

![](blob:https://euangoddard.github.io/13c790ee-83ef-4d0e-870b-b61d9eabd5e5)

2\. #all orders in Pennsylvania

![](blob:https://euangoddard.github.io/54eab81a-da4d-41e2-bb7e-fac639cfd1aa)

# Step 5: Explore your performance data

*** I zoomed in on the overview graph by accident and couldn't figure out how to zoom out. ***

Step 2

![](blob:https://euangoddard.github.io/d9a8bb3e-063c-4534-8cd0-7a3f437ebbe8)

Step 3

![](blob:https://euangoddard.github.io/19ba4e55-9357-48bc-90a2-928bad724b28)

Step 4

![](blob:https://euangoddard.github.io/6335228a-f317-45b1-bc25-bb72bfe4e776)

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


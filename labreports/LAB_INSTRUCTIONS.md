# CIS 411 Lab 3: Monitoring, Observability, and Performance Profiling and using New Relic
The purpose of this lab is to expose students to the base concepts surrounding monitoring and code inspection using the New Relic nodejs agent to profile a GraphQL interface in the Apollo GraphQL Server.

## Notes
1. This lab requires that a student be able to signup for a basic New Relic account and configure a newrelic.js configuration file in the base directory of the project. (See the instructions below)
2. As of the publication of this lab, the New Relic nodejs agent has poor support for GraphQL libraries. Thus the additional code referencing the [custom instrumentation capabilities in the New Relic nodejs agent](https://docs.newrelic.com/docs/agents/nodejs-agent/api-guides/nodejs-agent-api).

## TODO
Update /simplify the code in this lab once the New Relic nodejs agent has better support for Apollo GraphQL.

## Submitting work
Lab reports will be submitted by generating a markdown file in the labreports directory under the naming convention: **LAB_[GITHUB HANDLE].md**, and submitting a Pull Request to this repository that include your lab report as well as any accompanying images/files (there are diagrams required in the lab content). 

* Throughout these instructions, you'll find that **items marked in bold text** reference content you are to submit in your lab report.
* For the purposes of clear communication, you may base your lab report off of the template found in [LAB.md](LAB.md), but you're also free, welcome, and encouraged to get more creative.
* If you are unfamiliar with markdown, I recommend checking [1000 places on the Interwebs](http://lmgtfy.com/?q=learn+markdown) that will help you close that gap.

# Step 0: Create a GitHub account++
1. If you don't have a GitHub account already, [create one](https://github.com/join). If you do, **record the name of your handle in your lab report** and **record a link to one repository you either follow or star**.
2. If you don't already have _git_ installed on your development machine, [do so](https://git-scm.com/downloads).
3. Install a text editor or some sort of application for local development. Lately, I'm partial to [Visual Studio Code](https://code.visualstudio.com/) and my instructions assume it's use, but you're welcome to diviate. _Each one should choose their own sword, etc. etc._
4. To run the project in Step 2, you'll need to have [node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/cli/install) installed.

# Step 1: Fork this repository
1. After logging in, navigate to the [root](https://github.com/tangollama/cis411_lab3) of this repository.
2. Fork this repository to your personal GitHub account (hint: read the page).

# Step 2: Clone your forked repository from the command line
1. Navigate to your forked repository in your GitHub account and copy the reference to your repository in from the <button class="btn btn-sm btn-primary">Clone or Download</button> button.
2. Open the terminal or command line interface on your development machine, navigate to your chosen working directory, and execute the following command: ```git clone [YOUR COPIED GITHUB CLONE REFERENCE]```.
3. Navigate to that directory ```cd cis411_lab3```.
4. Run ```npm install``` and watch the magic happen.
5. Run ```npm start``` and navigate to http://localhost:4000/graphql.
6. Run the following GraphQL mutation in GraphiQL and **record the response**.
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

7. Stop your service with a ```Ctrl+C```, as we need to setup New Relic for telemetry acquisition.

# Step 3: Signup for and configure the New Relic nodejs agent
In its downloaded state, the project will run successfully but fail to record any performance data to New Relic because you must follow the [installation instructions for the New Relic nodejs agent](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent). There's a great 4-minute video on the nodejs installation process [here]((https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent)), under the heading, **View installation video**. To accomplish the necessary configuration, perform the following.

1. [Signup for a New Relic account] (https://newrelic.com/signup)
2. Once you've registered for an account, [login to New Relic](https://rpm.newrelic.com/).
3. Navigate to your account settings at ```https://rpm.newrelic.com/accounts/```
![New Relic account settings](../assets/newrelic_account_settings.png "New Relic account settings")
4. Find and copy the License key in the lower right side of the page.
![Find the New Relic License Key](../assets/find_newrelic_license_key.png "Find the New Relic License Key")
5. Copy the newrelic.js file from your install npm_modules directory into the root on your project.
```
# assumes you're in cis411_lab3 
> cp cp node_modules/newrelic/newrelic.js .
```
6. Open the newrelic.js file in the root of your project.
```
> code newrelic.js
```
7. In the newrelic.js file in the root of your project, find the ```app_name``` parameter and set it to cis_lab (or whatever name you prefer).
```
app_name: ['cislab'],
```

8. In the newrelic.js file in the root of your project, find the ```license_key``` parameter and set it to the value of your ```license key```.
9. Save the newrelic.js file with those changes.
10. Run ```npm start``` and navigate to http://localhost:4000/graphql.

# Step 4: Exercising the application
Run the following series of GraphQL requests:
```
{
  #all orders containing the word PA
  orders(query: "PA") {
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
```
{
  #all orders in Pennsylvania  
  orders(location: "PA") {
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
```
{
  #all orders with an item that contains an onion bagel
  
  orders(bagel: "onion") {
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
```
{
  #all orders in Texas
  orders(location: "TX") {
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
```
{
  #all orders with an item that contains a raisin bagel
  orders(bagel: "raisin") {
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
Explore a few more mutations and queries in GraphQL to create a good base on requests for the nodejs client to profile. Did you notice if any of those requests seemed particularly slow? Which ones? How much? Why? (Note: these are rhetorical questions meant to underscore the point of the next step.)

# Step 5: Explore your data in New Relic
1. [Open (or log back into) New Relic](https://rpm.newrelic.com) and select your ```cis_lab``` application in the application list.
2. **Observe and record** what the Overview page for your application has to tell you about the performance of your GraphQL service.
3. At the bottom of the ```Overview``` page, click on your ```Host```, and **record** what it's telling you about the health/performance of your computer.
4. Go back to the ```Overview``` page and click on an entry under the ```Transactions``` list called ```post /```.



# Step 6: Submitting a Pull Request
Once you've completed your report markdown, have ensured that your forked repository is successfully running in CircleCI, and have committed all your changes to your (primary) master branch, initiate a Pull Request in GitHub to submit your Lab Report.
1. Navigate to the root of your forked repository (ex. https://github.com/YOURHANDLE/cis411_lab0).
2. Click the _New pull request_ button.
3. Choose the base fork _tangollama/cis411_lab0_ is the target and that your fully updated _master_ branch is the source.
4. Enter a title and description for the Pull Request (PR), **referencing at least one other student in the content via their GitHub handle**, and submit the PR.

# Step 7: [EXTRA CREDIT] fix the performance issue(s)
For the purposes of gaining 25% _or even more extra credit_ on the assignment, perform any of the following:
1. Adjust the diagnosed slow calls to improve performance. 
2. Check in those changes and **note your solution** in your lab report.

**Note this work in your lab report** by submitting it in your PR and linking to either the PR or the specific commit as recorded in GitHub in your lab report.

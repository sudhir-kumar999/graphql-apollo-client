<!-- ! Difference between REST API and GRAPHQL -->

# Introduction

Both REST API and GRAPHQL are use to make a connection between client and server, where user can send a request and server send response according their response.REST API is a most common way to which is used to make communication with web application and client but graphql have also some advantage this is why it is also used. Both do the same work, both transfer data or communicate between server and client.Below describe what is REST API and graphql, which is better and why.

## what is REST API ?
REST API means representational state transfer which allow users to communicate or transfer data between client and server over network.
it takes client request and send response after processing their request, based on HTTP METHODS like GET, POST, PATCH, PUT and DELETE. These are most commonly used in REST API to communicate between client request and server response.

## what is GRAPHQL ?
GRAPHQL is also used to make communication between client request and server response, it is a query language which allow users or client to fetch exactly the same data they needed. it provide flexibility to user to fetch data from server.

## Problems with REST API and and their differences
One thing always comes in mind that if REST API is available then why graphql is introduced and used. Lets comes to this point, 

### Over-fetching problem
REST API send total object of data as a response even if the client requires only few field of the data object, so due to this network become slow and user might see their data after some delay. Suppose when UI or client needs only two field of a response object to display on UI but REST API send a total response object this is why graphql is used it send only the data client needed, if client need some part of response object then it send exactly that field instead of sending all the field of data object. This problem is call over-fetching and it is solved by graphql.

### Under fetching problem
In REST API we have to hit multiple endpoint to get multiple data of a user, but in graphql there is only one endpoint to get all the data which is "/graphql". Suppose if client want to get data of user with their id and the post of that user and the comment of that post, we have to make three endpoint to call the data in REST API but in graph ql all the data are just comes from a single endpoints, which reduce number of API calls inside our web application 

REST API is loosely typed which means we do not have to define the types of data client send and the type of data response send. 

on the other hand graphql is strictly typed here we have to define the types of data which is comes from client side and types of data send to client side from server. Generally we have to define two types for each mutation one is input data type and other is output data types, but in some cases like making a production ready application we use three types for each request one is input types, second is output types and third is response type which contains output types.


## When to use graphql and REST API
when we have limited number of bandwidth and we want to minimize the number of request and response.
when we have multiple data endpoint graphql fetched all the data with single endpoint.
when client does not need full response object, only needs some data from response
when our application is less complex then we use REST API to perform normal crud operation.

## Advantages of REST and Graphql
    i) Prevent Over-fetching
    ii) Prevent under Fetching
    iii) Better for complex Applications with multiple data sources

#### REST API
    i) Every resource has its own endpoint
    ii) Easy to implement and understand
    iii) Support caching


## Disadvantage
###GRAPHQL

    i) Does not support caching
    ii) Complexity for writing Simple CRUD APIs
    iii) Complex to implement because of its strongly typed ability

###REST API

    i)over-fetching issue
    ii) under-fetching issue
    iii) Multiple request needed for complex data
    iv) Multiple endpoints

### Effect of Cost on Graphql and REST API
REST API
initial set up is fast easy to integrate.
Make more number of API call due to over fetching and under fetching
Lower development cost
Developers are easily available
Charge low cost on per million request than graphql
Consumes more bandwidth

Graphql
Need experience developer
Initial development cost is higher than REST
Less number of api calls
charges higher cost per million request than REST API
Higher development cost
Consumes less bandwidth

# United States Department of Justice GraphQL API

## Table Of Contents
*  [About The Data](#about-the-data)
*  [Built Using](#built-using)
*  [Getting Started](#getting-started)
*  [GraphQL Query Examples](#graphql-query-examples)

## About The Data
Only a fraction of government agencies provide public APIs, which are usually poorly documented and built on REST architecture. Our mission is to retrieve that valuable data and convert them into an intuitive and modern GraphQL API.

The data comes directly from the United States Department of Justice's REST API (DOJ News). The REST endpoints have been mapped as GraphQL types and resolvers. A summary of endpoints and documentation can be found here: https://www.justice.gov/developer/api-documentation/api_v1
**Note: Maximum of 10 requests per second or "experience degraded performance and may be blocked entirely"**

## Built Using
* [Node.js](https://nodejs.org/en) - JavaScript Runtime Environment
* [Express](https://expressjs.com) - Web framework
* [GraphQL](https://graphql.org) - Query Language
* [Apollo Server 2](https://www.apollographql.com/docs/apollo-server) - GraphQL Server
* [Babel 7](https://babeljs.io) - Transpiler/Transcompiler

## Getting Started
**1. Install Dependencies:**
```
npm install
```

**2. Start Server:**
```
npm run server
```

**3. Execute GraphQL Queries Here (Browser Automatically Opens On Server Start):**
```
http://localhost:4000/graphql
```

## GraphQL Query Examples
### Example #1: Get Last 10 Blog Entries:
```
Query #1
```

### Example #2: Get Last 10 Press Releases:
```
Query #1
```


### Example #3: Get Press Release By ID:
```
Query #1
```

### Example #4: Get Last 10 Speeches:
```
Query #1
```

### Example #5: Get Last 10 Vacancy Announcements:
```
Query #1
```
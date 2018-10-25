# United States Department of Justice GraphQL API

*  [About The Data](#about-the-data)
*  [Built Using](#built-using)
*  [Getting Started](#getting-started)
*  [GraphQL Query Examples](#graphql-query-examples)

## About The Data
Only a fraction of government agencies provide public APIs, which are usually poorly documented and built on REST architecture. Our mission is to retrieve that valuable data and convert them into an intuitive and modern GraphQL API.

The data comes directly from the United States Department of Justice's REST API (DOJ News). The REST endpoints have been mapped as GraphQL types and resolvers. A summary of endpoints and documentation can be found here: https://www.justice.gov/developer/api-documentation/api_v1

**Notes:**
- Department of Justice sets the maximum limit at 10 requests per second.
- No API Key required.

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
**Example #1: Get Last 10 Blog Entries:**
```
{
  getLastTenBlogEntries {
    metadata {
      responseInfo {
        status
        developerMessage
      }
      resultset {
        count
        pagesize
        page
      }
      executionTime
    }
    results {
      body
      changed
      created
      date
      image
      teaser
      title
      topic
      url
      uuid
      vuuid
    }
  }
}
```

**Example #2: Get Last 10 Press Releases:**
```
{
  getLastTenPressReleases {
    metadata {
      responseInfo {
        status
        developerMessage
      }
      resultset {
        count
        pagesize
        page
      }
      executionTime
    }
    results {
      body
      changed
      created
      date
      image
      teaser
      title
      topic
      url
      uuid
      vuuid
    }
  }
}
```


**Example #3: Get Press Release By ID:**
```
{
  getPressReleaseById(ID: "e7a19711-08a2-48bf-84af-8a280b2c100a") {
    results {
      body
      changed
      created
      date
      title
      uuid
      vuuid
    }
  }
}
```

**Example #4: Get Last 10 Speeches:**
```
{
  getLastTenSpeeches {
    metadata {
      responseInfo {
        status
        developerMessage
      }
      resultset {
        count
        pagesize
        page
      }
      executionTime
    }
    results {
      body
      changed
      created
      date
      image
      teaser
      title
      topic
      url
      uuid
      vuuid
    }
  }
}
```

**Example #5: Get Last 10 Vacancy Announcements:**
```
{
  getLastTenVacancyAnnouncements {
    metadata {
      responseInfo {
        status
        developerMessage
      }
      resultset {
        count
        pagesize
        page
      }
      executionTime
    }
    results {
      body
      changed
      created
      date
      image
      teaser
      title
      topic
      url
      uuid
      vuuid
    }
  }
}
```
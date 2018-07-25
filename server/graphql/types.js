// GraphQL: TypeDefs
const TYPEDEFS = `

  type Query {
    getLastTenBlogEntries: RootQuery
    getBlogEntryByID(ID: String): RootQuery

    getLastTenPressReleases: RootQuery
    getPressReleaseByID(ID: String): RootQuery

    getLastTenSpeeches: RootQuery
    getSpeechByID(ID: String): RootQuery

    getLastTenVacancyAnnouncements: RootQuery
    getVacancyAnnouncementByID(ID: String): RootQuery
  }

  type RootQuery {
    metadata: Metadata
    Results: [Result]
  }

  type Metadata {
    responseInfo: ResponseInfo
    resultset: ResultSet
    executionTime: Int
  }

  type ResponseInfo {
    status: Int
    developerMessage: String
  }

  type ResultSet {
    count: Int
    pagesize: Int
    page: Int
  }

  type Result {
    attachments: String
    body: String
    changed: String
    component: [Component]
    created: String
    date: String
    image: String
    teaser: String
    title: String
    topic: String
    url: String
    uuid: String
    vuuid: String
  }

  type Component {
    uuid: String
    name: String
  }
`;


// Exports
export default TYPEDEFS;
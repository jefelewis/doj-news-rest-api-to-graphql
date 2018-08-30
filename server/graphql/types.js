// Imports: GraphQL
import { gql } from 'apollo-server-express';


// GraphQL: TypeDefs
const TYPEDEFS = gql`

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
    results: [Result]
  }

  type Metadata {
    responseInfo: ResponseInfo
    resultset: ResultSet
    executionTime: String
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
    attachments: [Attachment]
    body: String
    changed: String
    component: [Component]
    created: String
    date: String
    image: [Image]
    teaser: [Teaser]
    title: String
    topic: [Topic]
    url: String
    uuid: String
    vuuid: String
  }

  type Component {
    uuid: String
    name: String
  }

  type Attachment {
    hi: String
  }

  type Image {
    hi: String
  }

  type Teaser {
    hi: String
  }

  type Topic {
    hi: String
  }
`;


// Exports
export default TYPEDEFS;

// Imports: Dependencies
import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    getAllBlogEntries: RootQuery
    getBlogEntryById(id: String): RootQuery

    getAllPressReleases: RootQuery
    getPressReleaseById(id: String): RootQuery

    getAllSpeeches: RootQuery
    getSpeechById(id: String): RootQuery

    getAllVacancyAnnouncements: RootQuery
    getVacancyAnnouncementById(id: String): RootQuery
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
    body: String
    changed: String
    component: [Component]
    created: String
    date: String
    title: String
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

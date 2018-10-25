{
  getAllVacancyAnnouncements {
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
      title
      url
      uuid
      vuuid
    }
  }
}
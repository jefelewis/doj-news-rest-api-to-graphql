// Imports: Axios
import axios from 'axios';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // DEPARTMENT OF JUSTICE (DOJ) BLOG ENTRIES
    // Get Last Ten Blog Entries
    getLastTenBlogEntries: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/blog_entries.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Blog Entries by ID
    getBlogEntryByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/blog_entries/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // DEPARTMENT OF JUSTICE (DOJ) PRESS RELEASES
    // Get Last Ten Press Releases
    getLastTenPressReleases: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/press_releases.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Press Release by ID
    getPressReleaseByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/press_releases/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // DEPARTMENT OF JUSTICE (DOJ) PRESS RELEASES
    // Get Last Ten Speeches
    getLastTenSpeeches: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/speeches.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Speech by ID
    getSpeechByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/speeches/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // DEPARTMENT OF JUSTICE (DOJ) VACANCY ANNOUNCEMENTS
    // Get Last Ten Vacancy Announcments
    getLastTenVacancyAnnouncements: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/vacancy_announcements.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Vacancy Announcment by ID
    getVacancyAnnouncementByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/vacancy_announcements/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
}

// Exports
export default RESOLVERS
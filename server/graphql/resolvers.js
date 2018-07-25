// Imports: Axios
import axios from 'axios';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // 
    getLastTenBlogEntries: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/blog_entries.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getBlogEntryByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/blog_entries/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getLastTenPressReleases: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/press_releases.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getPressReleaseByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/press_releases/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getLastTenBlogSpeeches: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/speeches.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getSpeechByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/speeches/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getLastTenVacancyAnnouncements: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/vacancy_announcements.json?&pagesize=10`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    },
    getVacancyAnnouncementsByID: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/vacancy_announcements/${args.ID}.json?&pagesize=1`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    }
  }
};

// Exports
export default RESOLVERS;
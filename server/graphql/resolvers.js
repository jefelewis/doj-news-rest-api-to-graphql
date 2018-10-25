// Imports: Dependencies
import axios from 'axios';

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // DEPARTMENT OF JUSTICE (DOJ) BLOG ENTRIES
    // Get All Blog Entries
    getAllBlogEntries: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/blog_entries.json?sort=date&direction=desc&pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Blog Entries by ID
    getBlogEntryById: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/blog_entries/${args.id}.json?sort=date&direction=desc&pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },



    // DEPARTMENT OF JUSTICE (DOJ) PRESS RELEASES
    // Get All Press Releases
    getAllPressReleases: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/press_releases.json?direction=desc&pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Press Release by ID
    getPressReleaseById: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/press_releases/${args.id}.json?direction=desc&pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },



    // DEPARTMENT OF JUSTICE (DOJ) SPEECHES
    // Get All Speeches
    getAllSpeeches: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/speeches.json?pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Speech by ID
    getSpeechById: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/speeches/${args.id}.json?pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },



    // DEPARTMENT OF JUSTICE (DOJ) VACANCY ANNOUNCEMENTS
    // Get All Vacancy Announcements
    getAllVacancyAnnouncements: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/vacancy_announcements.json?pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    // Get Vacancy Announcement by ID
    getVacancyAnnouncementById: (parent, args) => {
      return axios.get(`http://www.justice.gov/api/v1/vacancy_announcements/${args.id}.json?pagesize=99999999999`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
  },
};

// Exports
export default RESOLVERS;

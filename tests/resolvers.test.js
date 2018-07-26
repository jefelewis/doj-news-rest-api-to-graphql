// Imports: Supertest
import REQUEST from 'supertest';

// Imports: Chai
import chai from 'chai';
var should = chai.expect()

// Imports: Resolvers
import RESOLVERS from '../server/graphql/resolvers';


// BLOG ENTRIES
describe('Department of Justice (DOJ) Blog Entries', () => {

  // Last 10 Blog Entries
  it('Submits an HTTP Request to the API and returns the Last Ten Blog Entries', () => {
    REQUEST(`http://www.justice.gov/api/v1/blog_entries.json?&pagesize=10`).get(`/`)
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        expect(res.body).to.have.property('metadata')
        expect(res.body).to.have.property('fuck')
      }))
  })

  // Blog Entry by ID
  it('Submits an HTTP Request to the API and returns a Blog Entry by ID', () => {
    // UUID (ID)
    let UUID = 'e7a19711-08a2-48bf-84af-8a280b2c100a';

    REQUEST(`http://www.justice.gov/api/v1/blog_entries/${UUID}.json?&pagesize=1`).get(`/`)
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        // expect(res.body).to.have.property('metadata')
      }))
  })

})



// PRESS RELEASES
describe('Department of Justice (DOJ) Press Releases', () => {

  // Last 10 Press Releases
  it('Submits an HTTP Request to the API and returns the Last Ten Press Releases', () => {
    REQUEST(`http://www.justice.gov/api/v1/press_releases.json?&pagesize=1`).get('/')
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        // expect(res.body).to.have.property('metadata')
      }))
  })

  // Press Release by ID
  it('Submits an HTTP Request to the API and returns a Press Release by ID', () => {
    // UUID (ID)
    let UUID = '8a0f7395-f556-45bf-8890-eeea2d0cbae0';

    REQUEST(`http://www.justice.gov/api/v1/press_releases/${UUID}.json?&pagesize=1`).get('/')
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        // expect(res.body).to.have.property('metadata')
      }))
  })

})



// SPEECHES
describe('Department of Justice (DOJ) Speeches', () => {

  // Last 10 Speeches
  it('Submits an HTTP Request to the API and returns the Last Ten Speeches', () => {
    REQUEST(`http://www.justice.gov/api/v1/speeches.json?&pagesize=10`).get('/')
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        // expect(res.body).to.have.property('metadata')
      }))
  })

  // Speech by ID
  it('Submits an HTTP Request to the API and returns a Speech by ID', () => {
    // UUID (ID)
    let UUID = '32feb4db-2ab2-425e-b321-7d944cf1767d';    

    REQUEST(`http://www.justice.gov/api/v1/speeches/${UUID}.json?&pagesize=1`).get('/')
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        // expect(res.body).to.have.property('metadata')
      }))
  })

})



// VACANCY ANNOUNCEMENTS
describe('Department of Justice (DOJ) Vacancy Announcments', () => {

  // Last 10 Vacancy Announcments
  it('Submits an HTTP Request to the API and returns the Last Ten Vacancy Announcments', () => {
    REQUEST(`http://www.justice.gov/api/v1/vacancy_announcements.json?&pagesize=10`).get('/')
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        // expect(res.body).to.have.property('metadata')
      }))
  })
  
  // Vacancy Announcement by ID
  it('Submits an HTTP Request to the API and returns a Vacancy Announcement by ID', () => {
    // UUID (ID)
    let UUID = '5b22ae7b-64fd-4fbc-84c6-3fefe4f2ea93';

    REQUEST(`http://www.justice.gov/api/v1/vacancy_announcements/${UUID}.json?&pagesize=1`).get('/')
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        // expect(res.body).to.have.property('metadata')
      }))
  })

})
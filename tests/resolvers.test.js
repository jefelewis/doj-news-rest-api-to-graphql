// // Imports: Supertest
// import REQUEST from 'supertest';

// // Imports: Chai
// import chai from 'chai';

import chai from 'chai'
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
var should = chai.expect()

// Imports: Resolvers
import APP from '../server/server.js'


// BLOG ENTRIES
describe('Department of Justice (DOJ) Blog Entries', () => {

  // Last 10 Blog Entries
  it('Submits an HTTP Request to the API and returns the Last Ten Blog Entries', async () => {
    // REQUEST(APP)
    //   // REST API Endpoint
    //   .get(`http://www.justice.gov/api/v1/blog_entries.json?&pagesize=10`)
    //   // Check Status Code
    //   .expect(200)
    //   // Check Content Type
    //   .set('Content-Type', 'application/json', () => {
    //     throw new Error('Response must be JSON')
    //   })
    //   // Check Response Body
    //   .expect(((err, res) => {
    //     expect(res.body).to.exist
    //     expect(res.body).to.have.property('status')
    //     expect(res.body).that.includes.all.keys(['fuck'])

    //    console.log('res is ', res.body);
    //   }))

    chai.request('http://www.justice.gov/api/v1/blog_entries.json?&pagesize=10')
      .expect(200)
      // Check Content Type
      .set('Content-Type', 'application/json', () => {
        throw new Error('Response must be JSON')
      })
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
  })

//   // Blog Entry by ID
//   it('Submits an HTTP Request to the API and returns a Blog Entry by ID', () => {
//     // UUID (ID)
//     let UUID = 'e7a19711-08a2-48bf-84af-8a280b2c100a';

//     REQUEST(APP)
//       // REST API Endpoint
//       .get(`http://www.justice.gov/api/v1/blog_entries/${UUID}.json?&pagesize=1`)
//       // Check Content Type
//       .expect('Content-Type', /json/)
//       // Check Status Code
//       .expect(200)
//       // Check Response Body
//       .end(((err, res) => {
//         // expect(res.body).to.have.property('metadata')
//       }))
//   })

// })



// // PRESS RELEASES
// describe('Department of Justice (DOJ) Press Releases', () => {

//   // Last 10 Press Releases
//   it('Submits an HTTP Request to the API and returns the Last Ten Press Releases', () => {
//     REQUEST(APP)
//       // REST API Endpoint
//       .get(`http://www.justice.gov/api/v1/press_releases.json?&pagesize=10`)
//       // Check Content Type
//       .expect('Content-Type', /json/)
//       // Check Status Code
//       .expect(200)
//       // Check Response Body
//       .end(((err, res) => {
//         // expect(res.body).to.have.property('metadata')
//       }))
//   })

//   // Press Release by ID
//   it('Submits an HTTP Request to the API and returns a Press Release by ID', () => {
//     // UUID (ID)
//     let UUID = '8a0f7395-f556-45bf-8890-eeea2d0cbae0';

//     REQUEST(APP)
//       // REST API Endpoint
//       .get(`http://www.justice.gov/api/v1/press_releases/${UUID}.json?&pagesize=1`)
//       // Check Content Type
//       .expect('Content-Type', /json/)
//       // Check Status Code
//       .expect(200)
//       // Check Response Body
//       .end(((err, res) => {
//         // expect(res.body).to.have.property('metadata')
//       }))
//   })

// })



// // SPEECHES
// describe('Department of Justice (DOJ) Speeches', () => {

//   // Last 10 Speeches
//   it('Submits an HTTP Request to the API and returns the Last Ten Speeches', () => {
//     REQUEST(APP)
//       // REST API Endpoint
//       .get(`http://www.justice.gov/api/v1/speeches.json?&pagesize=10`)
//       // Check Content Type
//       .expect('Content-Type', /json/)
//       // Check Status Code
//       .expect(200)
//       // Check Response Body
//       .end(((err, res) => {
//         // expect(res.body).to.have.property('metadata')
//       }))
//   })

//   // Speech by ID
//   it('Submits an HTTP Request to the API and returns a Speech by ID', () => {
//     // UUID (ID)
//     let UUID = '32feb4db-2ab2-425e-b321-7d944cf1767d';    

//     REQUEST(APP)
//       // REST API Endpoint
//       .get(`http://www.justice.gov/api/v1/speeches/${UUID}.json?&pagesize=1`)
//       // Check Content Type
//       .expect('Content-Type', /json/)
//       // Check Status Code
//       .expect(200)
//       // Check Response Body
//       .end(((err, res) => {
//         // expect(res.body).to.have.property('metadata')
//       }))
//   })

// })



// // VACANCY ANNOUNCEMENTS
// describe('Department of Justice (DOJ) Vacancy Announcments', () => {

//   // Last 10 Vacancy Announcments
//   it('Submits an HTTP Request to the API and returns the Last Ten Vacancy Announcments', () => {
//     REQUEST(APP)
//       // REST API Endpoint
//       .get(`http://www.justice.gov/api/v1/vacancy_announcements.json?&pagesize=10`)
//       // Check Content Type
//       .expect('Content-Type', /json/)
//       // Check Status Code
//       .expect(200)
//       // Check Response Body
//       .end(((err, res) => {
//         // expect(res.body).to.have.property('metadata')
//       }))
//   })
  
//   // Vacancy Announcement by ID
//   it('Submits an HTTP Request to the API and returns a Vacancy Announcement by ID', () => {
//     // UUID (ID)
//     let UUID = '5b22ae7b-64fd-4fbc-84c6-3fefe4f2ea93';

//     REQUEST(APP)
//       // REST API Endpoint
//       .get(`http://www.justice.gov/api/v1/vacancy_announcements/${UUID}.json?&pagesize=1`)
//       // Check Content Type
//       .expect('Content-Type', /json/)
//       // Check Status Code
//       .expect(200)
//       // Check Response Body
//       .end(((err, res) => {
//         // expect(res.body).to.have.property('metadata')
//       }))
//   })

})
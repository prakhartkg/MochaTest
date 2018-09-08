const request = require('supertest');
const expect = require('expect');

const app = require('./server');

describe("Server",()=>{
    describe("#get",()=>{
      describe("GET /",()=>{
        it('should return hello world response',(done)=>{
          request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end(done);
        });
      });
      describe("GET /users",()=>{
        it('should return my user',(done)=>{
          request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
              expect(res.body).toInclude({name:'prakhar',age:26})
            })
            .end(done);
        });
      });
    });
});

const expect = require('expect');

const util = require('./util');

it('should add two numbers',()=>{
    var res = util.add(33,11);
    expect(res).toBe(44).toBeA('number');
});

it('should add two number Async',(done)=>{
    util.addasync(5,3,(sum)=>{
      expect(sum).toBe(8).toBeA('number');
      done();
    });
});

it('should square a number',()=>{
  const res = util.square(2);
  expect(res).toBe(4).toBeA('number');
});

it('should square a number async',(done)=>{
  util.squareAsync(2,(square)=>{
    expect(square).toBe(4).toBeA('number');
    done();
  });
});


it('should do something',()=>{
  //expect(4).toNotBe(5);
  //expect({name:"Prakhar"}).toEqual({name:"Prakhar"})
  //expect({name:"Prakhar"}).toNotEqual({name:"Prakhar"})
  expect({name:"Prakhar",
        age:25})
  .toInclude({age:25})
});

it("should set first and last name",()=>{
  var user = {
    age:26,
    location:"Bangalore"
  }
  const res = util.setName(user,"Prakhar Jain");
  expect(res).toInclude({
    firstName:"Prakhar",
    lastName:"Jain"});
});

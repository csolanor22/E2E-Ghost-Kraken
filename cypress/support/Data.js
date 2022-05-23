const { faker } = require('@faker-js/faker');

export class Data {
  
  getPseudoRandomDataPool(urlAPI) {
    let dataPool = {};
    Cypress.$.ajax({
      async: false,
      url: urlAPI,
      responseType:'application/json',
      success: function(data) {dataPool = data;},
      error: function(xhr, status, error) { console.log(`getPseudoRandomDataPool error: ${urlAPI} \n${error}`); }
    });
    return dataPool;
  }

  getRandomDataPool(dataPool) {
    let idx = faker.datatype.number({'min': 0, 'max': dataPool.length-1}, 1)
    cy.log(dataPool.length, idx, dataPool[idx].email, dataPool[idx].title)
    cy.wait(2000)
    return dataPool[idx];
  }

  getRandomData() {
    return {title: faker.lorem.words(), description:faker.lorem.paragraphs()}; 
  }

  getRandomDataMember(){
    return {
      name: faker.name.firstName() +' '+ faker.name.lastName(), 
      name191: faker.datatype.string(191),
      name192: faker.datatype.string(192),
      email: faker.internet.email(),
      note: faker.lorum.words()
    }; 
  }

  getRandomWords(num){
    return faker.lorem.words(num); 
  }

}

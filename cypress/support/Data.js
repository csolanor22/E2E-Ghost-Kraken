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

  getRandomWords(num){
    return faker.lorem.words(num); 
  }

}
/*
        cy.get('#first_3').scrollIntoView().focus().type
        (faker.name.firstName())
        (faker.name.lastName())
        (faker.address.streetAddress())
        (faker.address.city())
        (faker.phone.phoneNumber())
        (faker.company.companyName())
        (faker.name.jobTitle())
        (faker.internet.email())
        (faker.lorem.paragraph())
        select('Newspaper')
//*/
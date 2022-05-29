import {faker} from '@faker-js/faker'
describe('ghost admin post', () => {

	const version = Cypress.env('ghost-version')
        const site = Cypress.env('site')
	const name = Cypress.env('name')
	const email = Cypress.env('email')
	const password = Cypress.env('password')
	let titulo = new String();
	let descripcion = new String();
	

	before(()=>{
		cy.createAdmin(version, site, name, email, password)
        })

	beforeEach(()=>{
		cy.login(email, password)
	})

	afterEach(()=>{ 
		cy.logout() 
	})  

	context('Given admin accesses post list option', () => {
		beforeEach(()=>{
			cy.listPost()
			cy.newPost()
		})		

		context('When admin creates new post [tipo dato imagen]', () => {
			beforeEach(() => {
				titulo = faker.image.abstract()
				descripcion = faker.image.abstract()
				cy.createPost(version, titulo, descripcion)
			})  
			it('Then admin sees new draft post in list', () => {
				cy.listPostAndCheck(titulo);
			})
		})

		context('When admin creates new post [titulo dato música]', () => {
			beforeEach(() => {
				titulo = faker.music.genre()
				descripcion = faker.lorem.paragraphs(2) 
				cy.createPost(version, titulo, descripcion)
			})  
			it('Then admin sees new draft post in list', () => {
				cy.listPostAndCheck(titulo);
			})
		})
				
	})

			
})

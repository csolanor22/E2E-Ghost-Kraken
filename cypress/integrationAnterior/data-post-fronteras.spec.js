import {faker} from '@faker-js/faker'
describe('ghost admin post fronteras', () => {

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

		context('When admin creates new post [titulo y descripcion validos]', () => {
			beforeEach(() => {
				titulo = faker.name.jobTitle()
				descripcion = faker.lorem.paragraphs(2) 
				cy.createPost(version, titulo, descripcion)
			})  
			it('Then admin sees new draft post in list', () => {
				cy.listPostAndCheck(titulo);
			})
		})

		context('When admin creates new post [titulo 1 caracter y descripcion validos]', () => {
			beforeEach(() => {
				titulo = faker.lorem.word(1)
				descripcion = faker.lorem.paragraphs(2) 
				cy.createPost(version, titulo, descripcion)
			})  
			it('Then admin sees new draft post in list', () => {
				cy.listPostAndCheck(titulo);
			})
		})
		
		context('When admin creates new post [titulo 2 caracter y descripcion validos]', () => {
			beforeEach(() => {
				titulo = faker.lorem.word(2)
				descripcion = faker.lorem.paragraphs(2) 
				cy.createPost(version, titulo, descripcion)
			})  
			it('Then admin sees new draft post in list', () => {
				cy.listPostAndCheck(titulo);
			})
		})

		context('When admin creates new post [Sin titulo y descripcion validos]', () => {
			beforeEach(() => {
				titulo = '(Untitled)'
				descripcion = faker.lorem.paragraphs(2) 
				cy.get('.koenig-editor__editor-wrapper').type(descripcion +'{enter}')
				cy.publishPost(version)
			})  
			it('Then admin sees new published post in list', () => {
				cy.listPostAndCheck(titulo);
			})
		})

		context('When admin creates new post [Sin titulo y descripcion validos]', () => {
			beforeEach(() => {
				titulo = '(Untitled)'
				descripcion = faker.lorem.paragraphs(2) 
				cy.get('.koenig-editor__editor-wrapper').type('{enter}')
				cy.schedulePost(version)
			})  
			it('Then admin sees new published post in list', () => {
				cy.filterScheduledPost();
			})
		})

		context('When admin creates new post [titulo de 254 caracteres]', () => {
			beforeEach(() => {
				titulo = faker.lorem.paragraphs()
				titulo = titulo.substr(0,254)
				descripcion = faker.lorem.paragraphs(2) 
				cy.createPost(version, titulo, descripcion)
				cy.schedulePost(version)
			})  
			it('Then admin sees new published post in list', () => {
				cy.filterScheduledPost();
			})
		})

		context('When admin creates new post [titulo de 255 caracteres]', () => {
			beforeEach(() => {
				titulo = faker.lorem.paragraphs()
				titulo = titulo.substr(0,255)
				descripcion = faker.lorem.paragraphs(2) 
				cy.createPost(version, titulo, descripcion)
				cy.schedulePost(version)
			})  
			it('Then admin sees new published post in list', () => {
				cy.filterScheduledPost();
			})
		})

		context('When admin creates new post [titulo de 300 caracteres]', () => {
			beforeEach(() => {
				titulo = faker.lorem.paragraphs()
				titulo = titulo.substr(0,300)
				descripcion = faker.lorem.paragraphs(2) 
				cy.createPost(version, titulo, descripcion)
				cy.schedulePost(version)
			})  
			it('Then admin sees new published post in list', () => {
				cy.filterScheduledPost();
			})
		})

		
	})

			
})

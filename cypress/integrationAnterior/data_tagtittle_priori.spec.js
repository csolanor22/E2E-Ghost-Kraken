const titulooks = require("./data/tag_title_ok.json");
const titulo190 = require("./data/tag_title_190.json");
const titulo191 = require("./data/tag_title_191.json");
const titulodos = require("./data/tag_title_chartwo.json");
const titulosup = require("./data/tag_title_superior.json");
const titulouno = require("./data/tag_title_character.json");
describe('Fronteras de titulos en tags - data pool', () => {

	const version = Cypress.env('ghost-version')
        const site = Cypress.env('site')
	const name = Cypress.env('name')
	const email = Cypress.env('email')
	const password = Cypress.env('password')
	let indice = new Number();
	let titulo = new String();
	let sintitulo = new String()
	indice = Math.floor(Math.random() * (100 - 1)) + 1;

	beforeEach(()=>{
		cy.login(email, password)
	})

	afterEach(()=>{ 
		cy.logout() 
	})  

	context('Given admin accesses tags list option', () => {
		beforeEach(()=>{
			cy.listTags()
			cy.newTag()
		})		

		context('When admin creates new tag less 190 characters', () => {
			beforeEach(() => {
				titulo = titulooks[indice].titulo
				cy.createTag(version, titulo , titulo)
			})  
			it('Then admin sees new tag in list', () => {
				cy.listTagsAndCheck(titulo);
			})
		})
		
	})

	context('Given admin accesses tags list option', () => {
		beforeEach(()=>{
			cy.listTags()
			cy.newTag()
		})		

		context('When admin creates new tag 190 characters', () => {
			beforeEach(() => {
				titulo = titulo190[indice].titulo
				cy.createTag(version, titulo , titulo)
			})  
			it('Then admin sees new tag in list', () => {
				cy.listTagsAndCheck(titulo);
			})
		})
		
	})

	context('Given admin accesses tags list option', () => {
		beforeEach(()=>{
			cy.listTags()
			cy.newTag()
		})		

		context('When admin creates new tag 191 characters', () => {
			beforeEach(() => {
				titulo = titulo191[indice].titulo
				cy.createTag(version, titulo , titulo)
			})  
			it('Then admin sees new tag in list', () => {
				cy.listTagsAndCheck(titulo);
			})
		})
		
	})

	context('Given admin accesses tags list option', () => {
		beforeEach(()=>{
			cy.listTags()
			cy.newTag()
		})		

		context('When admin creates new tag 2 characters', () => {
			beforeEach(() => {
				titulo = titulodos[indice].titulo
				cy.createTag(version, titulo , titulo)
			})  
			it('Then admin sees new tag in list', () => {
				cy.listTagsAndCheck(titulo);
			})
		})
		
	})

	context('Given admin accesses tags list option', () => {
		beforeEach(()=>{
			cy.listTags()
			cy.newTag()
		})		

		context('When admin creates new tag 1 characters', () => {
			beforeEach(() => {
				titulo = titulouno[indice].titulo
				cy.createTag(version, titulo , titulo)
			})  
			it('Then admin sees new tag in list', () => {
				cy.listTagsAndCheck(titulo);
			})
		})
		
	})

	context('Given admin accesses tags list option', () => {
		beforeEach(()=>{
			cy.listTags()
			cy.wait(2000)
			cy.newTag()
		})		

		context('When admin creates new tag more 191 characters', () => {
			beforeEach(() => {
				titulo = titulosup[indice].titulo
				cy.createTag(version, titulo , titulo)
				cy.wait(1000)
				//cy.clickRetryButton()
			})  
			it('Then admin sees new tag in list', () => {
				cy.contains('Retry').should('be.visible')
			})
		})

	})

	context('Given admin accesses tags list option', () => {
		beforeEach(()=>{
			cy.listTags()
			cy.wait(2000)
			cy.newTag()
		})		

		context('When admin crea un tag sin titulo pero con descripcion', () => {
			beforeEach(() => {
				titulo = titulosup[indice].titulo
				sintitulo = ' '
				cy.createTag(version, sintitulo , titulo)
				cy.wait(1000)
				//cy.clickRetryButton()
			})  
			it('Then admin sees new tag in list', () => {
				cy.contains('Retry').should('be.visible')
			})
		})

	})
	

})

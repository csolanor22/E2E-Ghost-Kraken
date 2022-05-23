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
	let descripcion = new String();
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

		context('When admin creates new tag descripcion less 500 characters', () => {
			beforeEach(() => {
				titulo = titulooks[indice].titulo
				descripcion = titulosup[indice].titulo
				cy.createTag(version, titulo , descripcion)
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

		context('When admin creates new tag with descripction 1 character', () => {
			beforeEach(() => {
				titulo = titulo190[indice].titulo
				descripcion = titulosup[indice].titulo
				descripcion = descripcion.substr(0)
				cy.createTag(version, titulo , descripcion)
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

		context('When admin creates new tag descripcion more 500 characters', () => {
			beforeEach(() => {
				titulo = titulo191[indice].titulo
				descripcion = titulosup[indice].titulo + titulosup[indice].titulo + titulosup[indice].titulo
				descripcion = descripcion.substr(0,501)
				cy.createTag(version, titulo , titulo)
			})  
			it('Then admin sees new tag in list', () => {
				cy.listTagsAndCheck(titulo);
			})
		})
		
	})

	

})

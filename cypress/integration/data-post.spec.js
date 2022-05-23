import { Data } from "../support/Data.js";

describe('ghost admin - data strategies e2e tests', () => {

	const version = Cypress.env('ghost-version')
	const site = Cypress.env('site')
	const name = Cypress.env('name')
	const email = Cypress.env('email')
	const password = Cypress.env('password')

	let title = undefined
	let desc = undefined
	let post = undefined
	let tag = undefined
	let words = undefined

	const data = new Data();
	const aprioriDataPool = require('../fixtures/ghost-data.json');
	const pseudoRandomDataPool = data.getPseudoRandomDataPool(Cypress.env('urlPagesAPI'));

	before(()=>{
		cy.createAdmin(version, site, name, email, password)
    	})

	context('Given admin accesses post list option', () => {
		beforeEach(()=>{
			cy.login(email, password)
			cy.listPost()
		})

		context('When admin creates new post with random data strategy', () => {
			beforeEach(() => {
				post = data.getRandomData();
				title = post.title;
				desc = post.description;
				cy.newPost()
				cy.createPost(version, title, desc)
			}) 

			it('Then admin sees new draft post in list and can delete it', () => {
				cy.listPostAndCheck(title);
				cy.filterDraftPost()
			})
			it('And schedule it, then admin sees new schedule post in list and can delete it', () => {
				cy.schedulePost(version)
				cy.listPostAndCheck(title);
				cy.filterScheduledPost()
			})
			it('And publish it, then admin sees new published post in list and can delete it', () => {
				cy.publishPost(version)
				cy.listPostAndCheck(title);
				cy.filterPublishedPost()
			})
			afterEach(() => {
				cy.deletePost(version, title)
				//cy.contains(title).should('not.exist')
			}) 
		})

		context('When admin creates new tag-border-1 and new post with apriori data pool strategy', () => {
			beforeEach(() => {
				post = data.getRandomDataPool(aprioriDataPool)
				tag = data.getRandomDataPool(aprioriDataPool)
				title = post.title;
				desc = post.description;

				cy.listTags()
				cy.newTag()
				cy.createTag(version, tag.text190, tag.desc500)
				cy.listTagsAndCheck(tag.text190);
				
				cy.listPost()
				cy.newPost()
				cy.createPost(version, title, desc)
			})

			it('Then admin sees new draft post in list and can add a tag and delete post', () => {
				cy.listPostAndCheck(title);
				cy.filterDraftPost()
				cy.editTagPageByType(version, title, tag.text190, 'draft')
				cy.filterDraftPost()
			})
			it('And schedule it, then admin sees new schedule post in list and can not add a tag because a bug and then can delete post', () => {
				cy.schedulePost(version)
				cy.listPostAndCheck(title);
				cy.filterScheduledPages()
				// cy.editTagPageByType(version, title, tag.text190, 'scheduled')
				// cy.filterPublishedPages()
			})
			it('And publish it, then admin sees new published post in list and can add a tag and delete post', () => {
				cy.publishPost(version)
				cy.listPostAndCheck(title);
				cy.filterPublishedPost()
				cy.editTagPageByType(version, title, tag.text190, 'published')
				cy.filterPublishedPost()
			})
			afterEach(() => {
				cy.deletePost(version, title)
				//cy.contains(title).should('not.exist')
			}) 
		})		

		context('When admin creates new tag-border and new post with apriori data pool strategy', () => {
			beforeEach(() => {
				post = data.getRandomDataPool(aprioriDataPool)
				tag = data.getRandomDataPool(aprioriDataPool)
				title = post.title;
				desc = post.description;

				cy.listTags()
				cy.newTag()
				cy.createTag(version, tag.text191, tag.desc500)
				cy.listTagsAndCheck(tag.text191);
				
				cy.listPost()
				cy.newPost()
				cy.createPost(version, title, desc)
			})

			it('Then admin sees new draft page in list and can add a tag and delete post', () => {
				cy.listPostAndCheck(title);
				cy.filterDraftPost()
				cy.editTagPageByType(version, title, tag.text190, 'draft')
				cy.filterDraftPost()
			})
			it('And schedule it, then admin sees new schedule post in list and can not add a tag because a bug and then can delete post', () => {
				cy.schedulePost(version)
				cy.listPostAndCheck(title);
				cy.filterScheduledPost()
			})
			it('And publish it, then admin sees new published post in list and can add a tag and delete post', () => {
				cy.publishPost(version)
				cy.listPostAndCheck(title);
				cy.filterPublishedPost()
				cy.editTagPageByType(version, title, tag.text190, 'published')
				cy.filterPublishedPost()
			})
			afterEach(() => {
				cy.deletePost(version, title)
				//cy.contains(title).should('not.exist')
			}) 

		})

		afterEach(()=>{ 
			cy.logout() 
		})	
	})
})

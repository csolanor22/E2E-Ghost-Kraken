import { Data } from "../support/Data.js";

describe('ghost admin - data strategies e2e tests', () => {

	const version = Cypress.env('ghost-version')
	const site = Cypress.env('site')
	const name = Cypress.env('name')
	const email = Cypress.env('email')
	const password = Cypress.env('password')

	let title = undefined
	let desc = undefined
	let page = undefined
	let tag = undefined
	let words = undefined
	let post = undefined
	let tag190 = undefined
	let tagdesc = undefined

	const data = new Data();

	before(()=>{
		cy.createAdmin(version, site, name, email, password)
    	})

	context('Given admin accesses pages list option', () => {
		beforeEach(()=>{
			cy.login(email, password)
		})

		context('When admin creates new page with random data strategy', () => {
			beforeEach(() => {
				page = data.getRandomData();
				title = page.title;
				desc = page.description;
				cy.listPages()
				cy.newPage()
				cy.createPage(version, title, desc)
			}) 

			it('Then admin sees new draft page in list and can delete it', () => {
				cy.listPagesAndCheck(title);
				cy.filterDraftPages()
			})
			it('And schedule it, then admin sees new schedule page in list and can delete it', () => {
				cy.schedulePage(version)
				cy.listPagesAndCheck(title);
				cy.filterScheduledPages()
			})
			it('And publish it, then admin sees new published page in list and can delete it', () => {
				cy.publishPage(version)
				cy.listPagesAndCheck(title);
				cy.filterPublishedPages()
			})
			afterEach(() => {
				cy.deletePage(version, title)
				cy.contains(title).should('not.exist')
			}) 
		})	

		context('When admin creates new post with random data strategy', () => {
			beforeEach(() => {
				post = data.getRandomData();
				title = post.title;
				desc = post.description;
				cy.listPost()
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
			}) 
		})

		context('When admin creates new tag', () => {
			beforeEach(()=>{
				tag = data.getRandomData();
				title = tag.title;
				desc = tag.description;
				desc = desc.substr(0,300)
				cy.listTags()
				cy.newTag()
				cy.createTag(version, title , desc)
			})

			it('Then admin sees new tag in list', () => {
				cy.listTagsAndCheck(title);
			})
		})

		context('When admin creates new tag-border-1 and new page with random data strategy', () => {
			beforeEach(() => {
				page = data.getRandomData();
				tag = data.getRandomData();
				title = page.title;
				desc = page.description;
				tag190 = tag.description;
				tag190 = tag190.substr(0,190);
				tagdesc = tag.description;
				tagdesc = tagdesc.substr(0,300);


				cy.listTags()
				cy.newTag()
				cy.createTag(version, tag190, tagdesc)
				cy.listTagsAndCheck(tag190);
				
				cy.listPages()
				cy.newPage()
				cy.createPage(version, title, desc)
			})

			it('Then admin sees new draft page in list and can add a tag and delete page', () => {
				cy.listPagesAndCheck(title);
				cy.filterDraftPages()
				cy.editTagPageByType(version, title, tag190, 'draft')
				cy.filterDraftPages()
			})
			it('And schedule it, then admin sees new schedule page in list and can not add a tag because a bug and then can delete page', () => {
				cy.schedulePage(version)
				cy.listPagesAndCheck(title);
				cy.filterScheduledPages()
			})
			it('And publish it, then admin sees new published page in list and can add a tag and delete page', () => {
				cy.publishPage(version)
				cy.listPagesAndCheck(title);
				cy.filterPublishedPages()
				cy.editTagPageByType(version, title, tag190, 'published')
				cy.filterPublishedPages()
			})
			afterEach(() => {
				cy.deletePage(version, title)
				cy.contains(title).should('not.exist')
			}) 
		})

		afterEach(()=>{ 
			cy.logout() 
		})	
	})

})

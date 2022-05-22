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

	const data = new Data();
	const aprioriDataPool = require('../fixtures/ghost-data.json');
	const pseudoRandomDataPool = data.getPseudoRandomDataPool(Cypress.env('urlPagesAPI'));

	before(()=>{
		cy.createAdmin(version, site, name, email, password)
    })

	context('Given admin accesses pages list option', () => {
		beforeEach(()=>{
			cy.login(email, password)
			cy.listPages()
		})

		context('When admin creates new page with random data strategy', () => {
			beforeEach(() => {
				page = data.getRandomData();
				title = page.title;
				desc = page.description;
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
//*
		context('When admin creates new tag-border-1 and new page with apriori data pool strategy', () => {
			beforeEach(() => {
				page = data.getRandomDataPool(aprioriDataPool)
				tag = data.getRandomDataPool(aprioriDataPool)
				title = page.title;
				desc = page.description;

				cy.listTags()
				cy.newTag()
				cy.createTag(version, tag.text190, tag.desc500)
				cy.listTagsAndCheck(tag.text190);
				
				cy.listPages()
				cy.newPage()
				cy.createPage(version, title, desc)
			})

			it('Then admin sees new draft page in list and can add a tag and delete page', () => {
				cy.listPagesAndCheck(title);
				cy.filterDraftPages()
				cy.editTagPageByType(version, title, tag.text190, 'draft')
				cy.filterDraftPages()
			})
			it('And schedule it, then admin sees new schedule page in list and can not add a tag because a bug and then can delete page', () => {
				cy.schedulePage(version)
				cy.listPagesAndCheck(title);
				cy.filterScheduledPages()
				// cy.editTagPageByType(version, title, tag.text190, 'scheduled')
				// cy.filterPublishedPages()
			})
			it('And publish it, then admin sees new published page in list and can add a tag and delete page', () => {
				cy.publishPage(version)
				cy.listPagesAndCheck(title);
				cy.filterPublishedPages()
				cy.editTagPageByType(version, title, tag.text190, 'published')
				cy.filterPublishedPages()
			})
			afterEach(() => {
				cy.deletePage(version, title)
				cy.contains(title).should('not.exist')
			}) 
		})

		context('When admin creates new tag-border and new page with apriori data pool strategy', () => {
			beforeEach(() => {
				page = data.getRandomDataPool(aprioriDataPool)
				tag = data.getRandomDataPool(aprioriDataPool)
				title = page.title;
				desc = page.description;

				cy.listTags()
				cy.newTag()
				cy.createTag(version, tag.text191, tag.desc500)
				cy.listTagsAndCheck(tag.text191);
				
				cy.listPages()
				cy.newPage()
				cy.createPage(version, title, desc)
			})

			it('Then admin sees new draft page in list and can add a tag and delete page', () => {
				cy.listPagesAndCheck(title);
				cy.filterDraftPages()
				cy.editTagPageByType(version, title, tag.text190, 'draft')
				cy.filterDraftPages()
			})
			it('And schedule it, then admin sees new schedule page in list and can not add a tag because a bug and then can delete page', () => {
				cy.schedulePage(version)
				cy.listPagesAndCheck(title);
				cy.filterScheduledPages()
				// cy.editTagPageByType(version, title, tag.text190, 'scheduled')
				// cy.filterPublishedPages()
			})
			it('And publish it, then admin sees new published page in list and can add a tag and delete page', () => {
				cy.publishPage(version)
				cy.listPagesAndCheck(title);
				cy.filterPublishedPages()
				cy.editTagPageByType(version, title, tag.text190, 'published')
				cy.filterPublishedPages()
			})
			afterEach(() => {
				cy.deletePage(version, title)
				cy.contains(title).should('not.exist')
			}) 

		})

		context('When admin try to create new tag-border+1 and new page with apriori data pool strategy', () => {
			beforeEach(() => {
				page = data.getRandomDataPool(aprioriDataPool)
				tag = data.getRandomDataPool(aprioriDataPool)
				title = page.title;
				desc = page.description;

				cy.listTags()
				cy.newTag()
				cy.createTag(version, tag.text192,  tag.desc500)
				cy.contains('cannot be longer than 191')

				cy.listPages()
				cy.clickLeaveButton()
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
//*/
		context('When admin try to create new tag with big description with pseudo random data pool strategy', () => {
			beforeEach(() => {
				page = data.getRandomDataPool(pseudoRandomDataPool)
				tag = data.getRandomDataPool(pseudoRandomDataPool)
				title = page.title;
				desc = page.description;

				cy.listTags()
				cy.newTag()
				cy.createTag(version, tag.text191,  tag.desc501)
				cy.contains('cannot be longer than 500')

				cy.listPages()
				cy.clickLeaveButton()
				cy.newPage()
				cy.createPage(version, title, desc)
				cy.log('beforeEach DONE')
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

		afterEach(()=>{ 
			cy.logout() 
		})	
	})
})

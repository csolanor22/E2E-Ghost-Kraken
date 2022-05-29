describe('ghost admin visual regression tests', () => {

	const version = Cypress.env('ghost-version')
	const site = Cypress.env('site')
	const name = Cypress.env('name')
	const email = Cypress.env('email')
	const password = Cypress.env('password')
	const publishedPost = Cypress.env('publishedPost')
	const publishedPage = Cypress.env('publishedPage')
	const desc =  Cypress.env('lorem')

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
		
		context('When admin creates new published post', () => {
			beforeEach(() => {
				cy.createPost(version, publishedPost, desc)
				cy.publishPost(version)
			})
			it('Then admin sees new published post in list', () => {
				cy.listPostAndCheck(publishedPost);
			})		
		})
	})

	context('Given admin accesses pages list option', () => {
		beforeEach(()=>{
			cy.listPages()
			cy.newPage()
		})		

		context('When admin creates new published page', () => {
			beforeEach(() => {
				cy.createPage(version, publishedPage, desc)
				cy.publishPage(version)
			})
			it('Then admin sees new published page in list', () => {
				cy.listPagesAndCheck(publishedPage);
			})		
		})
	})

	context('Given admin access posts list option for editing', () => {
		beforeEach(()=>{
			cy.listPost()
			cy.filterPublishedPost()
			cy.contains(publishedPost).click()
			cy.screenshot()
		})		

		context('When admin edits title of a published post', () => {
			beforeEach(() => {
				cy.editPost(version, '-edited', desc)
			})
  
			it('Then admin sees new title checking published post', () => {
				cy.visit('/cypress-test-post-published')
				cy.contains('h1','-edited').should('be.visible') 
				cy.screenshot()
			})
		})
	})

	context('Given admin access pages list option for editing', () => {
		beforeEach(()=>{
			cy.listPages()
			cy.filterPublishedPages()
			cy.contains(publishedPage).click()
			cy.screenshot()
		})		

		context('When admin edits title of a published page', () => {
			beforeEach(() => {
				cy.editPage(version, '-edited', desc)
			})
  
			it('Then admin sees new title checking published page', () => {
				cy.visit('/cypress-test-page-published')
				cy.contains(publishedPage + '-edited')
				cy.screenshot()
			})
		})
	})

	context('Given admin accesses post list option for delete', () => {
		beforeEach(()=>{
			cy.listPages()
		})		
		
		context('When admin delete a published post', () => {
			beforeEach(()=>{
				cy.filterPublishedPost()
				cy.screenshot()
				cy.deletePost(version, publishedPost)
			})		
	
			it('Then admin sees an empty published posts list', () => {
				cy.filterPublishedPost()
				cy.contains(publishedPost).should('not.exist')
			})
		})

		afterEach(()=>{
			cy.screenshot()
		})
	})		

	context('Given admin accesses pages list option for delete', () => {
		beforeEach(()=>{
			cy.listPages()
		})		
		
		context('When admin delete a published page', () => {
			beforeEach(()=>{
				cy.filterPublishedPages()
				cy.screenshot()
				cy.deletePage(version, publishedPage)
			})		
	
			it('Then admin sees an empty published pages list', () => {
				cy.filterPublishedPages()
				cy.contains(publishedPage).should('not.exist')
			})
		})

		afterEach(()=>{
			cy.screenshot()
		})
	})		
})

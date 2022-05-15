describe('ghost admin post', () => {

	const version = Cypress.env('ghost-version')
	const site = Cypress.env('site')
	const name = Cypress.env('name')	
	const email = Cypress.env('email')
	const password = Cypress.env('password')
	const draft = Cypress.env('draftPost')
	const scheduled = Cypress.env('scheduledPost')
	const published = Cypress.env('publishedPost')
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

		context('When admin creates new post', () => {
			beforeEach(() => {
				cy.createPost(version, draft, desc)
			})  
			it('Then admin sees new draft post in list', () => {
				cy.listPostAndCheck(draft);
			})
		})

		context('When admin creates new schedule post', () => {
			beforeEach(() => {
				cy.createPost(version, scheduled, desc)
				cy.schedulePost(version)
			})
			it('Then admin sees new schedule post in list', () => {
				cy.listPostAndCheck(scheduled);
			})	
		})

		context('When admin creates new published post', () => {
			beforeEach(() => {
				cy.createPost(version, published, desc)
				cy.publishPost(version)
			})
			it('Then admin sees new published post in list', () => {
				cy.listPostAndCheck(published);
			})		
		})
	})

        context('Given admin accesses post list option for filtering', () => {
		beforeEach(()=>{
			cy.listPost()
		})		

		context('When admin filters by draft type', () => {
			it('Then admin only sees draft posts in list', () => {
				cy.filterDraftPost()
			})
		})

		context('When admin filters by scheduled type', () => {
			it('Then admin only sees scheduled post in list', () => {
				cy.filterScheduledPost()
			})
		})

		context('When admin filters by published type', () => {
			it('Then admin only sees published post in list', () => {
				cy.filterPublishedPost()
			})
		})

		context('When admin filters by oldest sort', () => {
			it('Then admin sees post ordered ascendent by published', () => {
				cy.filterOldestPost()
			})
		})

		context('When admin filters by recently updated sort', () => {
			it('Then admin sees post ordered descendent by updated', () => {
				cy.filterRecentrlyUpdatedPost()
			})
		})

		afterEach(()=>{
			cy.screenshot()
		})
	})

	context('Given admin access posts list option for editing', () => {
		beforeEach(()=>{
			cy.listPost()
			cy.filterPublishedPost()
			cy.contains(published).click()
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
	
		context('When admin adds tag to published post', () => {
			beforeEach(() => {
				cy.editTagPost(version, 'TestPostTag')
			})

			it('Then admin see new tag in post list filters', () => {
				cy.visit('/ghost/#/posts?tag=testposttag')
				cy.contains('TestPostTag')
				cy.screenshot()
			})
		})
	})

	context('Given admin accesses posts list option for delete', () => {
		beforeEach(()=>{
			cy.listPost()
		})		
		
		context('When admin delete a draft post', () => {
			beforeEach(()=>{
				cy.filterDraftPost()
				cy.screenshot()
				cy.deletePost(version, draft)
			})		

			it('Then admin sees an empty draft posts list', () => {
				cy.filterDraftPost()
				cy.contains(draft).should('not.exist')
			})
		})

		context('When admin delete a scheduled post', () => {
			beforeEach(()=>{
				cy.filterScheduledPost()
				cy.screenshot()
				cy.deletePost(version, scheduled)
			})		

			it('Then admin sees an empty scheduled posts list', () => {
				cy.filterScheduledPost()
				cy.contains(scheduled).should('not.exist')
			})
		})

		context('When admin delete a published post', () => {
			beforeEach(()=>{
				cy.filterPublishedPost()
				cy.screenshot()
				cy.deletePost(version, published)
			})		
	
			it('Then admin sees an empty published posts list', () => {
				cy.filterPublishedPost()
				cy.contains(published).should('not.exist')
			})
		})

		afterEach(()=>{
			cy.screenshot()
		})
	})
			
})

describe('ghost admin pages', () => {

	const version = Cypress.env('ghost-version')
	const email = Cypress.env('email')
	const password = Cypress.env('password')
	const draft = Cypress.env('draftPage')
	const scheduled = Cypress.env('scheduledPage')
	const published = Cypress.env('publishedPage')
	const featured = Cypress.env('featuredPage')
	const desc =  Cypress.env('lorem')

	beforeEach(()=>{
		cy.login(email, password)
		cy.wait(1000)
    })

	afterEach(()=>{ 
 		cy.wait(3000)
		cy.logout() 
	})  

	context('Given admin accesses pages list option', () => {
		beforeEach(()=>{
			cy.listPages()
			cy.newPage()
		})		

		context('When admin creates new page', () => {
			beforeEach(() => {
				cy.createPage(version, draft, desc)
			})  
			it('Then admin sees new draft page in list', () => {
				cy.listPagesAndCheck(draft);
			})
		})

		context('When admin creates new schedule page', () => {
			beforeEach(() => {
				cy.createPage(version, scheduled, desc)
				cy.schedulePage(version)
			})
			it('Then admin sees new schedule page in list', () => {
				cy.listPagesAndCheck(scheduled);
			})	
		})

		context('When admin creates new published page', () => {
			beforeEach(() => {
				cy.createPage(version, published, desc)
				cy.publishPage(version)
			})
			it('Then admin sees new published page in list', () => {
				cy.listPagesAndCheck(published);
			})		
		})
		/*
		context('When admin creates new featured page', () => {
			beforeEach(() => {
				cy.createPage(published, desc)
				cy.featurePage()
			})
			it('Then admin sees new featured page in list', () => {
				cy.listPagesAndCheck(published);
			})	
		})
		//*/
	})

	context('Given admin accesses pages list option for filtering', () => {
		beforeEach(()=>{
			cy.listPages()
			// cy.newPage()
		})		

		context('When admin filters by draft type', () => {
			it('Then admin only sees draft pages in list', () => {
				cy.filterDraftPages()
			})
		})

		context('When admin filters by scheduled type', () => {
			it('Then admin only sees scheduled pages in list', () => {
				cy.filterScheduledPages()
			})
		})

		context('When admin filters by published type', () => {
			it('Then admin only sees published pages in list', () => {
				cy.filterPublishedPages()
			})
		})

		context('When admin filters by oldest sort', () => {
			it('Then admin sees pages ordered ascendent by published', () => {
				cy.filterOldestPages()
			})
		})

		context('When admin filters by recently updated sort', () => {
			it('Then admin sees pages ordered descendent by updated', () => {
				cy.filterRecentrlyUpdatedPages()
			})
		})

		afterEach(()=>{
			cy.screenshot()
		})
	})

	context('Given admin access pages list option for editing', () => {
		beforeEach(()=>{
			cy.listPages()
			cy.filterPublishedPages()
			cy.contains(published).click()
			cy.screenshot()
		})		

		context('When admin edits title of a published page', () => {
			beforeEach(() => {
				cy.editPage(version, '-edited', desc)
			})
  
			it('Then admin sees new title checking published page', () => {
				cy.visit('/cypress-test-page-published')
				cy.contains(published + '-edited')
				cy.screenshot()
			})
		})
/*
		context('When admin edits excerpt of a published page', () => {
			beforeEach(() => {
				cy.editPageExcerpt(version, published +'-excerpt')
			})
  
			it('Then admin sees new excerpt checking published page', () => {
				// cy.listPages()
				cy.visit('/cypress-test-page-published')
				cy.contains(published +'-excerpt')
				cy.screenshot()
			})
		})		
//*/
		context('When admin adds tag to published page', () => {
			beforeEach(() => {
				cy.editTagPage(version, 'TestPageTag')
			})

			it('Then admin see new tag in pages list filters', () => {
				cy.visit('/ghost/#/pages?tag=testpagetag')
				cy.contains('TestPageTag')
				cy.screenshot()
			})
		})
	})

	context('Given admin accesses ghost public site', () => {
		context('When admin checks published page', () => {
			beforeEach(()=>{
				// cy.get('a[href="#/"]').click()
				cy.screenshot()
			})		

			it('Then admin sees content of published page', () => {
				cy.visit('/cypress-test-page-published')
				cy.contains(published)
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
		
		context('When admin delete a draft page', () => {
			beforeEach(()=>{
				cy.filterDraftPages()
				cy.screenshot()
				cy.deletePage(version, draft)
			})		

			it('Then admin sees an empty draft pages list', () => {
				cy.filterDraftPages()
				cy.contains(draft).should('not.exist')
			})
		})

		context('When admin delete a scheduled page', () => {
			beforeEach(()=>{
				cy.filterScheduledPages()
				cy.screenshot()
				cy.deletePage(version, scheduled)
			})		

			it('Then admin sees an empty scheduled pages list', () => {
				cy.filterScheduledPages()
				cy.contains(scheduled).should('not.exist')
			})
		})

		context('When admin delete a published page', () => {
			beforeEach(()=>{
				cy.filterPublishedPages()
				cy.screenshot()
				cy.deletePage(version, published)
			})		
	
			it('Then admin sees an empty published pages list', () => {
				cy.filterPublishedPages()
				cy.contains(published).should('not.exist')
			})
		})

		afterEach(()=>{
			cy.screenshot()
		})
	})		
})

describe('Pruebas de Admin Post',()=>{
	beforeEach(()=>{
    		cy.visit('http://localhost:2368/ghost/#/signin')
			cy.get('#ember7').type('lucia.neme@gmail.com')
			cy.get('#ember9').type('Aforero.2o1o')
			cy.get('#ember11 > span').click()
			cy.wait(2000)
    	})

    	it('admin - list pages',()=>{
		cy.visit('http://localhost:2368/ghost/#/pages/')
	})	

    	it('admin - create page',()=>{
		cy.visit('http://localhost:2368/ghost/#/editor/page')
		cy.wait(2000)
		cy.get('textarea').type('Creacion pagina') 
		cy.get('.koenig-editor__editor-wrapper').type('Prueba crear una pagina{enter}')
		cy.get('.gh-editor-back-button span').click()
		cy.wait(2000)
	})	

	

})
describe('Pruebas del login',()=>{
	beforeEach(()=>{
    		cy.visit('http://localhost:2368/ghost/#/signin')
			cy.get('#ember7').type('lucia.neme@gmail.com')
			cy.get('#ember9').type('Aforero.2o1o')
			cy.get('#ember11 > span').click()
			cy.wait(2000)
    	})	

	it('Listar tags',()=>{
		cy.visit('http://localhost:2368/ghost/#/tags')
		cy.wait(2000)
	})

    	it('Crear tag',()=>{
		cy.visit('http://localhost:2368/ghost/#/tags/new')
	        cy.get('#tag-name').type('Pruebas53')
	        cy.get('#tag-description').type('Tag de prueba')
		cy.contains('Save').click()
		cy.visit('http://localhost:2368/ghost/#/tags')
		//cy.contains('Prueba53').should('be.visible')
	})

	it('Actualizar tag',()=>{
		cy.visit('http://localhost:2368/ghost/#/tags')
		cy.get('.gh-tag-list-name').last().click()
	        cy.get('#tag-name').type(' - Actualiza')
		cy.get('.input-color > .gh-input').type('6E2C00')
	        cy.get('#tag-description').type(' - Actualizacion tag')
		cy.contains('Save').click()
		cy.visit('http://localhost:2368/ghost/#/tags')
	})

	it('Eliminar tag',()=>{
		cy.visit('http://localhost:2368/ghost/#/tags')
		cy.get('.gh-tag-list-name').last().click()
		cy.contains('Delete tag').click()
		cy.wait(2000)
		cy.get('.modal-footer .gh-btn:not(:first-child)').click()
		//cy.visit('http://localhost:2368/ghost/#/tags')
	})
	
})
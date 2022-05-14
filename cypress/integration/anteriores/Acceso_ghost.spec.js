describe('Pruebas del login',()=>{
	it('Accede a la página principal',()=>{
		cy.visit('http://localhost:2368/ghost/')
		cy.wait(2000)
		cy.contains('Sign in to Pruebas@Automatizadas.').should('be.visible')
		cy.screenshot()
	})

	it('Validar campos vacios - usuario',()=>{
		cy.visit('http://localhost:2368/ghost/')
		cy.get('#ember9').type('Aforero.2o1o')
		cy.get('#ember11 > span').click()
		cy.wait(2000)
		cy.contains('.main-error','Please fill out the form to sign in.').should('be.visible')
		cy.screenshot()
	})

	it('Validar campos vacios - password',()=>{
		cy.visit('http://localhost:2368/ghost/')
		cy.get('#ember7').type('lucia.neme')
		cy.get('#ember11 > span').click()
		cy.wait(2000)
		cy.contains('.main-error','Please fill out the form to sign in.').should('be.visible')
		cy.screenshot()
		cy.wait(2000)
	})

	it('Validar formato incorrecto de campos - usuario',()=>{
		cy.visit('http://localhost:2368/ghost/')
		cy.get('#ember7').type('lucia.neme')
		cy.get('#ember9').type('Aforero.2o1o')
		cy.get('#ember11 > span').click()
		cy.wait(2000)
		cy.contains('.main-error','Please fill out the form to sign in.').should('be.visible')
		cy.screenshot()
		cy.wait(2000)
	})

	it('Validar usuario no existente',()=>{
		cy.visit('http://localhost:2368/ghost/')
		cy.get('#ember7').type('aforero2@uniminuto.edu')
		cy.get('#ember9').type('Prueba123')
		cy.get('#ember11 > span').click()
		cy.wait(2000)
		cy.contains('.main-error','There is no user with that email address.').should('be.visible')
		cy.screenshot()
		cy.wait(2000)
	})

	it('Validar Contraseña errada',()=>{
		cy.visit('http://localhost:2368/ghost/')
		cy.get('#ember7').type('lucia.neme@gmail.com')
		cy.get('#ember9').type('Prueba123')
		cy.get('#ember11 > span').click()
		cy.wait(2000)
		cy.contains('.main-error','Your password is incorrect.').should('be.visible')
		cy.screenshot()
		cy.wait(2000)
	})

	it('Debe loguearse e ingresar al sitio',()=>{
		cy.visit('http://localhost:2368/ghost/')
		cy.get('#ember7').type('lucia.neme@gmail.com')
		cy.get('#ember9').type('Aforero.2o1o')
		cy.get('#ember11 > span').click()
		cy.wait(2000)
		cy.contains('.gh-canvas-title','Dashboard').should('be.visible')
		cy.wait(3000)
        cy.visit('http://localhost:2368/ghost/#/signout/')
		cy.screenshot()
	})
	
})

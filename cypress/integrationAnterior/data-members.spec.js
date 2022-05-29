import { Data } from "../support/Data.js";

describe('ghost admin - data strategies e2e tests', () => {

	const version = Cypress.env('ghost-version')
	const site = Cypress.env('site')
	const name = Cypress.env('name')
	const email = Cypress.env('email')
	const password = Cypress.env('password')

	let member = undefined
	const data = new Data();
	const aprioriDataPool = require('../fixtures/ghost-data.json');
	const pseudoRandomDataPool = data.getPseudoRandomDataPool(Cypress.env('urlPagesAPI'));

	before(()=>{
		cy.createAdmin(version, site, name, email, password)
    })

	context('Given admin accesses members option', () => {
		beforeEach(()=>{
			cy.login(email, password)
			cy.listMembers()
		})

		context('When admin tries to create new member with apriori data pool strategy', () => {
			beforeEach(() => {
				member = data.getRandomDataPool(aprioriDataPool)
				cy.newMember()
			}) 

			it('and input spaces, then admin sees error message and member was not created', () => {
				cy.createMember(' ', ' ', ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				// cy.clickLeaveButton()
			})

			it('and input name-border-1, then admin sees error message and member was not created', () => {
				cy.createMember(member.text190, ' ', ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})
			it('and input name-border, then admin sees error message and member was not created', () => {
				cy.createMember(member.text191, ' ', ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})
			it('and input name-border+1, then admin sees error message and member was not created', () => {
				cy.createMember(member.text192, ' ', ' ')
				cy.checkMemberEmailError()
				cy.checkMemberNameError()
				cy.listMembers()
				cy.clickLeaveButton()
			})

			afterEach(() => {
				cy.contains(member.email).should('not.exist')
			})
		})

		context('When admin tries to create new member with pseudo random data pool strategy', () => {
			beforeEach(() => {
				member = data.getRandomDataPool(pseudoRandomDataPool)
				cy.newMember()
			}) 
	
			it('and input not valid email border-1, then admin sees error message and member was not created', () => {
				cy.createMember(' ', member.text190, ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})
			it('and input not valid email border, then admin sees error message and member was not created', () => {
				cy.createMember(' ', member.text191, ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})
			it('and input not valid email border+1, then admin sees error message and member was not created', () => {
				cy.createMember(' ', member.text192, ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})

			it('and input not valid email border+X, then admin sees error message and member was not created', () => {
				cy.createMember(' ', member.text191 + member.email, ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})

			it('and input name border-1 and not valid email border+X, then admin sees error message and member was not created', () => {
				cy.createMember(member.text190, member.text191 + member.email, ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})
			it('and input name border and not valid email border+X, then admin sees error message and member was not created', () => {
				cy.createMember(member.text191, member.text191 + member.email, ' ')
				cy.checkMemberEmailError()
				cy.listMembers()
				cy.clickLeaveButton()
			})
			it('and input not valid name border+1 and not valid email border+X, then admin sees error message and member was not created', () => {
				cy.createMember(member.text192, member.text191 + member.email, ' ')
				cy.checkMemberEmailError()
				cy.checkMemberNameError()
				cy.listMembers()
				cy.clickLeaveButton()
			})
			it('and input not valid name border+1 and valid email, then admin sees error message and member was not created', () => {
				cy.createMember(member.text192, member.email, ' ')
				cy.checkMemberNameError()
				cy.listMembers()
				cy.clickLeaveButton()
			})

			afterEach(() => {
				cy.contains(member.email).should('not.exist')
			})
		})

		context('When admin creates new member with pseudo random data pool strategy', () => {
			beforeEach(() => {
				member = data.getRandomDataPool(pseudoRandomDataPool)
				cy.newMember()
			}) 

			it('and input name-border-1, then admin sees new member created', () => {
				cy.log(member.text190 +' / '+ member.email)
				cy.createMember(member.text190, member.email, ' ')
				cy.listMembers()
			})
			it('and input name-border, then admin sees new member created', () => {
				cy.createMember(member.text191, member.email, ' ')
				cy.listMembers()
			})
			it('and input name border-1, email and note, then admin sees new member created', () => {
				cy.createMember(member.text190, member.email, member.text192)
				cy.listMembers()
			})
			it('and input name border, email and note, then admin sees new member created', () => {
				cy.createMember(member.text191, member.email, member.text192+' '+member.text192)
				cy.listMembers()
			})

			afterEach(() => {
				cy.contains(member.email).should('exist')
			})
		})

		afterEach(()=>{ 
			cy.logout() 
		})
	
	})

})

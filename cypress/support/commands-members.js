
Cypress.Commands.add('listMembers', () => {
    cy.visit('/ghost/#/members/')
    cy.url().should('include', 'members')
    cy.wait(1000)
    // cy.screenshot()
})

Cypress.Commands.add('newMember', () => {
    cy.contains('New member').click()
    cy.url().should('include', 'members/new')
    // cy.screenshot()	
})

Cypress.Commands.add('createMember', (name, email, note) => {
    cy.log('member: '+ name +', '+ email +', '+ note)
    cy.get('input[id="member-name"]').type(name, {force: true})
    cy.wait(1000)
    cy.get('input[id="member-email"]').type(email)
    cy.wait(1000)
    cy.get('textarea[id="member-note"]').type(note)
    cy.wait(1000)
    cy.contains('Save').click()
    cy.wait(1000)
    // cy.screenshot()
})

Cypress.Commands.add('checkMemberEmailError', () => {
    cy.get('input[id="member-email"]').scrollIntoView().focus()
    cy.get('p.response')
    // cy.screenshot()
})

Cypress.Commands.add('checkMemberNameError', () => {
    cy.get('input[id="member-name"]').scrollIntoView().focus()
    cy.get('p.response')
    // cy.screenshot()
})

Cypress.Commands.add('deleteMember', (email) => {
    cy.get('a.ember-view.gh-list-data').children().contains(email).click()
    cy.get('button[class="gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"]').click()
    cy.contains('Delete member').click()
    cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click() 
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').children().contains('Delete').click()
    cy.wait(1000)
})



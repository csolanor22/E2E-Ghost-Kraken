Cypress.Commands.add('createAdmin', (version, site, name, email, password) => {
    cy.visit('/ghost/')
    cy.wait(1000)
    cy.url().then(($url) => { // cy.url().should('include', 'signin')
        cy.log('url: '+ $url)
        if ($url.includes('setup')) {
            // cy.url().should('include', 'setup/')
            if (version == '3.41.1')
                cy.visit('/ghost/#/setup/two')
            else // 4.41.3
                cy.visit('/ghost')
    
            cy.wait(1000)    
            cy.get('input[id="blog-title"]').clear().type(site)
            cy.get('input[id="name"]').clear().type(name)
            cy.get('input[id="email"]').clear().type(email)
            cy.get('input[id="password"]').clear().type(password)
            cy.get('button[type="submit"]').click()
    
            cy.wait(1000)
            if (version == '3.41.1') {
                cy.url().should('include', 'setup/three')
                cy.get('button[class="gh-flow-skip"]').click()
                cy.url().should('include', 'site')
            }
            else {
                cy.url().should('include', 'setup/done')
                cy.visit('/ghost/#/dashboard')        
            }
        
            cy.wait(1000)
            cy.visit('/ghost/#/signout/')          
        } 
    })
})

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/ghost')
    cy.url().should('include', 'signin')

    cy.get('input[name="identification"]').clear().type(username)
    cy.get('input[name="password"]').clear().type(password)
    cy.get('button[type="submit"]').click()
    cy.wait(1000)
	// cy.screenshot()
})

Cypress.Commands.add('logout', () => {
    cy.wait(1000)
    cy.visit('/ghost/#/signout/')
    // cy.url().should('include', 'signin')
})

Cypress.Commands.add('site', () => {
    cy.get('a[href="#/site/"]').click()
    cy.url().should('include', 'site')
    cy.wait(1000)
})

Cypress.Commands.add('listPages', () => {
    // cy.get('a[href="#/pages/"]').click()
    cy.visit('/ghost/#/pages/')
    // cy.url().should('include', 'pages')
    cy.wait(1000)
    cy.screenshot()
})

Cypress.Commands.add('listPagesAndCheck', (page) => {
    cy.wait(1000)
    cy.get('a[href="#/pages/"]').click()
    cy.url().should('include', 'pages')
    cy.contains(page)
    cy.screenshot()
})

Cypress.Commands.add('newPage', () => {
    // cy.get('a[href="#/editor/page/"]').click()
    cy.contains('New page').click()
    cy.url().should('include', 'editor/page')
    cy.screenshot()	
})

Cypress.Commands.add('createPage', (version, title, description) => {
    if (version == '4.41.3')
        cy.get('textarea[placeholder="Page title"]').type(title)
    else
        cy.get('textarea[placeholder="Page Title"]').type(title)
    cy.get('.koenig-editor__editor-wrapper').type(description +'{enter}')
    cy.wait(2000)
    cy.screenshot()
})

Cypress.Commands.add('editPage', (version, title, description) => {
    if (version == '4.41.3')
        cy.get('textarea[placeholder="Page title"]').type(title)
    else
        cy.get('textarea[placeholder="Page Title"]').type(title)
    cy.get('.koenig-editor__editor-wrapper').type(description +'{enter}')
    cy.screenshot()

    cy.contains('Update').click()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
	    cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    cy.wait(2000)
    cy.screenshot()		
})

Cypress.Commands.add('editPageExcerpt', (version, excerpt) => {
    cy.get('button.post-settings').click()
    // cy.get('.settings-menu-toggle').click()
    cy.get('textarea[id="custom-excerpt"]').type(excerpt +'{enter}')
    cy.screenshot()
    // cy.get('.settings-menu-toggle').click()
    cy.get('button.close.settings-menu-header-action').click()

    cy.contains('Update').click()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
	    cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    // cy.get('.gh-publishmenu-button').click()
    cy.wait(2000)
    cy.screenshot()
})

Cypress.Commands.add('editTagPageByType', (version, title, tag, type) => {
    cy.contains(title).click()
    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click()
    else
        cy.get('button.post-settings').click()

    cy.get('#tag-input').type(tag +'{enter}')
    
    cy.wait(2000)
    cy.screenshot()
  
    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click()
    else
        cy.get('button.close.settings-menu-header-action').click()

    if(type == 'published') {
        cy.clickUpdate(version)
    }
    else if(type == 'draft'){
        cy.clickPreview()
    }        
})

Cypress.Commands.add('clickUpdate', (version) => {
    cy.contains('Update').click()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    cy.wait(2000)
    cy.screenshot()		
})

Cypress.Commands.add('clickPreview', () => {
    cy.get('button.gh-btn.gh-editor-preview-trigger').click() //Preview 
    cy.wait(1000)
    cy.get('button.gh-editor-back-button').click()
    cy.wait(1000)
    // cy.screenshot()		
})

Cypress.Commands.add('deletePage', (version, page) => {
    cy.contains(page).click() 
    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click() 
    else
        cy.get('button.post-settings').click()
    cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click() 
    cy.screenshot()
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').children().contains('Delete').click()
    cy.wait(2000)
    // cy.get('.modal-footer .gh-btn:not(:first-child)').click()
})

Cypress.Commands.add('schedulePage', (version) => {
    cy.contains('Publish').click()
    cy.get(':nth-child(2) > .gh-publishmenu-radio-button').click()
    cy.get('.gh-publishmenu-footer .gh-btn-icon span').click()
    // cy.get('.modal-footer .gh-btn:not(:first-child)').click()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
        cy.get('button.gh-btn.gh-btn-outline.gh-btn-link').click()
    cy.wait(2000)
})

Cypress.Commands.add('publishPage', (version) => {
    cy.contains('Publish').click()
    cy.screenshot()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    cy.wait(2000)
})

Cypress.Commands.add('featurePage', (version, excerpt) => {
    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click() 
    else
        cy.get('button.post-settings').click()

    // Timed out retrying after 4050ms: cy.check() failed because this element is not visible:
    // <input class="gh-input post-settings-featured" type="checkbox">
    // This element <input.gh-input.post-settings-featured> is not visible because it has CSS property: display: none 
    cy.get('input[type="checkbox"].gh-input.post-settings-featured').check() // ({ force: true}) 
    cy.screenshot()

    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click() 
    else
        cy.get('button.post-settings').click()
    
    cy.contains('Update').click()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
	    cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    cy.wait(2000)
    cy.screenshot()
})

Cypress.Commands.add('filterDraftPages', () => {
    cy.visit('/ghost/#/pages?type=draft')
    cy.url().should('include', 'draft')
    cy.wait(2000)
})

Cypress.Commands.add('filterScheduledPages', () => {
    cy.visit('/ghost/#/pages?type=scheduled')
    cy.url().should('include', 'scheduled')
    cy.wait(2000)
})

Cypress.Commands.add('filterPublishedPages', () => {
    cy.visit('/ghost/#/pages?type=published')
    cy.url().should('include', 'published')
    cy.wait(2000)
})

Cypress.Commands.add('filterFeaturedPages', () => {
    cy.visit('/ghost/#/pages?type=featured')
    cy.url().should('include', 'featured')
    cy.wait(2000)
})

Cypress.Commands.add('filterNewestPages', () => {
    cy.visit('ghost/#/pages"]').click()
    cy.url().should('include', 'pages')
    cy.wait(2000)
})

Cypress.Commands.add('filterOldestPages', () => {
    cy.visit('/ghost/#/pages?order=published_at%20asc')
    cy.url().should('include', 'order=published_at')
    cy.wait(2000)
})

Cypress.Commands.add('filterRecentrlyUpdatedPages', () => {
    cy.visit('/ghost/#/pages?order=updated_at%20desc')
    cy.url().should('include', 'order=updated_at')
    cy.wait(2000)
})

Cypress.Commands.add('visitTags', () => {
})

//----------------------------------------------------------

Cypress.Commands.add('listPost', () => {
    cy.visit('/ghost/#/posts/')
    cy.url().should('include', 'posts')
    cy.wait(2000)
    cy.screenshot()
})

Cypress.Commands.add('newPost', () => {
    cy.wait(2000)
    cy.contains('New post').click()
    cy.url().should('include', 'editor/post')
    cy.screenshot()	
})

Cypress.Commands.add('createPost', (version, title, description) => {
    if (version == '4.41.3')
        cy.get('textarea[placeholder="Post title"]').type(title)
    else
        cy.get('textarea[placeholder="Post Title"]').type(title)
    cy.get('.koenig-editor__editor-wrapper').type(description +'{enter}')
    cy.wait(2000)
    cy.screenshot()
})

Cypress.Commands.add('listPostAndCheck', (post) => {
    cy.wait(1000)
    cy.visit('/ghost/#/posts/')
    cy.url().should('include', 'posts')
    cy.contains(post)
    cy.screenshot()
})

Cypress.Commands.add('schedulePost', (version) => {
    cy.contains('Publish').click()
    cy.get(':nth-child(2) > .gh-publishmenu-radio-button').click()
    cy.get('.gh-publishmenu-footer .gh-btn-icon span').click()
    // cy.get('.modal-footer .gh-btn:not(:first-child)').click()
    if (version == '4.41.3')
        //cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
        cy.get('.modal-footer .gh-btn:not(:first-child)').click()
    else
        cy.get('button.gh-btn.gh-btn-outline.gh-btn-link').click()
    cy.wait(2000)
})

Cypress.Commands.add('publishPost', (version) => {
    cy.wait(2000)
    cy.contains('Publish').click()
    cy.screenshot()
    cy.wait(2000)
    if (version == '4.41.3'){
	    cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
	    cy.get('.modal-footer .gh-btn:not(:first-child)').click()	
    }
    else{
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
        //cy.get('.footer .gh-btn::not(.__mobiledoc-editor).click()	
    }
    cy.wait(1000)
})

Cypress.Commands.add('filterDraftPost', () => {
    cy.visit('/ghost/#/posts?type=draft')
    cy.url().should('include', 'draft')
    cy.wait(2000)
})

Cypress.Commands.add('filterScheduledPost', () => {
    cy.visit('/ghost/#/posts?type=scheduled')
    cy.url().should('include', 'scheduled')
    cy.wait(2000)
})

Cypress.Commands.add('filterPublishedPost', () => {
    cy.visit('/ghost/#/posts?type=published')
    cy.url().should('include', 'published')
    cy.wait(2000)
})

Cypress.Commands.add('filterOldestPost', () => {
    cy.visit('/ghost/#/posts?order=published_at%20asc')
    cy.url().should('include', 'order=published_at')
    cy.wait(2000)
})

Cypress.Commands.add('filterRecentrlyUpdatedPost', () => {
    cy.visit('/ghost/#/posts?order=updated_at%20desc')
    cy.url().should('include', 'order=updated_at')
    cy.wait(2000)
})

Cypress.Commands.add('editPost', (version, title, description) => {
    if (version == '4.41.3')
        cy.get('textarea[placeholder="Post title"]').type(title)
    else
        cy.get('textarea[placeholder="Post Title"]').type(title)
    cy.get('.koenig-editor__editor-wrapper').type(description +'{enter}')
    cy.screenshot()

    cy.contains('Update').click()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
	    cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    cy.wait(2000)
	cy.screenshot()		
})

Cypress.Commands.add('editTagPost', (version, tag) => {
    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click()
    else
        cy.get('button.post-settings').click()
    // cy.get('.settings-menu-toggle').click()

    cy.get('#tag-input').type(tag +'{enter}')
    cy.screenshot()
    // cy.get('.settings-menu-toggle').click()
  
    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click()
        // cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click()
    else
        cy.get('button.close.settings-menu-header-action').click()

    cy.contains('Update').click()
    if (version == '4.41.3')
        cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    else
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
    // cy.get('.gh-publishmenu-button').click()
    cy.wait(2000)
    cy.screenshot()		
})

Cypress.Commands.add('deletePost', (version, post) => {
    cy.contains(post).click() 
    if (version == '4.41.3')
        cy.get('button[title="Settings"]').click() 
    else
        cy.get('button.post-settings').click()
    cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click() 
    cy.screenshot()
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').children().contains('Delete').click()
    cy.wait(2000)
    // cy.get('.modal-footer .gh-btn:not(:first-child)').click()
})


Cypress.Commands.add('listTags', () => {
    cy.visit('/ghost/#/tags/')
    // cy.get('a[href="#/tags/"]').click()
    // cy.url().should('include', 'tags')
    cy.wait(1000)
    cy.screenshot()
})

Cypress.Commands.add('listTagsAndCheck', (tag) => {
    cy.wait(1000)
    cy.visit('/ghost/#/tags/')
    cy.url().should('include', 'tags')
    cy.contains(tag)
    cy.screenshot()
})

Cypress.Commands.add('newTag', () => {
    cy.contains('New tag').click()
    cy.url().should('include', 'tags/new')
    cy.wait(1000)
    cy.screenshot()	
})

Cypress.Commands.add('createTag', (version, name, desc) => {
    // if (version == '4.41.3')
    // cy.log('tag name: '+ name)
    cy.get('input[id="tag-name"]').type(name)
    cy.wait(1000)
    cy.get('textarea[id="tag-description"]').type(desc)
    cy.wait(1000)
    cy.contains('Save').click()
    cy.wait(2000)
    cy.screenshot()
})

Cypress.Commands.add('clickLeaveButton', () => {
    cy.contains('Leave').click()
    cy.wait(2000)
})

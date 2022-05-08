Feature: Ingresar a la aplicación 

@user1 @web
Scenario: Login exitoso y Logout
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    Then I wait for 3 seconds
    And I click on User menu
    And I wait for 5 seconds
    And I click Sing Out
    And I wait for 3 seconds

@user2 @web
Scenario: Login errorneo por password incorrecto
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD2>"
    And I click Sign in
    Then I wait for 3 seconds

@user3 @web
Scenario: Login errorneo por username inexistente en DB
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME2>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD2>"
    And I click Sign in
    Then I wait for 3 seconds

# Feature 2: funcionalidad de administración de post

@user4 @web
Scenario: Listar post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    And I wait for 2 seconds
    And I click in Posts
    Then I wait for 3 seconds
    And I click on User menu
    And I wait for 1 seconds
    And I click Sing Out
    And I wait for 3 seconds

@user5 @web
Scenario: Crear post sin publicar
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    And I wait for 2 seconds
    And I click in Posts
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click link to return to Posts
    Then I wait for 3 seconds
    And I click on User menu
    And I wait for 1 seconds
    And I click Sing Out
    And I wait for 3 seconds
    And I wait for 3 seconds

@user6 @web
Scenario: Crear post y publicar
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    And I wait for 2 seconds
    And I click in Posts
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click span for publish
    And I wait for 2 seconds
    And I click on set it live now
    And I click Publish Button
    And I wait for 2 seconds
    And I click link to return to Posts
    Then I wait for 3 seconds
    And I click on User menu
    And I wait for 1 seconds
    And I click Sing Out
    And I wait for 3 seconds

@user7 @web
Scenario: Crear post y publicar luego de 2 minutos 
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    And I wait for 2 seconds
    And I click in Posts
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click span for publish
    And I wait for 2 seconds
    And I click on Schedule it for later
    And I wait for 2 seconds
    And I click on Schedule it for later
    And I set the time for publish 2 minutes later
    And I click Publish Button
    And I wait for 2 seconds
    And I click link to return to Posts
    And I wait for 3 seconds
    And I click on User menu
    And I wait for 1 seconds
    And I click Sing Out
    And I wait for 30 seconds
    And I wait for 30 seconds
    And I wait for 30 seconds
    And I wait for 30 seconds
    And I navigate to page "http://localhost:2368"
    And I wait for 2 seconds
    Then I search new post with title "$name_1"

@user8 @web
Scenario: Update post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    And I wait for 2 seconds
    And I click in Posts
    And I wait for 2 seconds
    And I select the first post at list
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click span for publish
    And I wait for 2 seconds
    And I click on update button 
    And I wait for 2 seconds
    And I click link to return to Posts
    And I wait for 3 seconds
    And I click on User menu
    And I wait for 1 seconds
    And I click Sing Out
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368"
    And I wait for 2 seconds
    Then I search new post with title "$$name_1"

@user9 @web
Scenario: Crear post y delete post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    And I wait for 2 seconds
    And I click in Posts
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click link to return to Posts
    And I wait for 3 seconds
    And I wait for 2 seconds
    And I select the first post at list
    And I wait for 2 seconds
    And I click on delete post
    And I wait for 2 seconds
    And I click on confirm delete post
    And I wait for 2 seconds
    And I click on User menu
    And I wait for 1 seconds
    And I click Sing Out
    And I wait for 2 seconds
    And I navigate to page "http://localhost:2368"
    Then I wait for 2 seconds

@user10 @web
Scenario: Crear post, publicar y quitar publicación
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in
    And I wait for 2 seconds
    And I click in Posts
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click span for publish
    And I wait for 2 seconds
    And I click on set it live now
    And I wait for 2 seconds
    And I click Publish Button
    And I wait for 2 seconds
    And I click link to return to Posts
    And I wait for 2 seconds
    And I select published posts
    And I wait for 3 seconds
    And I select the first post at list
    And I wait for 2 seconds
    And I click span for publish
    And I wait for 2 seconds
    And I select unpublished
    And I wait for 2 seconds
    And I click on update button
    And I wait for 2 seconds
    And I click link to return to Posts
    Then I wait for 2 seconds
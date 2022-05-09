Feature: Crear Post y publicar escenarios positivos

@user1 @web
Scenario: Login - Crear post sin publicar - Logout
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

@user2 @web
Scenario: Login -  Crear post y publicar - Logout
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

@user3 @web
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

@user4 @web
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
Feature: Crear Post y publicar escenarios positivos

@user1 @web
Scenario: Login - Crear post sin publicar - Logout
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>" "<BASE_URL>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I navigate to base URL "<BASE_URL>"
    Then I wait for 2 seconds

@user2 @web
Scenario: Login -  Crear post y publicar - Logout
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>" "<BASE_URL>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click span for publish "<BASE_URL>"
    And I wait for 2 seconds
    And I click on set it live now "<BASE_URL>"
    And I click Publish Button "<BASE_URL>"
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I navigate to base URL "<BASE_URL>"
    Then I wait for 2 seconds

@user3 @web
Scenario: Crear post, publicar y quitar publicación
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>" "<BASE_URL>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click span for publish "<BASE_URL>"
    And I wait for 2 seconds
    And I click on set it live now "<BASE_URL>"
    And I wait for 2 seconds
    And I click Publish Button "<BASE_URL>"
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I select published posts
    And I wait for 3 seconds
    And I select the first post at list
    And I wait for 2 seconds
    And I click span for publish "<BASE_URL>"
    And I wait for 2 seconds
    And I select unpublished
    And I wait for 2 seconds
    And I click on update button
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I navigate to base URL "<BASE_URL>"
    Then I wait for 2 seconds
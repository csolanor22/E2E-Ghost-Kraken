Feature: Borrar Post escenarios positivos

@user1 @web
Scenario: Crear post y delete post confirmar
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
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
    And I enter ramdom text into post body max
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 3 seconds
    And I wait for 2 seconds
    And I select the first post at list
    And I wait for 2 seconds
    And I click on delete post
    And I wait for 2 seconds
    And I click on confirm delete post
    And I wait for 4 seconds
    Then I navigate to base URL "<BASE_URL>"
    And I wait for 2 seconds

@user2 @web
Scenario: Crear post y delete post cancelar
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
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
    And I enter ramdom text into post body max
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 3 seconds
    And I wait for 2 seconds
    And I select the first post at list
    And I wait for 2 seconds
    And I click on delete post
    And I wait for 2 seconds
    And I click on cancel delete post
    And I wait for 4 seconds
    Then I navigate to base URL "<BASE_URL>"
    And I wait for 2 seconds

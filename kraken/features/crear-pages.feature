Feature: Crear Page y publicar

@user1 @web
Scenario: Crear Page con título frontera + 1
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Pages
    And I wait for 2 seconds
    And I click on New Page button
    And I wait for 2 seconds
    And I enter random text into field post title max
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter ramdom text into page body
    And I wait for 2 seconds
    And I click link to return to Page
    Then I wait for 2 seconds

@user2 @web
Scenario: Crear Page con título frontera
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Pages
    And I wait for 2 seconds
    And I click on New Page button
    And I wait for 2 seconds
    And I enter random text into field post title max 255
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter ramdom text into page body
    And I wait for 2 seconds
    And I click link to return to Page
    Then I wait for 2 seconds

@user3 @web
Scenario: Crear Page con título frontera - 1
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Pages
    And I wait for 2 seconds
    And I click on New Page button
    And I wait for 2 seconds
    And I enter random text into field post title max 254
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter ramdom text into page body
    And I wait for 2 seconds
    And I click link to return to Page
    Then I wait for 2 seconds

@user4 @web
Scenario: Crear Page exitoso datos aleatorios en body y publicar
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
    And I enter text into field page title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter ramdom text into page body
    And I wait for 1 seconds
    And I click span for publish
    And I wait for 1 seconds
    And I click Publish Button
    And I wait for 1 seconds
    And I confirm post publish
    And I wait for 1 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 5 seconds
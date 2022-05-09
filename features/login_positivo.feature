Feature: Login positivo

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
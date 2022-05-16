Feature: Listar Post

@user1 @web
Scenario: Listar post positivo
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"  "<BASE_URL>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    Then I wait for 3 seconds
    And I click on User menu
    And I wait for 1 seconds
    And I click Sing Out
    And I wait for 3 seconds
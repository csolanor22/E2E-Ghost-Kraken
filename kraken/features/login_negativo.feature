Feature: Login negativo

@user1 @web
Scenario: Login errorneo por password incorrecto
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD2>" "<BASE_URL>"
    And I click Sign in
    Then I wait for 3 seconds

@user2 @web
Scenario: Login errorneo por username inexistente en DB
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME2>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD2>" "<BASE_URL>"
    And I click Sign in "<BASE_URL>"
    Then I wait for 3 seconds
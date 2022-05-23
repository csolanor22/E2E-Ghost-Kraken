Feature: Login

@user1 @web
Scenario: Login fallido por mail erroneo
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter random email 
    And I wait for 1 seconds
    And I enter random password
    And I wait for 1 seconds
    And I Send login data
    Then I wait an error message
    And I wait for 3 seconds

@user2 @web
Scenario: Login fallido por mail vacio
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    And I enter random password
    And I wait for 1 seconds
    And I Send login data
    Then I wait an error message
    And I wait for 3 seconds

@user3 @web
Scenario: Login fallido por password vacio
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter random email
    And I wait for 1 seconds
    And I Send login data
    Then I wait an error message
    And I wait for 3 seconds

@user4 @web
Scenario: Login fallido por password erroneo
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter random password
    And I wait for 1 seconds
    And I Send login data
    Then I wait an error message
    And I wait for 3 seconds


@user5 @web
Scenario: Login fallido por mail y password vacío
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    And I Send login data
    Then I wait an error message
    And I wait for 3 seconds

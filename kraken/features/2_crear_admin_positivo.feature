Feature: Crear nuevo usuario admin - escenario positivo
@user1 @web
Scenario: Creacion de usuario exitosa
    Given I navigate to register page "<BASE_URL>"
    And I wait for 2 seconds 
    And I take a screenshot "27"
    When I enter new site title "<NEW_SITE_TITLE>"
    And I take a screenshot "28"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I take a screenshot "29"
    And I enter sign up email "<USERNAME1>"
    And I take a screenshot "30"
    And I enter new password "<PASSWORD1>"
    And I take a screenshot "31"
    Then I click signup
    And I wait for 2 seconds 
    And I take a screenshot "32"
    And I click do this later "<BASE_URL>"
    And I wait for 4 seconds 
    And I take a screenshot "33"
    And I except new user success "<NEW_SITE_TITLE>" "<BASE_URL>"
    And I take a screenshot "34"


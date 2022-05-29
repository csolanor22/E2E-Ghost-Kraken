Feature: Crear nuevo usuario admin - escenario positivo


@user1 @web
Scenario: Creacion de usuario exitosa
    Given I navigate to register page
    And I wait for 2 seconds 
    When I enter new site title "<NEW_SITE_TITLE>"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I enter sign up email "<USERNAME1>"
    And I enter new password "<PASSWORD1>"
    Then I click signup
    And I wait for 4 seconds 
    And I except new user success


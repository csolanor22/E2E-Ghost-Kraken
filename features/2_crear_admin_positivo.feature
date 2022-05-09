Feature: Crear nuevo usuario admin - escenario positivo
@user1 @web
Scenario: Creacion de usuario exitosa
    Given I navigate to page "http://localhost:2368/ghost/#/setup/one"
    And I wait for 2 seconds 
    And I click create your account
    When I enter new site title "<NEW_SITE_TITLE>"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I enter sign up email "<USERNAME1>"
    And I enter new password "<PASSWORD1>"
    Then I click signup
    And I click do this later
    And I wait for 4 seconds 
    And I except new user success "<MY_FIRST_BLOG_MSG>"


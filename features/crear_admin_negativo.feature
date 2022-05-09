Feature: Crear nuevo usuario admin - escenarios negativos

@user1 @web
Scenario: Creacion de usuario con email inválido
    Given I navigate to page "http://localhost:2368/ghost/#/setup/one"
    And I wait for 2 seconds 
    And I click create your account
    When I enter new site title "<NEW_SITE_TITLE>"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I enter sign up email "<NEW_INVALID_MAIL>"
    And I enter new password "<PASSWORD1>"
    Then I click signup
    And I expect error message "<INVALID_MAIL_MSG>"

@user2 @web
Scenario: Creacion de usuario con clave corta
    Given I navigate to page "http://localhost:2368/ghost/#/setup/one"
    And I wait for 2 seconds 
    And I click create your account
    When I enter new site title "<NEW_SITE_TITLE>"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I enter sign up email "<USERNAME1>"
    And I enter new password "<SHORT_PASSWORD>"
    Then I click signup
    And I expect error message "<SHORT_PWD_MSG>"

@user3 @web
Scenario: Creacion de usuario con clave insegura
    Given I navigate to page "http://localhost:2368/ghost/#/setup/one"
    And I wait for 2 seconds 
    And I click create your account
    When I enter new site title "<NEW_SITE_TITLE>"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I enter sign up email "<USERNAME1>"
    And I enter new password "<INSECURE_PASSWORD>"
    Then I click signup
    And I expect error message "<INSECURE_PASSWORD_MSG>"

@user4 @web
Scenario: Creacion de usuario sin título del sitio
    Given I navigate to page "http://localhost:2368/ghost/#/setup/one"
    And I wait for 2 seconds 
    And I click create your account
    When I enter new user fullname "<NEW_USER_FULLNAME>"
    And I enter sign up email "<USERNAME1>"
    And I enter new password "<INSECURE_PASSWORD>"
    Then I click signup
    And I expect error message "<EMTPY_TITLE_MSG>"

Feature: Crear nuevo usuario admin - escenarios negativos

@user1 @web
Scenario: Creacion de usuario con email inválido
    Given I navigate to register page "<BASE_URL>"
    And I wait for 2 seconds 
    And I take a screenshot "1"
    When I enter new site title "<NEW_SITE_TITLE>"
    And I take a screenshot "2"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I take a screenshot "3"
    And I enter sign up email "<NEW_INVALID_MAIL>"
    And I take a screenshot "4"
    And I enter new password "<PASSWORD1>"
    And I take a screenshot "5"
    Then I click signup
    And I wait for 1 seconds
    And I take a screenshot "6"
    And I expect error message "<INVALID_MAIL_MSG>"
    And I take a screenshot "7"

@user2 @web
Scenario: Creacion de usuario con clave corta
    Given I navigate to register page "<BASE_URL>"
    And I wait for 2 seconds
    And I take a screenshot "8"
    When I enter new site title "<NEW_SITE_TITLE>"
    And I take a screenshot "9"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I take a screenshot "10"
    And I enter sign up email "<USERNAME1>"
    And I take a screenshot "11"
    And I enter new password "<SHORT_PASSWORD>"
    And I take a screenshot "12"
    Then I click signup
    And I wait for 2 seconds
    And I take a screenshot "13"
    And I expect error message "<SHORT_PWD_MSG>"
    And I take a screenshot "14"

@user3 @web
Scenario: Creacion de usuario con clave insegura
    Given I navigate to register page "<BASE_URL>"
    And I wait for 2 seconds 
    And I take a screenshot "15"
    When I enter new site title "<NEW_SITE_TITLE>"
    And I take a screenshot "16"
    And I enter new user fullname "<NEW_USER_FULLNAME>"
    And I take a screenshot "17"
    And I enter sign up email "<USERNAME1>"
    And I take a screenshot "18"
    And I enter new password "<INSECURE_PASSWORD>"
    And I take a screenshot "19"
    Then I click signup
    And I wait for 2 seconds 
    And I take a screenshot "20"
    And I expect error message "<INSECURE_PASSWORD_MSG>"
    And I take a screenshot "21"

@user4 @web
Scenario: Creacion de usuario sin título del sitio
    Given I navigate to register page "<BASE_URL>"
    And I wait for 2 seconds 
    And I take a screenshot "22"
    When I enter new user fullname "<NEW_USER_FULLNAME>"
    And I take a screenshot "23"
    And I enter sign up email "<USERNAME1>"
    And I take a screenshot "24"
    And I enter new password "<INSECURE_PASSWORD>"
    And I take a screenshot "25"
    Then I click signup
    And I expect error message "<EMTPY_TITLE_MSG>"
    And I wait for 2 seconds 
    And I take a screenshot "26"

Feature: Crear nuevo usuario admin - escenarios negativos

@user1 @web
Scenario: Creacion de usuario con email inválido
    Given I navigate to register page
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
    Given I navigate to register page
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
    Given I navigate to register page
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
    Given I navigate to register page
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

@user5 @web
Scenario Outline: Creacion de usuario - escenarios negativos con datos inválidos usando Scenario Outline
    Given I navigate to register page
    And I wait for 2 seconds 
    When I enter new site title "<site_title>"
    And I enter new user fullname "<new_user_fullname>"
    And I enter sign up email "<mail>"
    And I enter new password "<password>"
    Then I click signup
    And I wait for 1 seconds
    And I expect error message "<invalid_msg>"

Examples:
    | site_title | new_user_fullname | mail | password | invalid_msg | scenario_description |
    | Mi nuevo sitio | Pepito Perez  | invalidEmail  | User-12345  | Invalid Email. | |
    | Mi nuevo sitio | Pepito Perez  | invalidEmail@  | User-12345  | Invalid Email. | |
    | Mi nuevo sitio | Pepito Perez  | invalidEmail@a  | User-12345  | Invalid Email. | |
    | Mi nuevo sitio | Pepito Perez  | invalidEmail@a.  | User-12345  | Invalid Email. | |
    | Mi nuevo sitio | Pepito Perez  | @mail.com  | User-12345  | Invalid Email. | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | 1234  | Password must be at least 10 characters long | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | asdf12345 | Password must be at least 10 characters long | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | password123  | Sorry, you cannot use an insecure password | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | 1234567890  | Sorry, you cannot use an insecure password | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | qwertyuiop  | Sorry, you cannot use an insecure password | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | 0987654321  | Sorry, you cannot use an insecure password | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | abcdefghij  | Sorry, you cannot use an insecure password | |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com  | abcdefghij  | Sorry, you cannot use an insecure password | |

@user6 @web
Scenario Outline: Creacion de usuario - escenario negativo sin título del sitio
    Given I navigate to register page
    And I wait for 2 seconds 
    When I enter new user fullname "<new_user_fullname>"
    And I enter sign up email "<mail>"
    And I enter new password "<password>"
    Then I click signup
    And I wait for 1 seconds
    And I expect error message "<invalid_msg>"

Examples:
    | new_user_fullname | mail | password | invalid_msg | scenario_description |
    | Pepito Perez  | user123@mail.com | User-12345 | Please enter a  | |

@user7 @web
Scenario Outline: Creacion de usuario - escenario negativo sin nombre de usuario
    Given I navigate to register page
    And I wait for 2 seconds 
    When I enter new site title "<site_title>"
    And I enter sign up email "<mail>"
    And I enter new password "<password>"
    Then I click signup
    And I wait for 1 seconds
    And I expect error message "<invalid_msg>"

Examples:
    | site_title | mail | password | invalid_msg | scenario_description |
    | Mi nuevo sitio | user123@mail.com | User-12345 | Please enter a  | |


@user8 @web
Scenario Outline: Creacion de usuario - escenario negativo sin correo
    Given I navigate to register page
    And I wait for 2 seconds 
    When I enter new site title "<site_title>"
    And I enter new user fullname "<new_user_fullname>"
    And I enter new password "<password>"
    Then I click signup
    And I wait for 1 seconds
    And I expect error message "<invalid_msg>"

Examples:
    | site_title | new_user_fullname | password | invalid_msg | scenario_description |
    | Mi nuevo sitio | Pepito Perez  | User-12345 | Please enter a  | |


@user9 @web
Scenario Outline: Creacion de usuario - escenario negativo sin contraseña
    Given I navigate to register page
    And I wait for 2 seconds 
    When I enter new site title "<site_title>"
    And I enter new user fullname "<new_user_fullname>"
    And I enter sign up email "<mail>"
    Then I click signup
    And I wait for 1 seconds
    And I expect error message "<invalid_msg>"

Examples:
    | site_title | new_user_fullname | mail | invalid_msg | scenario_description |
    | Mi nuevo sitio | Pepito Perez  | user123@mail.com | Password must be at least 10 characters long  | |



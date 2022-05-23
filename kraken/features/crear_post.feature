Feature: Crear Post y publicar

@user1 @web
Scenario: Crear Post con título frontera + 1 sin publicar
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter random text into field post title max
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    Then I wait for 2 seconds


@user2 @web
Scenario: Crear Post con título frontera sin publicar
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter ramdom text into post body max
    And I wait for 2 seconds
    And I click link to return to Posts "<BASE_URL>"
    Then I wait for 2 seconds


@user3 @web
Scenario: Crear Post con título frontera publicando
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter text "$name_1" into field post title
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter ramdom text into post body max
    And I wait for 1 seconds
    And I click span for publish
    And I wait for 1 seconds
    And I click Publish Button
    And I wait for 1 seconds
    And I confirm post publish
    And I wait for 1 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 5 seconds


@user4 @web
Scenario: Post con título frontera publicando
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter random text into field post title max 255
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click into post title
    And I wait for 2 seconds
    And I click span for publish
    And I wait for 1 seconds
    And I click Publish Button
    And I wait for 1 seconds
    And I confirm post publish
    And I wait for 1 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 5 seconds

@user5 @web
Scenario: Crear Post con título frontera - 1 publicando
    Given I navigate to signin page "<BASE_URL>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD1>"
    And I click Sign in "<BASE_URL>"
    And I wait for 2 seconds
    And I click in Posts "<BASE_URL>"
    And I wait for 2 seconds
    And I click on New Post button
    And I wait for 2 seconds
    And I enter random text into field post title max 254
    And I wait for 2 seconds
    And I click into post body
    And I wait for 2 seconds
    And I enter text "$string_1" into post body
    And I wait for 2 seconds
    And I click into post title
    And I wait for 2 seconds
    And I click span for publish
    And I wait for 1 seconds
    And I click Publish Button
    And I wait for 1 seconds
    And I confirm post publish
    And I wait for 1 seconds
    And I click link to return to Posts "<BASE_URL>"
    And I wait for 5 seconds

Feature: Login
    Scenario: With Email and Password
        Given I am on the landing page
        When I click on the login with email button
        When I type in my email address "username"
        When I type in my password "password"
        When I click on the login button
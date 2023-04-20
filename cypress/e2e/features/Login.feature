Feature: Login
    Scenario: With Email and Password
        Given I am on the landing page
        When I click on the login with email button
        When I type in my email address "MissionGraphSupport@deloitte.com"
        When I type in my password "TeamWork#DreamWork"
        When I click on the login button
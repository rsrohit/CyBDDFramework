Feature: Login

  Scenario Outline: Login with created user
    Given I am on the login page
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I click on the sign up button
    Then I should be on the home page
    Then I should see username - "<username>" on homepage

    Examples:
      | username | password |
      | johndoe  | Pass123 |
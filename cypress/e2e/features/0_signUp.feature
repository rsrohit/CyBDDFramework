Feature: Login

  Scenario Outline: Signup with new user details
    Given I am on the login page
    When I click on sigh up link
    Then I should be on the sign up page
    When I type in my first name "<first_name>"
    When I type in my last name "<last_name>"
    When I type in my username "<username>"
    When I type in my password "<password>"
    When I type in my password again "<confirm_password>"
    When I click on the sign up button
    Then I should be on the login page

    Examples:
      | first_name | last_name | username | password | confirm_password |
      | John       | Doe       | johndoe  | Pass123 | Pass123          |
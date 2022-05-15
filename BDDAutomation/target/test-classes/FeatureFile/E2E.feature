Feature: User will come on application and search

Scenario: User comes to application and performs search
Given User is on home page
When User enters location
And User clicks on location
Then User should be on restaurant page
And User searches restaurant
And User selects restaurant
Then In search page user clicks on selected restaurant
And User adds product and checks pricing
Then User removes product
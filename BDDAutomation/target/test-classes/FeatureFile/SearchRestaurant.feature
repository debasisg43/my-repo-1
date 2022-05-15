Feature: User will come on application searches location and searches restaurant

Scenario: User searches for restaurant
Given User is on home page
When User enters location
And User clicks on location
Then User should be on restaurant page
And User searches restaurant
And User selects restaurant
Then In search page user clicks on selected restaurant

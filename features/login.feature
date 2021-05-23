Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <emailID>
    When I register with <firstName>, <lastName>, <password>, <DOBDD>, <DOBMM>, <DOBYY>, <company>, <address>, <address2>, <city>, <state>, <zip>, <country>, <additionalInfo>, <homephone>, <mobile> and <addressalias> 
    #Then I should Sign Out
    #Then I should Sign In again with <emailID> and <password>
    #Then I should add a product to the cart
    #Then I should proceed to checkout and continue till payment
    #Then I should validate on the payment page if the product details are correct


    Examples:
      | emailID                 | firstName | lastName | password | DOBDD | DOBMM | DOBYY | company | address | address2 |city       | state      | zip   | country       | additionalInfo| homephone |mobile     | addressalias    |
      | jagdishnayak4@gmail.com | Jagdish   | Nayak    | jagdish  | 12    | June  | 2005  | WIPRO   | LA      | LA       |Los Angels | California | 90001 | United States | NA            | 123456    |9988776600 | Home Sweet Home |
      
      
    
      

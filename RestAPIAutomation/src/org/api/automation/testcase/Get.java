package org.api.automation.testcase;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class Get {


//String getUsersEndpoint = "https://reqres.in/api/users?page=2";	
String getPetEndpoint = "https://petstore.swagger.io/v2/pet/9222968140497186788";
@Test
public void validateUserdata() {
Response response = RestAssured.get(getPetEndpoint);
//Printing status code
System.out.println("Status code is ---" + response.getStatusCode());

//Assertion on status code
Assert.assertEquals(response.getStatusCode(), 200);


//Fetch and Display headers
//System.out.println("All headers value ---"+ response.getHeaders());	

//Fetch specific header values
//System.out.println(response.getHeaders());
System.out.println(response.getHeader("Date"));



//Fetch Body of response
System.out.println(response.asString());
System.out.println(response.asPrettyString());
	
Assert.assertTrue(response.asString().contains("id"));
//Assert.assertEquals(response.jsonPath().getString("data.id"), "7");


}
	
	
}

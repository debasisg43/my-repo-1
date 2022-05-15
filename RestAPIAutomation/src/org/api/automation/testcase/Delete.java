package org.api.automation.testcase;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Delete {


//String getUsersEndpoint = "https://reqres.in/api/users?page=2";	
String deleteEndpoint = "https://petstore.swagger.io/v2/pet/9223372000001112829";

@Test
public void deletePet() {
	//RequestSpecification postRequest = RestAssured.given();
	//postRequest.header("content-type","application/json");
Response deleteResponse = RestAssured.delete(deleteEndpoint);

//Printing status code
System.out.println(deleteResponse.statusCode());
System.out.println(deleteResponse.asPrettyString());
//Assertion on status code
Assert.assertEquals(deleteResponse.statusCode(), 200);

}
	
	
}

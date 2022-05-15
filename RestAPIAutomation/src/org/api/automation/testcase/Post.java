package org.api.automation.testcase;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Post {
	//String postEndPoint = "http://thetestingworldapi.com/api/studentsDetails";
	String postEndPoint = "https://petstore.swagger.io/v2/pet";
	
	
	@Test
public void addNewPet()
{
RequestSpecification postRequest = RestAssured.given();
//postRequest.body("{  \"id\": 1,\"first_name\": \"Testing\",\"middle_name\": \"A\",\"last_name\": \"world\",\"date_of_birth\": \"12/12/1990\"}");
postRequest.body("{   \"id\":0,\"category\":{\"id\":0,\"name\":\"string\"},\"name\":\"doggie700\",\"photoUrls\":[\"C:\\test.png\"],\"tags\":[{\"id\":0,\"name\":\"string\"}],\"status\":\"available\"}");
postRequest.header("content-type","application/json");
Response postresponse = postRequest.post(postEndPoint);
System.out.println(postresponse.statusCode());
Assert.assertEquals(postresponse.statusCode(),200);
System.out.println(postresponse.asPrettyString());
}
}


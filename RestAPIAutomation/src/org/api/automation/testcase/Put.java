package org.api.automation.testcase;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Put {
	//String postEndPoint = "http://thetestingworldapi.com/api/studentsDetails";
	String putEndPoint = "https://petstore.swagger.io/v2/pet";
	
	
	@Test
public void addNewPet()
{
RequestSpecification putRequestSpecification = RestAssured.given();
//postRequest.body("{  \"id\": 1,\"first_name\": \"Testing\",\"middle_name\": \"A\",\"last_name\": \"world\",\"date_of_birth\": \"12/12/1990\"}");
putRequestSpecification.body("{   \"id\":9223372016900004786,\"category\":{\"id\":0,\"name\":\"doggie700\"},\"name\":\"doggie700\",\"photoUrls\":[\"C:\\test.png\"],\"tags\":[{\"id\":0,\"name\":\"string\"}],\"status\":\"available\"}");
putRequestSpecification.header("content-type","application/json");

Response putResponse= putRequestSpecification.put(putEndPoint);
System.out.println(putResponse.getStatusCode());
System.out.println(putResponse.asPrettyString());

Assert.assertEquals(putResponse.getStatusCode(), 200);


}
}


package org.api.automation.testcase;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

public class PutSerial2 {
	//https://reqres.in/api/users/23
	@Test
	public void secondDatRestOne() {
		
		RestAssured.baseURI = "https://petstore.swagger.io/v2/pet";
		given().when().get("/9223372016900004786").then()
			.assertThat().statusCode(200);
		
		/*
		 * String bodyData = "{\r\n" + "    \"name\": \"morpheus\",\r\n" +
		 * "    \"job\": \"leader\"\r\n" + "}";
		 */
		Map<String, String> bodyDataMap = new HashMap<String, String>();
		bodyDataMap.put("id", "1000");
		bodyDataMap.put("name", "doggy700");
		bodyDataMap.put("status", "available");
		
		

		//UserPojo userPojo = new UserPojo("Shailesh","Trainer");
		//System.out.println(userPojo.toString());
		
		UserPojo2 userPojo =new UserPojo2("1000","doggy700","available");
		//System.out.println(userPojo.toString());
		
		
		
		
		System.out.println(userPojo.toString());
		
		given().body(bodyDataMap).when().log().all();
		 //.post("/0").then().assertThat().statusCode(201).log().body();
				
		 
		 
		  
			
		
	
	}
	

	}

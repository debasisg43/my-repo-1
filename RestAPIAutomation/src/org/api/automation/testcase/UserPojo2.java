package org.api.automation.testcase;

import java.util.List;

public class UserPojo2 {
	
	private String id;
		private String name;
	private String status;
	
	
	
	public UserPojo2(String id, String name, String status) {
		super();
		this.id = id;
		this.name = name;
		this.status = status;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "UserPojo2 [id=" + id + ", name=" + name + ", status=" + status + "]";
	}	
	
}


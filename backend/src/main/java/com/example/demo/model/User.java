package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
  
@Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String username;

  private String password;
  private String password2; 
  private String email;
  public boolean isPasswordMatch() { 
	    return password != null && password.equals(password2);
	  }
public User(Long id, String username, String password, String password2, String email) {

	this.id = id;
	this.username = username;
	this.password = password;
	this.password2 = password2;
	this.email = email;
}
public User() {
	super();
	// TODO Auto-generated constructor stub
}
  
}

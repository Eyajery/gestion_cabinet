package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.User;

import com.example.demo.service.UserService;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class AuthController {
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	public  ResponseEntity <List<User>>  get(){
		List <User> cabinets = userService.findAll();
		return new ResponseEntity <List<User>> (cabinets,HttpStatus.OK);
	}
	
	@PostMapping("/users")
	public  ResponseEntity <User>  save(@RequestBody User user){
		User users = userService.save(user);
		return new ResponseEntity <User> (users,HttpStatus.OK);}
	
	
}



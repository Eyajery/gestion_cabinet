package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
@Service
public class Userserviceclass implements UserService{
	@Autowired
	UserRepository userRepository;

	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	public User save (User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
		return user ;
	}
	

	
}

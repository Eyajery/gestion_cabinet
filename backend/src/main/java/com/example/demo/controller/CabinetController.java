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

import com.example.demo.model.Cabinet;
import com.example.demo.service.Cabinetservice;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CabinetController {
	@Autowired
	Cabinetservice cabinetService;
	
	@GetMapping("/cabinets")
	public  ResponseEntity <List<Cabinet>>  get(){
		List <Cabinet> cabinets = cabinetService.findAll();
		return new ResponseEntity <List<Cabinet>> (cabinets,HttpStatus.OK);
	}
	
	@PostMapping("/cabinets")
	public  ResponseEntity <Cabinet>  save(@RequestBody Cabinet cabinet){
		Cabinet cabinets = cabinetService.save(cabinet);
		return new ResponseEntity <Cabinet> (cabinets,HttpStatus.OK);}
	@GetMapping("/cabinets/{id}")
	public ResponseEntity<Cabinet> get(@PathVariable("id") Long id) {
	    Cabinet cabinet = cabinetService.findById(id);
	    return new ResponseEntity<Cabinet>(cabinet, HttpStatus.OK);
	}
	@DeleteMapping("/cabinets/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
      cabinetService.delete(id);
	    return new ResponseEntity<String>("cabinet is deleted successfully", HttpStatus.OK);
	}
	
}

package com.example.demo.model;
import java.time.LocalDate;

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
@Table(name="cabinet")
public class Cabinet {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
	
	private String name;
	private String firstName;
	private int age;
	private LocalDate consultationDate;
	private int numtel;
	public Cabinet(Long id, String name, String firstName, int age, LocalDate consultationDate, int numtel) {
	    super();
	    this.id = id;
	    this.name = name;
	    this.firstName = firstName;
	    this.age = age;
	    this.consultationDate = consultationDate;
	    this.numtel = numtel;
	}
	public Cabinet() {
		super();
		// TODO Auto-generated constructor stub
	}


}

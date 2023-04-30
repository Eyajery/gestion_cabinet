package com.example.demo.service;

import java.util.List;


import com.example.demo.model.Cabinet;

public interface Cabinetservice {
	List <Cabinet> findAll();
	Cabinet save (Cabinet cabinet);
	Cabinet findById(Long id);
	void delete(Long id) ;
	

}

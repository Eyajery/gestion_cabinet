package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cabinet;
import com.example.demo.repository.CabinetRepository;
@Service
public class Cabinetserviceclass implements Cabinetservice {
	@Autowired
	CabinetRepository cabinetRepository;
	@Override
     public List<Cabinet> findAll() {
		// TODO Auto-generated method stub
		return cabinetRepository.findAll();
	}
	@Override
    public Cabinet save (Cabinet cabinet) {
		// TODO Auto-generated method stub
		cabinetRepository.save(cabinet);
		return cabinet ;
	}
	@Override
    public Cabinet findById(Long id) {
		// TODO Auto-generated method stub
		if(cabinetRepository.findById(id).isPresent()) {
			return cabinetRepository.findById(id).get();
		}
		return null;
	}
	@Override
	public void delete(Long id)  {
		Cabinet cabinet =findById(id);
		cabinetRepository.delete(cabinet);
	}
	

}

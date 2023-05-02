package com.example.demo;
import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Cabinet;
import com.example.demo.model.User;
import com.example.demo.repository.CabinetRepository;
import com.example.demo.repository.UserRepository;

@SpringBootTest
class GestionCabinet2ApplicationTests {

	@Autowired
	private CabinetRepository cabinetRepository;
	@BeforeAll
	static void beforeAll() {
		System.out.println("Avant tous les tests");
	}
	
	@AfterAll
	static void afterAll() {
		System.out.println("Après tous les tests");
	}
	
	
	@BeforeEach
	void beforeEach() {
	    System.out.println("Début du test");
	}
	
	@AfterEach
	void afterEach() {
	    System.out.println("Fin du test");
	}
	

	
	@Test
    public void testCreateCabinet() {
        LocalDate consultationDate = LocalDate.of(2023, 4, 22);
        Cabinet cabinet = new Cabinet((long) 2, "jery", "eya", 35, consultationDate, 52244445);
        Cabinet savedCabinet = cabinetRepository.save(cabinet);
        Assertions.assertNotNull(savedCabinet.getId());
    }

 
   @Test
    public void testGetCabinetById() {
        LocalDate consultationDate = LocalDate.of(2023, 4, 22);
        Cabinet cabinet = new Cabinet((long) 1, "Doe", "John", 35, consultationDate, 123456789);
        Cabinet savedCabinet = cabinetRepository.save(cabinet);
        Cabinet retrievedCabinet = cabinetRepository.findById(savedCabinet.getId()).orElse(null);
        Assertions.assertEquals(savedCabinet.getId(), retrievedCabinet.getId());
    }
   
   @Test
    public void testUpdateCabinet() {
        LocalDate consultationDate = LocalDate.of(2023, 4, 22);
        Cabinet cabinet = new Cabinet((long) 1, "Doe", "John", 35, consultationDate, 123456789);
        Cabinet savedCabinet = cabinetRepository.save(cabinet);
        savedCabinet.setAge(36);
        Cabinet updatedCabinet = cabinetRepository.save(savedCabinet);
        Assertions.assertEquals(savedCabinet.getAge(), updatedCabinet.getAge());
    }

   @Test
    public void testDeleteCabinet() {
        LocalDate consultationDate = LocalDate.of(2023, 4, 22);
        Cabinet cabinet = new Cabinet((long) 70, "islem", "mansour", 35, consultationDate, 123456789);
        Cabinet savedCabinet = cabinetRepository.save(cabinet);
        cabinetRepository.deleteById(savedCabinet.getId());
        Cabinet deletedCabinet = cabinetRepository.findById(savedCabinet.getId()).orElse(null);
        Assertions.assertNull(deletedCabinet);
    }
  
}

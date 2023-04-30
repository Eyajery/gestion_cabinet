package com.example.demo.repository;
import com.example.demo.model.Cabinet;
import com.example.demo.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CabinetRepository extends JpaRepository<Cabinet,Long> {

	Cabinet save(User user);

	

}

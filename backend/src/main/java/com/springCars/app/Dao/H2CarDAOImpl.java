package com.springCars.app.Dao;

import com.springCars.app.Entity.Car;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface H2CarDAOImpl extends CrudRepository<Car, Long> {
}

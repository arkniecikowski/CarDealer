package com.springCars.app.Dao;

import com.springCars.app.Entity.Car;

import java.util.Collection;

public interface CarDao {
    Collection<Car> getAllCars();

    Car getCarByID(int id);

    void addCar(Car car);
}

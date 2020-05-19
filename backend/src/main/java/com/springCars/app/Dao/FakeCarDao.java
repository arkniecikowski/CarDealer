package com.springCars.app.Dao;

import com.springCars.app.Entity.Car;

import java.util.Collection;
import java.util.UUID;

public interface FakeCarDao {
    Collection<Car> getAllCars();

    Car getCarByID(int id);

    void addCar(Car car);

    void deleteCar(int id);
}

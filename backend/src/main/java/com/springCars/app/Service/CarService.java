package com.springCars.app.Service;

import com.springCars.app.Dao.FakeCarDao;
import com.springCars.app.Entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CarService {

    @Autowired
    private FakeCarDao carDao;

    public Collection<Car> getAllCars() {
        return this.carDao.getAllCars();
    }

    public Car getCarByID(int id) {
        return this.carDao.getCarByID(id);
    }

    public void addCar(Car car) {
        this.carDao.addCar(car);
    }

    public void deleteCar(int id) { this.carDao.deleteCar(id);}
}

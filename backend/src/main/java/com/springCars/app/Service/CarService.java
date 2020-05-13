package com.springCars.app.Service;

import com.springCars.app.Dao.CarDao;
import com.springCars.app.Entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CarService {

    @Autowired
    private CarDao carDao;

    public Collection<Car> getAllCars() {
        return this.carDao.getAllCars();
    }

}

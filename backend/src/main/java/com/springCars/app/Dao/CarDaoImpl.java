package com.springCars.app.Dao;

import com.springCars.app.Entity.Car;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class CarDao {

    private static Map<Integer, Car> cars;

    static {

        cars = new HashMap<Integer, Car>() {

            {
                put(1, new Car(1, 1994, "Audi"));
                put(2, new Car(2, 2005, "Bmw"));
            }
        };
    }

    public Collection<Car> getAllCars() {
        return this.cars.values();
    }

    public Car getCarByID(int id) {
        return this.cars.get(id);
    }


    public void addCar(Car car) {
        cars.put(3, new Car(car.getId(), car.getYear(), car.getName()));
        System.out.println(cars);
    }

}
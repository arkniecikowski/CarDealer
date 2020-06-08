//package com.springCars.app.Dao;
//
//import com.springCars.app.Entity.Car;
//import org.springframework.stereotype.Repository;
//
//import java.util.*;
//
//@Repository
//public class CarDaoImpl implements FakeCarDao {
//
//    private static List<Car> DBcars = new ArrayList<>();
//
////    static {
////
////        cars = new HashMap<Integer, Car>() {
////            {
////                put(1, new Car(1, 1994, "Audi"));
////                put(2, new Car(2, 2005, "Bmw"));
////            }
////        };
////    }
////
////    @Override
////    public Collection<Car> getAllCars() {
////        return this.DBcars;
////    }
////
////    @Override
////    public Car getCarByID(int id) {
////        return this.DBcars.get(id);
////    }
////
////    @Override
////    public void addCar(Car car) {
////        DBcars.add(new Car( car.getYear(), car.getName()));
////    }
////
////    @Override
////    public void deleteCar(int id) {
////        for (Car car : DBcars) {
////            if (car.getId() == id) {
////                DBcars.remove(car);
////            }
////        }
////    }
//}
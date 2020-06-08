package com.springCars.app.Service;

import com.springCars.app.Dao.H2CarDAOImpl;
import com.springCars.app.Entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CarService {

    @Autowired
    private H2CarDAOImpl h2CarDAO;

    public void add(Car car) { h2CarDAO.save(car); }

    public void deleteByID(long id) { this.h2CarDAO.deleteById(id); }

    public Iterable<Car> getAll() {
        return h2CarDAO.findAll();
    }

    public Optional<Car> getByID(long id) { return h2CarDAO.findById(id); }

    public void searchForm(String marka, String model, long cena, long rok) {
        System.out.println(marka + model + cena + rok);
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void fillDB() {
//        h2CarDAO.save(new Car(1994, "Audi"));
//        h2CarDAO.save(new Car(2005, "KIA"));
//    }

}

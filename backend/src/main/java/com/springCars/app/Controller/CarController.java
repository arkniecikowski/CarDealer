package com.springCars.app.Controller;

import com.springCars.app.Entity.Car;
import com.springCars.app.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import sun.text.resources.FormatData;

import java.util.Collection;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;


    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Car> getAll() {
        return carService.getAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Optional<Car> getByID(@PathVariable("id") long id) {
        return carService.getByID(id);
    }

    @RequestMapping(value = "/search", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void searchForm(Car car) {
        System.out.println(car.toString());
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void add(@RequestBody Car car) {
        carService.add(car);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteById(@PathVariable("id") int id) {
        carService.deleteByID(id);
    }



}

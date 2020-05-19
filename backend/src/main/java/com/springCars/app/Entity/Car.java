package com.springCars.app.Entity;



public class Car {


    int id;
    int year;
    String name;

    public Car(int id, int year, String name) {
        this.id = id;
        this.year = year;
        this.name = name;
    }

    public Car(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}

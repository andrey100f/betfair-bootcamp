package org.example.class_design;

public class EmployedStudent extends Student {
    private int salary;

    EmployedStudent(String name, int age) {
        super(name, age);
    }

    public void display() {
        System.out.println("Student name: " + this.getName());
    }
}

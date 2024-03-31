package org.example.class_design.animal;

public class Dog implements Animal {
    @Override
    public String talk() {
        return "Woof woof";
    }

    @Override
    public String walk() {
        return "Dog is running.";
    }
}

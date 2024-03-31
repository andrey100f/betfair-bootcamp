package org.example.class_design.animal;

public class Cat implements Animal {
    @Override
    public String talk() {
        return "Meow";
    }

    @Override
    public String walk() {
        return "Cat is silent.";
    }
}

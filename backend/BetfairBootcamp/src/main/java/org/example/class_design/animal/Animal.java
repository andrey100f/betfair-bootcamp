package org.example.class_design.animal;

public interface Animal {
    default String talk() {
        return "Animal is talking";
    }
    default String walk() {
        return "Animal is walking";
    }
}

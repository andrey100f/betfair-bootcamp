package org.example.class_design;

import org.example.class_design.animal.Animal;
import org.example.class_design.animal.Cat;
import org.example.class_design.animal.Dinosaur;
import org.example.class_design.animal.Dog;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println(Student.IS_HUNGRY);

        List<Animal> animals = new ArrayList<>();
        animals.add(new Cat());
        animals.add(new Dog());
        animals.add(new Dinosaur());

        animals.add(new Animal() {
            @Override
            public String talk() {
                return Animal.super.talk();
            }

            @Override
            public String walk() {
                return Animal.super.walk();
            }
        });

        walkAnimals(animals);

        int sum = sum(2, 3);

        List<Student> students = new ArrayList<>();
        students.sort(new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return o1.getAge() - o2.getAge();
            }
        });
        students.sort((o1, o2) -> o1.getAge() - o2.getAge());
        students.sort(Comparator.comparingInt(Student::getAge));

        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("test runnable");
            }
        }).start();

        System.out.println("test");
        System.out.println(createStudent("Ion", 22));

        radFile();
    }

    private static void radFile() {
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader("test.txt"))) {
            String line = bufferedReader.readLine();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void walkAnimals(List<Animal> animalsToWalk) {
        for (Animal animal : animalsToWalk) {
            System.out.println(animal.walk());
        }
    }

    private static int sum(int a, int b) {
        return a + b;
    }

    private static double sum2(int a, int b) {
        return a + b;
    }

    public static Student createStudent(String name, int age) {
        try {
            validateInput(name, age);
        } catch (InvalidStudentException e) {
            System.out.println("Exception " + e.getMessage());
        }

        Student student = new Student(name, age);

        return student;
    }

    private static void validateInput(String name, int age) throws InvalidStudentException {
        if(name.isBlank()) {
                throw new InvalidStudentException("Name must not be blank!!");
            }

        if(age < 0) {
            throw new InvalidStudentException("Age must be positive!!");
        }
    }
}

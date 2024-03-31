package org.example.class_design;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Student implements Comparable<Student> {
    public static final boolean IS_HUNGRY = true;

    private String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + this.name + '\'' +
                ", age=" + this.age +
                '}';
    }

    @Override
    public int compareTo(Student o) {
        return 0;
    }
}

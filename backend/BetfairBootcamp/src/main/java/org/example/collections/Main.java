package org.example.collections;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        students.add(new Student("Ion", 25));
        students.add(new Student("Maria", 23));

        for (Student student : students) {
            System.out.println(student);
//            students.add(new Student("Gigi", 20)); -> va crapa
        }

        students.removeIf(student -> student.getAge() == 30);

        display(students);

        List<? super Integer> finalList = new ArrayList<>();
        addNumbers(finalList);

        List<Comparable<Integer>> finalList2 = new ArrayList<>();
        addNumbers(finalList2);

        long count = students.parallelStream()
                .filter(student -> student.getAge() == 40)
                .count();

        Set<Student> studentSet = new HashSet<>();
        studentSet.add(new Student("Ion", 25));
        studentSet.add(new Student("Maria", 23));
        studentSet.add(new Student("Ion", 25));
        System.out.println("_________________________________________________________________________________________");
        for (Student student : studentSet) {
            System.out.println(student);
        }

        Set<Student> studentSet2 = new TreeSet<>();
        studentSet2.add(new Student("Maria", 23));
        studentSet2.add(new Student("Ion", 25));
        studentSet2.add(new Student("Ion", 25));
        System.out.println("_________________________________________________________________________________________");
        for (Student student : studentSet2) {
            System.out.println(student);
        }

        Set<Student> studentSet3 = new TreeSet<>(Comparator.comparingInt(Student::getAge));
        studentSet3.add(new Student("Maria", 23));
        studentSet3.add(new Student("Ion", 25));
        studentSet3.add(new Student("Ion", 25));
        System.out.println("_________________________________________________________________________________________");
        for (Student student : studentSet3) {
            System.out.println(student);
        }

        Student maria = new Student("Maria", 23);
        Student ion = new Student("Ion", 25);
        Student ionel = new Student("Ionel", 25);

        List<Student> studentList = List.of(maria, ion, ionel);

        Student[] studentsArray = new Student[] {maria, ion, ionel};
        List<Student> list = Arrays.asList(studentsArray); // -> nu returneaza arrayList-ul pe care il folosim - returneaza un imutable
        List<Student> list2 = List.of(studentsArray); // -> returneaza un imutable

        Map<Integer, Student> studentsByAge = new HashMap<>();
        studentsByAge.put(maria.getAge(), maria);
        studentsByAge.put(ion.getAge(), ion);
        studentsByAge.put(ionel.getAge(), ionel);

        for(Map.Entry<Integer, Student> entry: studentsByAge.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }

        Map<Integer, List<Student>> studentListByAge = new HashMap<>();
        for (Student student : studentList) {
            studentListByAge.computeIfAbsent(student.getAge(), k -> new ArrayList<>()).add(student);
        }

    }

//    public static void display(List<Student> students) {
//    }
//
//    public static void display(List<String> names) {
//    }

    public static void display(List<?> names) {
        for (Object name : names) {
            System.out.println(name);
        }
    }

    public static void addNumbers(List<? super Integer> numbers) {
        List<Integer> numberList = new ArrayList<>();

        numberList.add(2);
        numberList.add(21);
        numberList.add(212);

        for (Integer number : numberList) {
            numbers.add(number);
        }
    }
}

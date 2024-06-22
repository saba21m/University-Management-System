class person {
    name;
    age: number;

    constructor(name: String, age: number) {
        this.name = name;
        this.age = age
    }

    getName() {
        return this.name;
    }
}
class student extends person {
    rollNumber: string;
    courses: any = []
    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    registerForCourse(course: course) {
        this.courses.push(course)
    }
}
class instructor extends person {
    salary: number;
    courses: course[] = [];
    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    assigncourse(course: course) {
        this.courses.push(course)
    }
}

class course {
    id: string;
    name: string;
    students: student[] = [];
    instructor!: instructor[];
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(student: student) {
        this.students.push(student)
        student.registerForCourse(this)
    }
    setInstructor(instructor: instructor) {
        this.instructor
    }

}
class Department {
    name: string;
    courses: course[];


    constructor(name: string) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course: course) {
        this.courses.push(course);
    }
}
const student1 = new student("saba", 21, "student1");
const student2 = new student("farnaz", 21, "student2");

const instructor1 = new instructor("sir zia", 50, 200000);
const instructor2 = new instructor("sir hamzah", 22, 10000);

const course1 = new course("course1", "meteverse");
const course2 = new course ("course2", "advance programing");

const department1 = new Department("computer science");

department1.addCourse(course1);
department1.addCourse(course2);

student1.registerForCourse(course1);
student2.registerForCourse(course1);

course1.addStudent(student1);
course1.addStudent(student2);

course1.setInstructor(instructor1);

console.log(student1.getName());
console.log(student1.courses);
console.log(instructor1.courses);
console.log(department1.courses);



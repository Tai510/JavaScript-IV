// CODE here for your Lambda Classes
class Person {
constructor(info) {
this.name = info.name;
this.age = info.age;
this.location = info.location;
this.gender = info.gender;
}
speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}   
};

class Instructor extends Person {
constructor(info) {
super(info); 
this.specialty = info.specialty;
this.favLanguage = info.favLanguage;
this.catchPhrase = info.catchPhrase;
}
demo() {
    return `Today we are learning about ${this.favLanguage}`;
}
};

class Student extends Instructor {
constructor(info) {
super(info);
this.previousBackground = info.previousBackground;
this.className = info.className;
this.favSubjects = info.favSubjects;
}
listsSubjects() {
    return `Favourite Subjects: ${this.favSubjects} , ${this.favSubjects} , ${this.favSubjects}`;
}
PRAssignment() {
    return `${this.name} has submitted a PR for ${this.favSubjects}`;
}
};

class ProjectManger extends Instructor {
constructor(info) {
super(info);
this.gradClassNam = info.gradClassNam;
this.favInstructor = info.favInstructor;
}
standUp() {
    return `${this.name} announces to ${this.gradClassNam}, @channel standy times!​​​​​`
}
debugsCode() {
    return `${this.name} debugs ${this.favInstructor}'s code on ${this.gradClassNam}`
}
}

const person = new Person ({
name: "Tashi" ,
hobby: "Basketball" ,
location: "Berkeley,CA",
gender: "Male",
});
console.log(person.speak());

const instructor = new Instructor ({
name: "Josh Knell",
specialty: "Banjo",
catchPhrase: "Lets take a 5 min break",
favLanguage: "JavaScript"
});
console.log(instructor.demo());

const student = new Student ({
name: "Tashi" ,
previousBackground : "Chef" ,
className: "Web 19" ,
favSubjects: "HTML & CSS" ,
})
console.log(student.listsSubjects());
console.log(student.PRAssignment());

const projectManger = new ProjectManger ({
name: "Bradley" ,
gradClassNam: "Lambda PM" ,
favInstructor: "Josh Knell" ,
subject: "React" ,
})
console.log(projectManger.standUp());
console.log(projectManger.debugsCode());


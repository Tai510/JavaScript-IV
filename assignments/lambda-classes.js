// CODE here for your Lambda Classes
class Person {
constructor(info) {
this.name = name.info;
this.age = age.info;
this.location = location.info;
this.gendere = gender.info;
}
speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}   
};

class Instructor extends Person {
constructor(info) {
super(info); 
this.specialty = specialty.info;
this.favLanguage = favLanguage.info;
this.catchPhrase = catchPhrase.info;
}
demo() {
    return `Today we are learning about ${this.favLanguage}`;
}
};

class Student extends Instructor {
constructor(info) {
super(info);
this.previousBackground = previousBackground.info;
this.className = className.info;
this.favSubjects = favSubjects.info;
}
listsSubjects() {
    return `Favourite Subjects: ${this.favSubjects} , ${this.favSubjects} , ${this.favSubjects}`;
}
PRAssignment() {
    return `${this.name} has submitted a PR for ${this.favSubjects}`;
}
};

class Instructor extends Student {
constructor(info) {
super(info);
this.gradClassNam = gradClassNam.info;
this.favInstructor = favInstructor.this;
}
standUp() {
    return `${this.name} announces to ${this.className}, @channel standy times!​​​​​`
}
debugsCode() {
    return `${this.name} debugs ${this.name}'s code on ${this.favLanguage}`
}
}

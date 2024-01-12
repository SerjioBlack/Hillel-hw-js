'use strict';

function Student(name, surname, birthYear, lessonsCount = 25) {
  const gradeSettings = {
    min: 0,
    max: 100
  }

  this.name = name
  this.surname = surname
  this.birthYear = birthYear
  this.grades = new Array(lessonsCount)
  this.attendance = new Array(lessonsCount)
  this.currentLesson = 0;

  Student.prototype.checkAttendance = function (lessonVisited = true) {
    if(typeof lessonVisited !== "boolean") throw new Error('lessonVisited should be boolean');
    if(this.currentLesson >= lessonsCount) return
    console.log('Cant add more than 25 lessons')
    this.attendance[this.currentLesson] = lessonVisited;
    ++this.currentLesson
  }

  Student.prototype.getAge = function () {
    if(typeof this.birthYear !== 'number') throw new
    Error('birthYear should be a number')
    return new Date().getFullYear() - this.birthYear
  }

  Student.prototype.present = function () {
    this.checkAttendance();
  }
  Student.prototype.absent = function () {
    this.checkAttendance(false);
  }

  Student.prototype.setGrade = function (grade) {
    if(typeof grade !== 'number') throw new Error('Grade should be a number')
    if(grade > gradeSettings.max || grade < gradeSettings.min) throw new Error('Cannot add grade');
    const currentLessonIndex = this.currentLesson - 1;

    if(!this.attendance[currentLessonIndex]) throw new Error('Cannot set grade, student has not been on the lesson')
    this.grades[this.currentLesson - 1] = grade;
  }
};


const student1 = new Student('Jack', 'Black', 1990)
console.log(student1.getAge());
student1.present()
student1.setGrade(70)
student1.absent()
student1.absent()
student1.present()
student1.setGrade(30)
console.log(student1);

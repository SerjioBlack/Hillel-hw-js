'use strict';

function getStudent() {
    const gradeSettings = {
        min: 0,
        max:100
    }

    function checkAttendance (lessonVisited = true, currentLesson, lessonsCount) {
        if(typeof lessonVisited !== "boolean") throw new Error('arg lessonVisited should be boolean');
        if(this.currentLesson >= lessonsCount) return console.log('Cant add more than 25 lessons')
        this.attendance[currentLesson] = lessonVisited;
    };

    function setGrade (grade, currentLesson) {
        if(typeof grade !== 'number') throw new Error('Grade should be a number')
        if(grade > gradeSettings.max || grade < gradeSettings.min) throw new
        Error('Cannot add grade');
        const currentLessonIndex = currentLesson - 1;

        if(!this.attendance[currentLessonIndex]) throw new Error('Cannot set grade, student has not been on the lesson')
        this.grades[currentLesson - 1] = grade;
    };

    function getAge () {
        if(typeof this.birthYear !== 'number') throw new Error('birthYear should be a number')
        return new Date().getFullYear() - this.birthYear
    };

    function getAverageGrade () {

        const filteredGrades = this.grades.filter(grade => typeof grade === 'number');

        if (this.grades.length === 0) {
            return 0
        }
        const sum = filteredGrades.reduce((total, grade) => total + grade, 0);
        return (sum / filteredGrades.length).toPrecision(2)
    };

    function summary () {
        const averageGrade = this.getAverageGrade();
        const attendanceRatio = this.attendance.filter(Boolean).length / this.attendance.length;

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return 'Молодець';
        } else if (averageGrade < 90 || attendanceRatio < 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }

    return function StudentConstructor(name, surname, birthYear, lessonsCount = 25) {

        let currentLesson = 0;

        return {
            name,
            surname,
            birthYear,
            grades: new Array(lessonsCount),
            attendance: new Array(lessonsCount),
            get currentLesson () {
                return currentLesson
            },

            getAge () {
                return getAge.call(this)
            },

            getAverageGrade() {
                return getAverageGrade.call(this)
            },

            summary() {
                return summary.call(this)
            },

            present () {
                checkAttendance.call(this, true, currentLesson, lessonsCount);
                ++currentLesson
            },
            absent () {
                checkAttendance.call(this, false, currentLesson, lessonsCount);
                ++currentLesson
            },
            setGrade (grade) {
                setGrade.call(this, grade, currentLesson)
            }
        }
    }
};

const Student = getStudent();

const student1 = new Student('Jack', 'Black', 1990)
student1.present();
student1.setGrade(30);
student1.absent();
student1.present();
student1.setGrade(60);
student1.absent();
student1.present();
student1.setGrade(80);
student1.present();
console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.summary());
console.log(student1);

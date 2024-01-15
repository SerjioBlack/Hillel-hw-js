class Student {
  constructor(name, surname, birthYear, lessonsCount = 25) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = new Array(lessonsCount);
    this.attendance = new Array(lessonsCount);
    this.currentLesson = 0;
  }

  checkAttendance(lessonVisited = true) {
    if (typeof lessonVisited !== 'boolean') {
      throw new Error('arg lessonVisited should be boolean');
    }
    if (this.currentLesson >= this.attendance.length) {
      throw new Error('Cant add more than 25 lessons');
      return;
    }
    this.attendance[this.currentLesson] = lessonVisited;
    this.currentLesson++;
  }

  setGrade(grade) {
    if (typeof grade !== 'number') {
      throw new Error('Grade should be a number');
    }
    if (grade < 0 || grade > 100) {
      throw new Error('Cannot add grade');
    }
    const currentLessonIndex = this.currentLesson - 1;
    if (!this.attendance[currentLessonIndex]) {
      throw new Error('Cannot set grade, student has not been on the lesson');
    }
    this.grades[this.currentLesson - 1] = grade;
  }

  getAge() {
    if (typeof this.birthYear !== 'number') {
      throw new Error('birthYear should be a number');
    }
    return new Date().getFullYear() - this.birthYear;
  }

  getAverageGrade() {
    const filteredGrades = this.grades.filter(
      (grade) => typeof grade === 'number',
    );
    if (filteredGrades.length === 0) {
      return 0;
    }
    const sum = filteredGrades.reduce((total, grade) => total + grade, 0);
    return (sum / filteredGrades.length).toPrecision(2);
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRatio = this.attendance.filter(Boolean).length / this.attendance.length;

    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return 'Молодець';
    } if (averageGrade < 90 || attendanceRatio < 0.9) {
      return 'Добре, але можна краще';
    }
    return 'Редиска!';
  }

  present() {
    this.checkAttendance(true);
  }

  absent() {
    this.checkAttendance(false);
  }
}

const student1 = new Student('Jack', 'Black', 1990);
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

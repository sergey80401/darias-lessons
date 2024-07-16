/*class Student {
    name;
    Mark;
    constructor(sName) {
        this.name = sName;
        this.marks = [];
    }
    getInfo() {
        console.log(`Name: ${this.name}, Marks: ${this.marks}`);
    }
    addMark(mark) {
        this.marks.push(mark);
    }
}
class Mark {
    discipline;
    score;
    constructor(mDiscipline, mScore) {
        this.discipline = mDiscipline;
        this.score = mScore;
    }
}
const sergey = new Student("Sergey", new Mark("Programming", 5));
const minibon = new Student("Minibon", "Eating", 2); */

const sergey2 = {
    name: "Sergey2",
    subjects: [
        { name: "Programming", score: 5 },
        { name: "Math", score: 5 },
        { name: "Huistory", score: 10 },
    ],
    getInfo() {
        console.log(`Name: ${this.name}`);
        for (let i = 0; i < sergey2.subjects.length; i++) {
            console.log(`Subjects: ${sergey2.subjects[i].name} - Score: ${sergey2.subjects[i].score}`);
        };
    }
};
sergey2.getInfo();

// Пушим чо хотим :
sergey2.subjects.push({ name: "Another Programming", score: 5 });

console.log(sergey2.subjects);
sergey2.getInfo();
/*
function getInfo(students) {
    // Надо реализовать функцию, которая в качестве параметров принимает массив объектов типа студент
    //  которая выводила бы в консоль информацию о об успеваемости студентов,
    // их оценки, средние баллы и средние баллы по дисциплинам
}
//console.log(sergey.marks);*/
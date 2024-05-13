class Student {
    name: string;
    marks: Mark[];
    constructor(studentName: string, studentMarks: Mark[]){
        this.name = studentName;
        this.marks = studentMarks;
    }
}

class Mark {
subject: string;
value: number;
constructor(studentSubject: string, studentValue: number){
    this.subject = studentSubject;
    this.value = studentValue;
}

public get _value(): number {
    return this.value;
}
public set _value(n: number) {
    if(n < 1 || n > 5){
        console.log("Нет таких оценок!");
    }
    else{
        this.value = n;
    }
}
}

const sergey = new Student("Sergey");
sergey.marks.push(new Mark("programming", 5));

function getInfo(students: Student[]): void {
// Надо реализовать функцию, которая в качестве параметров принимает массив объектов типа студент
//  которая выводила бы в консоль информацию о об успеваемости студентов,
// их оценки, средние баллы и средние баллы по дисциплинам
}
console.log(sergey.marks);
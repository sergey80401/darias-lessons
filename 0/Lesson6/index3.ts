class Student {
    name: string;
    mark: Mark[];

    constructor(sName: string) {
        this.name = sName;
        this.mark = [];
    }
    
    getInfo(): void {
        console.log(`Student name: ${this.name}`);
        console.log(`${this.name} is studying:`);
        let log = "";
        for (let i = 0; i < this.mark.length; i++) {
            log+=`${this.mark[i].name}, `; 
        };
        console.log(log.slice(0, -2));
        console.log(`and got Marks:`);
        for (let i = 0; i < this.mark.length; i++) {
            console.log(`${this.mark[i].name} - ${this.mark[i].score}`);
        };
    }
}

class Teacher {
    name: string;
    subject: string;
    constructor(tName: string, sName: string) {
        this.name = tName;
        this.subject = sName;
    }
    addMark(student: Student, score: number): void {
        student.mark.push(new Mark(this.subject, score));
    }
    getInfo(): void {
        console.log(`Teachers's name: ${this.name}`);
        console.log(`${this.name}'s teaching: ${this.subject}`);
    }
}

class Mark {
    name: string;
    score: number;
    constructor(mName: string, mScore: number) {
        this.name = mName;
        this.score = mScore;
        if (this.score < 0 || this.score > 5)
            throw new Error('Оценка должна быть в пределах [0; 5]');
    }
}
const sergey = new Student("Sergey");
//sergey.mark.push(new Mark("Programming", 5));
//sergey.mark.push(new Mark("Georgaphy", 5));
//sergey.mark.push(new Mark("Huistory", 2));
const minibon = new Teacher("Minibon", "Georgaphy");
const alia = new Teacher("AliaASSkerDICKovna", "Hiustory");
minibon.addMark(sergey, 5);
alia.addMark(sergey, 2);

sergey.getInfo(); minibon.getInfo(); alia.getInfo();
//minibon.getInfo();console.log(sergey.mark); console.log(sergey);

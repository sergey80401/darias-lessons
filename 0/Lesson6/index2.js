class Student {
    name;
    mark;
    constructor(sName) {
        this.name = sName;
        this.mark = [];
    }
    getInfo() {
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
    name;
    subject;
    constructor(tName, sName) {
        this.name = tName;
        this.subject = sName;
    }
    addMark(mark) {
        this.mark.push(mark);
    }
    getInfo() {
        console.log(`Teachers's name: ${this.name}`);
        console.log(`${this.name}'s teaching: ${this.subject}`);
    }
}

class Mark {
    constructor(mName, mScore) {
        this.name = mName;

        if (mScore < 0 || mScore > 5)
            throw new Error('Оценка должна быть в пределах [0; 5]');

        this.score = mScore;
    }
}
const sergey = new Student("Sergey");
sergey.mark.push(new Mark("Programming", 5));
sergey.mark.push(new Mark("Math", 5));
sergey.mark.push(new Mark("Georgaphy", 5));
sergey.mark.push(new Mark("Huistory", 2));

const minibon = new Teacher("Minibon", "Georgaphy");

sergey.getInfo(); minibon.getInfo();
//minibon.getInfo();console.log(sergey.mark); console.log(sergey);

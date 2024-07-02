var Student = /** @class */ (function () {
    function Student(sName) {
        this.name = sName;
        this.mark = [];
    }
    Student.prototype.getInfo = function () {
        console.log("Student name: ".concat(this.name));
        console.log("".concat(this.name, " is studying:"));
        var log = "";
        for (var i = 0; i < this.mark.length; i++) {
            log += "".concat(this.mark[i].name, ", ");
        }
        ;
        console.log(log.slice(0, -2));
        console.log("and got Marks:");
        for (var i = 0; i < this.mark.length; i++) {
            console.log("".concat(this.mark[i].name, " - ").concat(this.mark[i].score));
        }
        ;
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(tName, sName) {
        this.name = tName;
        this.subject = sName;
    }
    Teacher.prototype.addMark = function (student, score) {
        student.mark.push(new Mark(this.subject, score));
    };
    Teacher.prototype.getInfo = function () {
        console.log("Teachers's name: ".concat(this.name));
        console.log("".concat(this.name, "'s teaching: ").concat(this.subject));
    };
    return Teacher;
}());
var Mark = /** @class */ (function () {
    function Mark(mName, mScore) {
        this.name = mName;
        this.score = mScore;
        if (this.score < 0 || this.score > 5)
            throw new Error('Оценка должна быть в пределах [0; 5]');
    }
    return Mark;
}());
var sergey = new Student("Sergey");
//sergey.mark.push(new Mark("Programming", 5));
//sergey.mark.push(new Mark("Georgaphy", 5));
//sergey.mark.push(new Mark("Huistory", 2));
var minibon = new Teacher("Minibon", "Georgaphy");
var alia = new Teacher("AliaASSkerDICKovna", "Hiustory");
minibon.addMark(sergey, 5);
alia.addMark(sergey, 2);
sergey.getInfo();
minibon.getInfo();
alia.getInfo();
//minibon.getInfo();console.log(sergey.mark); console.log(sergey);

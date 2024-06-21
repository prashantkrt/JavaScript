const student = {
    fullName : "Prashant",
    marks: 89,
    printMarks: function (){
        console.log("marks=",this.marks);
    }
}

console.log(student.printMarks);

console.log(student.toString);
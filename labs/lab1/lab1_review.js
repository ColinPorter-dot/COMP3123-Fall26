let variableLocal = 200
var variableGlobal = 100
variableGlobal = "Hello"
console.log(variableGlobal)
// Prototype: one-time use obj created from
// the base prototype called Object
const newObject = {
    prop1: "Laily",
    prop2: "comp3123",
    method1: function(param1) {
        console.log(param1)
    }
}
console.log(newObject)
console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.method1("This is a pizza message.")

// Prototype: constructor (starts with uppercase; lowercase functions aren't constructors)
function Student(student_name, course, lunch) {
    this.prop1 = student_name
    this.prop2 = course
    this.prop3 = lunch
    
    this.method1 = function (param1) {
        console.log(param1)
    }
}

const student_morning = new Student("Colin", "comp3123", "kimbap")
console.log(student_morning)
console.log(student_morning.prop1)
console.log(student_morning.prop2)
student_morning.method1(student_morning.prop3)

// opt hw: instantiate another student object and print its values

// Prototype: Add a method after/in a separate file
// to give more capabilities to the prototype
Student.prototype.prop4 =  "hard-coded value"
Student.prototype.method2 = function(param1) {
    return param1
}

console.log(student_morning.prop4)
console.log(student_morning.method2("chow mein"))

// Classes
class Prof {
    constructor(prof_name_p){
        this.prof_name = prof_name_p    
    }

    method1(param1){
        return param1
    }
}

const morning_prof1 = new Prof("Laily")
console.log(morning_prof1)
// opt hw: call morning_prof's method and directly print its property
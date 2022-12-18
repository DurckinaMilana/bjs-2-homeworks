//**********Задача №1 ***********//

function parseCount(value) {
    let result = Number.parseInt(value);
    if (isNaN(result) === true) {
        throw new Error("Невалидное значение"); 
    } else {
    return result;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err){
        return err;
    } 
}

//**********Задача №2 ************//

class Triangle {
    constructor(a, b, c) {
        
        this.a = a;
        this.b = b;
        this.c = c;
        this.triangleCheck()
    }

    triangleCheck() {
        if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } 
    }
   
    getPerimeter() {
       return this.a + this.b + this.c;
    }

    getArea(){
        let p = 0.5 * (this.a + this.b + this.c);
        let s = parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return s;
     }
}

function getTriangle (a, b, c) {
    try {
        let t = new Triangle(a, b, c);
        return t;
    } catch (err) {
        return {
            getArea: function() {return "Ошибка! Треугольник не существует"},
            getPerimeter: function() {return "Ошибка! Треугольник не существует"}
          } 
    }     
}
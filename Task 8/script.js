/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

let calculator = new Calculator();
calculator.read();

console.log(calculator.sum() + '\n' + calculator.substraction() + '\n' + calculator.multiplication() + '\n' + calculator.division());

alert(calculator.sum() + '\n' + calculator.substraction() + '\n' + calculator.multiplication() + '\n' + calculator.division());

function Calculator() {
    this.read = function () {
        this.a = Number(prompt("a: ", 0));
        this.b = Number(prompt("b: ", 0));
    };
    this.sum = function () {
        return "Sum: " + (this.a + this.b);
    };
    this.substraction = function () {
        return "Substraction: " + (this.a - this.b);
    };
    this.multiplication = function () {
        return "Multiplication: " + (this.a * this.b);
    };
    this.division = function () {
        return "Dvision: " + (this.a / this.b);
    };
}
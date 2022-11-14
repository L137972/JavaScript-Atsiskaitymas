/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        if (this.budget > 100000000) return true;
        else return false;
    }
}

const film1 = new Movie("Film 1", "John Smith", 300000);
const film2 = new Movie("Film 2", "Jane Doe", 200000000);

console.log(film1.wasExpensive());
console.log(film2.wasExpensive());
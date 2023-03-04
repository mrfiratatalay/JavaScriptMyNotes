'use strict';

///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) --------------->>>>WRONGGG OLUCAK


/*
Burda kritik nokta objectimde islem yaparken Bracket notation[] kullanirken onun icerisine herhangi bir expression koyabilme yetkisine sahipkene bunu Dot Notationda yapamam.Cunku bu yetkiyi bana Dot notation saglamiyor.
*/
// Peki bunu bir ornekle nasil daha net halde gosterebilirim dersen asagidaki ornek yeterli.

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}



/* Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
Bu cumleyi template literals kullanarak hem DOT hem de BRACKET NOTATIONS kullanarak asagida konsolda yazdirdim.Ikisinede hakim olmak zorundayim.
*/
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]}`);



///////////////////////////////////////
// Object Methods

const firat = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};


// Objemin icerisinde yer alan methodu hem DOT hemde BRACKET NOTATION kullanrak cagirdim.
// ---------Objenin icerisinde olusturdugun fonksiyona method diyoruz------------------------
console.log(firat['calcAge']());
console.log(firat.calcAge());

console.log(firat.getSummary());
console.log(firat['getSummary']());








// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
/*
Bu metni objemin icerisnde yarattigim getSummary methodumla konsola yazdirabilmek icin dikkat edersen this keywordunu kullandim.Peki neden gerekli bu dersen sebebi objemin icerisinde yer alan property name' leri methodumun icersinde kullanmak istedigimde bana cok buyuk pratiklik sagliyor.Sen diyebilirsin bana neden direkt o property name oldugu gibi atifta bulunmuyorum?
Bunun nedeni hard code yazmak APTALLIKTIR.Cunku objemi saklayan firat degisken adim degisebilirdi.Bu sebeple this keyword her zaman objemin icerisindeki methodlarda kullanicam.
--------------EKSTRA OLARAK DIKKAT ETTIYSEN OBJENIN ICERISINDE YER ALAN METHOTLARIMDA PARAMETRE BULUNMAMAKTADIR.----------------- 
*/

/*
 getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
}
console.log(firat.getSummary());
*/
'use strict';

///////////////////////////////////////
// ES6 Classes
/////////////////////////////////////////////

// Class expression
//Bu sekilde de class'larimi olusturabilirdim:)
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet();

/*
Yukarida ES6 CLASS'lari kullanarak nasil istedigim ozelliklerde yeni instance'lar yani object'ler yaratabilirim onu gordum.Olayin ozeti;
Oncelikle butun class'larin ozel bir function oldugunu aklinda her zaman bulundur.Bundan dolayi class'lari olustururkene declaration ya da expression formunda yaratabilirim. Bu ornekte declaration olarak class'imi olusturdum.Onun icerisine constructor function'umu ekleyip belli ozellikleri koydum.Bu ozellikleri sonradan bu class'imi cagirdigim zaman tum object'lerim kendisine kopyalayacaktir. Constructor function'umun disina ise protypal inheritance'la aktarilmasini istedigim methodlari yaziyorum.Bu methodlar bu classimin prototype object'inin icinde yer alan property'ler haline gelmis olucak.Dolayisiyla bu class'imin prototype ozellikleri olmus olacagindan new keywordumu kullanarak bu class'imi cagirdigim andan itibaren tum bu method ya da ozellikler o yeni olusacak object'im tarafindan miras alinmis olucak--------BU PROTOTYPAL INHERITANCE/DELEGATION'ININ KENDISIDIR.

YANI KISACA CLASS'IMIN ICERISINDEYKEN CONSTRUCTOR FUNCTIONUMUN DISINA KOYDUGUM TUM BU METHOD YA DA PROPERTY'LERIM O CLASS'IMIN PROTOTIP OZELLIGIDIR VE DOLAYISIYLA O CLASS'I KULLANRAK OLUSAN OBJECT'LERIMIN ISE PROTOTYPE'DIR.

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
AYRICA YUKARDA OLDUGU GIBI,
Istersem yine kendime disarda manuel olarak bu class'imin sahip oldugu protype oject'ine  herhangi bir methodumu ya da ozelligi prototype ozelligi olarak ekleyebilirim
*/

/////////////DIKKKAT ONEMLI NOKTALAR:
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
//(Usttekinin meali,class'lar birer ozel funct old icin herhangi bir fonksiyonuma arguman olarak atayip return edebilrim)
// 3. Classes are executed in strict mode

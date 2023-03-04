'use strict';
///////////////////////////////////////
// Prototypes

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const jonas = new Person('Jonas', 1991);
const matilda = new Person('matilda', 2000);
console.log(jonas);

/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////
// Prototypes

/*
Ilk olarak, JavaScript'teki her bir fonksiyonun otomatik olarak 'prototype' adinda bir ozelligi vardir. Ve bu prototype ozelligi ayni zamanda bir OBJECT'dir. Ve buna elbette constructor function'larim da dahildir. Artik belirli bir constructor function'um tarafindan olusturulan her object, constructor function'umun prototype ozelligi olan object'imde tanimladigimiz(Person.prototype'nin icini kastediyorum) tum methodlara ve ozelliklere erisebilecektir. Yani constructor functionum'un prototype objesindeki ozellikler buradaki constructor function araciligiyla olusturulan tum object'lerim tarafindan miras alinacaktir(PROTOTYPAL INHERITANCE/DELEGATION), dolayisiyla bu 'Person.prototype' da tanimlanan tum methodalara ve ozelliklere erisebileceklerdir.
*/

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);

/*
Yukarida constructor functionumun protype ozelligini kullanarak calcAge methodunu Person.protype'in icine bir ozellik olarak ekledim.Daha sonrasinda ise konsolumda constructor functionumun prototype'nin icerisinde yer alan ozellikleri gormeyi sagladim ki calcAge methodu artik ordaydi.
*/

console.log(jonas.__proto__); //jonas 'in prototipi neyse onu dondurecek.Ki burda Person.prototype dir.

console.log(jonas.__proto__ === Person.prototype);
//Constructor function'dan uretilen objelerimin prototype === Constructor function'umun prototype ozelliginin icerigi

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

/*
Yukarda demek istedigimin meali;
Person.prototype jonas object'imin protype'dir.Fakat Person constructor function'umun prototype degil prototype ozelligidir.
*/

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
jonas.calcAge();

/*
Yukarda constructor functionum'un prototype ozelligini kullanarak kendime  yeni 1 method ve 1 ozellik ekleyip bu ozellikleri o constructor function tarafindan onceden uretilen object'ler tarafindan  burda jonas object'im tarafindan cagirabilir veya kullanabilirim cunku o ozellikler constructor function'umun prototype ozellikleri olup ---yani Person.prototype-- bu da ayni zamanda jonas object'imin prototype olmus oluyor ve bunu bana saglayan mekaznizmaya PROTOTYPAL INHERITANCE YA DA DELEGATION diyorum.
*/

console.log(jonas.hasOwnProperty('firstName')); //jonas object'imin  kendisinin 'firstName' adinda sahip oldugu bir ozellik mevcut.
console.log(jonas.hasOwnProperty('species')); //jonas object'imin  kendisinin 'species' adinda sahip oldugu bir ozellik mevcut degil fakat jonas object'imin prototype'inin yani 'Person.prototype' nin species adinda bir ozelligi tabii var.BU IKISI AYNI SEY DEGILDIR ANLAM OLARAK...

///////////////////////////////////////
/*

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

 Yani burada bu calcAge methodumun bir kopyasini olusturmus ve her bir object'ime eklemis oluruz. Iste bu yuzden bunu yapmiyoruz. Cunku hayal etsene bu constructor function'umdan belki binlerce object'ler olusturucam ve hepsinin icersinde ayni method bulunmus olucak bu berbat bir durum meydana getirirdi,optimizasyon acisindan. Bunun yerine o methodu ya da ozelligi constructor function'umun prototip ozelligi olarak ekleyip daha sonrasinda o constructor function'dan oncesinde uretilen object'leri tarafindan kullaniyoruz. Cunku artik  bu durumda bu calcAge methodumun yalnizca bir kopyasi bulunmaktadir.(Ne sayesinde dersen PROTOTYPAL INHERITANCE/DELEGATION) Yani bunlardan yalnizca biri mevcuttur, ancak bu constructor function kullanilarak olusturulan tum nesneler temelde bu methodu kendi uzerlerinde yeniden kullanabilir.

 */

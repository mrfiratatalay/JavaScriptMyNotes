'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
/*
Oncelikle asagida yaptigim gibi kendime bir constructor function olusturmak icin "BUYUK HARF" kullaniyorum. Constructor function'imi function expression ya da function decleration olarak olusturabilirim ama arraw function ile kendime constructor function olusturamam CUNKU ARROW FUNCTION'UM KENDI this keyword'una SAHIP DEGILDI. 
*/
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

/*
Constructor function'umun normal fonksiyonlarimdan tek farki constructor funct 'New' keywordu ile cagiriyor olmamdir.
Iste tam o  new keywordu ile cagrilma anindan itibaren 
1-)ilk adim olarak constructor function'im bana ici bos bir object yaratacak.
2-)Artik this keywordum ici bos olan yeni objemi isaret etmis olucak.
3-)Ici bos olan bu objem constructor function'umun prototype object'ine baglantilanacak.
4-)Constructor function'um otomatik olarak bu object'imi return edecek.
*/

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);
/*
Yukarda seninde gordugun gibi constructor functionum kullanilarak istedigim ozellikleri tasiyan farkli objeler yaratabiliyorm.Tipki sana en basinda bahsettigim geleneksel OOP de oldugu gibi. Klasik OOP 'de class'lar vardi ve ben o classlari kullanarak --plan gibiydi bu classlar--  istedigim ozelliklerde object 'ler olusturuyordum o yeni object 'lerime INSTANCE diyordum.Aslinda burda da sahip oldugum constructor function'larim sanki Class'mis gibi dusunulebilr.Cunku onlarda tipki insaa etmek istedigim evin temel ozlelliklerini tasiyan bir plandir.Dolayisiyla burda da constructor function'larimdan urettigim yeni object'lerim birer INSTANCE'dir ki zaten yukarda da bunun bizzat saglamasini yaptim.
*/

/*
Constructor funct. JavaScript dilinin bir özelliği olmadığını unutmayın. Bunun yerine, diğer geliştiriciler tarafından geliştirilmiş bir modeldir. Ve şimdi herkes basitçe bunu kullanıyor. Ve buna artık yeni bir geliştirici olarak siz de dahilsiniz. Yani buradaki asıl sihir bu New operatorudur.
*/

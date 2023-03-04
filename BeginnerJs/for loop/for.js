'use strict';


// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    13,
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];


const firat = [];

/*
Simdi burda sahip oldugum arrayimin elemanlarini for dongusunde tersine dongu yaratarak firat adinda yeni bir array'in icerisine bu elemanlari pusluyacagim.
*/

for (let i = jonas.length - 1; i >= 0; i--) {
    const temporary = jonas[i];
    firat.push(temporary);

    // Burda jonas arrayimdeki elemanlarimi konsoluma tersten yazdim ekstra olarak.
    console.log(`${jonas[i]}, ${i}`);
}

console.log(firat);







/*
Simdi bu noktadan itibaren for dongusunu kullanarak for icinde for dongusu nasil olusturabilirim bunu ogrenecegim.Bu ornekte amacim 5 ana egzersiz basligi altinda 10 kez tekrar yapmak olucak.
*/

for (let e = 1; e <= 5; e++) {
    console.log(`-------- Starting exercise ${e}`);

    for (let i = 1; i <= 10; i++) {
        console.log(`Exercise ${e}: Lifting weight repetition ${i} 🏋️‍♀️`);
    }
}











// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}


/*
Yani ben if ile beraber kullanabilecegim bu continue ile eger bu dongumun icersindeki if blogundaki sarti sagliyorsa onu ATLAMAK KAYDIYLA konsola bu ifadeyi yazdir dedim.Seninde gordugun gibi jonas arrayimdeki ilk eleman jonas stringi.Ve bu if blogunu saglamadigi icin continue ile gelen ATLA davranisinin uzerinde bir etkisi olmayacagindan consola yazdiriliyor ama jonas arrayimdeki ikinci eleman olan 13 bu if blogundaki sarti sagladigi icin contiinue devreye girip ONU ATLATIYOR ve bu durumda konsola yazdirma fonksiyonu 13 numarasi icin aktif olmamis oluyor.
*/


console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

/*
Burda dongumun icinde if in yaninda kullandigim BREAK anahtar sozugumle yaptigim sey if blogundaki sartim saglandimi donguyu DURDUR.Bu ornekte arrayimin ilk elemani jonas stringim.If blogundaki sartimi saglamadigi icin Break devtreye giremedi ve konsolda yazdirma islemi calisti ama seninde gordugun gibi bu arrayimin ikinci elemani bir number ve bu if blogumdaki sarti sagladigi icin BREAK DEVREYE GIRIP STOP DEDI ve dongu calismayi durdurdu.Konsola yazdirma kismina gecemedi bile.
*/
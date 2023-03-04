'use strick';

/*
Simdi burda cok onemli bir noktaya deginecegim. FOR ve WHILE LOOP arasindaki en temel fark for dongumun calisabilmesi icin  daima bir counter gerekmekteyken While dongumde boyle bir sart yoktur.
-------Peki ne demek istiyorum counter ile;
For dongusunun bir sayaca ihtiyacinin olmasi demek benim olusturacagim islem belli birsayida tekrar ediccekse ve ben bu sayinin kac kere oldugunu biliyorsam o islem icin counter gereken bir dongu kullanmaliyim yani for bunun icin ideal olucaktir.Tabii istersem While dongusunude kullanabilirim ama ideal olan For dongusu olucak bu noktada.
*/

for (let i = 0; i <= 10; i++) {
    console.log(`FOR:Lifting weights repetition ${i} 🏋️‍♀️`);
}

/*
Ayni donguyu while ile de yapabilirim.Sunu kesinlikle bilmeni ve unutmamani istiyorum. While dongum tek part'dan olsur for dongusunun aksine.O part kismida SART BLOGU KISMI dir.Ama bu islem icin counter yani sayac gerektiginden tipki for dongusu gibi 3 parttdan olusucaktir. Bu part kisimilari forda oldugu gibi hepsi icerde degil alttaki gibi olmak zorundadir.
*/

let i = 0;
while (i <= 10) {
    console.log(`WHILE:Lifting weights repetition ${i} 🏋️‍♀️`);
    i++;
}





// WHILE DONGUSUNUN GERCEK MANADA KULLANIM YERI ISE
/*
Yapacagim islemin kac defa gerceklesmesi gerektigi hakkinda hicbir fikrim yoksa o zaman yaratmam gereken dongu while dongusu olmalidir.Misal bir zar aticam o zarin 6 gelene kadar atilmasini isteyip 6 elde edildigi anda durmasini istersem bu repetition islemi icin while dongusu idealdir.Seninde fark edecegin gibi boyle bir dongude tek ihtiyacim olan sey WHILE IN ICINDEKI SART BLOK KISMIDIR. Yani teknik olarak while dongusu tek bir part'dan olusuyor o kisimda SART kismi. Ve o sart blogu kismim saglandigi surece while dongum calisacaktir.
*/


// Bu zar ornegini uygulamaya sokarsam eger;

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}


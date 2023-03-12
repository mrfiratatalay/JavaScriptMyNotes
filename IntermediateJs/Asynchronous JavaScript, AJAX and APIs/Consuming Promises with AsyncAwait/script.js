'use strict';

///////////////////////////////////////
// Consuming Promises with Async/Await
///////////////////////////////////////
const whereAmI = async function () {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  console.log(res);
};

whereAmI('portugal');
console.log('FIRST');

//SUMMARIZE:
/*
Kendime asenkron olarak calisan bir fonksiyonu yaratip ---> Bunun icin bu "async" keywordunu fonksiyonumun onune koy.
Bu async fonksiyonumun icerisine birden fazla promise ureten ifadeyi yani statement'lari toplu bir sekilde "await" keywordu'umu kullanarak ekleyebilirim.
//
En ustteki ornegimde de once bu asenkron olan fonksiyonumu cagirip sonrasinda da normal bi sekilde konsala yazi bastirmaya calistim, bakalim hangisi once calisacak bunu gorebilmek bu ornegi yaptim.
Ve sonuc olarak gercektende once konsolda FIRST yazisini sonrada asenkron olan fonksiyonumun icerisinde bildirmis oldugum await keywordumla uretilen promise'lerimin ciktisini gordum
*/

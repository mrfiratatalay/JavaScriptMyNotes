'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////////////
// consumingPromises and FETCH-API
///////////////////////////////////////////////

//********  Normal expr-function kullanark fetch API'dan veri alabilirim   ***********************

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//FAKAT ARROW FUNCTION KULLANMAK BURDA GOZE DAHA COK HITAP EDIYOR...

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    });
};

getCountryData('portugal');

/*****OZET****
Once "fetch" ile Online API'dan verinin asenkron bicimde alinmasini baslattim.
------> fetch(`https://restcountries.com/v3.1/name/${country}`)

//
Bu fetch metodu asenkron olarak verimi yavas yavas API'dan alimimi gerceklestirirkene cikti olarak
baslangicta bana bir "PROMISE" dondurecek.Ve bu PROMISE'imin bir Obje oldugunu ve daima en basta default olara "PENDING" yani bekleme aninda oldugunu bilmelisin. Arka planda bu promise'imin pending durumu yavas yavas ortadan kalkiyor cunku istedigim veriyi arka planda yavas yavas elde ediyorum.
Sonrasinda benim bu promise'im pending durumundan kendinisini cikardiktan sonra "SETTLED" durumuna getirecek. BU DURUMDA son olrak promisem veri almayi basarili sekilde asenkron olarak tamamlarsa "FULLFILLED" , basarisiz olarak tamamlarsa "REJECTED" olucak.  

////
Ben promisemin pending durumunda veriyi arka planda almaya devam ederken, SETTLED haline geldiginde veri aliminin basarili oldugunu kabul edip almak istedigim veriyi konsolda goruntuleyebilmek icin ya da manipule edebilmek icin "then" metodunu kullanicam.Bu "then" metodum basarili
parametre aliyor. 
 1.PARAMETREM, SETTLED DURUMU FULFILLED OLURSA NE YAPILSIN?
 2.PARAMETREM SETTLED DURUMU REJECTED OLURSA NE YAPILSIN?

 -------->   fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
      console.log(response);
    }

Yukardaki kodumda FULFILLED durumunda alinan data neyse yani responsem onu konsola yazdir,dedim.
Fakat seninde fark ettigin gibi bu response benim isime yarayamiyor cunku bu konsoldaki ciktinin body stream kisminda ulkenin bilgileri yer aliyor ve burda kilitli benim asil amacim  bu verileri elde etmekti,Peki bunu nasil yapicam?
Asil istedigim bu veriyi elde edebilmek icin bu response'mu "JSON" metodumla cagirmaliyim.
JSON methodum arka planda 2.bir asenkron cagrisi gerceklestirecek.Yani ikinci bir promise tetikleyecek.Ben iste o 2. promisimin data'sini istiyorum.
Buyuzden bu sekilde then metoduyla promisleri birbirine baglamam gerekti.


//----->  
fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);   //ASIL ISTEDIGIM DATA BUYDU:>//
    });
};
*/

///////////////////////////////////////

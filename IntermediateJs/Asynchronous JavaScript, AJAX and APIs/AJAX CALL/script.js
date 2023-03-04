/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
*/
'use strict';
const countriesContainer = document.querySelector('.countries');

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/usa');
// request.send();
// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
// });

/*
Bu ustte AJAX CALL cagrisini eski yontem ile yaparak public API'imdan verileri XML formatinda alip onu JSON formatina donusturdum.Cunku biz artik XML yerine JSON tercih ediyorsuz.
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/usa');
request.send();
request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
      <p class="country__row"><span>💰</span>${data.currencies.USD.name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});

/*
TUM BU YAPTIKLARIMI REFACTORING ILE DAHA DUZENLI VE ANLASILABILIR BIR FONKSIYON HALINE GETIRIP O FONKSIYONUMA DA BIR ULKE ISMI PARAMETRESINI DINAMIK BIR SEKILDE ATAYIP ISTEDIGIM ULKEYI BANA CIKTI OLARAK VERMESINI SAGLATABILIRIM, TIPKI ASAGIDA YAPTIGIM GIBI...
*/
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//       <p class="country__row"><span>💰</span>${data.currencies.USD.name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');

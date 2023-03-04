'use strict';

/*
Benim bu projede amacim cok net.

Ekrandaki butonlardan herhangi birine tiklanirsa karsima bir pop-up ac ve bu pop-up ile ekranin geri kalanini bana bulaniklastir.

Ikinci asamada bu pop-up kapatmak istersen bunu 3 yolla gerceklestir:
1-)closeModal yani pop-up'imda bulunan carpi isaretine basarak,
2-)Ekranin bulanik kismina tiklayarak,
3-)ESC tusuma basarak.

*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
/*
 BU USTTE show-modal butonlarimi tek seferde querySelectorAll kullanarak array biciminde
 ---kesin olarak array denemzsede o bicimde kabul et kafanda tipki asagidaki gibi..
 console.log(btnsShowModal);
 NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
 ---
 secebilirim.Diger turlu normal bicimde querySelector kullansaydim direkt ilk classi barindirani yani ilk show model-1 butonumu secicekti.
*/

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

/*
Bu ustte hatirlamalisin ki querySelectorAll bu 3 butonu array formunda olusturup btnsShowModel adinda degiskene atamistim. Sonra ustteki for dongumle bu arraydeki her bir elemani yani teknik olarak butonuma addEventListener olusturarak gerceklesmesini istedigim olaylari saglattim.Farkindaysan addEventListener' imin icerisinde fonksiyonu yaratmak yerine disarda bu fonksiyonu tanimlayip o degisken araciligiyla buraya dahil ettim.Bunun sebebi okunabilirlik daha kolay hale geldi.
*/

const btnCloseModal = document.querySelector('.close-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

/*
close-modal classina sahip olan carpi isaretli olan butonuma tikladigimda olmasini istedigim ozellikleri closeModal fonksiyonumu kullanarak addEventListener araciligiyla devreye soktum.
*/

overlay.addEventListener('click', closeModal);
// Bulanik olan yere tikladigim zamanda yukarda gerceklesen ayni olaylara sahip olmak istiyorum dedim.

/*
document.addEventListener('keydown', function (e) {
  console.log(e);
});
Bu ustteki kod ile klavyemde basilan tusun ne oldugunu gormek istiyorsam global birsekilde document'a addEventListener ekleyip artik bu Listener'imin 1.parametresi click degil keydown yani o tusa basar basmaz goster manasina geliyor,kullanicam vee kritik nokta su ki addEventListener'imin 2.parametresi olan fonksiyonuma bu sefer e adinda bir parametre ekliyorum ki bunun sonucunda ben hangi tusa basarsam bastigim tusu icinde barindiran bir object olucacak ve o parametreme arguman olarak aktarilicak.
*/

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

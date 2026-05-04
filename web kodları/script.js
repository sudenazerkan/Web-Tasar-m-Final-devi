const etkinlikler = [
  {
    id: 1,
    title: "Candles and Echoes ",
    category: "Konser",
    date: "2026-06-03",
    time: "20:45",
    venue: "Mersin Yenişehir AKM",
    district: "Yenişehir",
    price: 450,
    image:"images/candles-echoes.jpg",
    description: "Müzik, ışık ve sahne performanslarını bir araya getiren özel sanat etkinliği.",
    organizer: "Bubilet",
    status: "Aktif"
  },
  {
    id: 2,
    title: "Tuğkan Konseri",
    category: "Konser",
    date: "2026-04-22",
    time: "20:00",
    venue: "6:45 Pub",
    district: "Mezitli",
    price: 500,
    image: "images/tugkan-konser.jpg",
    description: "Akustik ve pop müzik gecesi.",
    organizer: "Ticketle",
    status: "Aktif"
  },
  {
    id: 3,
    title: "Mersin Üniversitesi Kültür Şenliği",
    category: "Festival",
    date: "2026-05-02",
    time: "10:00",
    venue: "Çiftlikköy Kampüsü",
    district: "Yenişehir",
    price: 0,
    image:"images/kultur-senligi.jpg",
    description: "Öğrenci kulüpleri, konserler, workshoplar ve spor etkinlikleri.",
    organizer: "Mersin Üniversitesi",
    status: "Yakında"
  },
  {
    id: 4,
    title: "Tarsus Yarı Maratonu",
    category: "Spor",
    date: "2026-04-28",
    time: "09:00",
    venue: "Cumhuriyet Meydanı",
    district: "Tarsus",
    price: 0,
    image: "images/tarsus-maraton.jpg",
    description: "Uluslararası katılımlı yarı maraton.",
    organizer: "Tarsus Belediyesi",
    status: "Aktif"
  },
  {
    id: 5,
    title: "Cyrano de Bergerac Bale Gösterisi",
    category: "Tiyatro",
    date: "2026-04-20",
    time: "20:30",
    venue: "Mersin Opera Sahnesi",
    district: "Akdeniz",
    price: 300,
    image: "images/bale-gosterisi.jpg",
    description: "Mersin Devlet Opera ve Balesi özel gösterisi.",
    organizer: "MDOB",
    status: "Aktif"
  },
  {
    id: 6,
    title: "Seramik Workshop",
    category: "Workshop",
    date: "2026-04-19",
    time: "14:00",
    venue: "Mersin Marina Sanat Atölyesi",
    district: "Yenişehir",
    price: 250,
    image: "images/seramik-workshop.jpg",
    description: "Başlangıç seviyesine uygun seramik atölyesi.",
    organizer: "Marina Art",
    status: "Aktif"
  },
   {
      id: 7,
      title: "4. Mersin Kore Kültür Günü",
      category: "Kültür",
      date: "2026-02-18",
      time: "16:00",
      venue: "Prof. Dr. Uğur Oral Kültür Merkezi",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/kore-kultur.jpg",
      description: "Hanbok deneyimi, Kore kaligrafisi, geleneksel oyunlar, K-Pop gösterileri ve Taekwondo gösterileriyle kültürel etkinlik.",
      organizer: "Mersin Üniversitesi Eğitim Fakültesi",
      featured: true,
      status: "Geçmiş"
    },
    {
      id: 8,
      title: "Erasmus+ Staff Week ve eTwinning Toplantısı",
      category: "Akademik",
      date: "2026-04-13",
      time: "10:00",
      venue: "Prof. Dr. Uğur Oral Kongre Merkezi",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/erasmus-toplanti.jpg",
      description: "Uluslararası akademisyenlerin katıldığı Erasmus+, eTwinning, öğretmen eğitimi ve uluslararası iş birliği temalı toplantı.",
      organizer: "Uluslararası İlişkiler ve Proje Koordinatörlüğü",
      featured: true,
      status: "Geçmiş"
    },
    {
      id: 9,
      title: "Mimarlık Fakültesi Kariyer Günleri",
      category: "Kariyer",
      date: "2026-03-03",
      time: "14:00",
      venue: "Mimarlık Fakültesi",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/mimarlik-kariyer.jpg",
      description: "Mezunların mesleki deneyimlerini ve kariyer yolculuklarını öğrencilerle paylaştığı kariyer etkinliği.",
      organizer: "Mersin Üniversitesi Mimarlık Fakültesi",
      featured: true,
      status: "Geçmiş"
    },
    {
      id: 10,
      title: "MÜTBAT Türk Halk Müziği Konseri",
      category: "Kültür",
      date: "2026-03-30",
      time: "20:00",
      venue: "Yenişehir Atatürk Kültür Merkezi Cumhuriyet Salonu",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/turk-halk-muzigi.jpg",
      description: "Tıp Fakültesi öğrencilerine burs desteği amacıyla düzenlenen sosyal sorumluluk temalı konser.",
      organizer: "Mersin Üniversitesi Tıp Fakültesi",
      featured: true,
      status: "Geçmiş"
    },
    {
      id: 11,
      title: "Mersin Üniversitesi'nde Satranç Turnuvası",
      category: "Spor",
      date: "2026-04-20",
      time: "11:00",
      venue: "Mersin Üniversitesi Kampüsü",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/satranc-turnuvasi.jpg",
      description: "Üniversite öğrencilerini bir araya getiren satranç turnuvası.",
      organizer: "Mersin Üniversitesi",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 12,
      title: "Madde Bağımlılığıyla Mücadele Eğitimi",
      category: "Sağlık",
      date: "2026-05-20",
      time: "14:00",
      venue: "Mersin Üniversitesi Tıp Fakültesi",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/bagimlilik-egitim.jpg",
      description: "Tıp Fakültesi'nde madde bağımlılığıyla mücadele konusunda bilinçlendirme eğitimi.",
      organizer: "Mersin Üniversitesi Tıp Fakültesi",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 13,
      title: "Onkolojiye Multidisipliner Yaklaşım Sempozyumu",
      category: "Sağlık",
      date: "2026-06-20",
      time: "15:30",
      venue: "Mersin Üniversitesi Tıp Fakültesi",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/onkoloji-sempozyum.jpg",
      description: "Onkoloji alanında farklı disiplinlerin birlikte ele alındığı akademik sempozyum.",
      organizer: "Mersin Üniversitesi Tıp Fakültesi",
      featured: true,
      status: "Geçmiş"
    },
    {
      id: 14,
      title: "62. Kütüphane Haftası Etkinlikleri",
      category: "Kültür",
      date: "2026-05-27",
      time: "12:00",
      venue: "Mersin Üniversitesi Kütüphanesi",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/kutuphane-haftasi.jpg",
      description: "Kütüphane Haftası kapsamında düzenlenen kültürel ve akademik etkinlikler.",
      organizer: "Mersin Üniversitesi",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 15,
      title: "Dünya Su Günü ve Su Sorunları Çalıştayı",
      category: "Akademik",
      date: "2026-03-26",
      time: "11:00",
      venue: "Mersin Üniversitesi",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/su-calistayi.jpg",
      description: "Dünya Su Günü kapsamında su sorunları ve sürdürülebilirlik konularının ele alındığı çalıştay.",
      organizer: "Mersin Üniversitesi",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 16,
      title: "MEDEK Akreditasyon Eğitimi",
      category: "Akademik",
      date: "2026-05-20",
      time: "10:00",
      venue: "Teknik Bilimler Meslek Yüksekokulu",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/medek-egitim.jpg",
      description: "Teknik Bilimler MYO'da MEDEK akreditasyon sürecine yönelik eğitim programı.",
      organizer: "Teknik Bilimler Meslek Yüksekokulu",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 17,
      title: "İş Sağlığı ve Güvenliği Bilgilendirme Toplantısı",
      category: "Seminer",
      date: "2026-05-25",
      time: "13:30",
      venue: "Teknik Bilimler Meslek Yüksekokulu",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/is-guvenligi.jpg",
      description: "Öğrencilere ve personele yönelik iş sağlığı ve güvenliği bilgilendirme toplantısı.",
      organizer: "Teknik Bilimler Meslek Yüksekokulu",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 18,
      title: "Kariyer, Yönetim ve Başarı Semineri",
      category: "Kariyer",
      date: "2026-06-05",
      time: "14:00",
      venue: "Teknik Bilimler Meslek Yüksekokulu",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/kariyer-seminer.jpg",
      description: "Otomotiv sektörü üzerinden kariyer, yönetim ve başarı konularının anlatıldığı seminer.",
      organizer: "Teknik Bilimler Meslek Yüksekokulu",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 19,
      title: "Bulaşıcı Hastalıklardan Korunma Eğitimi",
      category: "Sağlık",
      date: "2026-02-18",
      time: "09:30",
      venue: "Sağlık Hizmetleri Meslek Yüksekokulu",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/hijyen-egitim.jpg",
      description: "Bulaşıcı hastalıklar ve korunma yolları hakkında bilgilendirme eğitimi.",
      organizer: "Sağlık Hizmetleri Meslek Yüksekokulu",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 20,
      title: "İstabot İstatistik Yazılımı Webinarı",
      category: "Workshop",
      date: "2026-05-12",
      time: "15:00",
      venue: "Çevrim İçi",
      district: "Online",
      price: 0,
      currency: "TRY",
      image: "images/istatistik-webinar.jpg",
      description: "İstatistik yazılımı kullanımı üzerine çevrim içi bilgilendirme webinarı.",
      organizer: "Sağlık Hizmetleri Meslek Yüksekokulu",
      featured: false,
      status: "Geçmiş"
    },
    {
      id: 21,
      title: "Yaşlılara Saygı Haftası Etkinliği",
      category: "Sosyal Sorumluluk",
      date: "2026-05-18",
      time: "13:00",
      venue: "Sağlık Hizmetleri Meslek Yüksekokulu",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/yaslilara-saygi.jpg",
      description: "Yaşlılara Saygı Haftası kapsamında bilim, sanat ve deneyimi bir araya getiren etkinlik.",
      organizer: "Sağlık Hizmetleri Meslek Yüksekokulu",
      featured: true,
      status: "Geçmiş"
    },
    {
      id: 22,
      title: "Mersin Üniversitesi Bahar Şenlikleri",
      category: "Kültür",
      date: "2026-05-15",
      time: "10:00",
      venue: "Çiftlikköy Kampüsü",
      district: "Yenişehir",
      price: 0,
      currency: "TRY",
      image: "images/bahar-senlikleri.jpg",
      description: "2025-2026 akademik takviminde yer alan bahar şenlikleri kapsamında öğrenci etkinlikleri, müzik, spor ve kulüp faaliyetleri.",
      organizer: "Mersin Üniversitesi",
      featured: true,
      status: "Yakında"
    }
]


document.addEventListener("DOMContentLoaded", function(){

if(document.getElementById("event-container") && !window.location.pathname.includes("favoriler.html")){

let userEvents=
JSON.parse(
localStorage.getItem("userEvents")
)||[];


let duzenlenmisUserEvents=
userEvents.map(
function(item,index){

return{
id:100+index,
title:item.title,
category:item.category,
date:item.date,
time:item.time,
venue:item.venue,
district:"Mersin",
price:item.price,
image: item.image || "https://picsum.photos/600/400",
description:item.description,
organizer:"Kullanıcı",
status:"Yakında"
};

}
);


let tumEtkinlikler=
[
...etkinlikler,
...duzenlenmisUserEvents
];


window.tumEtkinlikler=
tumEtkinlikler;

etkinlikleriGoster(
tumEtkinlikler
);
const gelenArama = localStorage.getItem("navbarArama");

if(gelenArama){
    const sonuc = tumEtkinlikler.filter(function(event){
        return event.title.toLowerCase().includes(gelenArama.toLowerCase()) ||
               event.category.toLowerCase().includes(gelenArama.toLowerCase()) ||
               event.venue.toLowerCase().includes(gelenArama.toLowerCase());
    });

    etkinlikleriGoster(sonuc);
    localStorage.removeItem("navbarArama");
}
}

});
// Etkinlik listesini kart yapısında ekrana gösterir
function etkinlikleriGoster(liste) {
  const container = document.getElementById("event-container");
  container.innerHTML = "";

  if (liste.length === 0) {
    container.innerHTML = "<p>Bu kategoride etkinlik bulunamadı.</p>";
    return;
  }

  liste.forEach(function (event) {
    container.innerHTML += `
      <div class="event-card"
onclick="window.location.href='detay.html?id=${event.id}'">
        <img src="${event.image}" alt="${event.title}">
<div class="price-badge">

    ${event.price == 0 ? "Ücretsiz" : event.price + "₺"}

</div>
<button class="favorite-btn" onclick="event.stopPropagation(); favoriEkle(${event.id})">
    ♡
</button>

        <div class="event-info">
          <span class="category-badge">${event.category}</span>
          <span class="status-badge 
${event.status==='Aktif'
?'status-aktif'
:event.status==='Yakında'
?'status-yakinda'
:'status-gecti'}">
${event.status}
</span>

          <h3>${event.title}</h3>

          <p>📅 ${event.date} - ${event.time}</p>
          <p>📍 ${event.venue} / ${event.district}</p>
          <p>💰 ${event.price === 0 ? "Ücretsiz" : event.price + " TL"}</p>

          ${event.organizer==="Kullanıcı"
? `
<button class="delete-btn"
onclick="etkinlikSil(${event.id})">
Sil
</button>
`
:
`
<div class="event-card"
onclick="window.location.href='detay.html?id=${event.id}'">
`
}
        </div>
      </div>
    `;
  });
}

 // Seçilen kategoriye göre etkinlikleri filtreler.
function kategoriFiltrele(kategori) {
  if (kategori === "Tümü") {
    etkinlikleriGoster(window.tumEtkinlikler);
  } else {
    const filtreliListe = window.tumEtkinlikler.filter(function (event) {
      return event.category === kategori;
    });

    etkinlikleriGoster(filtreliListe);
  }
}

// URL üzerinden gelen etkinlik id bilgisine göre detay sayfasını oluşturur.
function detaySayfasiniYukle() {
  const detailContainer = document.getElementById("detail-container");


  if (!detailContainer) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const eventId = Number(urlParams.get("id"));

  const secilenEtkinlik = etkinlikler.find(function(event) {
    return event.id === eventId;
  });

  if (!secilenEtkinlik) {
    detailContainer.innerHTML = "<p>Etkinlik bulunamadı.</p>";
    return;
  }

  detailContainer.innerHTML = `
    <div class="detail-card">
      <img src="${secilenEtkinlik.image}" alt="${secilenEtkinlik.title}">

      <div class="detail-content">
        <span class="category-badge">${secilenEtkinlik.category}</span>
        <span class="status-badge">${secilenEtkinlik.status}</span>

        <h1>${secilenEtkinlik.title}</h1>

        <p><strong>Tarih:</strong> ${secilenEtkinlik.date} - ${secilenEtkinlik.time}</p>
        <p><strong>Yer:</strong> ${secilenEtkinlik.venue} / ${secilenEtkinlik.district}</p>
        <p><strong>Ücret:</strong> ${secilenEtkinlik.price === 0 ? "Ücretsiz" : secilenEtkinlik.price + " TL"}</p>
        <p><strong>Düzenleyen:</strong> ${secilenEtkinlik.organizer}</p>
        <p><strong>Açıklama:</strong> ${secilenEtkinlik.description}</p>
        <p>
<strong>Kontenjan:</strong>
<span id="kontenjan">
${localStorage.getItem("kontenjan_"+secilenEtkinlik.id) || 100}
</span>
kişilik kontenjan
</p>
<div class="capacity-bar">

    <div id="capacityFill"></div>

</div>

        <div class="countdown" id="countdown">
          Geri sayım hesaplanıyor...
        </div>

        <button class="register-btn" onclick="etkinligeKayitOl(${secilenEtkinlik.id})">
          Etkinliğe Kayıt Ol
        </button>
      </div>
    </div>
  `;

  geriSayimBaslat(secilenEtkinlik.date, secilenEtkinlik.time);
}

// Geri sayım sayacını başlatır
function geriSayimBaslat(tarih, saat) {
  const countdown = document.getElementById("countdown");

  const hedefTarih = new Date(tarih + "T" + saat + ":00").getTime();

// Etkinlik sayaçlarını her saniye günceller
  setInterval(function() {
    const simdi = new Date().getTime();
    const fark = hedefTarih - simdi;

    if (fark <= 0) {
      countdown.innerHTML = "Etkinlik başladı veya sona erdi.";
      return;
    }

    const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
    const saat = Math.floor((fark / (1000 * 60 * 60)) % 24);
    const dakika = Math.floor((fark / (1000 * 60)) % 60);
    const saniye = Math.floor((fark / 1000) % 60);

    countdown.innerHTML =
      "⏳ " + gun + " gün " + saat + " saat " + dakika + " dakika " + saniye + " saniye kaldı";
  }, 1000);
}

// Etkinliğe kayıt olma işlemi
function etkinligeKayitOl(id) {
  let kayitlar = JSON.parse(localStorage.getItem("kayitlar")) || [];

  if (kayitlar.includes(id)) {
    alert("Bu etkinliğe zaten kayıt oldunuz.");
    return;
  }

  kayitlar.push(id);

  localStorage.setItem("kayitlar", JSON.stringify(kayitlar));
let mevcutKontenjan =
parseInt(
localStorage.getItem("kontenjan_"+id)
) || 100;


if(mevcutKontenjan<=0){
alert("Kontenjan dolu.");
return;
}


mevcutKontenjan--;

localStorage.setItem(
"kontenjan_"+id,
mevcutKontenjan
);
  alert("Etkinliğe kaydınız başarıyla oluşturuldu ✅");
}

detaySayfasiniYukle();
// Etkinlik ekleme formu
const form = document.getElementById("eventForm");

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const yeniEtkinlik={

title:
document.getElementById("title").value,

category:
document.getElementById("category").value,

date:
document.getElementById("date").value,

time:
document.getElementById("time").value,

venue:
document.getElementById("venue").value,

price:
document.getElementById("price").value,

description:
document.getElementById("description").value,

image:
document.getElementById("image").value

};


let eklenenler=
JSON.parse(
localStorage.getItem("userEvents")
)||[];


eklenenler.push(
yeniEtkinlik
);

localStorage.setItem(
"userEvents",
JSON.stringify(eklenenler)
);


alert(
"Etkinlik başarıyla eklendi ✅"
);

form.reset();

});
}
// Kayıt olunan etkinlikleri göster
function kayitlariGoster(){

const kayitContainer=
document.getElementById(
"kayit-container"
);

if(!kayitContainer){
return;
}


let kayitlar=
JSON.parse(
localStorage.getItem("kayitlar")
)||[];



const kayitliEtkinlikler=
etkinlikler.filter(
event=>
kayitlar.includes(event.id)
);



if(
kayitliEtkinlikler.length===0
){

kayitContainer.innerHTML=
"<h2>Henüz kayıt yok.</h2>";

return;

}



kayitliEtkinlikler.forEach(
function(event){

kayitContainer.innerHTML+=`

<div class="event-card">

<img
src="${event.image}"
>

<div class="event-info">

<span class="category-badge">
${event.category}
</span>

<h3>
${event.title}
</h3>

<p>
📅 ${event.date}
</p>

<p>
📍 ${event.venue}
</p>

<p>
🎫 Kaydınız Onaylandı
</p>

<button class="cancel-btn" onclick="kayitIptalEt(${event.id})">
Kaydı İptal Et
</button>

</div>

</div>

`;

});

}

kayitlariGoster();
function kayitIptalEt(id){

let kayitlar=
JSON.parse(
localStorage.getItem("kayitlar")
)||[];


kayitlar=
kayitlar.filter(function(item){
return item !== id;
});


localStorage.setItem(
"kayitlar",
JSON.stringify(kayitlar)
);

alert("Kayıt iptal edildi");

location.reload();

}
function etkinlikSil(id){

let userEvents=
JSON.parse(
localStorage.getItem("userEvents")
)||[];


let silinecekIndex=id-100;

userEvents.splice(
silinecekIndex,
1
);

localStorage.setItem(
"userEvents",
JSON.stringify(userEvents)
);

alert(
"Etkinlik silindi"
);

location.reload();

}
function etkinlikAra(){
  const aramaMetni = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filtreliListe = window.tumEtkinlikler.filter(function(event){
    return event.title.toLowerCase().includes(aramaMetni);
  });

  etkinlikleriGoster(filtreliListe);
}
if(
localStorage.getItem("theme")
==="dark"
){
document.body.classList.add(
"dark-mode"
);
}
window.addEventListener("scroll", function(){
  const topBtn = document.getElementById("topBtn");

  if(!topBtn){
    return;
  }

  if(window.scrollY > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }
});

// Sayfanın en üstüne yumuşak geçiş yapar
function yukariCik(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}
// Giriş yap veya kayıt ol modal penceresini açar
function authAc(baslik){
    const modal = document.getElementById("authModal");
    const title = document.getElementById("authTitle");
    const box = document.querySelector(".auth-box");

    if(!modal || !title || !box){
        return;
    }

    title.textContent = baslik;

    if(baslik === "Giriş Yap"){
        box.innerHTML = `
            <span class="auth-close" onclick="authKapat()">×</span>
            <h2 id="authTitle">Giriş Yap</h2>

            <input type="email" id="loginEmail" placeholder="E-posta">
            <input type="password" id="loginPassword" placeholder="Şifre">

            <button onclick="authDevam()">Devam Et</button>
        `;
    }else{
        box.innerHTML = `
            <span class="auth-close" onclick="authKapat()">×</span>
            <h2 id="authTitle">Kayıt Ol</h2>

            <input type="text" id="ad" placeholder="Ad">
            <input type="text" id="soyad" placeholder="Soyad">
            <input type="email" id="email" placeholder="E-posta">
            <input type="password" id="sifre" placeholder="Şifre oluştur">
            <input type="text" id="telefon" placeholder="Telefon">

            <label class="check-row">
                <input type="checkbox" id="kurallar">
                <span>Şartları kabul ediyorum</span>
            </label>

            <button onclick="kayitKontrol()">Devam Et</button> 
        `;
    }

    modal.style.display = "flex";
}
// Açık olan modal pencereyi kapatır.
function authKapat(){
    const modal = document.getElementById("authModal");

    if(!modal){
        return;
    }

    modal.style.display = "none";
}
function authDevam(){

    const emailInput = document.getElementById("loginEmail");

    let email = "";

    if(emailInput){
        email = emailInput.value;
    }

    if(email === ""){
        alert("E-posta giriniz.");
        return;
    }

    localStorage.setItem("aktifKullanici", email);

    alert("Giriş başarılı ✅");

    authKapat();

    kullaniciGoster();
}
function navArama(event){
    if(event.key === "Enter"){
        const arama = event.target.value.trim();

        if(arama !== ""){
            localStorage.setItem("navbarArama", arama);
            window.location.href = "etkinlikler.html";
        }
    }
}
// Etkinliği localStorage kullanarak favorilere ekler veya çıkarır.
function favoriEkle(id){
    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];

    if(favoriler.includes(id)){
        favoriler = favoriler.filter(function(favoriId){
            return favoriId !== id;
        });

        localStorage.setItem("favoriler", JSON.stringify(favoriler));
        alert("Favorilerden çıkarıldı.");
    }else{
        favoriler.push(id);
        localStorage.setItem("favoriler", JSON.stringify(favoriler));
        alert("Favorilere eklendi ❤️");
    }
}
if(window.location.pathname.includes("favoriler.html")){

    let userEvents =
    JSON.parse(localStorage.getItem("userEvents")) || [];

    let duzenlenmisUserEvents =
    userEvents.map(function(item,index){

        return{
            id:100+index,
            title:item.title,
            category:item.category,
            date:item.date,
            time:item.time,
            venue:item.venue,
            district:"Mersin",
            price:item.price,
            image:item.image || "https://picsum.photos/600/400",
            description:item.description,
            organizer:"Kullanıcı",
            status:"Yakında"
        };

    });

    let tumEtkinliklerFavori =
    [
        ...etkinlikler,
        ...duzenlenmisUserEvents
    ];

    let favoriler =
    JSON.parse(localStorage.getItem("favoriler")) || [];

    let favoriEtkinlikler =
    tumEtkinliklerFavori.filter(function(event){
        return favoriler.includes(event.id);
    });

    if(favoriEtkinlikler.length === 0){
        document.getElementById("event-container").innerHTML =
        "<h2 style='text-align:center;'>Henüz favori etkinlik eklenmedi.</h2>";
    }else{
        etkinlikleriGoster(favoriEtkinlikler);
    }
}
function bultenKayit(){

    const email =
    document.getElementById("newsletterEmail").value;


    if(email === ""){

        alert("E-posta giriniz.");

        return;

    }


    if(!email.includes("@")){

        alert("Geçerli e-posta giriniz.");

        return;

    }


    let aboneler =
    JSON.parse(localStorage.getItem("aboneler")) || [];


    if(aboneler.includes(email)){

        alert("Bu e-posta zaten kayıtlı.");

        return;

    }


    aboneler.push(email);

    localStorage.setItem(
        "aboneler",
        JSON.stringify(aboneler)
    );


    alert("Başarıyla abone oldunuz ❤️");

    document.getElementById(
        "newsletterEmail"
    ).value = "";

}
function kontenjanBariGuncelle(){

    const text =
    document.getElementById("kontenjan");


    const fill =
    document.getElementById("capacityFill");


    if(!text || !fill) return;


    const kapasite =
    Number(text.innerText);


    const yuzde =
    (kapasite / 100) * 100;


    fill.style.width =
    yuzde + "%";

}

kontenjanBariGuncelle();

// Kullanıcı kayıt formundaki bilgileri doğrular
function kayitKontrol(){

    const ad =
    document.getElementById("ad").value;


    const soyad =
    document.getElementById("soyad").value;


    const email =
    document.getElementById("email").value;


    const sifre =
    document.getElementById("sifre").value;


    const telefon =
    document.getElementById("telefon").value;


    const kurallar =
    document.getElementById("kurallar").checked;


    if(
        ad === "" ||
        soyad === "" ||
        email === "" ||
        sifre === "" ||
        telefon === ""
    ){

        alert("Tüm alanları doldurun.");

        return;

    }


    if(!email.includes("@")){

        alert("Geçerli e-posta girin.");

        return;

    }

    if(sifre.length < 6){
    alert("Şifre en az 6 karakter olmalıdır.");
    return;
}


    if(telefon.length < 10){

        alert("Telefon eksik.");

        return;

    }


    if(!kurallar){

        alert("Şartları kabul etmelisiniz.");

        return;

    }


    alert("Kayıt başarılı 🎉");

}
function kullaniciGoster(){

    const aktifKullanici =
    localStorage.getItem("aktifKullanici");

    const navActions =
    document.querySelectorAll(".nav-actions");

    navActions.forEach(function(nav){

        const loginBtn =
        nav.querySelector(".login-btn");

        const registerBtn =
        nav.querySelector(".register-btn");

        if(aktifKullanici && loginBtn && registerBtn){

            loginBtn.innerText =
            "👤 " + aktifKullanici.split("@")[0];

            loginBtn.removeAttribute("onclick");

            registerBtn.innerText =
            "Çıkış Yap";

            registerBtn.setAttribute(
                "onclick",
                "cikisYap()"
            );

            registerBtn.setAttribute(
                "href",
                "#"
            );

        }

    });

}

function cikisYap(){

    localStorage.removeItem("aktifKullanici");

    alert("Çıkış yapıldı.");

    location.reload();

}

kullaniciGoster();

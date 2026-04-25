const etkinlikler = [
  {
    id: 1,
    title: "Çağrı Sinci Konseri",
    category: "Konser",
    date: "2026-04-23",
    time: "21:30",
    venue: "Red Flag",
    district: "Yenişehir",
    price: 450,
    image: "https://picsum.photos/600/400?random=1",
    description: "Rap müziğin sevilen ismi Çağrı Sinci Mersin sahnesinde.",
    organizer: "Biletix",
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
    image: "https://picsum.photos/600/400?random=2",
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
    image: "https://picsum.photos/600/400?random=3",
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
    image: "https://picsum.photos/600/400?random=4",
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
    image: "https://picsum.photos/600/400?random=5",
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
    image: "https://picsum.photos/600/400?random=6",
    description: "Başlangıç seviyesine uygun seramik atölyesi.",
    organizer: "Marina Art",
    status: "Aktif"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("event-container")) {
    etkinlikleriGoster(etkinlikler);
  }
});

function etkinlikleriGoster(liste) {
  const container = document.getElementById("event-container");
  container.innerHTML = "";

  if (liste.length === 0) {
    container.innerHTML = "<p>Bu kategoride etkinlik bulunamadı.</p>";
    return;
  }

  liste.forEach(function (event) {
    container.innerHTML += `
      <div class="event-card">
        <img src="${event.image}" alt="${event.title}">

        <div class="event-info">
          <span class="category-badge">${event.category}</span>
          <span class="status-badge">${event.status}</span>

          <h3>${event.title}</h3>

          <p>📅 ${event.date} - ${event.time}</p>
          <p>📍 ${event.venue} / ${event.district}</p>
          <p>💰 ${event.price === 0 ? "Ücretsiz" : event.price + " TL"}</p>

          <a class="detail-btn" href="detay.html?id=${event.id}">
            Detay Gör
          </a>
        </div>
      </div>
    `;
  });
}

function kategoriFiltrele(kategori) {
  if (kategori === "Tümü") {
    etkinlikleriGoster(etkinlikler);
  } else {
    const filtreliListe = etkinlikler.filter(function (event) {
      return event.category === kategori;
    });

    etkinlikleriGoster(filtreliListe);
  }
}
// Detay sayfasında URL'den id bilgisini alır
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
        <p><strong>Kontenjan:</strong> 100 kişilik kontenjan</p>

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
document.getElementById("description").value

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

</div>

</div>

`;

});

}

kayitlariGoster();

const veri = [
    {
        adi: "Ali",
        soyadi: "ÇALIŞKAN",
        yas: 24,
        uzmanlik: 'Js',
        begeniler: ['ders çalışmak', 'sanat', 'sinema', 'buz hokeyi', 'yemek yapmak']
    },
    {
        adi: "Veli",
        soyadi: "DEMİR",
        yas: 24,
        uzmanlik: 'CSS',
        begeniler: ['spor', 'sinema', 'kodlamak']
    }, 
    {
        adi: "Ayşe",
        soyadi: "BAŞARILI",
        yas: 24,
        uzmanlik: 'HTML CSS',
        begeniler: ['sanat', 'sinema']
    },
    {
        adi: "Ahmet",
        soyadi: "GÜNEŞ",
        yas: 24,
        uzmanlik: 'HTML CSS JS',
        begeniler: ['sanat', 'sinema', 'bisiklet sürme']
    }
]


// let veriListesiUzunlugu = veri.length;
// console.log('liste uzunluğu', veriListesiUzunlugu);


// let alininBegenisi = veri[0].begeniler; 
// // alininBegenisi.forEach(begeni => console.log(begeni));
// alininBegenisi.forEach(begeni => {
//     let p = document.createElement('p');
//     p.textContent = begeni;
//     p.style.color = 'red';
//     p.style.fontSize = '24px'
//     veriElementi.appendChild(p);
// });

// console.log(alininBegenisi);


let index = 0;

const verileriYukle = () => {
    let mevcutKisi = veri[index];
    
    let veriElementi = document.querySelector('#dataGosterimYeri');
    let isim = document.createElement('h1');
    isim.textContent = mevcutKisi.adi + ' ' + mevcutKisi.soyadi;
    veriElementi.appendChild(isim);

    let yas = document.createElement('h2');
    yas.textContent = mevcutKisi.yas;
    veriElementi.appendChild(yas);

    let uzmanlik = document.createElement('h2');
    uzmanlik.textContent = mevcutKisi.uzmanlik;
    veriElementi.appendChild(uzmanlik);

    mevcutKisi.begeniler.forEach(begeni => {
        let veriYeri = document.querySelector('#dataGosterimYeri');
        let li = document.createElement('li');
        li.textContent = begeni;
        veriElementi.appendChild(li);
    })
}

verileriYukle();


const sonrakiKisiyeGec = () => {
    let veriElementi = document.querySelector('#dataGosterimYeri');
    veriElementi.innerHTML = '';
    if(index === veri.length - 1)
    {
        index = 0;
        alert('liste sonuna gelindi')
    } else {
        index++;
    }
    verileriYukle();
}


let sonraki = document.querySelector('button');

sonraki.addEventListener('click', sonrakiKisiyeGec);

const kisiyiIseAl = () => {
   let eklenecekYer = document.querySelector('#secilenKisi');
    
    let yazi = document.createElement('p');

    let mevcutKisi = veri[index];
    yazi.textContent = mevcutKisi.adi + ' ' + mevcutKisi.soyadi + ' isimli kişi seçildi!';
    yazi.style.color = 'pink';
    eklenecekYer.innerHTML = '';
    eklenecekYer.appendChild(yazi);
}


let kisiyiIseAlmaButonu = document.querySelector('#sec');
kisiyiIseAlmaButonu.addEventListener('click', kisiyiIseAl);


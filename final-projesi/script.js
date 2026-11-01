
function notHesapla() {

    // Öğrenci bilgilerini alıyoruz
    let ogrenciAdi = document.getElementById("ogrenciAdi").value;

    let vize = Number(document.getElementById("vize").value);

    let final = Number(document.getElementById("final").value);

    // Bilgilerin boş olup olmadığını kontrol ediyoruz
    if (ogrenciAdi === "" || 
        document.getElementById("vize").value === "" || 
        document.getElementById("final").value === "") {

        document.getElementById("sonuc").innerHTML =
            "Lütfen bütün alanları doldurunuz.";

    }

    // Notların 0-100 arasında olup olmadığını kontrol ediyoruz
    else if (vize < 0 || vize > 100 || final < 0 || final > 100) {

        document.getElementById("sonuc").innerHTML =
            "Notlar 0 ile 100 arasında olmalıdır.";

    }

    else {

        // Ortalama hesaplama
        let ortalama = (vize * 0.40) + (final * 0.60);

        // Geçme ve kalma kontrolü
        if (ortalama >= 50) {

            document.getElementById("sonuc").innerHTML =
                ogrenciAdi + " adlı öğrenci geçti. Ortalama: " + ortalama;

        }

        else {

            document.getElementById("sonuc").innerHTML =
                ogrenciAdi + " adlı öğrenci kaldı. Ortalama: " + ortalama;

        }
    }
}

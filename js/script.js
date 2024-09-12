// Ini JavaScript

function validateLuas() {
    let alas = +document.getElementById('alas').value;
    let tinggi = +document.getElementById('tinggi').value;

    if (alas == '' || tinggi == '') {
        alert('Form masih kosong!');
    }
    console.log(alas);
    console.log(tinggi);

    let luas = (alas * tinggi) / 2;
    document.getElementById('result_luas').innerHTML = `Luas = 1/2 x ${alas} x ${tinggi} = ${luas}`;
}

function validateKeliling() {
    let sisi_1 = +document.getElementById('sisi_1').value;
    let sisi_2 = +document.getElementById('sisi_2').value;
    let sisi_3 = +document.getElementById('sisi_3').value;

    if (sisi_1 == '' || sisi_2 == '' || sisi_3 == '') {
        alert('Form masih kosong!');
    }
    console.log(sisi_1);
    console.log(sisi_2);
    console.log(sisi_3);

    let keliling = sisi_1 + sisi_2 + sisi_3;
    document.getElementById('result_keliling').innerHTML = `Keliling = ${sisi_1} + ${sisi_2} + ${sisi_3} = ${keliling}`;
}
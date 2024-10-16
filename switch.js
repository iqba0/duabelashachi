let input = parseInt(prompt ('masukan pilihan anda dari no 1-4')),
    hadiah = "";

switch(input){
    case 1:
    hadiah = "Powerbank"
        break;
    case 2:
    hadiah = "Headset"
        break;
    case 3:
    hadiah = "Mouse"
        break;
    case 4:
    hadiah = "Speaker Bluetooth"
        break;
    default:
        alert('anda salah pilih');
} if (hadiah === ""){
    alert('gagal dapat hadiah')
} else {
    alert(`Selamat anda mendapatkan hadiah berupa ${hadiah}`)
}
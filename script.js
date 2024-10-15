let string = "",
i = prompt('masukan jumlah baris')
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);
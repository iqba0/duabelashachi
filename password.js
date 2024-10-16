for(let i = 1; i <=3; i++){ //percobaan login 3x
    let username = prompt('masukan username'),
        password = prompt('masukan password');
    if (username = "admin"){
        if(password = "cihuuy"){
            alert('anda berhasil login')
            break; //jika username dan password for loop dihentikan
        }   
        else {
                alert('anda salah password')
            }
    } 
    else {
      alert('anda salah username')}
}

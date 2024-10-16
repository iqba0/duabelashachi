let jmlRuangan = 7,
    ruangBerfungsi = 4,
    noRuang = 1;
    for (noRuang; noRuang <= jmlRuangan; noRuang++){
        
        if(noRuang <  ruangBerfungsi){
            console.log(`Ruang ${noRuang} berfungsi`)
        } 
       else if (noRuang == ruangBerfungsi){
        console.log(`Ruang ${noRuang} sedang diperbaiki`)
       }    
        else {
            console.log(`Ruang ${noRuang} tidak berfungsi`)
        } 
    }

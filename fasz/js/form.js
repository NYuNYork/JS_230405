function Bekuld(){
    let nev = document.getElementById("nev").value;
    let email = document.getElementById("email").value;
    let datum = document.getElementById("datum").value;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;
    let chk = document.getElementById("check").value;

        
    if(nev == ""){
        document.getElementById("alert").innerHTML = "Nem adott meg nevet!!!!";
    }
        else if(nev.length < 4){
            document.getElementById("alert").innerHTML = "Nem elég hosszú a név"
        }

    if(email == ""){
        document.getElementById("alert2").innerHTML = "Nem adott meg emailt!!!!";
    }   
        else {
            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
            if(!email.match(validRegex)){
                document.getElementById("alert2").innerHTML = "nem szabvány email formátum"
            }
        }
    if(datum == ""){
        document.getElementById("alert3").innerHTML = "Nem adott meg datumot!!!!";
    }
    if(pass == ""){
        document.getElementById("alert4").innerHTML = "Nem adott meg jelszot!!!!";
    }
        else if (pass != pass2){
            document.getElementById("alert").innerHTML ="Nem egyezik a 2";
        }
    if(pass2 == ""){
        document.getElementById("alert5").innerHTML = "Nem adott meg ismételt jelszot!!!!";
    }
    if(pass == pass2){
        let string = /^[A-Za-z]\w(7,14)$/;
        console.log()
        if(!pass.match(string)){
            document.getElementById("alert4").innerHTML = "Nem elég erős a jelszó"
        }
    }
    if(!chk.checked){
        document.getElementById("alert6").innerHTML = "Nem egyeztél semmibe sem"
    }

}
function esPrimo () {
    let n1 = prompt ('Introduce un numero');
    let i = 2;
    primo = true;
    

        while(i<n1){
            if(n1 == 0 || n1 == 1 || n1 == 4 || n1%i==0){
                primo=false;
            }
            i++;
        }
    

    
    if (primo==true){
        alert('El numero '+n1+' es primo');
    }
    else{
        alert('El numero '+n1+' no es primo');
    }
}

esPrimo();

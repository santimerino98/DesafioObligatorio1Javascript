function primo(){
	var n=parseInt(prompt("Ingrese el número a testear:"));
	var i=2;
	while(i<n){
		if(n%i==0){
			alert("El número "+n+" no es primo");
			break;}
		else 
			i++;
	}
	if(i==n)

    alert("El número "+n+" es primo");
}

primo();
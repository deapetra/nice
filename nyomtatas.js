function kalkulal(){
   
    const szelesseg=297;
    const magassag=420;
    const papir=document.getElementById('papirtipus').value;
   
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let valasz=terulet*papir;
  
    document.getElementById('answ').style.visibility = "visible";
}
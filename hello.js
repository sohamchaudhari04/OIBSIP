function convert()
{
  var val=document.getElementById('num1').value;
  var type=document.getElementById('option').value;

  if(type==1)
{
   var ans=(val*9/5)+32;
   document.getElementById('ans').value=ans+"C";
   document.getElementById('for').innerText="Formula : ("+val+"-32)*5/9 = "+ans;
}
else{
   var ans=(val-32)*5/9;
   document.getElementById('ans').value=ans+"F";
   document.getElementById('for').innerText="Formula : ("+val+"-32)*5/9 = "+ans;
}

  
}
var nplayers=document.querySelectorAll("input");
var submit=document.querySelector("button");
var count=0;

submit.disabled=true;


for(var x=0;x<nplayers.length;x++)
  {
      
    nplayers[x].addEventListener("click",function(){

     if(this.checked)
     {
         count++;
      }
      else{
          count--;
      }
     if(count===11)
    {
          submit.disabled=false;
      }
      else{
         submit.disabled=true;
      }
  });
}

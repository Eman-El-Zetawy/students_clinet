var tabal =document.getElementById("tabal");
var inputid =document.getElementById("input-id");
var button =document.getElementById("button");
var errorMassage =document.getElementById("error");
var id , array =[] , s=['id', 'first_name' ,'last_name' ,'grade'] ;
button.addEventListener("click" , function(){
id = inputid.value ;

 fetch('http://localhost:3000/arr/'+id,{
        method:'GET'
    })
    .then( res => res.json())
    .then((data) => {
     array= data;
   
      console.log(array);
            var l='';
        tabal.innerHTML ='<tr>';
         for(var j=0 ; j<s.length ; j++){
             let t =s[j];
               if(array[t] ==undefined){
                errorMassage.innerHTML = " Does not exist this Id ";
                errorMassage.style='background: white';
     }else {
            l +='<th class="th">'+array[t] + '</th>';
         }}
          tabal.innerHTML += l+'</tr>';
     
    });
});
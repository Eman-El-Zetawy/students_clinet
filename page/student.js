var tabal =document.getElementById("tabal");
var input =document.getElementById("input-page");
<<<<<<< HEAD
var inputid =document.getElementById("input-id");
var button =document.getElementById("button");

var pagesize , array =[] , s=['id' , 'first_name' ,'last_name' ,'grade'] ,id ;
const my =new Headers();

=======
var id =document.getElementById("input-id");
var button =document.getElementById("button");
var errorMassage =document.getElementById("error");
var pagesize , array =[] , s=['id', 'first_name' ,'last_name' ,'grade'] ;
>>>>>>> 64854d1fae5819fcc0d2715306fa3c9658efa012
button.addEventListener("click" , function(){
    id=inputid.value; 
pagesize = input.value ;
<<<<<<< HEAD

if(pagesize !=''){
=======
tabal.innerHTML ='';
>>>>>>> 64854d1fae5819fcc0d2715306fa3c9658efa012

 fetch('http://localhost000/arr?page='+pagesize,{
        method:'GET'
    })
    .then( res => res.json())
    .then((data) => {
     array= data,
      console.log(array);
      if(array==""){
       // console.log("dfgh");
       errorMassage.innerHTML ='THIS IS PAGE IS EMPTY';
       errorMassage.style='background: white';

      }else{

      
        for (var i = 0; i < array.length; i++) {
<<<<<<< HEAD
        tabal.innerHTML += '<tr>';
         for(var j=0 ; j<s.length ; j++){
             let t =s[j];
            tabal.innerHTML +='<th class="th">'+array[i][t] + '</th>';

         }   tabal.innerHTML +='<br></tr>';
     } 
    });}
    else if(id !=''){
        fetch('http://localhost:3000/arr/'+id,{
        method:'GET',headers:my })
    .then( res => res.json())
    .then((data) => {
     array= data, l=''
      console.log(array);
        tabal.innerHTML ='<tr>';
         for(var j=0 ; j<s.length ; j++){
             let t =s[j];
            l+='<th class="th">'+array[t] + '</th>';
         }
          tabal.innerHTML +=l +'<br></tr>';
           
     
=======
            var l='';
        tabal.innerHTML +='<tr>';
         for(var j=0 ; j<s.length ; j++){
             let t =s[j];
           l +='<th class="th">'+array[i][t] + '</th>';
         }
          tabal.innerHTML += l+'</tr>';
<<<<<<< HEAD
     } }
=======
     } 
>>>>>>> 64854d1fae5819fcc0d2715306fa3c9658efa012
>>>>>>> 0901c542e02a9315072ebb124bab8979e5559828
    });
    }
});

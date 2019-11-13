var tabal =document.getElementById("tabal");
var inputid =document.getElementById("input-id");
var button =document.getElementById("button");
var errorMassage =document.getElementById("error");
var id , array =[] , s=['id', 'first_name' ,'last_name' ,'grade'] ;
button.addEventListener("click" , function(){
id = inputid.value ;
console.log(id);
 fetch('http://localhost:3000/arr/'+id,{
        method:'DELETE'
    })
    .then( res => res.json())
    .then((data) => {
     array= data,
      console.log(array);
      errorMassage.innerHTML = "done";
       errorMassage.style='background: white';
        //     var l='';
        // tabal.innerHTML ='<tr>';
        //  for(var j=0 ; j<s.length ; j++){
        //      let t =s[j];
        //    l +='<th class="th">'+array[t] + '</th>';
        //  }
        //   tabal.innerHTML += l+'</tr>';
     
    });
});







// 






  // app.put('/api/v1/todos/:id', (req, res) => {
  //   const id = parseInt(req.params.id, 10);
  //   let todoFound;
  //   let itemIndex;
  //   db.map((todo, index) => {
  //     if (todo.id === id) {
  //       todoFound = todo;
  //       itemIndex = index;
  //     }
  //   });
  
  //   if (!todoFound) {
  //     return res.status(404).send({
  //       success: 'false',
  //       message: 'todo not found',
  //     });
  //   }
  
  //   if (!req.body.title) {
  //     return res.status(400).send({
  //       success: 'false',
  //       message: 'title is required',
  //     });
  //   } else if (!req.body.description) {
  //     return res.status(400).send({
  //       success: 'false',
  //       message: 'description is required',
  //     });
  //   }
  
  //   const updatedTodo = {
  //     id: todoFound.id,
  //     title: req.body.title || todoFound.title,
  //     description: req.body.description || todoFound.description,
  //   };
  
  //   db.splice(itemIndex, 1, updatedTodo);
  
  //   return res.status(201).send({
  //     success: 'true',
  //     message: 'todo added successfully',
  //     updatedTodo,
  //   });
  // });
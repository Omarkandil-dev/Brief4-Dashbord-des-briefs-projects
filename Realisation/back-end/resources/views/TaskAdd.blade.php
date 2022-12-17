<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Landing Page</title>
    <link rel="stylesheet" href="/app.css">

</head>
<body>
    <nav id="nav">
        <img  width="2%"  src = "/business-management-icon.svg" alt="My Happy SVG"/>
        <a   href="/BriefIndex"><button id="buttonindex" >Briefs management</button></a>   
        <a  href="http://127.0.0.1:8000/index"><button id="promopage">Promotion Page</button></a>
        
  
    </nav>


        <form id="containerAddTask" method="POST" action="{{url("Taskstore")}}">
            @csrf
            


    
            
            <label class="promo">task name:</label><input id ="addpromoinput" type="text"name="name">

            <label class="promo">starting date:</label><input id ="addpromoinput" type="date"name="starting_date">

            <label class="promo">finishing date:</label><input id ="addpromoinput" type="date" name="finishing_date">

            <input type="hidden" value="{{$id}}"  name="id">

            <label class="promo">description:</label><input id ="addpromoinput" type="text"name="description">
            <button id="addpromobutton" type="submit">Add task</button>



            

{{--so how would i basically insert the prom_id which happens to be a foreign key into the form ?--}}
{{--remember once u click the edit on promotion grab that id and assign  it to the value of the hidden input--}}


</form>




</body>
</html>
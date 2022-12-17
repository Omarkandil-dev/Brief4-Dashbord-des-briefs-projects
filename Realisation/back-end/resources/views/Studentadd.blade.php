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
    <div id="container2">

        <form method="POST" action="{{url("Studentstore")}}">
            @csrf
            


    
            
            <label>firstname:</label><input id="studentedit" type="text"name="first_name">

            <label>lastname:</label><input id="studentedit" type="text"name="last_name">

            <label>email:</label><input id="studentedit" type="text" name="email">

            

{{--so how would i basically insert the prom_id which happens to be a foreign key into the form ?--}}
{{--remember once u click the edit on promotion grab that id and assign  it to the value of the hidden input--}}
<button id="buttonstudentadd" type="submit">Add Student</button>

<input type="hidden" value="{{$id}}"  name="id">

</form>

            {{--we done with the add now into display those data --}}
            <a  href="http://127.0.0.1:8000/index"><button id="promotion">Promotion Page</button></a>


    </div>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>brief adding Page</title>
    <link rel="stylesheet" href="/app.css">
    <link rel="stylesheet" href="/app.css">
    

</head>
<body>
    
        

    <form id="containerAddBrief"class="form-inline" action="" method="POST">
        @csrf
            <label >Brief Name:</label>
        <input id ="addpromoinput"  type="text" name="name">
        <label >Brief Creation Date:</label>
        <input id ="addpromoinput" type="date" name="creation_date" >
        <label >Brief Recuperation Date:</label>
        <input id ="addpromoinput"  type="date" name="recupration_date">


        <input id="addpromobutton" type="submit" name="submit">
    

    </form>
    
</body>
</html>
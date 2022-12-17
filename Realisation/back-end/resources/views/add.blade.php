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
    
    
    
    </nav>
    

    <form  id="container" action="add"method="Post">
        @csrf
        <input id ="addpromoinput" type="text" name="name" placeholder="add promotion">
        <input id ="addpromobutton" type="submit" name="submit">
    </form>
    
</body>
</html>
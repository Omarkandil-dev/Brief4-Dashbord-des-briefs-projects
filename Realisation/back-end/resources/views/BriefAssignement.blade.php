<link rel="stylesheet" href="/app.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
<link rel="stylesheet" href="/app.css">

<nav id="nav">
    <img  width="2%"  src = "/business-management-icon.svg" alt="My Happy SVG"/>
    <a   href="/BriefIndex"><button id="buttonindex" >Briefs management</button></a>   
    <a  href="http://127.0.0.1:8000/index"><button id="promopage">Promotion Page</button></a>
    <a href="{{$briefId}}/AttachClass/{{$data[0]->id}}"><button id="buttonindex">Attach to class</button></a>
  
</nav>


<div id="display">

<table class="table table-bordered">
    <thead>
        <tr>
            <th scope="col"> first name</th>
            <th scope="col"> last name</th>
            <th scope="col">Action</th>               
        </tr>

    </thead>
    <tbody id ="contentStudent">
        @foreach ($data as $entry) 

        <tr>
            <td scope="col">{{$entry->first_name}}</td>
            <td scope="col">{{$entry->last_name}}</td>
            
            <td>
                <a href="{{$briefId}}/Attach/{{$entry->id}}"><button class="btn btn-primary">Attach</button></a>
                <a href="{{$briefId}}/Detach/{{$entry->id}}"><button class="btn btn-danger">Detach</button></a>

            </td>
        </tr>
        


        @endforeach  
         
    </tbody>
    

</table>
</div>

    <link rel="stylesheet" href="/app.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>


    <nav id="nav">
        <img  width="2%"  src = "/business-management-icon.svg" alt="My Happy SVG"/>
        <input class="search"  type="text" id="BriefSearch"  placeholder="search brief">
        <a  href="http://127.0.0.1:8000/index"><button id="promopage">Promotion Page</button></a>
        <a  href="/addBrief"><button id="buttonindex">Add a Brief</button></a>   

    
    
    
    </nav>

<div id="display">

    <table class="table table-sm table-dark" >
    <thead>
        <tr>
            

            <th scope="col">Brief Name</th>
            <th scope="col">Brief creation date</th>
            <th scope="col">Brief recuperation date</th>
            <th scope="col">Brief Assignement</th>
            <th scope="col">Action</th>
            <th scope="col">Add task</th>





            
        </tr>

    </thead>
    <tbody id="Briefcontent">
        @foreach ($brief as $row)        
        <tr>
            <td>{{$row->name}}</td>
            <td>{{$row->creation_date}}</td>
            <td>{{$row->recuperation_date}}</td>
            <td><a  href="/BriefAssign/{{$row->id}}"><button class="btn btn-success">Assign</button></td>


            <td>
                <a  href="EditBrief/{{$row->id}}"><button class="btn btn-primary">Edit</button></a>
                <a  href="DeleteBrief/{{$row->id}}"><button class="btn btn-danger">Delete</button></a>
            </td>
            <td>
                <a  href="addTask/{{$row->id}}"><button class="btn btn-dark">Tasks +</button>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
</div>
<script src="/brief.js"></script>

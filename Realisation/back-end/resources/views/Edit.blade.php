<link rel="stylesheet" href="/app.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
<link rel="stylesheet" href="/app.css">





<nav id="nav">
    <a class="addstudent" href="{{url("Studentadd")}}/{{$data[0]->id}}">Add Student</a>
    <input id="findStudent" type="text" class="search"  placeholder="Search">
</nav>
  
<div id="containerpromoModified">
<div class="promo"> Brief Assigned to Promotion:</div>
<div class="promo">
    @foreach ($uniqueD as $item)
    @for($i = 0; $i <count($item); $i++)
    
    
            <span>
             {{$item[$i]->name}}
            </span>


    

    
    
    @endfor
@endforeach
        </div>
<div>

    @foreach ($data as $row)
    
    <form action="{{url('update')}}/{{$row->id}}" method="post">
    @csrf
    <input class="promoteEditInput"  type="text" value="{{$row->name}}" name="name">
    <button class="promoteEditButton" >Update</button>
    </form>
    @endforeach
</div>
</div>


<div id="container3">
    <table class="table table-sm table-dark"id="apprenant">
        <thead>
            <tr>
                <th scope="col"> first name</th>
                <th scope="col"> last name</th>
                <th scope="col">email</th>
                <th scope="col">Action</th>               
            </tr>

        </thead>
        <tbody id ="contentStudent">
            @foreach ($student as $entry)         
            <tr>
                <td scope="col">{{$entry->first_name}}</td>
                <td scope="col">{{$entry->last_name}}</td>
                <td scope="col">{{$entry->email}}</td>
                
                <td>
                    <a href="Edit/{{$entry->id}}"><button class="btn btn-primary">Edit</button></a>
                    <a href="Delete/{{$entry->id}}"><button class="btn btn-danger">Delete</button></a>
                </td>
            </tr>

            <input id ="apprentice_Id" type="hidden" value="{{$entry->promotion_id}}"  name="promo_id">

            @endforeach   
        </tbody>
    </table>
    

    




    <script src="/search.js"></script>

</div>
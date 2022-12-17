<link rel="stylesheet" href="/app.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
<link rel="stylesheet" href="/app.css">





<nav id="nav">
    <a  href="/addTask/{{$brief[0]->id}}"><button id="buttonindex" >Add Task</button></a>
    <a   href="/BriefIndex"><button id="buttonindex" >Briefs management</button></a>   


</nav>
  
    @foreach ($brief as $row)
    <form id="containerEditBrief" action="{{url('updateBrief')}}/{{$row->id}}" method="post">

    @csrf
    <input id ="addpromoinput" style="width: 50%"  type="text" value="{{$row->name}}" name="name">
    <input id ="addpromoinput" type="date" value="{{$row->creation_date}}" name="creation_date">
    <input id ="addpromoinput"  type="date" value="{{$row->recuperation_date}}" name="recuperation_date">
    <button id="addpromobutton" >Update</button>
    </form>
    @endforeach
    <div id="display">

    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">  name</th>
                <th scope="col"> starting date</th>
                <th scope="col">finishing date</th>
                <th scope="col">description</th>
                <th scope="col">Action</th>

             
            </tr>

        </thead>
        <tbody >
            @foreach ($briefDATA as $entry)         
            <tr>
                <td scope="col">{{$entry->name}}</td>
                <td scope="col">{{$entry->starting_date}}</td>
                <td scope="col">{{$entry->finishing_date}}</td>
                <td scope="col">{{$entry->description}}</td>

                
                <td>
                    <a href="TaskEdit/{{$entry->id}}"><button class="btn btn-primary">Edit</button></a>
                    <a href="TaskDelete/{{$entry->id}}"><button class="btn btn-danger">Delete</button></a>
                </td>
            </tr>

            <input id ="apprentice_Id" type="hidden" value="{{$entry->promotion_id}}"  name="promo_id">

            @endforeach   
        </tbody>
    </table>
    </div>
<link rel="stylesheet" href="/app.css">


<nav id="nav">
    <img  width="2%"  src = "/business-management-icon.svg" alt="My Happy SVG"/>
    <a   href="/BriefIndex"><button id="buttonindex" >Briefs management</button></a>   
    <a  href="http://127.0.0.1:8000/index"><button id="promopage">Promotion Page</button></a>  
</nav>
@foreach ($data as $row)
    
<form id="containerAddTask"action="{{url('EditBrief/update')}}/{{$row->id}}" method="post">
    @csrf
    <label class="promo">task name:</label><input id ="addpromoinput" type="text" value="{{$row->name}}" name="name">
    <label class="promo">starting date:</label><input id ="addpromoinput" type="date" value="{{$row->starting_date}}" name="starting_date">
    <label class="promo">finishing date:</label><input id ="addpromoinput" type="date" value="{{$row->finishing_date}}" name="finishing_date">
    <label class="promo">description:</label><input id ="addpromoinput" type="text" value="{{$row->description}}" name="description">
    <label class ="promo">Task Status</label><select name="taskStatus" id="addpromoinput">
        <option value="finished">finished</option>
        <option value="on going">On Going</option>
    </select>
    <button id="addpromobutton">Update Task</button>
</form>
@endforeach
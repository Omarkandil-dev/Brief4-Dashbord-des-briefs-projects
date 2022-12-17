<link rel="stylesheet" href="/app.css">

@foreach ($data as $row)
    
<form id ="formEditStudent"action="{{url('Edit/update')}}/{{$row->id}}" method="post">
    @csrf
    <label>firstname:</label>
    <input id="studentEditInput" type="text" value="{{$row->first_name}}" name="first_name">
    <label>lastname:</label>
    <input id="studentEditInput" type="text" value="{{$row->last_name}}" name="last_name">
    <label>email:</label>
    <input id="studentEditInput" type="text" value="{{$row->email}}" name="email">


    <button id="studendeditbutton">Update</button>
</form>
@endforeach
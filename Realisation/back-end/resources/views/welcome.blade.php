<h1> its enough for now </h1>
{{-- {{dd($student)}} --}}
@foreach ($student as $entry)
    <div>{{$entry->first_name}}</div>
    <div>{{$entry->last_name}}</div>
    <div>{{$entry->email}}</div>


    @endforeach
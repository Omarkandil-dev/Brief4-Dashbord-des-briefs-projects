<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

@foreach ($data as $row)

    name : {{ $row->first_name }} 
    last ame : {{ $row->last_name }}
    Email : {{ $row->email }}

@endforeach
{{--for debugging--}}
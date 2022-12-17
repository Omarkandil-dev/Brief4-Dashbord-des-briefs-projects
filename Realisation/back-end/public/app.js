$('#search').on('keyup', function(){
    $value =$(this).val();
    $.ajax({
        type:'get',
        url:'search',
        data:{'key':$value},
        success:function(value){
            $('#content').html(value);
        }
    });
})


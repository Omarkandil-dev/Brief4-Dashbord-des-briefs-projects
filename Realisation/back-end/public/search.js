let search2 = document.querySelector("#findStudent");
let table = document.querySelector('#contentStudent');
let inputId=document.querySelector('#apprentice_Id')

search2.addEventListener("keyup", async() => {
    let res = await axios.get(`/searchstudent/${inputId.value}/${search2.value}`) ;
    let Data = res.data;
    if (Data.length > 0) {
        table.innerHTML = "";
    
        console.log(Data)

    
    for(var i = 0; i < Data.length; i++){
        table.innerHTML += `<tr>
            <td>${Data[i]['first_name']}</td>
            <td>${Data[i]['last_name']}</td>
            <td>${Data[i]['email']}</td>


            <td>
            <a class="btn btn-primary" href='Edit/${Data[i]["id"]}'>Edit</a>
            <a class="btn btn-danger" href='Delete/${Data[i]["id"]}'> Delete</a>
            </td>
        </tr>
        `;
    }
    }
});




let searchbrief = document.querySelector("#BriefSearch");
let table = document.querySelector('#Briefcontent');

searchbrief.addEventListener("keyup", async() => {
    let res = await axios.get(`/searchbrief/${searchbrief.value}`) ;
    let Data = res.data;
    console.log(Data);
    if (Data.length > 0) {
        table.innerHTML = "";
    
        console.log(Data)

    
    for(var i = 0; i < Data.length; i++){
        table.innerHTML += `<tr>
            <td>${Data[i]['name']}</td>
            <td>${Data[i]['creation_date']}</td>
            <td>${Data[i]['recuperation_date']}</td>



            <td>
            <a class="btn btn-primary" href='EditBrief/${Data[i]["id"]}'>Edit</a>
            <a class="btn btn-danger" href='DeleteBrief/${Data[i]["id"]}'> Delete</a>
            </td>
            <td>
            <a  href="addTask/${Data[i]["id"]}"><button class="btn btn-primary">Tasks +</button>
            </td>

        </tr>
        `;
    }
    }
});
//Khởi tạo hằng để truy vấn một và nhiều element 
// .bind(document): là đại diện cho một thằng chứa element
const querySelect = document.querySelector.bind(document);
const querySelectAll = document.querySelectorAll.bind(document);
function checkFormCreate()
{
    querySelect("#form-create").addEventListener('submit', (e)=>{
     
        
        var result = validate();
        
        if(result==true){
        }
        // e.preventDefault(): ngăn sự kiện submit trong form
        else{
            alert("please fulfill imformation");
            e.preventDefault();
        }
    })
}
// validate các value của tất cả element
function validate(){
    var result = true;
    querySelectAll(".val-inp").forEach(element =>{
        if(element.value.trim()==""){
            result = false;
        }
        console.log(element)
    })
    return result;
} 

if(querySelect('#form-create')){
    checkFormCreate();
}

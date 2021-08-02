let form = document.querySelector('#card');
let searchUser = document.querySelector('#searchUser');
let searchBtn = document.querySelector('#searchBtn');
// UI class
let ui = new UI();

// Add Event Listener

form.addEventListener('submit',(e)=>{
    let userText = searchUser.value ;

    if(userText !== ""){
        fetch(`https://ip-api.com/json/${userText}`)
        .then(response =>response.json())
        .then(data =>{
        {
                //Show Profile
               // console.log(data);
               ui.showProfile(data);
            }
        })
    }else {
        ui.clearProfile();
    }
    e.preventDefault();
})

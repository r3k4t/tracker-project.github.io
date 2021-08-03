class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        
        this.profile.innerHTML =`<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-20">
                 <ul class="list-group">
                    <li class="list-group-item"><b>IP :</b> ${user.ip}</li>
                    <li class="list-group-item"><b>City :</b> ${user.city}</li>
                    <li class="list-group-item"><b>Region :</b> ${user.region}</li>
                    <li class="list-group-item"><b>Country :</b> ${user.country}</li>
                    <li class="list-group-item"><b>Loc :</b> ${user.loc}</li>
                    <li class="list-group-item"><b>Org :</b>${user.org}</li>
                    <li class="list-group-item"><b>Timezone :</b>${user.timezone}</li>
                    <li class="list-group-item"><b>Google Map Link :</b><a href="https://google.com/maps/place/${user.loc}">https://google.com/maps/place/${user.loc}</a>            
                </ul>
            </div>
        </div>
    </div>`; 
    }
    clearProfile(){
        this.profile.innerHTML="";
    }

}


class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        
        this.profile.innerHTML =`<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-20">
                <ul class="list-group">
                    <li class="list-group-item"><b>IP :</b> ${user.query}</li>
                    <li class="list-group-item"><b>Country :</b> ${user.country}</li>
                    <li class="list-group-item"><b>Country Code :</b> ${user.countryCode}</li>
                    <li class="list-group-item"><b>Region :</b> ${user.region}</li>
                    <li class="list-group-item"><b>Region Name :</b> ${user.regionName}</li>
                    <li class="list-group-item"><b>ISP :</b>${user.isp}</li>
                    <li class="list-group-item"><b>Lat :</b>${user.lat}</li>
                    <li class="list-group-item"><b>Lon :</b>${user.lon}</li>
                    <li class="list-group-item"><b>Org :</b>${user.org}</li>
                    <li class="list-group-item"><b>Zip :</b>${user.zip}</li>
                    <li class="list-group-item"><b>Timezone :</b>${user.timezone}</li>
                    <li class="list-group-item"><b>Google Map Link :</b><a href="https://google.com/maps/place/${user.lat},${user.lon}">https://google.com/maps/place/${user.lat},${user.lon}</a>            
                </ul>
            </div>
        </div>
    </div>`; 
    }
    clearProfile(){
        this.profile.innerHTML="";
    }

}


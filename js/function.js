let openNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "0px";
}

let openRight = document.getElementById("open");
openRight.addEventListener("click", openNav);

let closeNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "-350px"; 
}

let closeRight = document.getElementById("close");
closeRight.addEventListener("click", closeNav);

let changeMode = () => {
    let changeBody = document.getElementById("body");
    changeBody.classList.toggle("change-body");
    let changeColor = document.getElementById("home-txt");
    changeColor.classList.toggle("change-text-color");
    let changeColor1 = document.getElementById("sub-footer-txt");
    changeColor1.classList.toggle("change-text-color");
}

let leftEl = document.getElementById("left-side");
leftEl.addEventListener("click", changeMode);

let popUp = () => {
    let displayPop = document.getElementById("form-container");
    displayPop.style.display = "block";
}

let popEl = document.getElementById("emailContainer");
popEl.addEventListener("click", popUp);

let closePopUP = () => {
    let displayPop = document.getElementById("form-container");
    displayPop.style.display = "none";
    
}

let closePopEl = document.getElementById("closeForm");
closePopEl.addEventListener("click", closePopUP);

/*
function sendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        language : document.getElementById("language").value,
        address : document.getElementById("address").value,
        age : document.getElementById("age").value,
        birthday : document.getElementById("birthday").value,
        birthplace : document.getElementById("birthplace").value,
        gender : document.getElementById("gender").value,
        citizenship : document.getElementById("citizenship").value,
        height : document.getElementById("height").value,
        weight : document.getElementById("weight").value,
        status : document.getElementById("status").value,
        spouse : document.getElementById("spouse").value,
        guardian : document.getElementById("guardian").value,
        guardianNumber : document.getElementById("guardianNumber").value,
        guardianAddress : document.getElementById("guardianAddress").value,
        school : document.getElementById("school").value,
        schoolAddress : document.getElementById("schoolAddress").value,
        yearGraduated : document.getElementById("yearGraduated").value,
        school1 : document.getElementById("school1").value,
        schoolAddress1 : document.getElementById("schoolAddress1").value,
        yearGraduated1 : document.getElementById("yearGraduated1").value,
        school2 : document.getElementById("school2").value,
        schoolAddress2 : document.getElementById("schoolAddress2").value,
        yearGraduated2 : document.getElementById("yearGraduated2").value

    }
    emailjs.send("service_eux0ioj", "template_199hdnm", params).then(function (res){
        alert("Submitted");
    })
}

let sendForm = document.getElementById("button");
sendForm.addEventListener("click", sendMail);*/

let submitForm = () => {
    alert("Your Enrollment Form Has Been Sent! ");
    clearForm();
}

let clearForm = () => {

    from_nameEl = document.getElementById("fullName").value = "";
    emailEl = document.getElementById("email").value = "";
    numberEl = document.getElementById("number").value = "";
    languageEl = document.getElementById("language").value = "";
    addressEl = document.getElementById("address").value = "";
    ageEl = document.getElementById("age").value = "";
    birthdayEl = document.getElementById("birthday").value = "";
    birthplaceEl = document.getElementById("birthPlace").value = "";
    genderEl = document.getElementById("gender").value = "";
    citizenshipEl = document.getElementById("citizenship").value = "";
    heightEl = document.getElementById("height").value = "";
    weightEl = document.getElementById("weight").value = "";
    statusEl = document.getElementById("status").value = "";
    spouseEl = document.getElementById("spouse").value = "";
    guardianEl = document.getElementById("guardian").value = "";
    guardianNumberEl = document.getElementById("guardianNumber").value = "";
    guardianAddressEl = document.getElementById("guardianAddress").value = "";
    schoolEl = document.getElementById("school").value = "";
    schoolAddressEl = document.getElementById("schoolAddress").value = "";
    yearGraduatedEl = document.getElementById("yearGraduated").value = "";
    school1El = document.getElementById("school1").value = "";
    schoolAddress1El = document.getElementById("schoolAddress1").value = "";
    yearGraduated1El = document.getElementById("yearGraduated1").value = "";
    school2El = document.getElementById("school2").value = "";
    schoolAddress2El = document.getElementById("schoolAddress2").value = "";
    yearGraduated2El = document.getElementById("yearGraduated2").value = "";

}


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_199hdnm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        closePopUP();
        submitForm();
        
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

/*
let modalFunc = () => {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.top = "block";
    let modalEl = document.getElementById("modal-container");
    modalEl.style.top = "block";
}

let closeModalFunc = () => {
    let modalElBox = document.getElementById("modal-container-box");
    modalElBox.style.top = "none";
    let modalEl = document.getElementById("modal-container");
    modalEl.style.top = "-50%";
}

let closeAllEl = () => {
    closeModalFunc();
    closePopUP();
}


let okBtn = document.getElementById("ok");
okBtn.addEventListener("click", closeAllEl);*/

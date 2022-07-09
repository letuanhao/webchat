import app from "./index.js";
import Login from "./login.js";




class Register {
    // $: trường liên quan đến hiển thị
    $formRegister;
    $txtEmail;
    $txtDisplayName;
    $txtPassword;
    $txtConfirmPassword;
    $errorMessage;
    $btnSubmit;

    constructor () {
        this.$txtEmail = document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter email ...";
        this.$txtEmail.classList.add("form-input","m-b-sm");

        this.$txtDisplayName = document.createElement("input");
        this.$txtDisplayName.type = "text";
        this.$txtDisplayName.placeholder = "Enter display name ...";
        this.$txtDisplayName.classList.add("form-input","m-b-sm");

        this.$txtPassword = document.createElement("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Enter password ...";
        this.$txtPassword.classList.add("form-input","m-b-sm");

        this.$txtConfirmPassword = document.createElement("input");
        this.$txtConfirmPassword.type = "password";
        this.$txtConfirmPassword.placeholder = "Confirm password ...";
        this.$txtConfirmPassword.classList.add("form-input","m-b-sm");

        this.$formRegister = document.createElement("form");
        this.$formRegister.addEventListener("submit",this.handleSubmit);

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.type="submit";
        this.$btnSubmit.innerHTML="Register";
        this.$btnSubmit.classList.add("btn","m-b-sm","btn-primary","btn-primary:hover");
        

        this.$errorMessage=document.createElement("p");
        this.$errorMessage.classList.add("error-message");
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const email = this.$txtEmail.value;
        const dispplayName =this.$txtDisplayName.value;
        const pass=this.$txtPassword.value;
        const confirmPass=this.$txtConfirmPassword.value;

        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then((userCredentical)=>{
            console.log(userCredentical);
            firebase.auth().currentUser.updateProfile({
                dispplayName:dispplayName
            })
            firebase.auth().currentUser.sendEmailVerification();
        });
        console.log (email,dispplayName,pass,confirmPass);

        if(email===""){
            this.setErrorMessage("Email name cannot be empty")
            return;
        }

        if(dispplayName===""){
            this.setErrorMessage("display name cannot be empty")
            return;
        }
        if(pass===""){
            this.setErrorMessage("password name cannot be empty")
            return;
        }
        if(confirmPass===""){
            this.setErrorMessage("confirmPassword name cannot be empty")
            return;
        }
        if(pass!==confirmPass){
            this.setErrorMessage("Not match ")
            return;
        }
    }
    

    setErrorMessage=(content)=>{
        this.$errorMessage.innerHTML=content;
        if( content !==""){
            this.$errorMessage.style.display = "block";

        }else{
            this.$errorMessage.style.display = "none";
        }
    }

    gotoLogin =() =>{
        const login = new Login();
        app.changeActiveScreen(login);
    }


    initRender = (container) => {

        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex","flex-column","centering","vh-100");
        const title=document.createElement("h2");
        title.innerHTML = "Create your account";
        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);


        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtDisplayName);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$txtConfirmPassword);
        flexContainer.appendChild(this.$btnSubmit);

        const LinkToLogin = document.createElement("a");
        LinkToLogin.href = "#";
        LinkToLogin.innerHTML = " Back to Login";
        LinkToLogin.addEventListener("click", this.gotoLogin);

        flexContainer.appendChild(LinkToLogin);

        // lần render đầu tiên, container là thẻ div chứa form
        this.$formRegister.appendChild(flexContainer);
        container.appendChild(this.$formRegister);     
    }
}



export default Register;
import app from "./index.js";
import Register from "./register.js";

class Login{
    $txtEmail;
    $txtPassword;
    $formLogin;
    $btnSubmit;


    constructor(){
        this.$txtEmail = document.createElement ("input");
        this.$txtEmail.type ="email";
        this.$txtEmail.placeholder = "Enter your email ... ";
        this.$txtEmail.classList.add("form-input","m-b-sm");

        this.$txtPassword = document.createElement ("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Enter your password ... ";
        this.$txtPassword.classList.add("form-input","m-b-sm");


        this.$formLogin = document.createElement ("form");
        this.$formLogin.addEventListener("submit",this.login);

        this.$btnSubmit = document.createElement ("button");
        this.$btnSubmit.type= "submit";
        this.$btnSubmit.innerHTML="Login";
        this.$btnSubmit.classList.add("m-b-sm","btn","btn-primary","btn-primary:hover");
    }


    login =(event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        const password = this.$txtPassword.value;
     
        
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((userCredential) =>{
            console.log(userCredential);
        })

    }



    gotoRegister=() => {
        const register = new Register();
        app.changeActiveScreen(register);
    }

    initRender = (container) =>{
        const flexContainer= document.createElement("div");
        flexContainer.classList.add("d-flex","flex-column","centering","vh-100");
        const title = document.createElement("h2");
        title.innerHTML="Connect with your friends 😜😜 !!";
        flexContainer.appendChild(title);

        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$btnSubmit);



        const LinkToRegister = document.createElement("a");
        LinkToRegister.href= "#";
        LinkToRegister.innerHTML = " Go to Register";
        LinkToRegister.addEventListener("click",this.gotoRegister);

        flexContainer.appendChild(LinkToRegister);


        this.$formLogin.appendChild(flexContainer);

        container.appendChild(this.$formLogin);
    }

}
export default Login;




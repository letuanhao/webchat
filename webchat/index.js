
import Login from "./login.js";
import Main from "./main.js";
// document.getElementById("app").innerHTML = "hello world";
class App{
    activeScreen;
    container;

    constructor(container){
        this.container=container;
        // hoac this.container = document.getElementById("app");
        this.setUpFirebaseAuthListener();

    }

    setUpFirebaseAuthListener = () => {
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user);

            if(user ){
                const main = new Main();
                this.changeActiveScreen(main);
            }else{
                const login = new Login();
                this.changeActiveScreen(login);
            }
        })
    }

    changeActiveScreen(screen){
        if(this.activeScreen){
            this.container.innerHTML="";
        }
        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }
}
const container = document.getElementById ("app");



const login = new Login();


const app=new App(container);
app.changeActiveScreen(login);

export default app;


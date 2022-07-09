import ConversationList from "./Main/conversationList.js";
import Title from "./Main/title.js";
import Composer from "./Main/composer.js";
import MessageList from "./Main/messageList.js";
import ConversationInfo from "./conversationInfo.js";

class Main {
    conversationList;
    title;
    composer;
    messageList;
    conversationInfo;

    activeConversation;

    constructor () {
        this.conversationList = new ConversationList((conversation) => {
            this.setActiveConversation(conversation);
        });
        this.title = new Title("", 0);
        this.composer = new Composer();
        this.messageList = new MessageList();
        this.conversationInfo = new ConversationInfo();
    }

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;

        this.conversationList.setActiveConversation(conversation);
        this.title.setActiveConversation(conversation);
        this.composer.setActiveConversation(conversation);
        this.messageList.setActiveConversation(conversation);
        this.conversationInfo.setActiveConversation(conversation);
       
    } 
        

    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("d-flex", "item");
        div.style.height = "100vh";

        const content = document.createElement("div");
        content.classList.add("item", "grow-1", "d-flex", "flex-column");
        this.title.initRender(content);

        const div2 = document.createElement("div");
        div2.classList.add("item", "grow-1", "d-flex");
        
        // const conversationInfo = document.createElement("div");
        // conversationInfo.style.width = "200px";

        const div3 = document.createElement("div");
        div3.classList.add("grow-1", "item", "d-flex", "flex-column");
        
        this.messageList.initRender(div3);
        this.composer.initRender(div3);

        div2.appendChild(div3);
        this.conversationInfo.initRender(div2);

        
        content.appendChild(div2);
        this.conversationList.initRender(div);
        div.appendChild(content);


        container.appendChild(div);
    }
}

export default Main;


class MessageList {
    $messagesContainer
    activeConversation

    constructor() {
        this.$messagesContainer = document.createElement("div");
        this.$messagesContainer.classList.add("d-flex", "flex-column", "grow-1","overflow-y");
        this.$messagesContainer.style.height="0px";
    }

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$messagesContainer.innerHTML = "";
        this.setupMessageListener();
    }

    setupMessageListener = () => {
        if (this.messageListener){
            this.messageListener();
        }
        
        this.messageListener = db.collection("messages")
            .where("conversationId", "==", this.activeConversation.id)
            .orderBy("sentAt","asc")
            .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type==="added"){
                const p = document.createElement("p");

                const sender = document.createElement("div");
                sender.innerHTML = change.doc.data().sender + ":";

                const content = document.createElement("div");
                content.innerHTML = change.doc.data().content;

                p.appendChild(sender);
                p.appendChild(content);

                this.$messagesContainer.appendChild(p);
                }
            })
        });
    }

    initRender = (container) => {
        container.appendChild(this.$messagesContainer);
    }
}

export default MessageList;
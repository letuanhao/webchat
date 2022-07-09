class Composer {
    activeConversation

    $form
    $txtMessage
    $btnSend

    constructor () {
        this.$form = document.createElement("form");
        this.$form.addEventListener("submit", this.onSendMessage);
        
        this.$txtMessage = document.createElement("input");
        this.$txtMessage.type = "text";
        this.$txtMessage.placeholder = "Say something...";
        this.$txtMessage.classList.add("grow-1");

        this.$btnSend = document.createElement("button");
        this.$btnSend.type = "submit";
        this.$btnSend.innerHTML = "Send";
    }

    setActiveConversation(conversation) {
        this.activeConversation = conversation;
    }   

    onSendMessage = (event) => {
        event.preventDefault();

        if (!this.activeConversation) {
            alert("Please choose a conversation!");
            return;
        }
        db.collection("messages").add({
            content: this.$txtMessage.value,
            sender: firebase.auth().currentUser.email,
            conversationId: this.activeConversation.id,
            sentAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("d-flex", "item");
        div.appendChild(this.$txtMessage);
        div.appendChild(this.$btnSend);

        // this.$form.appendChild(this.$txtMessage);
        // this.$form.appendChild(this.$btnSend);

        this.$form.appendChild(div);

        container.appendChild(this.$form);

    }

}

export default Composer;
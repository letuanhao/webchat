class Title {
    name;
    noOfUsers;

    $txtName;
    $txtNoOfUsers;

    constructor(name, noOfUsers) {
        this.name = name;
        this.noOfUsers = noOfUsers;

        this.$txtName = document.createElement("span");
        this.$txtName.innerHTML = this.name;
        this.$txtName.style.fontSize = "30px"

        this.$txtNoOfUsers = document.createElement("small");
        this.$txtNoOfUsers.innerHTML = this.noOfUsers;
        this.$txtNoOfUsers.style.fontSize="16px"
    }

    setActiveConversation = (activeConversation) => {
        this.name = activeConversation.name;
        this.noOfUsers = activeConversation.users.length;
        this.$txtName.innerHTML = this.name;
        this.$txtNoOfUsers.innerHTML = this.noOfUsers +"user(s)";
    }

    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("d-flex", "item", "justify-between","p-x-sm","p-y-sm");
        div.style.border ="1px solid #ececec";
        div.style.alignItems = " center";

        div.appendChild(this.$txtName);
        div.appendChild(this.$txtNoOfUsers);

        container.appendChild(div);
    }
}

export default Title;
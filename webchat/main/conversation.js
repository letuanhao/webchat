class Conversation {
    id;
    name;
    users;
    onClick;

    $txtName;
    $txtNoOfUsers;
    $container;

    constructor(id, name, users, onClick) {
        this.id = id;
        this.name = name;
        this.users = users;

        this.$txtName = document.createElement("div");
        this.$txtName.innerHTML = name;
        this.$txtName.classList.add ("name");

        this.$txtNoOfUsers = document.createElement("small");
        this.$txtNoOfUsers.innerHTML = this.users.length + " user(s)";
        this.$txtNoOfUsers.classList.add("user-count");

        this.$container = document.createElement("div");
        this.$container.classList.add("conversation-item");

        this.onClick = onClick;

    }

    setActive = (isActive) => {
        if (isActive) {
            this.$container.classList.add("active");
        } else {
            this.$container.classList.remove("active");
        }
    }

    updateData = (newData) => {
        this.name = newData.name;
        this.users = newData.users;
        this.$txtNoOfUsers.innerHTML = this.users.length + " user(s)";
        this.onClick(this);
    }

    initRender = (container) => {
        this.$container.addEventListener("click", () => {
            this.onClick(this);
        })
        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$txtNoOfUsers);
        container.appendChild(this.$container);
    }
}

export default Conversation;
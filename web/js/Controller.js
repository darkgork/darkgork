class Controller {

    constructor(userrepo, form, store) {
        this.userrepo = userrepo;
        this.form = form;
        this.store = store;

        store.subscribe(this.formStatusHandler);
    }

    formData = () => {
        const formData = new FormData(this.form);
        let data = {};
        formData.forEach((value, key) => { data[key] = value });        
        return data;
    }

    async registerUser() {
        let appStatus = this.store.getState();
        if (appStatus.formState == FORMSTATE.READY_TO_UPDATE) {
            await this.updateUser();        
        } else {
            await this.insertUser();        
        }        
    }

    init = async () => { 
        await this.getAllUsers(); 
    }
    
    insertUser = async () => {        
        await this.userrepo.insertUser(this.formData()); 
        await this.getAllUsers();
    } 

    updateUser = async () => {
        await this.userrepo.updateUser(this.formData());
        await this.getAllUsers();
    }

    deleteUser = async (username) => {
        await this.userrepo.deleteUser(username);        
        await this.getAllUsers();
    }

    getUser = async (username) => {
        let response = await this.userrepo.getUser(username);  
        this.store.dispatch({
            type: FORMSTATE.READY_TO_UPDATE,
            data: response
        });
    }

    getAllUsers = async () => {
        let response = await this.userrepo.getUsers();
        this.store.dispatch({
            type: FORMSTATE.SYNC_DATA,
            data: response
        });
    }
    
    formStatusHandler = () => {
        let appState = store.getState();
        if (appState.formState == FORMSTATE.SYNC_DATA) {
            renderList(appState.response);
            this.formReset();
        }
    
        if (appState.formState == FORMSTATE.READY_TO_UPDATE) {
            this.renderUserFormView(appState.current);
        }    
    }    
    
    renderUserFormView(user) {
        let usernameBox = document.getElementById("Username");
        let passwordBox = document.getElementById("Password");
        let nameBox = document.getElementById("Name");
        let surnameBox = document.getElementById("Surname");
        let emailBox = document.getElementById("EmailAddress");
    
        usernameBox.value = user.username;
        passwordBox.value = user.password ? user.password : '';
        nameBox.value = user.name;
        surnameBox.value = user.surname;
        emailBox.value = user.emailAddress ? user.emailAddress : '';        
    }
    
    formReset() {
        let form = document.getElementById("userForm");        
        form.reset();
    }
}
const { createStore } = Redux;
const store = createStore(crudReducer);

const controller = new Controller(new UserRepo(), document.getElementById("userForm"), store);
controller.init();

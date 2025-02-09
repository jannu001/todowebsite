let todos = [];
function addtodo() {
    todos.push({
        title: document.querySelector("input").value
       
    })
    render()
}

function deletefirsttodo() {
    todos.splice(0, 1)
    render()
}
function deletelasttodo() {
    todos.splice(todos.length - 1, 1)
    render()
}
function deletetodoat(index) {
    todos.splice(index, 1);
    render()
}

function createtodocomponent(todo, index) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.setAttribute("onclick", "deletetodoat(" + index + ")");
    h2.innerHTML = todo.title;
    div.append(h2)
    div.append(button)
    return div
}

function render() {
    document.querySelector("#todos").innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const element = createtodocomponent(todos[i], i);
        document.querySelector("#todos").appendChild(element);
    }
}
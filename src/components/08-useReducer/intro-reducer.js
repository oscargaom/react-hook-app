
// Se crea un arreglo con un objeto.
const initialState = [{
    id: 1,
    todo: "Solfeo",
    done: false
}];

const reducer = (state = initialState, action) => {

    if (action?.type === "agregar") {
        return [...state, action.payload];
    }

    return state;
};

const todos = reducer();

const newTodo = {
    id: 2,
    todo: "Practiar por 15 minutos",
    done: false
};

const agregarTodoAction = {
    type: "agregar",
    payload: newTodo
};

const newTodos = reducer(todos, agregarTodoAction);

console.log(todos);
console.log(newTodos);

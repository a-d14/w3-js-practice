let variableStore = {};

const body = document.getElementsByTagName('body')[0];
const variableList = document.getElementById('variable-list');
console.log(body);

const varNameInput = document.getElementById('varName');
const varValueInput = document.getElementById('varValue');

function submitForm(event) {
    event.preventDefault();

    removeAllChildren();
    
    const variableName = varNameInput.value;
    const variableValue = Number.isFinite(varValueInput.value) ? parseInt(varValueInput.value) : varValueInput.value;

    variableStore = {...variableStore, [variableName]: variableValue};

    console.log(variableStore);

    for(const key in variableStore) {
        const newItem = document.createElement("li");
        const itemValue = document.createTextNode(`${key} : ${variableStore[key]}`);
        newItem.appendChild(itemValue);
        variableList.appendChild(newItem);
    }

}

function removeAllChildren() {
    while(variableList.firstChild) {
        variableList.removeChild(variableList.firstChild);
    }
}

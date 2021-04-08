let showingSourceCode = false;
let isInEditMode = true;

let bold = false;
let config = {
    bold: false,
    italic: false,
    underline: false,
    alignment: 'justifyLeft',
    bullets: false
}

function isBold() {
    return bold;
}

function toggleBold() {
    bold = !bold;
}

function getValue(field) {
    return config[field];
}

function enableEditMode() {
    richTextField.document.designMode = 'On';
    richTextField.focus();
    execCommandWithArg('fontName', 'Arial');
    execCommandWithArg('fontSize', '4');
}

function execCmd (command) {
    richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg (command, arg) {
    richTextField.document.execCommand(command, false, arg);
}

function toggleSource () {
    if(showingSourceCode){
        richTextField.document.getElementsByTagName('body')[0].innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent;
        showingSourceCode = false;
    }else{
        richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
        showingSourceCode = true;
    }
}

function toggleEdit () {
    if(isInEditMode){
        richTextField.document.designMode = 'Off';
        isInEditMode = false;
    }else{
        richTextField.document.designMode = 'On';
        isInEditMode = true;
    }
}
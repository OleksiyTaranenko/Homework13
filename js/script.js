class ToDo {

    constructor() {
        let publishButton = document.getElementById('publishToDo');
        publishButton.addEventListener('click', () => {
            this.sendToDo();
        });
    }

    sendToDo() {
        let text = this.getInputToDo();

        if(text){
            let params = {
                text: text,
                backgroundColor: 'red',                
            };

            let toDoBlock = this.createToDoBlock(params);
            this.addToDo(toDoBlock);
        }
    }

    addToDo(toDoBlock) {
        let toDoFieldBlock = document.getElementById('toDoField');
        toDoFieldBlock.appendChild(toDoBlock);
    }

    getInputToDo() {
        let inputText = document.getElementById('typeToDo');
        let inputValue = inputText.value;
        inputText.value = '';

        return inputValue;
    }

    createToDoBlock(params) {
        let toDoBlock = document.createElement('div');
        toDoBlock.classList.add('toDo');

        let toDoDateBlock = this.createToDoDateBlock();
        toDoBlock.appendChild(toDoDateBlock);

        let toDoIconBlock = this.createtoDoIconBlock(params.backgroundColor);
        toDoBlock.appendChild(toDoIconBlock);

        let toDoTextBlock = this.createtoDoTextBlock(params.text);
        toDoBlock.appendChild(toDoTextBlock);

        return toDoBlock;
    }

    createToDoDateBlock() {
        let toDoDateBlock = document.createElement('span');
        toDoDateBlock.classList.add('date');
        toDoDateBlock.textContent = '18.05.2021';

        return toDoDateBlock;
    }

    createtoDoIconBlock() {
        let toDoIconBlock = document.createElement('div');
        toDoIconBlock.classList.add('icon');               

        return toDoIconBlock;
    }

    createtoDoTextBlock(text) {
        let toDoTextBlock = document.createElement('p');
        toDoTextBlock.classList.add('text'); 
        toDoTextBlock.textContent = text;        

        return toDoTextBlock;
    }
}

let toDo = new ToDo();
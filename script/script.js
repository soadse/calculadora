function addNum(value){
    document.querySelector('#display').value += value 
}

function limpaNum(){
    document.querySelector('#display').value = ''
}

function somaNum(){
    try {
        document.querySelector('#display').value = eval
        (document.querySelector('#display').value);
    } catch (error) {
        document.querySelector('#display').value = 'Erro';
    }
}



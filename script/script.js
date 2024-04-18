function addNum(value){
    var n1 = document.querySelector('#display').value += value 
    if(String(n1).length > 8 && String(n1).length <= 13){
        document.querySelector('#display').style.fontSize = '50px' 
    } else if(String(n1).length > 13 ){
        document.querySelector('#display').style.fontSize = '35px' 
    }
}

function limpaNum(){
    document.querySelector('#display').style.fontSize = '5em'
    document.querySelector('#display').value = ''
}

function somaNum(){
    try {
        var n2 = document.querySelector('#display').value = eval
        (document.querySelector('#display').value);
        if(String(n2).length > 13){
            document.querySelector('#display').style.fontSize = '35px'
        } else if(String(n2).length <= 13){
            document.querySelector('#display').style.fontSize = '50'
        } else {
            document.querySelector('#display').style.fontSize = '5em'
        }
        
    } catch (error) {
        document.querySelector('#display').value = 'Erro'; 
        var erro = setTimeout(function errorr(){
            document.querySelector('#display').value = ''
        }, 500)
    }
}



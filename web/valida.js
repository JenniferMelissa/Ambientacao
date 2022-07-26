/*
    A função é um trecho de código(algoritmo) para resolver um problema específico.
*/

    function validar(){
        //Declara as variáveis 
        //O tipo é implícito
        //JS é fracamente tipada

        var login;
        var senha;

        //Pegar o elemento(tags)
        //Três sinais de "===" ele esta comparando o valor E O TIPO; om apenas dois "==" ele só verifica o valor

        login = document.getElementById("login").value; //sem o .value ele pega o elemento mas não pega o valor
        senha = document.getElementById("senha").value; //para pegar o valor, coloque .value

        //validando

        if(login === ''){
            alert("Login Obrigatório");
            return false;
        }
        else if(senha === ''){
            alert("Senha Obrigatória");
            return false;
        }
        else{
            return true;
        }
    }
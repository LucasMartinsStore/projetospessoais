function calcular(tipo , valor) {

    if(tipo === 'acao'){

        if(valor === 'c'){
            // limpar o visor
            document.getElementById('result').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('result').value += valor
        }

        if(valor === '='){
           var value_camp = eval(document.getElementById('result').value)

           document.getElementById('result').value = value_camp
        }

    }else if(tipo === 'valor'){
        document.getElementById('result').value += valor
    }
}
var vetRespostas = [2, 1, 2, 3, 3, 3,  2,3,1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1];
var acertos = 0;
var erros = 0;

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("btnVerificar").addEventListener("click", function(){
		if(confirm("Deseja realmente validar suas respostas?")){
			validar();
		}
	});
});

function validar(){
	
	for(i = 0; i < vetRespostas.length; i++){
		
		for(j = 0; j < 3; j++){
			var form = "rdP" + (i+1);
			var span = "sP" + (i+1);
			
			var elemento = document.getElementsByClassName(form);
			var spanText = document.getElementsByClassName(span);
			
			if(elemento[j].checked){
				if(elemento[j].value == vetRespostas[i]){
					spanText[j].style.color = "#20B2AA";
					spanText[j].style.fontWeight = "bold";
					acertos++;
				}else{
					spanText[j].style.color = "#F08080";
					erros++;
				}	
			}
			else{
				spanText[j].style.color = "#B0C4DE";
			}
			
			if (elemento[j].value == vetRespostas[i]) {
                spanText[j].style.color = "#20B2AA";
                spanText[j].style.fontWeight = "bold";
            }
			document.getElementById("btnVerificar").style.display = "none";
			document.getElementById("acertos").innerHTML = "<span style=\"font-weight:bold;\">Acertos:</span> " + acertos;
			document.getElementById("erros").innerHTML = "<span style=\"font-weight:bold;\">Erros:</span> " + erros;
			document.getElementById("result").style.display = "block";
			
			elemento[j].disabled = "disabled";
		}
		
	}
}
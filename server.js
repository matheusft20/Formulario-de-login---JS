var express = require('express');
var app = express();

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

//Altere o './' para apontar para a raiz do seu aplicativo angular
app.use(express.static(path.resolve('./')));

//Envie tudo para sua página index.html
app.get('/*', function(req, res) {
  res.sendFile(path.resolve('./index.html'));
 });





 /* 
	Criar uma máscara em um endereço de e-mail
	Esta função cria uma máscara usando um endereço de e-mail válido.
	Isso é útil quando alguém precisa confirmar o email usado em um sistema
	Autor: Matheus França -- https://github.com/minimo2020
 */
function emailMask(email) {
	var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
	var previous	= "";
	for(i=0;i<maskedEmail.length;i++){
		if (i<=1 || previous == "." || previous == "@"){
			maskedEmail[i] = email[i]=
		}
		previous = email[i];
	}
	return maskedEmail.join('');
}


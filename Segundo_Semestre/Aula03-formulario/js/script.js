function validacao(){
   if(document.form.nome.value == ""){
      alert("O campo nome precisa ser preenchido!");
      document.form.nome.focus();
      return;
   }

   if(document.form.email.value == ""){
      alert("O campo email precisa ser preenchido!");
      document.form.email.focus();
      return;
   }

   if(document.form.assunto.value == ""){
      alert("O campo assunto precisa ser preenchido!");
      document.form.assunto.focus();
      return;
   }

   if(document.form.mensagem.value == ""){
      alert("O campo mensagem precisa ser preenchido!");
      document.form.mensagem.focus();
      return;
   }

   document.form.action = "resultado.html";
   document.form.submit();
}

function validacao2(){
   var msgP = "O campo está vazio";

   if(document.getElementById("nome").value == ""){
      document.getElementById("nome").focus();
      mostrarMensagemErro(msgP);
      return;
   }
   if(document.getElementById("email").value == ""){
      document.getElementById("email").focus();
      mostrarMensagemErro(msgP);
      return;
   }
   if(document.getElementById("assunto").value == ""){
      document.getElementById("assunto").focus();
      mostrarMensagemErro(msgP);
      return;
   }
   if(document.getElementById("mensagem").value == ""){
      document.getElementById("mensagem").focus();
      mostrarMensagemErro(msgP);
      return;
   }

   document.form.action = "resultado.html";
   document.form.submit();
}

function mostrarMensagemErro(mensagem){
   // alert(mensagem);
   var campoMSG = document.getElementById("mensagemErro");
   campoMSG.innerHTML = mensagem;
   campoMSG.style.display = "block";
   campoMSG.style.background = "rgba(255, 0, 0, 0.28)";
   campoMSG.style.padding = "20px";
   campoMSG.style.fontSize = "25px";
   campoMSG.style.fontFamily = "Tahoma";
   campoMSG.style.border = "1px dashed #fff";
   campoMSG.style.textAlign = "center";
   campoMSG.style.color = "#ffffff"
}

function fecharMSG(){
   document.getElementById("mensagemErro").style.display = "none";
}

function mudarCor(cor){
   var campo = document.getElementsByTagName("label");

   if(cor == 1){
      document.getElementById("box").style.background = "#222"
      for(var i = 0; i < campo.length; i++){
         campo[i].style.background = "#1c1c1c"
      }   
   }

   if(cor == 2){
      document.getElementById("box").style.background = "#262f68"
      for(var i = 0; i < campo.length; i++){
         campo[i].style.background = "#313ea5"
      }   
   }

   if(cor == 3){
      document.getElementById("box").style.background = "#780101"
      for(var i = 0; i < campo.length; i++){
         campo[i].style.background = "#b46e6e"
      }   
   }

   if(cor == 4){
      document.getElementById("box").style.background = "#043"
      for(var i = 0; i < campo.length; i++){
         campo[i].style.background = "#568d58"
      }   
   }

}
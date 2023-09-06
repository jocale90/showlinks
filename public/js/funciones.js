/*Función que sirve para el cambiar el tabs*/
function Options(evt, button) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(button).style.display = "block";
	evt.currentTarget.className += " active";
}

function Validador(){
	correo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	comuna = $('#comuna').val();
	punto_ref = $('#punto_referencia').val();
	email_cont = $('#email_cont').val();
	nombre_em = $('#nombre_em').val();
	email_em = $('#email_em').val();
	rut = $('#rut').val();
	$.validator.setDefaults({ ignore: ":hidden:not(select)" });
	//var comuna1 = document.querySelector("#comuna");

	/*if(comuna == 0){
		//.setCustomValidity("RUT Inválido"); 
		document.getElementById("demo").innerHTML = "Seleccione comuna";
		//swal("Debe ingresar una comuna","","warning");
		//document.getElementById("#comuna").focus();
		return false;
	}*/

	if(punto_ref == "poste"){
		poste = $('#n_poste').val();
		if(poste == null){
			swal("Debe ingresar un nº de poste","","warning");
			return false;
		}
	}

	if(punto_ref == "camara"){
		camara = $('#n_camara').val();
		if(camara == null){
			swal("Debe ingresar un nº de cámara","","warning");
			document.getElementById("#n_camara").focus();
			return false;
		}
	}

	if(!correo.test(email_cont)){
		swal("Debe ingresar un correo válido"," El correo"+  correo_cont + " debe seguir el siguiente formato \n Ej: correo@correo.cl","warning");
		return false;
	}

	if(nombre_em == null){
		swal("Debe seleccionar el nombre de la Empresa de Excavación","","warning");
		return false;
	}


	if(!correo.test(email_em)){
		swal("Debe ingresar un correo válido"," El correo"+ email_em + " debe seguir el siguiente formato \n Ej: correo@correo.cl","warning");
		return false;
	}

	swal("Mensaje enviado con exito","","success");
	return true;
}

function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    //alert(valor);
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7){ 
    	document.getElementById("messageRut").innerHTML = "Rut incompleto";
    	//rut.setCustomValidity("RUT Incompleto"); 
    	return false;
    }
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++){
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i); 
        // Sumar al Contador General
        suma = suma + index;
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7){ 
        	multiplo = multiplo + 1; 
        	}else{ 
        		multiplo = 2; 
        } 
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv){ 
    	alert(valor);
    	document.getElementById("messageRut").innerHTML = "Rut incorrecto";
    	//rut.setCustomValidity("RUT Inválido"); 
    	return false; 
    }
    //document.getElementById("messageRut").innerHTML = "Rut incompleto";
    // Si todo sale bien, eliminar errores (decretar que es válido)
    
    rut.setCustomValidity('');
    return true;

}

function checkMessageComuna(){
	document.getElementById("messageComuna").innerHTML = "";
}

function checkMessagePuntoRef(){
	document.getElementById("messagePuntoReferencia").innerHTML = "";
}

function checkMessagePoste(){
	document.getElementById("messagePoste").innerHTML = "";
}

function checkMessageCamara(){
	document.getElementById("messageCamara").innerHTML = "";
}

function checkMessageNameCompany(){
	document.getElementById("messageNombreEmpresa").innerHTML = "";
}

function see_terms(){
	document.getElementById("see_terms").innerHTML = "\n“La información es  referencial, cualquier modificación y/o daños ocasionados a nuestras instalaciones es de exclusiva responsabilidad del solicitante.\nAnte cualquier duda o emergencia, favor llamar al fono 600 600 5000 para requerir  personal calificado”";
}

function Captcha() {
    var response = grecaptcha.getResponse();
    if(response.length == 0){
       document.getElementById("messageRecaptcha").innerHTML = "Captcha no verificado";
       return false;
    } else {
      document.getElementById("messageRecaptcha").innerHTML = " ";
      return true;
    }
}

function Limpiar(){
	grecaptcha.reset();
	document.getElementById("formRequest").reset();
	$("#nombre_em").val('0').trigger('chosen:updated');
	$("#rut").val('0').trigger('chosen:updated');
	swal('Limpiado','Formulario fue limpiado','success');
}

function Validar(){
	//var response = grecaptcha.getResponse();
    document.getElementById("messageRecaptcha").innerHTML = " ";
 
}

function Mostrar(id){
	//alert(id);
	document.getElementById(id).style.display = "display"
}

function Ocultar(id){
	document.getElementById(id).style.display = "none"
}

function Mostrar_Ocultar(id){
//	alert(id.style.display);
	var caja = id;
		alert(caja.style.display);
	if(caja.style.display == 'none'){
		Mostrar('id');
		document.getElementById("boton").value = "Ocultar";
	}
	else{
		Ocultar(id);
		document.getElementById("boton").value = "Mostrar";
	}
}

function checkMessageFile(){
	document.getElementById("messageFile").innerHTML = "";
}

function checkMessageDate(){
	document.getElementById("messageDate").innerHTML = "";
}



      
	        




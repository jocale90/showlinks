$.validator.addMethod('checkComuna', function (value, element) {
    //var comuna=document.getElementById("comuna").value;

    if(value == null){
        document.getElementById("messageComuna").innerHTML = "Seleccione una comuna";
        return false;
    }else{
        document.getElementById("messageComuna").innerHTML = "";
        return true;   
    }
});

$.validator.addMethod('checkPoste', function (value, element) {
    var poste=document.getElementById("n_poste").value;

    if(poste == 0){
        document.getElementById("messagePoste").innerHTML = "Seleccione nº poste";
        return false;
    }else{
        document.getElementById("messagePoste").innerHTML = "";
        return true;   
    }
});

$.validator.addMethod('checkCamara', function (value, element) {
    var camara=document.getElementById("n_camara").value;
   
    if(camara == 0){
        document.getElementById("messageComuna").innerHTML = "Seleccione nº de cámara";
       //alert("hola");
        return false;
    }else{
        return true;
    }
});

$.validator.addMethod('checkEmail', function (value, element) {
    var email_cont=document.getElementById("email_cont").value;
    email_formato = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!email_formato.test(email_cont)){
        document.getElementById("messageEmail").innerHTML = "Formato no valido, Ej: email@email.cl";
        return false;
    }else{
        document.getElementById("messageEmail").innerHTML = "";
        return true; 
        }  
});

$.validator.addMethod('checkEmail2', function (value, element) {
    var email_em=document.getElementById("email_em").value;
    email_formato = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!email_formato.test(email_em)){
        document.getElementById("messageEmail2").innerHTML = "Formato no valido, Ej: email@email.cl";
        return false;
    }else{
        document.getElementById("messageEmail2").innerHTML = "";
        return true; 
        }  
});


$.validator.addMethod('checkNombreEmpresa', function (value, element) {
    var nombre_em=document.getElementById("nombre_em").value;

    if(nombre_em == 0){
        document.getElementById("messageNombreEmpresa").innerHTML = "Seleccione nombre empresa excavación";
        return false;
    }else{
        document.getElementById("messageNombreEmpresa").innerHTML = "";
        return true;   
    }
});

$.validator.addMethod('checkRut', function (value, element) {
    var rut = document.getElementById("rut").value;
    // Despejar Puntos
alert(rut);
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
     alert(valor);
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7){ 
        //document.getElementById("messageRut").innerHTML = "Rut incompleto";
        rut.setCustomValidity("RUT Incompleto"); 
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
        //document.getElementById("messageRut").innerHTML = "Rut icorrecto";
        rut.setCustomValidity("RUT Inválido"); 
        return false; 
    }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    //document.getElementById("messageRut").innerHTML = "";
    rut.setCustomValidity('');
    //return true;
});

$.validator.addMethod('number', function (value, element) {
    number_format = /^[0-9]+$/;

    if(!number_format.test(value)){
        document.getElementById("messageNumber").innerHTML = "Formato no valido, solo números";
        return false;
    }else{
        document.getElementById("messageNumber").innerHTML = "";
        return true; 
        }  
});

$.validator.addMethod('file', function (value, element) {
    var extension = value .replace(/^.*\./, '');

    switch (extension.toLowerCase()) {
                case 'png':
                case 'jpg':
                case 'jpeg':
                case 'bmp':
                case 'gif':
                case 'tif':
                case 'tiff':
                    document.getElementById("messageFile").innerHTML = "";
                    return true;
                    break;
                default:
                    document.getElementById("messageFile").innerHTML = "Formato no valido";
                    return false;
                    break;
            }     
});

$.validator.addMethod('date', function (value, element) {
    var date_format = /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/;  
    var now = new Date();
    //alert(now);
    if(!date_format.test(value)){
        document.getElementById("messageDate").innerHTML = "Formato no valido, seleccione una fecha del calendario";
        return false;
    }else{
        document.getElementById("messageDate").innerHTML = "";
        return true;
    }  
});

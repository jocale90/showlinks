<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Ingreso de Solicitudes</title>

    <?php $empresa = 1;
    $mensajeError = 1;
    ?>

	<link rel="stylesheet" href="{{ asset('css/estilosLitoral.css') }}" />

	<link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" />
	<link rel="stylesheet" href="{{ asset('plugins/chosen/chosen.css') }}" />
	<link rel="stylesheet" href="{{ asset('//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css') }}">

	<link rel="stylesheet" type="text/css" href="https://js.arcgis.com/3.27/esri/css/esri.css" />
	<link rel="stylesheet" href="css/semantic.min.css" />

	<!-- JS -->
	<script src="{{ asset('https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js') }}"></script>
	<script src="{{ asset('plugins/chosen/chosen.jquery.js') }}"></script>
	<script src="{{ asset('plugins/jquery-validation/dist/jquery.validate.js') }}"></script>
	<script src="{{ asset('plugins/jquery-rut/validation-rut.js') }}"></script>
	<script src="{{ asset('https://unpkg.com/sweetalert/dist/sweetalert.min.js') }}"></script>
	<script src="{{ asset('js/funciones.js') }}"></script>
	<script src="{{ asset('js/validador.js') }}"></script>
	<script src="{{ asset('https://www.google.com/recaptcha/api.js') }}"></script>
	<script src="{{ asset('https://code.jquery.com/ui/1.12.1/jquery-ui.js') }}"></script>


	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


	<style>
		#mapjp {
			height: 80%;
			width: 100%;
		}


		#postinedabsolute {
			background-color: black;
			width: 50%;
			height: 50%;
			position: absolute;
			text-align: center;
			align-items: center;
		}

		#contentabsolute{
			position: absolute;
			background-color: black;
			width: 700px;
			height: 400px;
			margin: auto;
			top: 70%;
  			left: 50%;
			transform: translate(-50%, -50%);
			/* top: 50%;
			transform: translate(0, -50%); */
			border: 4px solid;
			border-radius: 7px;
			text-align: center;
			margin: 0 auto;
	  		justify-content: center;
		}

		#input_autocomplete{
			width: 100%;
			height: 40px;
			border-radius: 0;
			border: none;
			font-size: 18px;
		}
	</style>

	


</head>

<body>





	<div style='outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-overflow-scrolling:touch;font:300 16px/18px "Whitney";'>
		<div style='outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;color:#3D3D3D;font-family:"Lato", sans-serif;font-size:16px;line-height:1.2;font-weight:400;overflow-x:hidden;'>
			<header style="z-index:1002;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;background-color:#fff;position:relative;height:auto;color:#4B4E54;overflow:hidden;margin-top:130px;">
				<div style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff !important;">
					<div id="bartop" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#E3E4E8;position:fixed;top:0;right:0;left:0;z-index:1030;">
						<div style="margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;width:1176px;">
							<nav style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;">
								<ul style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;list-style:none;text-align:left;">
									<li style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;list-style:none;font-size:1em;display:inline-block;margin-bottom:0;margin-left:20px;">
										<a href="#" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;text-decoration:none;transition:all 0.3s;-ms-transition:all 0.3s;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;color:#797979;display:block;font-size:14px;font-weight:600;padding:12px 30px;">Home</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div id="barbot" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff !important;position:fixed;top:0;right:0;left:0;z-index:1030;margin-top:40px;">
						<div style="margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;width:1176px;">


							<a href="#" title="showlink" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:transparent;text-decoration:none;transition:all 0.3s;-ms-transition:all 0.3s;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;color:#457EC0;display:block;position:absolute;z-index:40;width:163px;margin-top:20px;"><img src="{{ asset('img/logos/logo.png') }}" width="auto" alt="Logo showlink" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;border:0;vertical-align:top;height:auto;width:100%;"></a>



							<nav>


								{{--<ul style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:19px 0 0;list-style:none;text-align:left;float:right;">--}}
								{{--<li style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;list-style:none;font-size:1em;display:inline-block;margin-bottom:0;vertical-align:middle;margin-left:10px;">--}}
								{{--<a data-fancybox="" data-type="iframe" data-src="#/registrar-paso-1" data-slide-href="javascript:;" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:transparent;text-decoration:none;transition:all 0.3s;-ms-transition:all 0.3s;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;color:#E23B3C;font-style:italic !important;display:inline-block;font-size:16px;font-weight:400;white-space:normal;">Reg&iacute;strate</a>--}}
								{{--</li>--}}
								{{--<li style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;list-style:none;font-size:1em;display:inline-block;margin-bottom:0;vertical-align:middle;margin-left:10px;">--}}
								{{--<a href="/" style='outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#F5515F;text-decoration:none;transition:.2s;-ms-transition:all 0.3s;-moz-transition:all 0.3s;-webkit-transition:.2s;color:#fff;border:0;border-radius:3px;cursor:pointer;font-family:"Lato", sans-serif;font-size:0.8888888889em;font-weight:700;display:inline-block;padding:14px 32px;min-height:42px;text-align:center;margin:0;background-image:linear-gradient(-180deg, #F5515F 0%, #D1281E 100%);'>Inicia sesi&oacute;n</a>--}}
								{{--</li>--}}
								{{--</ul>--}}

							</nav>
						</div>
					</div>
				</div>
			</header>
		</div>
	</div>

	<script language="javascript" type="text/javascript">
		if (typeof(Storage) !== "undefined") {
			// Store
			var empresa= {{ $empresa }};
			localStorage.setItem("company", empresa);
			console.log(localStorage.getItem("company"));
		} else {
			//document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}

		var company = (localStorage.getItem("company"));
	</script>

	<section style="">
		<div class="row tab">

            <!--<div class="col-lg-6 text-center" style="padding-right: 0px; padding-left: 0px;">
				<a href="{{ route('mapa') }}" onclick="location.href=this.href+'?empresa='+company;return false;" style="color: #575759;">
					<button style="background-color: white;">Ingreso de Solicitud</button>
				</a>
			</div>
			<div class="col-lg-6 text-center" style="padding-right: 0px; padding-left: 0px;">
				<a href="{{ route('mapa') }}" onclick="location.href=this.href+'?empresa='+company;return false;" style="color: #575759;">
					<button>Seguimiento de Solicitud</button>
				</a>
			</div> -->
		</div>










		<!--PESTAÑA INGRESO DE SOLICITUD onsubmit="return Validador()"-->
		<div id="form">
			<div class="container box-form" style="width: 800px;">
				<form action="{{ route('mapa') }}" method="POST" id="formRequest" enctype="multipart/form-data" onsubmit="return Captcha()">
					<!--{!! csrf_field() !!}-->
					<input id="token" type="hidden" name="_token" value="{{ csrf_token() }}">



					<input type="hidden" name="comuna" id="comuna" value="30">
					<input type="hidden" name="direccion_ref" id="direccion_ref" value="Blanco 214, Valparaíso, Chile">
					<input type="hidden" name="googlemapcomuna" id="googlemapcomuna" value="Valparaiso">
					<input type="hidden" name="redes_sub" id="redes_sub" value="1">


					@if($mensajeError==='-1')
					<div class="box">
						<div class="box-header with-border" style="background: #e15441;">
							<h3 class="box-title">Error generando la Solicitud.</h3>
						</div>
					</div>
					@endif


					<!--////////SECCIÓN DATOS DEL PROYECTO//////-->
					<h3 class="box-subtitulo section">Datos del Proyecto</h3>
					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Tipo de empresas</label>
							<div class="col-sm-8">
								<input style="width: 20px;" type="radio" name="tipo_empresa" value="company" checked>Empresa
								<input style="width: 20px;" type="radio" name="tipo_empresa" value="particular">Particular
							</div>
						</div>
					</div>




					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Nombre Proyecto*</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="nombre_pro" id="nombre_pro" placeholder="Ingrese nombre del proyecto">
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Responsable del proyecto*</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="responsable_pro" id="responsable_pro" placeholder="Ingrese responsable del proyecto" pattern="[A-Za-z]+" title="solo letras" required>
							</div>
						</div>
					</div>





					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Seleccione punto de excavación*</label>
							<div class="col-sm-8">
								{{-- Boton MODAL --}}
								@if($empresa == 1)
								<button id="verMapax" type="button" class="btn btn-danger opengooglemapsmodal">
									@endif
									@if($empresa == 2)
									<button id="verMapax" type="button" class="btn btn-primary opengooglemapsmodal">
										@endif
										@if($empresa == 3)
										<button id="verMapax" type="button" class="btn btn-success opengooglemapsmodal">
											@endif
											@if($empresa == 4)
											<button id="verMapax" type="button" class="btn btn-primary opengooglemapsmodal">
												@endif
												@if($empresa == 5)
												<button id="verMapax" type="button" class="btn btn-primary opengooglemapsmodal">
													@endif
													Ver mapa
												</button>
												{{-- Contenido MODAL --}}
												<div class="modal fade" id="verMapa" tabindex="-1" role="dialog" aria-labelledby="Ver Mapa" aria-hidden="true">
													<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
														<div class="modal-content">
															<div class="modal-header" style="margin: 0 auto;">
																<h5 class="modal-title" style="color: dimgrey; padding: 3px 10px; border: red 2px solid; border-radius: 20px;">Respuesta</h5>
															</div>
															<div class="modal-body">

															<p>Hay redes eléctricas subterráneas en el lugar propiedad de  Distribución. No puede proceder a realizar la excavación, antes debe:
															<br><br>
																<b> Para trabajos programados: </b> Seguir las instrucciones indicadas en ANEXO B que se le remitirá por correo. <br>
																<b> Para trabajos de emergencia: </b> Coordinar vía telefónica con nuestro Centro de Comando (Despacho) la concurrencia de personal calificado al momento de la excavación para asistirlos en el punto.
															</p>

															</div>
															<div class="modal-footer">
																<button type="button" class="btn btn-danger" data-dismiss="modal">Continuar</button>
															</div>
														</div>
													</div>
												</div>

												<div class="modal fade" id="modalexitoperforacion" tabindex="-1" role="dialog" aria-labelledby="Ver Mapa" aria-hidden="true">
													<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
														<div class="modal-content">
															<div class="modal-header" style="margin: 0 auto;">
																<h5 class="modal-title" style="color: dimgrey; padding: 3px 10px; border: red 2px solid; border-radius: 20px;">Respuesta</h5>
															</div>
															<div class="modal-body">

															<p>No hay redes eléctricas subterráneas en el lugar propiedad de  Distribución. De igual forma vía correo con el número de ticket se encontrará el respaldo de esta respuesta.</p>
															
															<p>Lo anterior referido a redes en zona de concesión de  Distribución, se recomienda asegurar la no existencia de otras distribuidoras o servicios antes de excavar.</p>

															</div>
															<div class="modal-footer">
																<button type="button" class="btn btn-danger" data-dismiss="modal">Continuar</button>
															</div>
														</div>
													</div>
												</div>

												


							</div>
						</div>
					</div>

					{{-- VERIFICAR SI LLEGAN LOS DATOS --}}
					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Comuna Punto de Excavación</label>
							<div class="col-sm-8">
								<input type="text" name="txt_comM" id="txt_comM" class="form-control" readonly="readonly">
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Alimentador Punto de Excavación</label>
							<div class="col-sm-8">
								<input type="text" name="txt_ali" id="txt_ali" class="form-control" readonly="readonly">
							</div>
						</div>
					</div>



					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Latitud*</label>
							<div class="col-sm-8">
								<input type="text" name="txt_lat" id="txt_lat" class="form-control" readonly="readonly" required>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Longitud*</label>
							<div class="col-sm-8">
								<input type="text" name="txt_lon" id="txt_lon" class="form-control" readonly="readonly" required>
							</div>
						</div>
					</div>

<!-- 					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Dirección de referencia*</label>
							<div class="col-sm-8">
								<input class="form-control" type="hidden" name="direccion_ref" id="direccion_ref" value="sdfsdfsdfsdfsdfsdfsdfsdf" placeholder="Ingrese la dirección Calle ; número ; sector">
							</div>
						</div>
					</div> -->

					

					<!--<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Punto de referencia</label>
							<div class="col-sm-8">
								<select class="form-control" name="punto_referencia" id="punto_referencia" onchange="checkMessagePuntoRef()" >
								  <option value="" disabled selected>Seleccionar punto de referencia</option>
							      <option value="poste">Poste</option>
							      <option value="camara">Cámara</option>
							    </select>
							</div>
						</div>
					</div>

					<div class="form-group hide" id="poste">
						<div class="row">
							<label class="col-sm-4">Nº de poste</label>
							<div class="col-sm-8">
								<select class="form-control select-tag" name="n_poste" id="n_poste" onchange="checkMessagePoste()">
								  <option value="0" disabled selected>Seleccionar número poste</option>
								 
							    </select>
							    <p id="messagePoste" style="color: #e54b4d;"></p>
							</div>
						</div>
					</div>

					<div class="form-group hide" id="camara">
						<div class="row">
							<label class="col-sm-4">Nº de cámara</label>
							<div class="col-sm-8">
								<select class="form-control select-tag" name="n_camara" id="n_camara" onchange="checkMessageCamara()">
								  <option value="0" disabled selected>Seleccionar número cámara</option>
							      
							    </select>
							    <p id="messageComuna" style="color: #e54b4d;"></p>
							</div>
						</div>
					</div> -->

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Fecha estimada de excavación*</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" id="fecha_est" name="fecha_est" placeholder="Ingrese fecha estimada de excavación" onchange="checkMessageDate()" maxlength="0">
								<a id="messageDate" class="error"></a>
							</div>
						</div>
					</div>


<!-- 					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Plano*</label>
							<div class="col-sm-8">
								<input class="" name="plano" id="plano" type="file" onchange="checkMessageFile()">
								<a id="messageFile" class="error"></a>
								<p style="color: #495057; font-size: 13px;"><i>Adjuntar imagen referencial de la ubicación</i></p>
							</div>
						</div>
					</div> -->

					<!--<div class="form-group">
						<label for="">Avatar</label>
						<input type="file" name="avatar">
					</div>-->

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Tipo canalización*</label>
							<div class="col-sm-8">
								<select class="form-control" name="canalizacion" id="canalizacion" required>
									<option value="" disabled selected>Seleccionar tipo de canalización</option>
									<option value="telecommunications">Telecomunicaciones</option>
									<option value="natural_gas">Gas Natural</option>
									<option value="drinking_water">Agua Potable</option>
									<option value="other">Otro</option>
								</select>
							</div>
						</div>
					</div>

					<div class="form-group hide" id="otro_canalizacion">
						<div class="row">
							<label class="col-sm-4">Otro tipo de canalización*</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="otro_canalizacion" id="otro_canalizacion" required>
							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<label class="col-sm-4"></label>
							<div class="col-sm-8">
								
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4"></label>
							<div class="col-sm-8">
								
							</div>
						</div>
					</div>



					<!--////////SECCIÓN CONTACTO//////-->
					<h3 class="box-subtitulo section">Contacto</h3>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Nombre*</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="nombre_cont" id="nombre_cont" placeholder="Ingrese nombre completo" required>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Teléfono*</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="telefono_cont" id="telefono_cont" maxlength="9" placeholder="Ingrese número de teléfono. Ej: 999999999" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Correo electrónico*</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="email_cont" id="email_cont" placeholder="Ingrese Correo electrónico" required>
								<p id="messageEmail" class="error"></p>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Comentario</label>
							<div class="col-sm-8">
								<textarea type="textarea" value="Comentario opcional" name="comentario" id="comentario" class="form-control" type="text" placeholder="Comentario opcional"></textarea>
							</div>
						</div>
					</div>

					<div class="form-group" style="display: none;">
						<div class="row">
							<label class="col-sm-4">Nº de Requerimiento del Solicitante</label>
							<div class="col-sm-8">
								<input class="form-control" disabled value="" type="text" name="n_solicitud" id="n_solicitud">
							</div>
						</div>
					</div>


					<div class="form-group">
						<div class="row">
							<label class="col-sm-4"></label>
							<div class="col-sm-8">
								
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4"></label>
							<div class="col-sm-8">
								
							</div>
						</div>
					</div>

					




					<!--////////SECCIÓN EMPRESA DE EXCAVACIÓN//////-->
					<h3 class="box-subtitulo section">Empresa Excavación</h3>
					<p class="text-center sub-title"><b>BUSCADOR EMPRESA EXCAVACIÓN</b></p>
					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Tipo de búsqueda</label>
							<div class="col-sm-8">
								<select class="form-control" name="buscador_empresa_ex" id="buscador_empresa_ex">
									<!--<option value="0" disabled >Seleccionar tipo de búsqueda</option>-->
									<option value="company_name">Nombre</option>
									<option value="company_rut" selected>Rut</option>
								</select>
							</div>
						</div>
					</div>

					<div class="form-group hide" id="nombre_empresa_ex">
						<div class="row">
							<label class="col-sm-4">Nombre</label>
							<div class="col-sm-8">
								<select class="form-control select-tag" type="text" name="nombre_em" id="nombre_em">
									<option value="0" disabled selected>Seleccionar Nombre Empresa Excavación</option>

								</select>
							</div>
						</div>
					</div>

					<div class="form-group" id="rut_empresa_ex">
						<div class="row">
							<label class="col-sm-4">Rut</label>
							<div class="col-sm-8">
								<select class="form-control select-tag" type="text" name="rut" id="rut">
									<option value="0" disabled selected>Seleccionar el Rut de la empresa excavadora</option>

								</select>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Nombre</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="nombre_em2" id="nombre_em2" disabled value="">
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Rut</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="rut_2" id="rut_2" disabled value="">
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Teléfono</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="telefono" id="telefono" disabled value="">
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Dirección</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="direccion_em" id="direccion_em" disabled>
							</div>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<label class="col-sm-4">Correo electrónico</label>
							<div class="col-sm-8">
								<input class="form-control" type="text" name="email_em" id="email_em" disabled>
								<!--<p id="messageEmail2" style="color: #e54b4d;"></p>-->
							</div>
						</div>
					</div>


					<!--////////SECCIÓN OTROS//////-->


					<div class="form-group">
						<div class="row">
							<div class="col-sm-4">
								<input type="checkbox" class="form-check-input" name="terms" id="terms" style="margin-left: 80px;">
							</div>
							<label class="col-sm-8" style="color: black;" for="terms">
								<p>He leído y acepto los términos
									<!--<button type="button" class="btn btn-link" style="padding: 5px;"><small> acepto los terminos</small></button>-->
								</p>
								<div>
									<em><small id="see_terms">"La información es referencial, cualquier modificación y/o daños ocasionados a nuestras instalaciones es de exclusiva responsabilidad del solicitante. <p>Ante cualquier duda o emergencia, favor llamar al fono @php

								</div>
							</label>
						</div>
					</div>

					<div class="form-group">
						<div class="row">
							<div class="offset-md-4">
								<div class="g-recaptcha" data-sitekey="6LeauokUAAAAALG35tpa-1Nm0onzcP4NBGoP8MGF" onchange="Validar()">
								</div>
								<p id="messageRecaptcha" class="error"></p>
							</div>
						</div>
					</div>

					<input class="form-control" type="text" name="mostrar" id="mostrar" value="" hidden>
					<input class="form-control" type="text" name="empresa" id="empresaSol" value="" hidden>

					<div class="form-group text-center button-style">
						<button id="send" type="submit" class="button-send size-button btn" data-toggle="tooltip" data-placement="top" title="Estamos trabajando en el backoffice">Enviar</button>
						<button type="reset" onclick="Limpiar()" class="size-button btn ">Limpiar</button>
					</div>
				</form>

			</div>
		</div>

	</section>

	<div id="terminoSol" class="modal fade" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-body">
					<?php

					?>
					<div class="text-center">

					</div>
				</div>
			</div>
		</div>
	</div>


	<div id="contentabsolute" style="display:none;">
		<div>
			
		
		
			<input type="hidden" name="latitud"  id="latitud" value="-33.036"  placeholder="Latitud">
    		<input type="hidden" name="longitud" id="longitud" value="-71.62963" placeholder="longitud">
			<input type="text" id="input_autocomplete" placeholder="ingrese una ubicacion">	


		</div>
		<div id="mapjp"> </div>
		<div class="mt-1 text-right">
			<button class="btn btn-danger" id="selecccionarUbicacionMapa">Seleccionar</button>
			<button class="btn btn-danger" id="cerrarMapa">Cerrar</button>
		</div>
	</div>

	<footer class="site-footer" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;background-color:white;overflow:hidden;width:100%;">
		<div class="container" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;width:1176px;">
			<div class="site-footer_bottom" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:1px solid #ECECEC;padding:20px 0 30px;">
				<div class="container" style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px;width:1176px;">
					<ul style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;list-style:none;">
						<li style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 0 0 35px;padding:0;list-style:none;font-size:1em;display:inline-block;vertical-align:middle;">


						</li>
						<ul style="outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;list-style:none;">
						</ul>
					</ul>
				</div>
			</div>
	</footer>


	<script>

		
		
		function test(param) {
			alert('TEST: ' + param)
		}

		function checkSubmit() {
			document.getElementById("send").value = "Enviando...";
			document.getElementById("send").disabled = true;
			return true;
		}

		/*datepicker sirve para tomar fecha actual hacia adelante*/
		$(function() {
			$("#fecha_est").datepicker({
				minDate: 0,
				closeText: 'Cerrar',
				prevText: '<Ant',
				nextText: 'Sig>',
				currentText: 'Hoy',
				monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
				monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
				dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
				dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
				dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
				weekHeader: 'Sm',
				dateFormat: 'yy-mm-dd'
			});
		});

		/*loading*/
		// setTimeout(function () {
		// $(".loader-page").css({visibility:"hidden",opacity:"0"})
		// )};

		$(document).ready(function() {

			if ($("#mostrar").val() == 1) {
				$('#terminoSol').modal("show");
			} else {
				$('#terminoSol').modal("hide");
			}

			/*Agrega el buscador al select*/
			$('.select-tag').chosen({
				width: "100%",
				no_results_text: "El resultado no existe",
				allow_single_deselect: true
			});

			//Entrega variable de empresa (EJ. empresa=chilquinta)
			/* $('#verMapax').click(function() {

				$('input[name="txt_ali"]').val('');
				$('input[name="txt_comM"]').val('');
				$('input[name="txt_lat"]').val('');
				$('input[name="txt_lon"]').val('');

				localStorage.removeItem("DATOS_MAPA_ALIMENTADOR");
				localStorage.removeItem("DATOS_MAPA_COMUNA");
				localStorage.removeItem("DATOS_MAPA_LATITUD");
				localStorage.removeItem("DATOS_MAPA_LONGITUD");

				
				
				console.log(localStorage.getItem("NOMBRE_EMPRESA"));

				// RECUPERAR DATOS DE LOCAL STORAGE Y SETEARLOS EN TEXTBOX
				// ENCAPSULAR SETEOS DENTRO DE UN TIMER
				//if(localStorage.getItem("DATOS_MAPA_ALIMENTADOR")!=null || localStorage.getItem("DATOS_MAPA_COMUNA")==null || localStorage.getItem("DATOS_MAPA_LATITUD")==null || localStorage.getItem("DATOS_MAPA_LONGITUD")==null){
				if (document.getElementById("txt_lat").value == "" && document.getElementById("txt_lon").value == "") {
					const timer = setInterval(function() {
						console.log("Estoy pidiendo datos...");
						document.getElementById("txt_ali").value = localStorage.getItem("DATOS_MAPA_ALIMENTADOR");
						document.getElementById("txt_comM").value = localStorage.getItem("DATOS_MAPA_COMUNA");
						document.getElementById("txt_lat").value = localStorage.getItem("DATOS_MAPA_LATITUD");
						document.getElementById("txt_lon").value = localStorage.getItem("DATOS_MAPA_LONGITUD");
						if (document.getElementById("txt_lat").value != "" && document.getElementById("txt_lon").value != "") {
							$('#verMapa').modal('hide');
							clearInterval(timer);
							if (localStorage.getItem("DATOS_MAPA_ALIMENTADOR") == "null") {
								document.getElementById("txt_ali").value = "No se encontro alimentador.";
							}
							if (localStorage.getItem("DATOS_MAPA_COMUNA") == "null" || localStorage.getItem("DATOS_MAPA_COMUNA") == "false") {
								document.getElementById("txt_comM").value = "No se encontro comuna.";
							}
						}
					}, 1000);
				}
			}); */

			/*Al momento de eleguir el punto de referencia muestra el campo del nº correspondiente */
			$("select[name=punto_referencia]").change(function() {
				var valor = $('select[name=punto_referencia]').val();
				if (valor == "poste") {
					$("#poste").removeClass("hide");
					$("#camara").addClass("hide");
				} else {
					$("#camara").removeClass("hide");
					$("#poste").addClass("hide");
				}
			});

			/*Al momento de eleguir el tipo de buscador muestra los datos de la empresa */
			$("select[name=buscador_empresa_ex]").change(function() {
				var valor = $('select[name=buscador_empresa_ex]').val();
				if (valor == "company_name") {
					$("#nombre_empresa_ex").removeClass("hide");
					$("#rut_empresa_ex").addClass("hide");
				} else {
					$("#rut_empresa_ex").removeClass("hide");
					$("#nombre_empresa_ex").addClass("hide");
				}
			});

			/*Busca los datos de la empresa dependiendo del select nombre empresa*/
			$("select[name=nombre_em]").change(function() {
				var param = {
					'_token': $('#token').val(),
					'com_id': $('select[name=nombre_em]').val()
				};

				$.ajax({
					url: "/buscar",
					data: param,
					type: "POST",
					success: function(data) {
						$("#nombre_em2").val(data[0].gl_name);
						$("#rut_2").val(data[0].gl_rut);
						$("#telefono").val(data[0].vl_phone);
						$("#direccion_em").val(data[0].gl_address);
						$("#email_em").val(data[0].gl_email);
					},
					error: function() {
						alert('error');
					}
				});
			});

			/*Busca los datos de la empresa dependiendo del select nombre empresa*/
			$("select[name=rut]").change(function() {
				var param = {
					'_token': $('#token').val(),
					'com_id': $('select[name=rut]').val()
				};

				$.ajax({
					url: "/buscar",
					data: param,
					type: "POST",
					success: function(data) {
						$("#nombre_em2").val(data[0].gl_name);
						$("#rut_2").val(data[0].gl_rut);
						$("#telefono").val(data[0].vl_phone);
						$("#direccion_em").val(data[0].gl_address);
						$("#email_em").val(data[0].gl_email);
					},
					error: function() {
						alert('error');
					}
				});
			});

			/*Al momento de seleccionar el tipo de canalización y seleccionar otro, muestra otro campo*/
			$("select[name=canalizacion]").change(function() {
				var valor = $('select[name=canalizacion]').val();
				if (valor == "other") {
					$("#otro_canalizacion").removeClass("hide");
				} else {
					$("#otro_canalizacion").addClass("hide");
				}
			});

	
			$("#formRequest").validate({
				ignore: [],
				rules: {
					nombre_pro: {
						maxlength: 255,
						required: {
							depends: function(element) {
								if ($("#nombre_pro").length)
									return true;
								else
									return false;
							}
						}
					},

					responsable_pro: {
						required: true,
						maxlength: 255,
					},
					txt_lat: {
						required: true,
						maxlength: 255,
					},
					txt_lon: {
						required: true,
						maxlength: 255,
					},
					direccion_ref: {
						required: true,
						maxlength: 255,
					},
					punto_referencia: {
						required: false
					},
					n_poste: {
						checkPoste: {
							depends: function(element) {
								if ($("select[id=punto_referencia]").val() == 'poste')
									return false;
								else
									return false;
							}
						}
					},
					n_camara: {
						checkCamara: {
							depends: function(element) {
								if ($("select[id=punto_referencia]").val() == 'camara')
									return false;
								else
									return false;
							}
						}
					},
					fecha_est: {
						required: true,
						date: true,
						maxlength: false,
					},
/* 					plano: {
						required: true,
						file: true
					}, */
					canalizacion: {
						required: true
					},
					otro_canalizacion: {
						maxlength: 255,
						required: {
							depends: function(element) {
								if ($("select[id=canalizacion]").val() == 'other') {
									return true;
								} else
									return false;
							}
						}
					},
					//CONTACT
					nombre_cont: {
						required: true,
						maxlength: 255,
					},
					telefono_cont: {
						required: true,
						minlength: 9,
						maxlength: 9,
					},
					email_cont: {
						required: true,
						checkEmail: true,
						maxlength: 255,
					},
/* 					comentario: {
						required: true,
						maxlength: 255,
					}, */
					//EMPRESA EXCAVACIÓN
					terms: {
						required: true
					},
					buscador_empresa_ex: {
						required: false
					},
					nombre_em: {
						required: {
							depends: function(element) {
								if ($("select[id=buscador_empresa_ex]").val() == 'nombre_empresa_ex')
									return true;
								else
									return false;
							}
						}
					},
					rut: {
						required: {
							depends: function(element) {
								if ($("select[id=buscador_empresa_ex]").val() == 'rut_empresa_ex')
									return true;
								else
									return false;
							}
						}
					},
				},
				messages: {
					nombre_pro: {
						required: "El nombre de proyecto es obligatorio",
						maxlength: "El número máximo es de 255 caracteres"
					},

					responsable_pro: {
						required: "El responsable del proyecto es obligatorio",
						maxlength: "El número máximo es de 255 caracteres"
					},

					txt_lat:{
		        			required: "Debe seleccionar un punto en el mapa",
		        			maxlength: "El número máximo es de 255 caracteres"
								},
								txt_lon:{
		        			required: "Debe seleccionar un punto en el mapa",
		        			maxlength: "El número máximo es de 255 caracteres"
		        		},
					direccion_ref: {
						required: "La dirección es obligatorio",
						maxlength: "El número máximo es de 255 caracteres"
					},
					punto_referencia: {
						required: "El punto de referencia es obligatorio"
					},
					n_poste: {
						checkPoste: ""
					},
					n_camara: {
						checkCamara: ""
					},
					fecha_est: {
						required: "La fecha estimación de excavación es obligatoria",
						date: "",
						maxlength: ""
					},
/* 					plano: {
						required: "El Plano es obligatorio",
						file: ""
					}, */
					canalizacion: {
						required: "El tipo de canalización es obligatorio"
					},
					otro_canalizacion: {
						required: "El campo es obligatorio",
						maxlength: "El número máximo es de 255 caracteres"
					},
					//CONTACT
					nombre_cont: {
						required: "El nombre es obligatorio",
						maxlength: "El número máximo es de 255 caracteres"
					},
					telefono_cont: {
						required: "El teléfono es obligatorio",
						minlength: "Se necesitan solo 9 dígitos",
						maxlength: "El número máximo es de 9 dígitos"
					},
					email_cont: {
						required: "Correo electrónico es obligatorio",
						checkEmail: "",
						maxlength: "El número máximo es de 255 caracteres"
					},
/* 					comentario: {
						required: "El comentario es obligatorio",
						maxlength: "El número máximo es de 255 caracteres"
					}, */
					//EMPRESA EXCAVACIÓN
					terms: {
						required: "Debe aceptar los terminos para enviar la solicitud"
					},
					buscador_empresa_ex: {
						required: "Seleccione un tipo de buscador"
					},
					nombre_em: {
						required: "Selecione el nombre de la empresa"
					},
					rut: {
						required: "Selecione el rut de la empresa"
					},
				}
			});



		});

		/*NUEVO CODIGO JS MEJORA DE MAPA DE GIS A GOOGLE MAPS*/

		$(".opengooglemapsmodal").click(function()
		{
  			$("#contentabsolute").css("display","block");
		});

		$("#selecccionarUbicacionMapa").click(function()
		{
  			
				var param = {
					'lat': $('#latitud').val(),
					'lng': $('#longitud').val(),
					'com': $('#googlemapcomuna').val(),
					'emp': '{{$empresa}}'
				};


				


					/*console.log( $('#latitud').val() );
					return false; */


				$.ajaxSetup({
					headers:
					{
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					}
				});

				$.ajax({
					url: "/crucegis",
					data: param,
					type: "POST",
					success: function(data) {

						if(data.respuesta == 1)
						{
							
							document.getElementById("txt_ali").value     =  data.alimentador;
							document.getElementById("txt_comM").value    =  data.comuna;
							document.getElementById("comuna").value      =  data.idcomuna_fg;
							document.getElementById("redes_sub").value   =  data.redes_sub;
							document.getElementById("txt_lat").value     =  data.lat;
							document.getElementById("txt_lon").value     =  data.lon;
							$("#contentabsolute").css("display","none");
							$("#modalexitoperforacion").modal("show");
						}
						if(data.respuesta == 2)
						{
						
							document.getElementById("txt_ali").value     =  data.alimentador;
							document.getElementById("txt_comM").value    =  data.comuna;
							document.getElementById("comuna").value      =  data.idcomuna_fg;
							document.getElementById("redes_sub").value   =  data.redes_sub;
							document.getElementById("txt_lat").value     =  data.lat;
							document.getElementById("txt_lon").value     =  data.lon;
							$("#contentabsolute").css("display","none");
							$("#verMapa").modal("show");
						}

					},
					error: function() {
						alert('error');
					}
				});
		});



		$("#cerrarMapa").click(function()
		{
			$("#contentabsolute").css("display","none");
		});


		const valpoCoords = {
			lat: -33.036,
			lng: -71.62963
		};
		const inputautocomplete      = document.getElementById("input_autocomplete");
		let   inputautocompletevalue = document.getElementById("input_autocomplete").value;
		/* const inputautocomplete2 = document.getElementById("direccion_ref"); */

		let map;
		let autocomplete;
		let autocomplete2;
		let marker;


		function initMap()
		{
			map = new google.maps.Map(document.getElementById('mapjp'), {
				center: valpoCoords,
				zoom: 15
			});

			const geocoder = new google.maps.Geocoder();

			marker = new google.maps.Marker({
				position: valpoCoords,
				map: map,
				draggable: true,
				
			});

			marker.addListener("dragend", function(event) 
			{
				
				
				document.getElementById("latitud").value = this.getPosition().lat();
				document.getElementById("longitud").value = this.getPosition().lng();

					coordinates_to_address(this.getPosition().lat(), this.getPosition().lng());

					function coordinates_to_address(lat, lng)
					{
						
						var latlng = new google.maps.LatLng(lat, lng);
						let comunaunfixed = "";

						geocoder.geocode({'latLng': latlng}, function(plus_code, status) 
						{
							if(status == google.maps.GeocoderStatus.OK)
							{

								/* console.log(JSON.stringify(plus_code)); */

								for (var key in plus_code)
								{

									/* console.log(' name=' + key + ' value=' + JSON.stringify(plus_code[key].plus_code)); */
									let evaluarcomuna = (plus_code[key].plus_code);

										if(typeof evaluarcomuna !== 'undefined')
										{
											/* console.log(plus_code[key].plus_code.compound_code); */
											let comunaunfixed = plus_code[key].plus_code.compound_code;
											let fix_gettingcomuna = comunaunfixed.split(',');
											let proceso1 = fix_gettingcomuna[0];
											/* console.log(proceso1); */
											let ultimoCaracter = proceso1.charAt(proceso1.length - 1);
											let primerCaracter = 7;
											let finalcomunaultimate = proceso1.substring(primerCaracter,ultimoCaracter);
											/* console.log(finalcomunaultimate); */
											let reultima = proceso1.replace(finalcomunaultimate, "");
											/* console.log(reultima); */
											let reultima2 = reultima.replace(" ","");
											/* console.log(reultima2); */
											document.getElementById("googlemapcomuna").value = reultima2;
											break;
										}else
										{
											/* console.log("no hay"); */
										}
								}
							}
							else
							{
								
							}
						});
					}


					coordinates_to_address2(this.getPosition().lat(), this.getPosition().lng());

					function coordinates_to_address2(lat, lng)
					{
						var latlng = new google.maps.LatLng(lat, lng);

						geocoder.geocode({'latLng': latlng}, function(results, status) 
						{
							if(status == google.maps.GeocoderStatus.OK)
							{
								
								if(results[0])
								{
 									let fulladress = results[0].formatted_address;
									document.getElementById("direccion_ref").value = fulladress;
								}
								else
								{
									alert('No results found');
								}
							}
							else
							{

							}
						});
					}
			})

			initAutoComplete();
		}

		function initAutoComplete()
		{
			autocomplete = new google.maps.places.Autocomplete(inputautocomplete);
			autocomplete.addListener("place_changed", function() {
				
				const geocoder = new google.maps.Geocoder();
				map.setZoom(20);
				const place = autocomplete.getPlace();
				map.setCenter(place.geometry.location);
				marker.setPosition(place.geometry.location);
				document.getElementById("latitud").value = place.geometry.location.lat();
				document.getElementById("longitud").value = place.geometry.location.lng();  
				document.getElementById("direccion_ref").value = inputautocompletevalue;  


					coordinates_to_address(place.geometry.location.lat(), place.geometry.location.lng());

					function coordinates_to_address(lat, lng)
					{
						
						var latlng = new google.maps.LatLng(lat, lng);
						let comunaunfixed = "";

						geocoder.geocode({'latLng': latlng}, function(plus_code, status) 
						{
							if(status == google.maps.GeocoderStatus.OK)
							{

								/* console.log(JSON.stringify(plus_code)); */

								for (var key in plus_code)
								{

									/* console.log(' name=' + key + ' value=' + JSON.stringify(plus_code[key].plus_code)); */
									let evaluarcomuna = (plus_code[key].plus_code);

										if(typeof evaluarcomuna !== 'undefined')
										{
											/* console.log(plus_code[key].plus_code.compound_code); */
											let comunaunfixed = plus_code[key].plus_code.compound_code;
											let fix_gettingcomuna = comunaunfixed.split(',');
											let proceso1 = fix_gettingcomuna[0];
											/* console.log(proceso1); */
											let ultimoCaracter = proceso1.charAt(proceso1.length - 1);
											let primerCaracter = 7;
											let finalcomunaultimate = proceso1.substring(primerCaracter,ultimoCaracter);
											/* console.log(finalcomunaultimate); */
											let reultima = proceso1.replace(finalcomunaultimate, "");
											/* console.log(reultima); */
											let reultima2 = reultima.replace(" ","");
											/* console.log(reultima2); */
											document.getElementById("googlemapcomuna").value = reultima2;
											break;
										}else
										{
											/* console.log("no hay"); */
										}
								}
							}
							else
							{
								
							}
						});
					}


					coordinates_to_address2(place.geometry.location.lat(), place.geometry.location.lng());

					function coordinates_to_address2(lat, lng)
					{
						var latlng = new google.maps.LatLng(lat, lng);

						geocoder.geocode({'latLng': latlng}, function(results, status) 
						{
							if(status == google.maps.GeocoderStatus.OK)
							{
								
								if(results[0])
								{
 									let fulladress = results[0].formatted_address;
									document.getElementById("direccion_ref").value = fulladress;
								}
								else
								{
									alert('No results found');
								}
							}
							else
							{

							}
						});
					}					




			})
		}
	</script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFvw8SrZ5CnTH4oFrKUIiIG9fMeASHzGo&libraries=places&callback=initMap" async defer></script>

	

</body>

</html>
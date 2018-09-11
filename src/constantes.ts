export namespace ExtensionConstants {
  export const CABECERA = `
  	<head>
    	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </head>
	<body>
		<div class="	">
			`;

  export const TABLA_INICIO = `
							  <table class="table table-striped">
							  <thead>
									<tr>
										<th scope="col">
											<strong>Nombre</strong>
										</th>
										<th scope="col">
											<strong>API</strong>
										</th>
										<th scope="col">
											<strong>Tipo</strong>
										</th>
										<th scope="col">
											<strong>Referencia</strong>
										</th>
										<th scope="col">
											<strong>Longitud</strong>
										</th>
										<th scope="col">
											<strong>Picklist</strong>
										</th>
										<th scope="col">
											<strong>Formula</strong>
										</th>
										<th scope="col">
											<strong>Requerido</strong>
										</th>
										<th scope="col">
											<strong>Único</strong>
										</th>
									</tr>
								</thead>
							`;

  export const TABLA_FIN = `
									</table>
								</div>
							</body>
  							`;
  export const TABLE_PICKLIST_INICIO = `
										<table class="table table-striped">
											<thead>
												<tr>
													<th scope="col">
														<strong>Label</strong>
													</th>
													<th scope="col">
														<strong>API</strong>
													</th>
													<th scope="col">
														<strong>Default</strong>
													</th>
												</tr>
											</thead>
  										`;
  export const TABLE_PICKLIST_FIN = `
										</table>
								</div>
							</body>
									`;
}

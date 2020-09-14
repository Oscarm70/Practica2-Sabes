
function mostrarHora(){
	momentoActual = new Date();
	hora = momentoActual.getHours();
	minuto = momentoActual.getMinutes();
	segundo = momentoActual.getSeconds();

	horaImprimible = hora + " : " + minuto + " : " + segundo;

	//salida
	document.getElementById('mostrarHora').innerHTML = horaImprimible;

}

function mostrarFecha(){

	fechaActual = new Date();
	dia = fechaActual.getDate();
	mes = fechaActual.getMonth() + 1;
	year = fechaActual.getFullYear();

	var diasS = new Array(7);
	diasS[0]="Domingo";
	diasS[1]="Lunes";
	diasS[2]="Martes";
	diasS[3]="Miercoles";
	diasS[4]="Jueves";
	diasS[5]="Viernes";
	diasS[6]="Sabado";

	var mesesA = new Array(12);
	mesesA[0]="Enero";
	mesesA[1]="Febrero";
	mesesA[2]="Marzo";
	mesesA[3]="Abril";
	mesesA[4]="Mayo";
	mesesA[5]="Junio";
	mesesA[6]="Julio";
	mesesA[7]="Agosto";
	mesesA[8]="Septiembre";
	mesesA[9]="Octubre";
	mesesA[10]="Noviembre";
	mesesA[11]="Diciembre";



	fechaImprimible = "Hoy es " + diasS[fechaActual.getDay()] + " " +dia + " de " + mesesA[fechaActual.getMonth()] + " del " + year;

	document.getElementById("fechaActual").innerHTML = fechaImprimible;
}
var nombre = "Daniela";
var apellido = "Escobar";
var estudiante = nombre + " " + apellido;
var estudianteMayus = estudiante.toUpperCase();
var estudianteMinus = estudiante.toLowerCase();
var cantidadLetras = estudiante.length();
var primeraLetra = nombre[0];
var ultimaLetra = apellido[apellido.length - 1];
var estudianteConcat = estudiante.split(/\s+/).join('');
var incluye = estudiante.includes(nombre);
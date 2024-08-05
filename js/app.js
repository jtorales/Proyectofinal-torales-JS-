const empleados = [];

function esNumeroValido(input) {
    return !isNaN(input) && input.trim() !== '';
}

let boton1 = document.getElementById("add_emp")
      boton1.addEventListener("click", respuestaClick1)
      function respuestaClick1(){
        let cantemp = parseInt(prompt("Ingrese la cantidad de empleados"));
   
        if (isNaN(cantemp) || cantemp <= 0) {
            alert("Ingrese un número válido.");
            return;
        } 
   
        for (let i = 1; i <= cantemp; i++) {

            let legajo = prompt(`Ingrese el legajo del empleado #${i}:`);
            while (!esNumeroValido(legajo) || legajo <= 0) {
                alert("El legajo debe ser un número válido mayor que 0.");
                legajo = prompt(`Ingrese el legajo del empleado #${i}:`);
            }

            let nombre = prompt(`Ingrese el nombre del empleado #${i}:`);
   
            while (!nombre.trim()) {
                alert("El nombre no puede estar vacío.");
                nombre = prompt(`Ingrese el nombre del empleado #${i}:`);
            }
   
            let sueldo = prompt(`Ingrese el sueldo del empleado #${i}:`);
   
            while (!esNumeroValido(sueldo) || sueldo <= 0) {
                alert("El sueldo debe ser un número válido mayor que 0.");
                sueldo = prompt(`Ingrese el sueldo del empleado #${i}:`);
            }
            legajo = parseInt(legajo);
            sueldo = parseFloat(sueldo);
   
            empleados.push({ legajo: legajo, nombre: nombre.trim(), sueldo: sueldo });
        }
   
        alert("Datos de empleados ingresados exitosamente.");
    }
   

let boton2 = document.getElementById("borrar")
      boton2.addEventListener("click", respuestaClick2)
      function respuestaClick2(){
      let legajo = parseInt(prompt("Ingrese el legajo a borrar:"));

      if (isNaN(legajo)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return -1;
    }

    const index = empleados.findIndex(obj => obj.legajo === legajo);

    if (index !== -1) {
        empleados.splice(index, 1);
        alert(`Valor ${legajo} encontrado en la posición ${index} y eliminado.`);
    } else {
        alert(`Valor ${legajo} no encontrado.`);
    }

    return index;
}



let boton3 = document.getElementById("mostrar")
      boton3.addEventListener("click", respuestaClick3)
      function respuestaClick3(){
        console.table(empleados);
        const cadenaJSON = JSON.stringify(empleados, null, 2); 
        alert(cadenaJSON);
      }

let boton4 = document.getElementById("max_sueldo")
      boton4.addEventListener("click", respuestaClick4)
      function respuestaClick4(){
      const valores = empleados.map((obj) => obj.sueldo);
      const numeroMasAlto = Math.max(...valores);    
      alert('El sueldo más alto es: '+ numeroMasAlto);
      }

let boton5 = document.getElementById("min_sueldo")
      boton5.addEventListener("click", respuestaClick5)
      function respuestaClick5(){
        const valores = empleados.map((obj) => obj.sueldo);
        const numeroMasBajo = Math.min(...valores);    
        alert('El sueldo más bajo es: '+ numeroMasBajo);  
      }

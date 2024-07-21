
const empleados = [];

function esNumeroValido(input) {
    return !isNaN(input) && input.trim() !== '';
}

function add_emp() {
    let cantemp = parseInt(prompt("Ingrese la cantidad de empleados"));

    if (isNaN(cantemp) || cantemp <= 0) {
        alert("Ingrese un número válido.");
        return;
    } 

    for (let i = 1; i <= cantemp; i++) {
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

        sueldo = parseFloat(sueldo);

        empleados.push({ legajo: i, nombre: nombre.trim(), sueldo: sueldo });
    }

    alert("Datos de empleados ingresados exitosamente.");
}

add_emp();
console.table(empleados);

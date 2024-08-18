let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

function guardarEnLocalStorage() {
    localStorage.setItem("empleados", JSON.stringify(empleados));
}

function esNumeroValido(input) {
    return !isNaN(input) && input.trim() !== '';
}

document.getElementById("add_emp").addEventListener("click", function() {
    let legajo = document.getElementById("legajo").value;
    if (!esNumeroValido(legajo) || legajo <= 0) {
        document.getElementById("resultado").textContent = "El legajo debe ser un número válido mayor que 0.";
        Toastify({

            text: "El legajo debe ser un número válido mayor que 0.",
            
            duration: 3000
            
            }).showToast();
    
        return;
    }

    let nombre = document.getElementById("nombre").value;
    if (!nombre.trim()) {
        document.getElementById("resultado").textContent = "El nombre no puede estar vacío.";
        Toastify({

            text: "El nombre no puede estar vacío.",
            
            duration: 3000
            
            }).showToast();
    

        return;
    }

    let sueldo = document.getElementById("sueldo").value;
    if (!esNumeroValido(sueldo) || sueldo <= 0) {
        document.getElementById("resultado").textContent = "El sueldo debe ser un número válido mayor que 0.";
        Toastify({

            text: "El sueldo debe ser un número válido mayor que 0.",
            
            duration: 3000
            
            }).showToast();

        return;
    }

    legajo = parseInt(legajo);
    sueldo = parseFloat(sueldo);

    empleados.push({ legajo: legajo, nombre: nombre.trim(), sueldo: sueldo });

    guardarEnLocalStorage();

    document.getElementById("resultado").textContent = `Empleado ${nombre} agregado exitosamente.`;

    Toastify({

        text: `Empleado ${nombre} agregado exitosamente.`,
        
        duration: 3000
        
        }).showToast();

    document.getElementById("legajo").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("sueldo").value = '';
});

document.getElementById("borrar").addEventListener("click", function() {
    let legajo = parseInt(document.getElementById("legajo_borrar").value);

    if (isNaN(legajo)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese un valor numérico válido.";
        Toastify({

            text: "Por favor, ingrese un valor numérico válido.",
            
            duration: 3000
            
            }).showToast();
    
        return;
    }

    const index = empleados.findIndex(obj => obj.legajo === legajo);

    if (index !== -1) {
        empleados.splice(index, 1);
        guardarEnLocalStorage(); 
        document.getElementById("resultado").textContent = `Empleado con legajo ${legajo} eliminado.`;
        Toastify({

            text: `Empleado con legajo ${legajo} eliminado.`,
            
            duration: 3000
            
            }).showToast();

    } else {
        document.getElementById("resultado").textContent = `Empleado con legajo ${legajo} no encontrado.`;
        Toastify({

            text: `Empleado con legajo ${legajo} no encontrado.`,
            
            duration: 3000
            
            }).showToast();

    }

    document.getElementById("legajo_borrar").value = ''; 
});

document.getElementById("mostrar").addEventListener("click", function() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (empleados.length === 0) {
        resultado.textContent = "No hay empleados para mostrar.";
        Toastify({

            text: "No hay empleados para mostrar.",
            
            duration: 3000
            
            }).showToast();

        return;
    }

    const table = document.createElement("table");
    table.className = "tabla-empleados";

    const headers = ["Legajo", "Nombre", "Sueldo"];
    const tr = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        tr.appendChild(th);
    });
    table.appendChild(tr);

    empleados.forEach(emp => {
        const tr = document.createElement("tr");
        Object.values(emp).forEach(val => {
            const td = document.createElement("td");
            td.textContent = val;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    resultado.appendChild(table);
});

document.getElementById("max_sueldo").addEventListener("click", function() {
    const valores = empleados.map((obj) => obj.sueldo);
    const numeroMasAlto = Math.max(...valores);
    document.getElementById("resultado").textContent = 'El sueldo más alto es: ' + numeroMasAlto;
    Toastify({

        text: 'El sueldo más alto es: ' + numeroMasAlto,
        
        duration: 3000
        
        }).showToast();

});

document.getElementById("min_sueldo").addEventListener("click", function() {
    const valores = empleados.map((obj) => obj.sueldo);
    const numeroMasBajo = Math.min(...valores);
    document.getElementById("resultado").textContent = 'El sueldo más bajo es: ' + numeroMasBajo;
    Toastify({

        text: 'El sueldo más bajo es: ' + numeroMasBajo,
        
        duration: 3000
        
        }).showToast();

});

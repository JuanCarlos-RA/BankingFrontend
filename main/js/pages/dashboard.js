$(document).ready(function () {
  "use strict";

  // Todos los meses
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  // Obtener el mes actual (0 = Enero, 11 = Diciembre)
  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth();

  // Seleccionar solo los meses anteriores o iguales al actual
  const mesesAMostrar = meses.slice(0, mesActual + 1);

  // Generar datos aleatorios "realistas" para cada mes
  const datos = mesesAMostrar.map(() => Math.floor(Math.random() * (7000 - 3000 + 1) + 3000));

  // Colores para los meses
  const colores = [
    "#ed1c27", // Enero
    "#f03a3e", // Febrero
    "#f15655", // Marzo
    "#f26d6c", // Abril
    "#f48383", // Mayo
    "#f69a9a", // Junio
    "#f8b0b0", // Julio
    "#fac6c6", // Agosto
    "#fcdcdc", // Septiembre
    "#fde9e9", // Octubre
    "#feeeee", // Noviembre
    "#fff5f5"  // Diciembre
  ];

  new Chart(document.getElementById("chart-container"), {
    type: 'bar',
    data: {
      labels: mesesAMostrar,
      datasets: [
        {
          label: "Cantidad de llamados a las API",
          backgroundColor: colores.slice(0, mesesAMostrar.length),
          data: datos
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: false }
      }
    }
  });
});

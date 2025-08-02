const form = document.getElementById("form");
const lista = document.getElementById("lista");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  if (nombre.trim() === "") {
  alert("Nombre requerido");
  return;
}

  const li = document.createElement("li");
  li.textContent = nombre;
  lista.appendChild(li);
  form.reset();
});
function pagar() {
  console.log("Simulando integración con API de pago");
}

function atualizarContador() {
  const inicio = new Date("2023-06-24T00:00:00");
  const agora = new Date();
  const diferenca = agora - inicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("contador").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

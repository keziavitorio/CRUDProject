"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const templateClient = {
  nome: "Kez",
  email: "keziavitorio@gmail.com",
  celular: "21990176868",
  cidade: "Nova Iguaçu",
}

const createClient = (client) => {
  localStorage.setItem("teste", "teste para o site")
}


//eventos  

document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

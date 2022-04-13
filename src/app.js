const openModalLogin = () => {
  const OPEN_LOGIN = document.getElementById("open-login");
  const MODAL_CONTAINER = document.getElementById("modal-container1");
  const CLOSE_LOGIN = document.getElementById("close-login");

  OPEN_LOGIN.addEventListener("click", (event) => {
    MODAL_CONTAINER.classList.add("show");
    event.preventDefault();
  });

  CLOSE_LOGIN.addEventListener("click", () => {
    MODAL_CONTAINER.classList.remove("show");
  });
};

const openModalOrcamento = () => {
  const OPEN_ORCAMENTO = document.getElementById("open-orcamento");
  const MODAL_CONTAINER_ORCAMENTO = document.getElementById(
    "modal-container-orcamento"
  );
  const CLOSE_ORCAMENTO = document.getElementById("close-orcamento");

  OPEN_ORCAMENTO.addEventListener("click", () => {
    MODAL_CONTAINER_ORCAMENTO.classList.add("showModalOrcamento");
  });

  CLOSE_ORCAMENTO.addEventListener("click", () => {
    MODAL_CONTAINER_ORCAMENTO.classList.remove("showModalOrcamento");
  });
};

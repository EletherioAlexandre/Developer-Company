const MODAL_CONTAINER = document.getElementById("modal-container1");
const CLOSE_LOGIN = document.getElementById("close-login");

document.getElementById("open-login").onclick = () => {
  MODAL_CONTAINER.classList.add("show");
};

document.getElementById("close-login").onclick = () => {
  MODAL_CONTAINER.classList.remove("show");
};

// const openModalLogin = () => {

//   const OPEN_LOGIN = document.getElementById("open-login");
//   const MODAL_CONTAINER = document.getElementById("modal-container1");
//   const CLOSE_LOGIN = document.getElementById("close-login");

//   OPEN_LOGIN.addEventListener("click", () => {
//     MODAL_CONTAINER.classList.add("show");
//   });

//   CLOSE_LOGIN.addEventListener("click", () => {
//     MODAL_CONTAINER.classList.remove("show");
//   });

//   console.log("How many times?");
// };

const POPUP = document.getElementById("popup-container");
const DISMISS = document.getElementById("dismiss-popup");

document.getElementById("triggerpopup").onclick = () => {
  POPUP.classList.add("open");
};

document.getElementById("dismiss-popup").onclick = () => {
  POPUP.classList.remove("open");
};

// const TRIGGER_POPUP = () => {
//   const OPEN_POPUP = document.getElementById("triggerpopup");
//   const POPUP = document.getElementById("popup-container");
//   const DISMISS = document.getElementById("dismiss-popup");

//   OPEN_POPUP.addEventListener("click", () => {
//     POPUP.classList.add("open");
//   });

//   DISMISS.addEventListener("click", () => {
//     POPUP.classList.remove("open");
//   });
// };

const SUCCESS_POPUP = document.getElementById("popup-ligacao");

document.getElementById("liveToastBtn").onclick = () => {
  SUCCESS_POPUP.classList.add("send");
};

document.getElementById("popup-ligacao").onmouseover = () => {
  SUCCESS_POPUP.classList.remove("send");
};

// const CALL_USER = () => {
//   const BUTTON_CALL = document.getElementById("liveToastBtn");
//   const SUCCESS_POPUP = document.getElementById("popup-ligacao");
//   const HIDE_POPUP = document.getElementById("popup-ligacao");

//   BUTTON_CALL.addEventListener("click", () => {
//     SUCCESS_POPUP.classList.add("send");
//   });

//   HIDE_POPUP.addEventListener("mouseover", () => {
//     SUCCESS_POPUP.classList.remove("send");
//   });
// };

const SOON_SERVICE = document.getElementById("soon-modal");

document.getElementById("notavailable").onclick = () => {
  SOON_SERVICE.classList.add("show");
};

document.getElementById("soon-modal").onmouseover = () => {
  SOON_SERVICE.classList.remove("show");
};

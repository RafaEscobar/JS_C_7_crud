import modal from "./render-modal.html?raw";
let modalContainer;

/**
 *
 * @param {HTMLDivElement} element
 * @returns
 */
export const renderModal = (element) => {
    if ( modalContainer ) return;

    modalContainer = document.createElement("div");
    modalContainer.className = "relative flex flex-col items-center justify-center bg-white hidden";
    modalContainer.innerHTML = modal;

    element.append(modalContainer);

    const closeModal = document.querySelector("#closeModal");
    const btnOpenModal = document.querySelector("#openModal");

    closeModal.addEventListener('click', () => {
        modalContainer.classList.add('hidden');
    });

    btnOpenModal.addEventListener('click', () => {
        modalContainer.classList.remove("hidden");
    });
}
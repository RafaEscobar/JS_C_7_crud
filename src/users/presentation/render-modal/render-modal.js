import modal from "./render-modal.html?raw";
let modalContainer;

/**
 *
 * @param {HTMLDivElement} element
 * @returns
 */
export const renderModal = (element) => {
    if ( modalContainer ) return;

    const btnOpenModal = document.querySelector("#openModal");

    modalContainer = document.createElement("div");
    modalContainer.className = "min-w-screen relative flex min-h-screen flex-col items-center justify-center bg-white pt-4 hidden";
    modalContainer.innerHTML = modal;

    element.append(modalContainer);
    const closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener('click', () => {
        modalContainer.classList.add('hidden');
    });

    btnOpenModal.addEventListener('click', () => {
        modalContainer.classList.remove("hidden");
    });


}
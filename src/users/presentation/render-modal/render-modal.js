import modal from "./render-modal.html?raw";
let modalContainer, form, modalShadow;

/**
 *
 * @param {HTMLDivElement} element
 * @returns
 */
export const renderModal = (element) => {
    if ( modalContainer ) return;

    buildModal(element);

    //* References
    form = document.querySelector("#modal-form");
    modalShadow = document.querySelector("#modal-shadow");
    const closeModal = document.querySelector("#closeModal");
    const btnOpenModal = document.querySelector("#openModal");

    //? Listeners
    closeModal.addEventListener('click', () => {
        modalContainer.classList.add('hidden');
    });

    btnOpenModal.addEventListener('click', () => {
        modalContainer.classList.remove("hidden");
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    modalShadow.addEventListener('click', (event) => {
        console.log(modalShadow);
    });


}

/**
 *
 * @param {HTMLDivElement} element
 */
const buildModal = (element) => {
    //* References
    modalContainer = document.createElement("div");

    //* Styles of modalContainer
    modalContainer.className = "relative flex flex-col items-center justify-center bg-white hidden";
    modalContainer.innerHTML = modal;

    //* append of divMain
    element.append(modalContainer);
}
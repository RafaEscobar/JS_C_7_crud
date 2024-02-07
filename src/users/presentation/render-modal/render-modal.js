import modal from "./render-modal.html?raw";
let modalContainer, form, modalShadow;

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userData) => Promise<void>} userCallback
 * @returns
 */
export const renderModal = (element, userCallback) => {
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
        form?.reset();
    });

    btnOpenModal.addEventListener('click', () => {
        modalContainer.classList.remove("hidden");
    });

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userData = {};
        for ( const [key, value] of formData ) {
            userData[key] = (key == 'balance') ? (+value) : value;
            userData[key] = (key == 'isActive') ?
                ((value === 'on') ? true : false) : value;
        }

        await userCallback(userData);
    });

    modalContainer.addEventListener('click', (event) => {
        if (event.target.id !== 'modal-shadow') return;
        modalContainer.classList.add('hidden');
        form?.reset();
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
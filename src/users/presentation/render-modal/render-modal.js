import modal from "./render-modal.html?raw";
import { getUserById } from "../../modules";

let modalContainer, form, loadedUser;

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userData) => Promise<void>} userCallback
 * @returns
 */

/**
 *
 * @param {String|Number} id
 */
export const showModal = async(id) => {
    modalContainer.classList.remove("hidden");

    if (!id) return;
    loadedUser = await getUserById(id);
}

export const hiddenModal = () => {
    modalContainer.classList.add('hidden');
    form?.reset();
}

export const renderModal = (element, userCallback) => {
    if ( modalContainer ) return;

    buildModal(element);

    //* References
    form = document.querySelector("#modal-form");
    const btnClose = document.querySelector("#closeModal");

    // Listeners
    modalContainer.addEventListener('click', (event) => {
        if (event.target.id !== 'modal-shadow') return;
        hiddenModal();
    });
    btnClose.addEventListener('click', () => {
        hiddenModal();
    });



    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userData = {};
        for ( const [key, value] of formData ) {
            if (key === 'balance') {
                userData[key] = +value;
            } else if ((key == 'isActive') && (value === 'on') ) {
                userData[key] = true;
            } else {
                userData[key] = value;
            }
        }
        await userCallback(userData);
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
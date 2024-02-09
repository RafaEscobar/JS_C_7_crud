import modal from "./render-modal.html?raw";
import { getUserById } from "../../modules";
import { User } from "../../models/user";

let modalContainer;
let form;
let loadedUser = {};

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
    loadedUser = {};

    if (!id) return;
    const user = await getUserById(id);
    setValues(user);
}

export const hiddenModal = () => {
    modalContainer.classList.add('hidden');
    form?.reset();
}

/**
 *
 * @param {User} user
 */
const setValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="gender"]').value = user.gender;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
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
        const userData = { ...loadedUser };

        for ( const [key, value] of formData ) {
            if (key === 'balance') {
                userData[key] = +value;
            } else {
                userData[key] = value;
            }
        }
        userData['isActive'] = (formData.get('isActive') == 'on') ? true : false;

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
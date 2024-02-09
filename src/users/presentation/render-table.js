import { deleteUserById } from "../modules/delete-user-by-id";
import usersStore from "../storage/users-store";
import { showModal } from "./render-modal/render-modal";

let table

const createTable = () => {
    const table = document.createElement("table");
    const tHead = document.createElement("thead");
    const tBody = document.createElement("tbody");

    table.classList.add("w-5/12", "text-sm", "text-left",  "text-gray-500");
    tHead.classList.add("text-xs", "text-gray-700", "uppercase", "bg-gray-50");

    tHead.innerHTML = `
        <tr>
            <th scope="col" class="py-3 px-6">Nombre</th>
            <th scope="col" class="py-3 px-6">Apellidos</th>
            <th scope="col" class="py-3 px-6">Genero</th>
            <th scope="col" class="py-3 px-6">Estatus</th>
            <th scope="col" class="py-3 px-6">Opciones</th>
        </tr>
    `;

    table.append( tHead, tBody );
    return table;
}

/**
 *
 * @param {MouseEvent} event
 */
const selectUser = (event) => {
    const userId = event.target.closest('.select-user');
    if (userId == null) return;
    showModal(userId.getAttribute('data-id'));
}

/**
 *
 * @param {MouseEvent} event
 */
const deleteUser = async(event) => {
    const userId = event.target.closest('.delete-user');
    if (userId == null) return;

    const id = userId.getAttribute('data-id');
    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector(".labelPage").innerText = usersStore.getCurrentPage();
        renderTable();
    } catch (error) {
        alert(error);
    }
}

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if ( !table ) {
        table = createTable();
        element.replaceChildren(table);
    }

    table.addEventListener('click', selectUser);
    table.addEventListener('click', deleteUser);

    let tableBody = '';

    users.forEach(user => {
        tableBody += `
            <tr>
                <th scope="col" class="py-3 px-6">${user.firstName}</th>
                <th scope="col" class="py-3 px-6">${user.lastName}</th>
                <th scope="col" class="py-3 px-6">${(user.gender=='female') ? 'Femenino' : 'Masculino'}</th>
                <th scope="col" class="py-3 px-6">${(user.isActive) ? 'Activo' : 'Inactivo'}</th>
                <th scope="col" class="py-3 px-6">
                    <div>
                        <a href="#" class="text-blue-500 select-user" data-id="${user.id}">Seleccionar</a>
                        |
                        <a href="#" class="text-red-500 delete-user" data-id="${user.id}">Eliminar</a>
                    </div>
                </th>
            </tr>
        `;
    });

    table.querySelector("tbody").innerHTML = tableBody;
}
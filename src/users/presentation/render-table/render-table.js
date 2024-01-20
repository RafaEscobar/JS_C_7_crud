import usersStore from "../../storage/users-store";

let table;

const createTable = () => {
    const table = document.createElement("table");
    table.classList.add("bg-white", "shadow-md", "rounded-xl");
    const tHead = document.createElement("thead");
    const tBody = document.createElement("tbody");
    tHead.innerHTML = `
        <tr class="bg-blue-gray-100 text-gray-700">
            <td class="py-3 px-4 text-left font-semibold">Nombre</td>
            <td class="py-3 px-4 text-left font-semibold">Apellidos</td>
            <td class="py-3 px-4 text-left font-semibold">Genero</td>
            <td class="py-3 px-4 text-left font-semibold">Estatus</td>
        </tr>
    `;

    table.append( tHead, tBody );
    return table;
}

export const renderTable = (element) => {

    const users = usersStore.getUsers();

    if ( !table ) {
        table = createTable();
        element.replaceChildren(table);
    }

    let tableBody = '';
    users.forEach(user => {
        tableBody += `
            <tr class="bg-blue-gray-100 text-gray-700">
                <td class="py-3 px-4 text-left">${user.firstName}</td>
                <td class="py-3 px-4 text-left">${user.lastName}</td>
                <td class="py-3 px-4 text-left">${user.gender}</td>
                <td class="py-3 px-4 text-left">${user.isActive}</td>
            </tr>
        `;
    });

    table.querySelector("tbody").innerHTML = tableBody;
}
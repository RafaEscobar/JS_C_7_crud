import usersStore from "../../storage/users-store";

let table;

const createTable = () => {
    const table = document.createElement("table");
    const tHead = document.createElement("thead");
    const tBody = document.createElement("tbody");
    tHead.innerHTML = `
        <tr>
            <td>Nombre</td>
            <td>Apellidos</td>
            <td>Genero</td>
            <td>Estatus</td>
        </tr>
    `;

    table.append( tHead, tBody );
    return table;
}

export const renderTable = (element) => {

    const users = usersStore.getUsers();

    if ( !table ) {
        table = createTable();
        element.append(table);
    }

}
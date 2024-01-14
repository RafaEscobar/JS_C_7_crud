import usersStore from "./storage/users-store";

/**
 * Main app
 */
export const userApp = async(element) => {
    element.innerText = 'Cargando...';
    await usersStore.loadNextPage();
}
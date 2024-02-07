
import { saveUser } from "./modules/save-user";
import { renderAddButton } from "./presentation/render-add-btn";
import { renderBtns } from "./presentation/render-btns";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table";
import userStore from "./storage/users-store";

/**
 * Main app
 * @param {HTMLDivElement} element
 */
export const userApp = async(element) => {
    element.innerText = 'Cargando...';
    await userStore.loadNextPage();
    renderTable(element);
    renderBtns(element);
    renderAddButton(element);
    renderModal(element, async(userData) => {
        const user = await saveUser(userData);
        userStore.onUserChange(user);
        renderTable();
    });
}
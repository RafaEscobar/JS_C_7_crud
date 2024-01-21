
import { renderAddButton } from "./presentation/render-add-btn";
import { renderBtns } from "./presentation/render-btns";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table";
import usersStore from "./storage/users-store";

/**
 * Main app
 * @param {HTMLDivElement} element
 */
export const userApp = async(element) => {
    element.innerText = 'Cargando...';
    await usersStore.loadNextPage();
    renderTable(element);
    renderBtns(element);
    renderAddButton(element);
    renderModal(element);
}
import usersStore from "../storage/users-store";
import { renderTable } from "./render-table";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderBtns = (element) => {
    const nextBtn = document.createElement("button");
    const prevBtn = document.createElement("button");
    const currentPageLabel = document.createElement("span");
    const divContainer = document.createElement("div");

    nextBtn.classList.add("bg-black","px-4","py-2","text-white","font-semibold","rounded-2xl","hover:bg-white","hover:text-black","hover:border-2","hover:border-black");
    prevBtn.classList.add("bg-black","px-4","py-2","text-white","font-semibold","rounded-2xl","hover:bg-white","hover:text-black","hover:border-2","hover:border-black");
    currentPageLabel.classList.add("block","text-2xl","font-semibold");
    divContainer.classList.add("flex", "justify-between", "w-3/12", "mt-6");

    nextBtn.innerText = "Siguiente >";
    prevBtn.innerText = "< Previo";
    currentPageLabel.innerText = usersStore.getCurrentPage();

    divContainer.append( prevBtn, currentPageLabel, nextBtn );

    element.append(divContainer)

    nextBtn.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
    });

}
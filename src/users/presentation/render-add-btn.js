

export const renderAddButton = (element) => {
    const divContainer = document.createElement("div");
    divContainer.classList.add("group","fixed","bottom-0","right-0","flex","items-end","justify-end","p-10")
    divContainer.innerHTML = `
        <div class="flex items-center justify-center rounded-full bg-blue-500 shadow-xl w-12 h-12 ">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10 text-white stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </span>
        </div>
    `;

    element.append(divContainer);

}
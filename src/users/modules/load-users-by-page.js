import { userMapper } from "../mappers/user.mapper";
import usersStore from "../storage/users-store";

/**
 * Function to get the users from the API, map them and load them on the page
 * @param {number} page
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users?_page=${page}`;
    const res = await fetch(url);
    const resBody = await res.json();

    usersStore.setCurrentPage(resBody['pages']);

    return resBody['data'].map(userMapper);
}
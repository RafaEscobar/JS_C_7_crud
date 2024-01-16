import { userMapper } from "../mappers/user.mapper";

/**
 * Function to get the users from the API, map them and load them on the page
 * @param {number} page
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users?_page=${page}`;
    const res = await fetch(url);
    const resBody = await res.json();

    return resBody['data'].map(user => userMapper(user));
}
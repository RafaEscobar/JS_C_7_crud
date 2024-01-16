import { userMapper } from "../mappers/user.mapper";

/**
 * Function to load the page of users
 * @param {number} page
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users?_page=${page}`;
    const res = await fetch(url);
    const resBody = await res.json();

    const users = [];

    resBody['data'].forEach(user => {
        users.push(userMapper(user));
    });

    console.log(users);
}
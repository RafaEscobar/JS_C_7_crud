import { localToSerMapper, userMapper } from "../mappers";

/**
 * Function to get the users from the API, map them and load them on the page
 * @param {String|Number} id
 */
export const deleteUserById = async(id) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users/${id}`;
    await fetch(url, {
        method: 'DELETE',
    });
    return true;
}
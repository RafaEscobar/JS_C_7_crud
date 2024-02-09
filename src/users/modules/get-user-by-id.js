/**
 * Function to get the users from the API, map them and load them on the page
 * @param {String|Number} id
 */
export const getUserById = async(id) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users/${id}`;
    const res = await fetch(url);
    const resBody = await res.json();

    console.log(resBody);
}
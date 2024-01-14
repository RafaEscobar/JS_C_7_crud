/**
 * Function to load the page of users
 * @param {integer} page 
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users?_page=${page}`
    const res = await fetch(url);
    const resBody = await res.json();

    console.log(resBody);
}
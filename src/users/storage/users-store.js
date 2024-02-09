import {loadUsersByPage} from '../modules/index';

const state = {
    pages: 0,
    currentPage: 0,
    users: [],
}

/**
 * Load the next page of data
 */
const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (state.currentPage == state.pages) return;

    state.currentPage += 1;
    state.users = users;
}

/**
 * Load the previous page of data
 */
const loadPreviousPage = async() => {
    if (state.currentPage == 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);

    state.currentPage -= 1;
    state.users = users
}

/**
 *
 * @param {User} userData
 */
const onUserChange = ( userData ) => {
    let wasFound = false;

    state.users = state.users.map( user => {
        if ( user.id == userData.id) {
            wasFound = true;
            return userData;
        }
        return user;
    });

    if (state.users.length < 10 && !wasFound) {
        state.users.push(userData);
    }
}

/**
 * To reload the current page
 */
const reloadPage = () => {

}

const setPages = (pages) => {
    state.pages = pages;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,
    setPages,
    /**
     *
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
    getPages: () => state.pages,
}
import {loadUsersByPage} from '../modules/index';

const state = {
    currentPage: 0,
    users: [],
}

/**
 * Load the next page of data
 */
const loadNextPage = async() => {
    await loadUsersByPage(state.currentPage + 1);
}

/**
 * Load the previous page of data 
 */
const loadPreviousPage = async() => {

}

/**
 * When a user change his data
 */
const onUserChange = () => {

}

/**
 * To reload the current page
 */
const reloadPage = () => {

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,
    getUsers: () => { [...state.users] },
    getCurrentPage: () => { state.currentPage },
}
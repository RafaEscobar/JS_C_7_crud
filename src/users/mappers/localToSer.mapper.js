import {User} from '../models/user.js';

/**
 *
 * @param {Like<User>} userData
 */
export const localToSerMapper = (userData) => {
    const {
        id,
        avatar,
        gender,
        firstName,
        lastName,
        balance,
        isActive
    } = userData;

    return {
        id,
        first_name: firstName,
        last_name: lastName,
        isActive,
        gender,
        avatar,
        balance,
    }
}
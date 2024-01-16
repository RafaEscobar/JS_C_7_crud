import { User } from "../models/user";

/**
 *
 * @param {UserDataApi} userData
 * @returns User
 */
export const userMapper = (userData) => {
    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender
    } = userData;

    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender,
    });
}
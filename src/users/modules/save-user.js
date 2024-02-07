import { localToSerMapper } from "../mappers";
import { User } from "../models/user";

/**
 *
 * @param {Like<User>} userData
 */
export const saveUser = async( userData ) => {
    const user = new User(userData);
    const userMapping = localToSerMapper(user);

    if ( user.id ) {
        // TODO: Codigo para actualizar usuario
        throw 'No implementado';
        return;
    }

    return await createUser(userMapping);
}

/**
 *
 * @param {Like<User>} userData
 */
const createUser = async( userData ) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users`;

    const response = fetch(url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json',
        }
    });

    const newUser = await response.json();
    return newUser;
}
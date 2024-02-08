import { localToSerMapper } from "../mappers";
import { User } from "../models/user";

/**
 *
 * @param {Like<User>} userData
 */
export const saveUser = async( userData ) => {
    const user = new User(userData);
    let validateMess = validate(user);

    (validateMess > 0) ? alert(validateMess.join(' | ')) : null

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

/**
 *
 * @param {Like<User>} userData
 */
const validate = (userData) => {
    let message = [];
    if (userData.firstName == '') {
        message.push('El campo nombre es requerido');
    }
    if (userData.lastName == '') {
        message.push('El campo de apellidos es que requerido');
    }
    if (userData.gender == '') {
        message.push('El genero es requerido');
    }

    return message;
}
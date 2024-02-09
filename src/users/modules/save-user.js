import { localToSerMapper, userMapper } from "../mappers";
import { User } from "../models/user";
import { hiddenModal } from "../presentation/render-modal/render-modal";

/**
 *
 * @param {Like<User>} userData
 */
export const saveUser = async( userData ) => {
    const user = new User(userData);

    let validateMess = validate(user);
    if (validateMess.length > 0) {
        alert(validateMess.join(' | '));
        return;
    }

    const userMapping = localToSerMapper(user);
    let userUpdated;

    if ( user.id ) {
        userUpdated = await updateUser(userMapping);
    } else {
        userUpdated = await createUser(userMapping);
    }
    hiddenModal();
    return userMapper(userUpdated);
}

/**
 *
 * @param {Like<User>} userData
 */
const createUser = async( userData ) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json',
        }
    });

    return await response.json();
}


/**
 *
 * @param {User} userData
 * @returns
 */
const updateUser = async( userData ) => {
    const url = `${import.meta.env.VITE_URL_BASE}/users/${userData.id}`;

    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json',
        }
    });

    return await response.json();
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
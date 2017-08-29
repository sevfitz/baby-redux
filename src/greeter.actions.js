import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeter.constants';

export function updateSalutation(salutation = 'Hello') {
    return {
        type: UPDATE_SALUTATION,
        payload: salutation
    };
}

export function updateName (name = 'Stranger') {
    return {
        type: UPDATE_NAME,
        payload: name
    };
}

export function reset () {
    return {
        type: RESET
    };
}
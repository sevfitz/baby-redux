import { UPDATESALUTATION, UPDATENAME, RESET } from './greeter.constants';

export function updateSalutation(salutation = 'Hello') {
    return {
        type: UPDATESALUTATION,
        payload: salutation
    };
}

export function updateName (name = 'Stranger') {
    return {
        type: UPDATENAME,
        payload: name
    };
}

export function reset () {
    return {
        type: RESET
    };
}
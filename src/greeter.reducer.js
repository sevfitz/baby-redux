import { UPDATESALUTATION, UPDATENAME, RESET } from './greeter.constants';

export default (state = { salutation: 'Hello', name: 'Stranger' }, { type, payload }) => {
    switch (type) {
        case UPDATESALUTATION:
            return { name: state.name, salutation: payload };
        case UPDATENAME:
            return { name: payload, salutation: state.salutation };
        case RESET:
            return { salutation: null, name: null };
        default:
            return state;
    }
};
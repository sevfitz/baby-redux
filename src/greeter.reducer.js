import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from './greeter.constants';

export default (state = { salutation: 'Hello', name: 'Stranger' }, { type, payload }) => {
    switch (type) {
        case UPDATE_SALUTATION:
            return { name: state.name, salutation: payload };
        case UPDATE_NAME:
            return { name: payload, salutation: state.salutation };
        case RESET:
            return { salutation: 'Hello', name: 'Stranger' };
        default:
            return state;
    }
};

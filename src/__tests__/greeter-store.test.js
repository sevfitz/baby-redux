import reducer from '../greeter.reducer';
import { UPDATE_SALUTATION, UPDATE_NAME, RESET } from '../greeter.constants';
import { updateSalutation, updateName, reset } from '../greeter.actions';

describe('greeter', () => {

    describe('actions', () => {
        
        it('updateSalutation with no input gives default', () => {
            expect(updateSalutation()).toEqual({
                type: UPDATE_SALUTATION,
                payload: 'Hello'
            });
        });
    
        it('updateName with no input gives default', () => {
            expect(updateName()).toEqual({
                type: UPDATE_NAME,
                payload: 'Stranger'
            });
        });
    
        it('update name changes payload', () => {
            expect(updateName('Test Name')).toEqual({
                type: UPDATE_NAME,
                payload: 'Test Name'
            });
        });

        it('update salutation changes payload', () => {
            expect(updateSalutation('Test Salutation')).toEqual({
                type: UPDATE_SALUTATION,
                payload: 'Test Salutation'
            });
        });
    
        it('Reset button clears payload', () => {
            expect(reset()).toEqual({
                type: RESET
            });
        });
    });

    describe('reducers', () => {

        it('Defaults to Hello Stranger', () => {
            expect(reducer(undefined, {type: 'Something'})).toEqual({ salutation: 'Hello', name: 'Stranger' });
        });

        it('UPDATE_SALUTATION', () => {
            expect(reducer(undefined, updateSalutation('Hi') )).toEqual({ salutation: 'Hi', name: 'Stranger' });
        });

        it('UPDATE_NAME', () => {
            expect(reducer(undefined, updateName('Bob') )).toEqual({ salutation: 'Hello', name: 'Bob' });
        });

        it('RESET', () => {
            expect(reducer(undefined, reset() )).toEqual({ salutation: 'Hello', name: 'Stranger' });
        });
    });
});

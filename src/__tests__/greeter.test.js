import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Greeter } from '../Greeter';

describe('Greeter', () => {

    it('defaults to Hello Stranger', () => {
        const wrapper = shallow(<Greeter />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('Updates name', () => {
        const wrapper = shallow(<Greeter name={'Robin'}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('Updates salutation', () => {
        const wrapper = shallow(<Greeter salutation={'Hey'}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});

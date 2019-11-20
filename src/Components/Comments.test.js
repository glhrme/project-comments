
import React from 'react'

import Comments from './Comments'
import Comment from './Comment'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('<Comments/>',()=>{
    it('should render Comments', () => {

        const comments = [
            {id: 'a', comment: 'teste a'},
            {id: 'b', comment: 'teste b'}
        ]

        //Sempre temos o wrapper
        const wrapper = shallow(<Comments comments={comments}/>)

        expect(wrapper.find(Comment).length).toBe(2)

    });
});
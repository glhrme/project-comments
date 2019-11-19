import React from 'react'
import Comment from './Comment.js'
import { render } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

it('should render',()=>{
    const c = {
        comment: 'Ola'
    }

    const wrapper = render(<Comment c={c}/>)
    

    expect(wrapper.text()).toBe('Comentário: Ola');

})
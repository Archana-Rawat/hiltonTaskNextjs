import React from 'react';
import {mount,shallow,render} from 'enzyme'
import App from '../pages/index'
import RoomComponent from '../components/RoomComponent'

describe('Main Component', () => {
 it('should render component successfully', () => {
   expect(shallow(<App/>).find('form').exists()).toBe(true)
 })
 it('should render 4 main checkboxes in div', () => {
    const container = mount(<App />);
    expect(container.find('checckbox').length)===4;
  });
  describe("RoomComponent", () => {
	it("should render RoomComponent successfully", () => {	
    const wrapper = shallow(<RoomComponent />);
  });
})

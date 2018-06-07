import React from "react";
import { shallow } from 'enzyme';
import { App } from "./App";

let props;
describe("Main app", () => {

  beforeEach(()=>{
    props = {
      classes: {},
      sample: {}
    };
  })

  it("renders without crashing", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

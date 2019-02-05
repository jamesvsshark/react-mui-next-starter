import React from "react";
import { shallow } from "enzyme";
import { App } from "../../App";

// tests skipped until react latest alpha released with this PR fix
// https://github.com/facebook/react/pull/14567

let props;

xdescribe("Main app", () => {
  beforeEach(() => {
    props = {
      classes: {},
      sample: {}
    };
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

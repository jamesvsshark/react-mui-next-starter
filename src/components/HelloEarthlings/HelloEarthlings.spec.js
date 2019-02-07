import React from "react";
import { shallow } from "enzyme";
import { HelloEarthlings } from "./HelloEarthlings";

// tests skipped until react latest alpha released with this PR fix
// https://github.com/facebook/react/pull/14567

let props;

describe("HelloEarthlings", () => {
  beforeEach(() => {
    props = {
      classes: {},
      sample: {}
    };
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<HelloEarthlings {...props} />);
    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<HelloEarthlings {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

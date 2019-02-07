import React from "react";
import { shallow } from "enzyme";
import { HelloEarthlings } from "./HelloEarthlings";

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

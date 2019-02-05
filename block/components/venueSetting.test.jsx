import React from "react";
import { mount } from "enzyme";
import VenueSetting from "./VenueSetting";

describe("VenueSetting", () => {
    let props;
    let mountedVenueSetting;
    const venueSetting = () => {
        if (!mountedVenueSetting) {
            mountedVenueSetting = mount(
                <VenueSetting {...props} />
            );
        }
        return mountedVenueSetting;
    }

    beforeEach(() => {
        props = {
            attributes: {
                venue: 'false',
            },
        };
        mountedVenueSetting = undefined;
    });

    // All tests will go here
    it('always renders an input', () => {
        const inputs = venueSetting().find("input");
        expect(inputs.length).toBeGreatedThan(0);
    });
});
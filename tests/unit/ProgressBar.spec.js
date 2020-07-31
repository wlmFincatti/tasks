import { shallowMount } from "@vue/test-utils";
import ProgressBar from "../../src/components/ProgressBar.vue";

describe('Progress bar', () => {
    test('should progress bar 100%', () => {
        const wrapper = shallowMount(ProgressBar,
            {
                propsData: {
                    perc: '100%'
                }
            }
        );

        expect(wrapper.find('div[class="progress"').text()).toBe('100%');
    });
});
import { shallowMount } from '@vue/test-utils';
import Message from '../../src/components/Message.vue';

describe('Message', () => {
    test('Test Message coomponent and style', () => {
        // renderiza o componente
        const wrapper = shallowMount(Message, {
            propsData: {
                message: "task ja cadastrada",
                styleCustom: { backgroundColor: "blue" }
            }
        })
        //props
        expect(wrapper.props('styleCustom')).toEqual({"backgroundColor": "blue"});
        expect(wrapper.props('message')).toBe("task ja cadastrada");

        //html render
        expect(wrapper.find("div").text()).toBe("task ja cadastrada");
        expect(wrapper.find("div").attributes("style")).toBe("background-color: blue;")
    });
})
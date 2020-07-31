import { shallowMount } from '@vue/test-utils'
import NewTask from '../../src/components/NewTask.vue'

describe("test component newTask", () => {

    let wrapper;
    const date = new Date();

    beforeEach(() => {
        wrapper = shallowMount(NewTask, {
            propsData: {
                newTask: {
                    name: '',
                    date: ''
                }
            }
        });

    });

    afterEach(() => {
        wrapper.destroy();
    });
    test("create new task when button clicked", () => {
        wrapper.setData({ newTask: { name: "lavar louça", date: date } })
        wrapper.find("button").trigger('click');

        expect(wrapper.emitted().addedTask).toEqual([[{ "date": date, "name": "lavar louça" }]]);

    });
    test("create new task when keydown enter", () => {
        wrapper.setData({ newTask: { name: "lavar carro", date: date } })
        wrapper.find("input[type=text]").trigger('keydown.enter');

        expect(wrapper.emitted().addedTask).toEqual([[{ "date": date, "name": "lavar carro" }]]);

    });
    test("button text verify", () => {
        expect(wrapper.find("button").text()).toBe("+")
    });
})
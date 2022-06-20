import { shallow } from 'enzyme';
import App from "./App";

describe('<App />', () => {
  it('render as expect', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy()
  });
});

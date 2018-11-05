import { cleanup } from 'react-testing-library';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(async () => {
  cleanup();
});

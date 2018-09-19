import Enzyme from 'enzyme'; // eslint-disable-line
import EnzymeAdapter from 'enzyme-adapter-react-16'; // eslint-disable-line

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

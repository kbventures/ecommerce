import Add from '../components/Add';
describe('<Add /> rendering', () => {
    it('should render one <h1>', () => {
        let wrapper = shallow(<Add />);
        expect(wrapper.children('h1')).toHaveLength(3);
    });
});
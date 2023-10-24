import Input from '../../components/Input';
import './Category.css';

function Category({ handleChange }) {
    return (
        <div>
            <h2 className='sidebar-title'>Category</h2>

            <div>
                <label className='sidebar-label-container'>
                    <input
                        onChange={handleChange}
                        type='radio'
                        value=''
                        name='test'
                    />
                    <span className='checkmark'></span>All
                </label>
                {/* <Input /> */}
                <Input
                    handleChange={handleChange}
                    // type='radio'
                    value='sneakers'
                    title='Sneakers'
                    name='test'
                />
                <Input
                    handleChange={handleChange}
                    // type='radio'
                    value='falts'
                    title='Falts'
                    name='test'
                />
                <Input
                    handleChange={handleChange}
                    // type='radio'
                    value='sandals'
                    title='Sandals'
                    name='test'
                />
                <Input
                    onChange={handleChange}
                    // type='radio'
                    value='heels'
                    title='Heels'
                    name='test'
                />
            </div>
        </div>
    );
}

export default Category;

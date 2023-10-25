import Input from '../../components/Input';
import './Colors.css';

function Colors({ handleChange }) {
    return (
        <div>
            <h2 className='sidebar-title color-title'>Colors</h2>
            <div>
                <label className='sidebar-label-container'>
                    <input
                        onChange={handleChange}
                        type='radio'
                        value=''
                        name='test1'
                    />
                    <span className='checkmark all'></span>All
                </label>
                <Input
                    handleChange={handleChange}
                    value='black'
                    title='Black'
                    color='black'
                    name='test1'
                />
                <Input
                    handleChange={handleChange}
                    value='blue'
                    title='Blue'
                    color='blue'
                    name='test1'
                />
                <Input
                    handleChange={handleChange}
                    value='red'
                    title='Red'
                    color='red'
                    name='test1'
                />
                <Input
                    handleChange={handleChange}
                    value='green'
                    title='Green'
                    color='green'
                    name='test1'
                />
                <label className='sidebar-label-container'>
                    <input
                        type='radio'
                        onChange={handleChange}
                        value='white'
                        name='test1'
                    />
                    <span
                        className='checkmark'
                        style={{
                            background: 'white',
                            border: '2px solid black',
                        }}
                    ></span>
                    White
                </label>
            </div>
        </div>
    );
}

export default Colors;

import './HeaderButtons.css'
import HeaderButtons from './HeaderButtons';
import {useState} from 'react';

function Header() {
    const [index, setIndex] = useState('Home');

    function handleClick(name) {
        setIndex(name);
    }

    return (
        <div>
            <div class="tab">
        <HeaderButtons
            name={'Home'}
            handleClick={handleClick}
            index={index}
        />
        <HeaderButtons
            name={'CV'}
            handleClick={handleClick}
            index={index}
        />
        <HeaderButtons
            name={'Blog'}
            handleClick={handleClick}
            index={index}
        />
        </div>
        <h2>
            {index}
        </h2>
        <p>
            Welcome to my website. 
            My name is Himesh Bhatia. 
            I am a software engineer living in New York. 
            Updating the website as I build it. 
        </p>
        </div>
    );
}

export default Header;
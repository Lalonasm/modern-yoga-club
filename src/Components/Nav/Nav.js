import React from 'react';
import img from '../../image/student-1.png';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <h2>Modern Yoga Club</h2>
            <div className='client'>
                <div className='client-detail'>
                    <img src={img} alt="" />
                    <p>Ontario, Canada</p>
                </div>
                <div className='client-info' >
                    <div> <h3>70 <small>kg</small></h3>
                        <p>Weight</p></div>
                    <div>
                        <h3>6.2 <small>feet</small></h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>25 <small>yrs</small></h3>
                        <p>Age</p>
                    </div>
                </div>
            </div>

        </nav >
    );
};

export default Nav;
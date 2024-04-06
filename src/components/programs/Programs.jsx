import React from 'react'
import './Programs.css';
import shortCourse from '../../assets/program-1.png';
import undergrad from '../../assets/program-2.png';
import postgrad from '../../assets/program-3.png';
import icon1 from '../../assets/program-icon-1.png';
import icon2 from '../../assets/program-icon-2.png';
import icon3 from '../../assets/program-icon-3.png';

const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={shortCourse} alt="short courses" className='main-img' />
                <div className="caption">
                    <img src={icon1} alt="icon1" />
                    <p>Short Courses</p>
                </div>
            </div>
            <div className="program">
                <img src={undergrad} alt="undergrad" className='main-img'/>
                <div className="caption">
                    <img src={icon2} alt="icon2" />
                    <p>Undergraduate</p>
                </div>
            </div>
            <div className="program">
                <img src={postgrad} alt="postgrad" className='main-img' />
                <div className="caption">
                    <img src={icon3} alt="icon3" />
                    <p>Postgraduate</p>
                </div>
            </div>
        </div>
    )
}

export default Programs

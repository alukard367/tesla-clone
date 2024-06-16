import React from 'react'
import downArrow from'../assets/images/down-arrow.svg'

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg}) => {
  return (
    <div className='section'>
        <img src={ backgroundImg } alt="" />
        <div className="section-content">
            <div className="item-text">
                <h1>{ title }</h1>
                <p>{ description }</p>
            </div>
            <div className='wrapper-btn-group'>
                <div className="btn-group">
                    <div className="left-btn">
                        { leftBtnText }
                    </div>
                    { rightBtnText && // its like if rightBtnText exist then output rightBtnText if not forget about it just output the leftButtonText
                    <div className="right-btn">
                        { rightBtnText }
                    </div>
                    }
                </div>
                <div className="down-arrow">
                    <img src={downArrow} />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Section
import React from 'react'
import Section from './Section'
import modelS from'../assets/images/model-s.jpg'
import modelY from'../assets/images/model-y.jpg'
import model3 from'../assets/images/model-3.jpg'
import modelX from'../assets/images/model-x.jpg'
import solarPanel from'../assets/images/solar-panel.jpg'
import solarRoof from'../assets/images/solar-roof.jpg'
import accessories from'../assets/images/accessories.jpg'

const Home = () => {
  return (
    <div className='container'>
        <Section 
          title='Model S' 
          description='Order Online For Touchless Delivery' 
          backgroundImg={ modelS }
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Model Y' 
          description='Order Online For Touchless Delivery' 
          backgroundImg={ modelY }
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Model 3' 
          description='Order Online For Touchless Delivery' 
          backgroundImg={ model3 }
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Model X' 
          description='Order Online For Touchless Delivery' 
          backgroundImg={ modelX }
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Lowest Cost Solar Panel in America' 
          description='Money Back Guarantee' 
          backgroundImg={ solarPanel }
          leftBtnText='Order Now'
          rightBtnText='Learn more'
        />
        <Section 
          title='Solar For New Roofs' 
          description='Solar Roof Cost Less Than a New Roof Plus Solar Panels' 
          backgroundImg={ solarRoof }
          leftBtnText='Order Now'
          rightBtnText='Learn more'
        />
        <Section 
          title='Accessories' 
          description='' 
          backgroundImg={ accessories }
          leftBtnText='Shop now'
          rightBtnText=''
        />
    </div>
  )
}

export default Home
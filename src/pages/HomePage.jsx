import { Box } from '@mui/system'
import React from 'react'
import Banner from '../components/LandingPage/Banner'
import Navbar from '../components/Navbar'
import Slides from "../components/LandingPage/Slides";
import {styled} from "@mui/material" 

import { electronics,Healthcare,BestSeller } from "../components/LandingPage/data";
import { clothes,Fashion,Appliances,Styles} from "../components/LandingPage/data";





const Component =styled(Box)`
padding:10px 10px;
background:#f2f2f2;
`

const HomePage = () => {
  return (
    <div>
    <Navbar/>

    <Component>
      <Banner/>
    </Component>

    <Component>
       <Slides  products={electronics} />
    </Component>

    <Component>
       <Slides  products={clothes} />
    </Component>

    <Component>
       <Slides  products={Healthcare} />
    </Component>

    <Component>
       <Slides  products={BestSeller} />
    </Component>

    <Component>
       <Slides  products={Fashion} />
    </Component>

    <Component>
       <Slides  products={Appliances} />
    </Component>

    
    <Component>
       <Slides  products={Styles} />
    </Component>

    <Component>
       <Slides  products={BestSeller} />
    </Component>
    
    </div>
  )
}

export default HomePage
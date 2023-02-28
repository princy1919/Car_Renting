import React from 'react';
import {Loader} from  '../../globalUtilities/Loader'
import SearchCar from "./SearchCar";
import HowItWorks from "./HowItWorks";
import Description from "./Description";
import WhyChooseUs from "./WhyUS";

class Home extends React.Component{
    constructor(){
        window.scrollTo(0, 0);
        super();
        this.state = {
            loading:false
        }
    }
componentDidMount() {
        localStorage.removeItem("journeyDetails")
        localStorage.removeItem("total")
        localStorage.removeItem("insuranceSum")
        localStorage.removeItem("gpsSum")
}

    render() {
        return(
            <div>
                {this.state.loading ? <Loader/> : null }
                <SearchCar/>
                <Description/>
                <HowItWorks/>
                <WhyChooseUs/>
            </div>
        )
    }
}


export default Home;

import React, {useState} from 'react'
import Proptypes from 'prop-types'

//import "./index.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import { ProductsData } from '../../../data/MockData'

import MaterialsCarousel from './MaterialsCarousel'
import PanelsCarousel from './PanelsCarousel'
import ProfilesCarousel from './ProfilesCarousel'

function ProductsCarousel() {
    const initialState = "paneles"

    const [carouselCategory, setPanelCategory] = useState(initialState)

    if(carouselCategory == "paneles") {
        return(
            <>
            
            <Row className="justify-content-center mb-5">
                <Col xl="4" l="4" md="4" sm="6" xs="6"><button className='article-category selected-category' onClick={() => {setPanelCategory("paneles"); }}>Paneles</button></Col>
                <Col xl="4" l="4" md="4" sm="6" xs="6"><button className='article-category' onClick={() => setPanelCategory("perfiles")}>Perfiles</button></Col>
                <Col xl="4" l="4" md="4" sm="12" xs="12"><button className='article-category' onClick={() => setPanelCategory("materiales-instalacion")}>Materiales para instalación</button></Col>
            </Row>
            
            <p>The category is: {carouselCategory}</p>
    
            <PanelsCarousel/>
            </>
        )
    } else if(carouselCategory == "perfiles") {
        return(
            <>
            
            <Row className="justify-content-center mb-5">
                <Col xl="4" l="4" md="4" sm="6" xs="6"><button className='article-category' onClick={() => {setPanelCategory("paneles"); }}>Paneles</button></Col>
                <Col xl="4" l="4" md="4" sm="6" xs="6"><button className='article-category selected-category' onClick={() => setPanelCategory("perfiles")}>Perfiles</button></Col>
                <Col xl="4" l="4" md="4" sm="12" xs="12"><button className='article-category' onClick={() => setPanelCategory("materiales-instalacion")}>Materiales para instalación</button></Col>
            </Row>
    
            
            <p>The category is: {carouselCategory}</p>
    
            <ProfilesCarousel/>
            </>
        )
    } else if(carouselCategory == "materiales-instalacion") {
        return(
            <>
            
            <Row className="justify-content-center mb-5">
                <Col xl="4" l="4" md="4" sm="6" xs="6"><button className='article-category' onClick={() => {setPanelCategory("paneles"); }}>Paneles</button></Col>
                <Col xl="4" l="4" md="4" sm="6" xs="6"><button className='article-category' onClick={() => setPanelCategory("perfiles")}>Perfiles</button></Col>
                <Col xl="4" l="4" md="4" sm="12" xs="12"><button className='article-category selected-category' onClick={() => setPanelCategory("materiales-instalacion")}>Materiales para instalación</button></Col>
            </Row>
    
            
            <p>The category is: {carouselCategory}</p>
    
            <MaterialsCarousel/>
            </>
        )
    }


}


export default ProductsCarousel;

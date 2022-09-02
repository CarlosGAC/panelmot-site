import React, {useState} from 'react'

import Proptypes from 'prop-types'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ArticlesCarousel from '../ArticlesCarousel'

import { ProductsData } from '../../../data/MockData'

function ProductCategory( {handleProductClick} ) {

    function Hello(title, description, textureType, useCase, price, imageSrc, size, gallery) {
        handleProductClick(title, description, textureType, useCase, price, imageSrc, size, gallery);
    }
    
    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1920, min: 1200 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1199, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
    }

    const initialState = "paneles"

    const [carouselCategory, setPanelCategory] = useState(initialState)

    if(carouselCategory == "paneles") {
        return(
            
            <>
            
            <Row className="justify-content-center mb-5 text-center">
                <Col xl="4" l="4" md="4" sm="6" xs="6" className="text-left"><button className='article-category selected-category' onClick={() => {setPanelCategory("paneles"); }}>Paneles</button></Col>
                <Col xl="4" l="4" md="4" sm="6" xs="6" className="text-left"><button className='article-category' onClick={() => setPanelCategory("perfiles")}>Perfiles</button></Col>
                <Col xl="4" l="4" md="4" sm="12" xs="12" className="text-left"><button className='article-category' onClick={() => setPanelCategory("materiales-instalacion")}>Materiales para instalación</button></Col>
            </Row>
            
            <ArticlesCarousel onClickFunction={Hello} responsive={responsive} data={ProductsData.panels}/>
            </>
        )
    } else if(carouselCategory == "perfiles") {
        return(
            <>
            
            <Row className="justify-content-center mb-5 text-center">
                <Col xl="4" l="4" md="4" sm="6" xs="6" className="text-left"><button className='article-category' onClick={() => {setPanelCategory("paneles"); }}>Paneles</button></Col>
                <Col xl="4" l="4" md="4" sm="6" xs="6" className="text-left"><button className='article-category selected-category' onClick={() => setPanelCategory("perfiles")}>Perfiles</button></Col>
                <Col xl="4" l="4" md="4" sm="12" xs="12" className="text-center"><button className='article-category' onClick={() => setPanelCategory("materiales-instalacion")}>Materiales para instalación</button></Col>
            </Row>
    
            
    
            <ArticlesCarousel onClickFunction={Hello} responsive={responsive} data={ProductsData.profiles}/>
            </>
        )
    } else if(carouselCategory == "materiales-instalacion") {
        return(
            <>
            
            <Row className="justify-content-center mb-5 text-center">
                <Col xl="4" l="4" md="4" sm="6" xs="6" className="text-left"><button className='article-category' onClick={() => {setPanelCategory("paneles"); }}>Paneles</button></Col>
                <Col xl="4" l="4" md="4" sm="6" xs="6" className="text-left"><button className='article-category' onClick={() => setPanelCategory("perfiles")}>Perfiles</button></Col>
                <Col xl="4" l="4" md="4" sm="12" xs="12" className="text-left"><button className='article-category selected-category' onClick={() => setPanelCategory("materiales-instalacion")}>Materiales para instalación</button></Col>
            </Row>
            
            
            <ArticlesCarousel onClickFunction={Hello} responsive={responsive} data={ProductsData.materials}/>
            </>
        )
    }


}

ProductCategory.propTypes = {
    handleProductClick: Proptypes.func
}


export default ProductCategory;

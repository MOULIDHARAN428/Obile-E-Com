import React,{Component} from 'react'
import {Carousel,Badge} from 'react-bootstrap';
import { KIDS } from '../Shared/kidsinfo';
import { MEN } from '../Shared/meninfo';
import { WOMEN } from '../Shared/womeninfo';
import { Media } from 'reactstrap';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            kids : KIDS,
            men : MEN,
            women : WOMEN
        };
    }

    render(){
        const kidsfeautered = this.state.kids.filter(kid => kid.featured).map(filteredkid => {
            return(
                <div className='row row-content col-sm-4'>
                    <div key={filteredkid.id}>
                        <Media className="item-image" object src={filteredkid.image}  />
                        <Media heading>{filteredkid.name}</Media>
                        <h5><Badge bg="secondary">&#8377;{filteredkid.price}{' '}
                        <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        {filteredkid.Oriprice}</span>
                        </Badge>{' '}
                        <Badge bg="warning" text="dark">{filteredkid.label}</Badge>{' '}
                        <Badge bg="info">{filteredkid.category}</Badge></h5>    
                    </div>
                </div>
            );
        });
        const menfeautered = this.state.men.filter(man => man.featured).map(filteredmen => {
            return(
                <div className='row row-content col-sm-4'>
                    <div key={filteredmen.id}>
                        <Media className="item-image" object src={filteredmen.image}  />
                        <Media heading>{filteredmen.name}</Media>
                        <h5><Badge bg="secondary">&#8377;{filteredmen.price}{' '}
                        <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        {filteredmen.Oriprice}</span>
                        </Badge>{' '}
                        <Badge bg="warning" text="dark">{filteredmen.label}</Badge>{' '}
                        <Badge bg="info">{filteredmen.category}</Badge></h5>    
                    </div>
                </div>
            );
        });
        const womenfeautered = this.state.women.filter(girl => girl.featured).map(filteredwomen => {
            return(
                <div className='row row-content col-sm-4'>
                    <div key={filteredwomen.id}>
                        <Media className="item-image" object src={filteredwomen.image}  />
                        <Media heading>{filteredwomen.name}</Media>
                        <h5><Badge bg="secondary">&#8377;{filteredwomen.price}{' '}
                        <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        {filteredwomen.Oriprice}</span>
                        </Badge>{' '}
                        <Badge bg="warning" text="dark">{filteredwomen.label}</Badge>{' '}
                        <Badge bg="info">{filteredwomen.category}</Badge></h5>    
                    </div>
                </div>
            );
        });
        
        return(
            /*CAROUSEL*/
                <>
    
                    <Carousel className='carousel-ban' variant="dark">
    
                        <Carousel.Item interval={3000}>
                            <img className="d-block" src='/assets/images/carousel_ban_1.jpg' alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img className="d-block" src='/assets/images/carousel_ban_2.jpg' alt="Second slide"/>
                        </Carousel.Item>               
                        <Carousel.Item interval={3000}>
                            <img className="d-block" src='/assets/images/carousel_ban_3.jpg' alt="Third slide"/>
                        </Carousel.Item>
    
                    </Carousel>
    
                    <br />
    
                    <div className="container service">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-box">
                                    <img src="/assets/images/fast_del.png" alt=""/>
                                    <h6>FREE DELIVERY</h6>
                                    <p>For all delivery over 499</p>
                                    <p>Delivry within 5 Business days</p>
                                    <i className="pad fa fa-arrow-right"/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="service-box active-service">
                                    <img src="/assets/images/customer_review.png" alt=""/>
                                    <h6>CUSTOMER'S REVIEW</h6>
                                    <p>4.8 star out of 5</p>
                                    <p>Most by any other E-commerece Services</p>
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="service-box pocket-friendly">
                                    <img src="/assets/images/free_cancel.png" alt=""/>
                                    <h6>FREE CANCELATION</h6>
                                    <p>Can be cancel your order anytime</p>
                                    <p>Full amount will be refunded</p>
                                    <i className="fa fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='main-store row'>
                        <h3 className='store-header'>TRENDING</h3>
                            {womenfeautered}{menfeautered}{kidsfeautered}
                    </div>
                    
                    {/* const feautredDisplay = () => {
                    kid={this.state.kids.filter((kids)=> kids.featured)[0]}
                    kid={this.state.dishes.filter((dish)=> dish.featured)[0]}
                    kid={this.state.dishes.filter((dish)=> dish.featured)[0]}
                    }
                    */}
    
                </>
        );
    }
}




export default Home;
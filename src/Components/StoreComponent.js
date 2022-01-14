import React,{Component} from 'react'
import {Breadcrumb,Badge} from 'react-bootstrap';
import { KIDS } from '../Shared/kidsinfo';
import { MEN } from '../Shared/meninfo';
import { WOMEN } from '../Shared/womeninfo';
import {Media} from 'reactstrap';
import { Link } from 'react-router-dom';

class Store extends Component {

    constructor(props){
        super(props);
        this.state={
            kids : KIDS,
            men : MEN,
            women : WOMEN
        };
    }

    render(){
        const kidsdetails = this.state.kids.map((kid)=>{
            return(
                <div className='row row-content col-sm-4'>
                    <div key={kid.id}>
                        <Media className="item-image" object src={kid.image}  />
                        <Media heading>{kid.name}</Media>
                        <h5><Badge bg="secondary">&#8377;{kid.price}{' '}
                        <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        {kid.Oriprice}</span>
                        </Badge>{' '}
                        <Badge bg="warning" text="dark">{kid.label}</Badge>{' '}
                        <Badge bg="info">{kid.category}</Badge></h5>    
                    </div>
                </div>
            );
        });
        
        const womendetails = this.state.women.map((women)=>{
            return(
                <div className='row row-content col-sm-4'>
                    <div key={women.id}>
                        <Media className="item-image" object src={women.image}  />
                        <Media heading>{women.name}</Media>
                        <h5><Badge bg="secondary">&#8377;{women.price}{' '}
                        <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        {women.Oriprice}</span>
                        </Badge>{' '}
                        <Badge bg="warning" text="dark">{women.label}</Badge>{' '}
                        <Badge bg="info">{women.category}</Badge></h5>    
                    </div>
                </div>
            );
        });
        const mendetails = this.state.men.map((men)=>{
            return(
                <div className='row row-content  col-sm-4'>
                    <div key={men.id}>
                        <Media className="item-image" object src={men.image}  />
                        <Media heading>{men.name}</Media>
                        <h5><Badge bg="secondary">&#8377;{men.price}{' '}
                        <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                        {men.Oriprice}</span>
                        </Badge>{' '}
                        <Badge bg="warning" text="dark">{men.label}</Badge>{' '}
                        <Badge bg="info">{men.category}</Badge></h5>
                    </div>
                </div>
            );
        });
        return(
            
                <>
                    <Breadcrumb className="bread-crumb">
                        <Breadcrumb.Item className="bread-item"><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="bread-item"><Link to="/store">Store</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='main-store row'>
                        <h3 className='store-header'>WOMEN</h3>
                            {womendetails}<hr/>
                        <h3 className='store-header'>MEN</h3>
                            {mendetails}<hr/>
                        <h3 className='store-header'>KIDS</h3>
                            {kidsdetails}
                    </div>
                </>
        );
    }
}




export default Store;
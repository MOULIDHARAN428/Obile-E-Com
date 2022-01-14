import React,{Component} from 'react'
import {Breadcrumb,Badge} from 'react-bootstrap';
import { WOMEN } from '../Shared/womeninfo';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

class Women extends Component {

    constructor(props){
        super(props);
        this.state={
            women : WOMEN
        };
    }

    render(){
        
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
        return(
            
                <>
                    <Breadcrumb className="bread-crumb">
                        <Breadcrumb.Item className="bread-item"><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="bread-item"><Link to="/store">Store</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="bread-item"><Link to="/women">Women</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='main-store row'>
                        <h3 className='store-header'>WOMEN</h3>
                            {womendetails}
                    </div>
                </>
        );
    }
}
export default Women;
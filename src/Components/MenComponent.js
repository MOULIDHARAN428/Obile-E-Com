import React,{Component} from 'react'
import {Breadcrumb,Badge} from 'react-bootstrap';
import { MEN } from '../Shared/meninfo';
import {Media} from 'reactstrap';
import { Link } from 'react-router-dom';

class Men extends Component {

    constructor(props){
        super(props);
        this.state={
            men : MEN
        };
    }

    render(){
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
                        <Breadcrumb.Item className="bread-item"><Link to="/men">Men</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='main-store row'>
                        <h3 className='store-header'>MEN</h3>
                            {mendetails}
                    </div>
                </>
        );
    }
}
export default Men;
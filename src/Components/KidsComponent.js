import React,{Component} from 'react'
import {Breadcrumb,Badge} from 'react-bootstrap';
import { KIDS } from '../Shared/kidsinfo';
import {Media} from 'reactstrap';
import { Link } from 'react-router-dom';

class Kids extends Component {

    constructor(props){
        super(props);
        this.state={
            kids : KIDS
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
        return(
            
                <>
                    <Breadcrumb className="bread-crumb">
                        <Breadcrumb.Item className="bread-item"><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="bread-item"><Link to="/store">Store</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="bread-item"><Link to="/kids">Kids</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='main-store row'>
                        <h3 className='store-header'>KIDS</h3>
                            {kidsdetails}
                    </div>
                </>
        );
    }
}

export default Kids;
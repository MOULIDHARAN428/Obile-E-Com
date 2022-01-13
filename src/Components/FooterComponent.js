import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(

        <div className="footer  text-black">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home"><div  className="text-black">Home</div></Link></li>
                            <li><Link to="/store"><div className='text-black'>Store</div></Link></li>
                            <li><Link to="/about"><div className='text-black'>About</div></Link></li>
                            <li><Link to="/contact"><div className='text-black'>Contact</div></Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Rajai Road<br />
		                    T Nagar, Chennai<br />
		                    India<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 9874563210<br />
                            <i className="fa fa-fax fa-lg"></i>: +91 9874563210<br />
                            <i className="fa fa-envelope fa-lg"></i>: <Link to="mailto:ecomobile@food.net">
                            <span className='text-black'>ecomobile@food.net</span></Link>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <div className="btn btn-social-icon btn-google" ><i className="fa fa-google-plus"></i></div>{' '}
                            <div className="btn btn-social-icon btn-facebook" ><i className="fa fa-facebook"></i></div>{' '}
                            <div className="btn btn-social-icon btn-linkedin" ><i className="fa fa-linkedin"></i></div>{' '}
                            <div className="btn btn-social-icon btn-twitter" ><i className="fa fa-twitter"></i></div>{' '}
                            <div className="btn btn-social-icon btn-google" ><i className="fa fa-youtube"></i></div>{' '}
                            
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 OBILE E-COM</p>
                    </div>
                </div>
            </div>
        </div>    

    );
}

export default Footer;
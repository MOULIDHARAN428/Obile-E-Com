import React,{Component} from 'react'
import {Breadcrumb,Accordion} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class about extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <>
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item className="bread-item"><Link to="/home">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item className="bread-item"><Link to="/about">About</Link></Breadcrumb.Item>
                </Breadcrumb>


                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Peter Pan - CEO</Accordion.Header>
                        <Accordion.Body>
                        Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous
                        journey to the shores of America with the intention of giving their children the best future. 
                        His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available 
                        inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which 
                        The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, 
                        pioneering cross-cultural culinary connections.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Dhanasekaran Witherspoon - CFO</Accordion.Header>
                        <Accordion.Body>
                        Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long 
                        established family tradition in farming and produce. His experiences growing up on a farm in 
                        the Australian outback gave him great appreciation for varieties of food sources. As he puts it 
                        in his own words, Everything that runs, wins, and everything that stays, pays!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Agumbe Tang - CTO</Accordion.Header>
                        <Accordion.Body>
                        Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that 
                        we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not 
                        meet his exacting standards. He lives by his motto, You click only if you survive my lick.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Alberto Somayya - EC</Accordion.Header>
                        <Accordion.Body>
                        Award winning three-star Michelin chef with wide International experience having worked closely with whos-who 
                        in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put 
                        together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <br / >
                
                <div className="row row-content table-content text-white" style={{background: 'rgb(245, 109, 60)'}}>
                        <div className="col-12 col-sm-1"></div>
                        <br /> <br />
                        <div className="col-12 col-sm-6">
                            <h2 className="table-content-header">Facts &amp; Figures</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead className="thead-inverse text-white">
                                        <tr className="">
                                            <th>&nbsp;</th>
                                            <th>2021</th>
                                            <th>2022</th>
                                            <th>2023</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-white">
                                        <tr style={{color: 'pink'}}>
                                            <th>Employees</th>
                                            <td>15</td>
                                            <td>30</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <th>Guests Served</th>
                                            <td>15000</td>
                                            <td>45000</td>
                                            <td>100,000</td>
                                        </tr>
                                        <tr style={{color: 'pink'}}>
                                            <th>Special Events</th>
                                            <td>3</td>
                                            <td>20</td>
                                            <td>45</td>
                                        </tr>
                                        <tr>
                                            <th>Annual Turnover</th>
                                            <td>&#8377;251,325</td>
                                            <td>&#8377;1,250,375</td>
                                            <td>~&#8377;3,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-12 col-sm-1"></div>
                        <div className="col-12 col-sm-3 d-none d-lg-block">
                            <img src="/assets/images/graph.png" alt="graph" />
                        </div>
                </div>

                <div className="row row-content table-content">
                    <div className="col-12 col-sm-1 d-none d-sm-block"></div>
                    <div className="col-12 col-sm-5">
                        <h2 className="table-content-header">Our History</h2>
                        <p>Started in 2019, Obile E-com quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                    <div className="col-12 col-sm-1"></div>
                    <div className="col-12 col-sm-4 d-none d-lg-block">
                        <div className="card">
                            <h3 className="card-header bg-primary text-white">Facts at a Glance</h3>
                            <div className="card-block">
                                <br />
                                <dl className="row">
                                    <div className="col-1"></div><dt className="col-5">Started</dt>
                                    <dd className="col-6">3 Feb. 20219</dd>
                                    <div className="col-1"></div><dt className="col-5">Major Stake Holder</dt>
                                    <dd className="col-6">HK Fine Inc.</dd>
                                    <div className="col-1"></div><dt className="col-5">Last Year's Turnover</dt>
                                    <dd className="col-6">&#8377;1,250,375</dd>
                                    <div className="col-1"></div><dt className="col-5">Employees</dt>
                                    <dd className="col-6">40</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
	            </div>

            </>
        );
    }
}
export default about;
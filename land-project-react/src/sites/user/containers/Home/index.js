import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Tabs, Tab} from 'react-bootstrap';
import studentImg1 from '../../../../assets/img/studenslide1.jpg';
import studentImg2 from '../../../../assets/img/studenslide2.jpg';
import studentImg3 from '../../../../assets/img/studenslide3.jpg';
import imgcard1 from '../../../../assets/img/xe1.jpg';

import './styles.css';

class Home extends Component {
	render() {
		return (
			<div className="main-student-wrapper">
				<div className="container-fluid p-0">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={studentImg3}
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={studentImg1}
								alt="Third slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={studentImg2}
								alt="Third slide"
							/>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="student-body">
					<div className="container">
						<h6 id="title">
							WELCOME TO <span id="title-span">MOTORS WORLD</span> 
						</h6>
						<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
							<Tab eventKey="home" title="NEW CARS">
								<div className="row row-4 car-listing-row">
									<div className="col-md-3 col-sm-4 col-xs-12 col-xxs-12 stm-template-front-loop">
										<a href="/" className="rmv">
											<div className="image">
												<img src="https://vcdn-giadinh.vnecdn.net/2019/04/01/top-4189-1554109565.jpg" className="image-card"  alt="xe1"></img>
											</div>
											<div className="listing-car-item-meta">
												<div className="car-meta-top heading-font clearfix">
													<div className="price">
														<div className="car-normal-price">$45 000</div>
													</div>
													<div className="car-title">BMW 535i, Navi, Leather, ABS</div>
												</div>
												<div className="car-meta-bottom">
													<ul>
														<li>
															<i className="fas fa-road"></i>
															<span>80</span>
														</li>
														<li>
															<i className="fas fa-gas-pump"></i>
															<span>70/100</span>
														</li>
														<li>
															<span>Automatic</span>
														</li>
													</ul>
												</div>
											</div>
										</a>
									</div>
									<div className="col-md-3 col-sm-4 col-xs-12 col-xxs-12 stm-template-front-loop">
										<a href="/" className="rmv">
											<div className="image">
												<img src={imgcard1} className="image-card"  alt="xe1"></img>
											</div>
											<div className="listing-car-item-meta">
												<div className="car-meta-top heading-font clearfix">
													<div className="price">
														<div className="car-normal-price">$45 000</div>
													</div>
													<div className="car-title">BMW 535i, Navi, Leather, ABS</div>
												</div>
												<div className="car-meta-bottom">
													<ul>
														<li>
															<i className="fas fa-road"></i>
															<span>80</span>
														</li>
														<li>
															<i className="fas fa-gas-pump"></i>
															<span>70/100</span>
														</li>
														<li>
															<span>Automatic</span>
														</li>
													</ul>
												</div>
											</div>
										</a>
									</div>
									<div className="col-md-3 col-sm-4 col-xs-12 col-xxs-12 stm-template-front-loop">
										<a href="/" className="rmv">
											<div className="image">
												<img src={imgcard1} className="image-card"  alt="xe1"></img>
											</div>
											<div className="listing-car-item-meta">
												<div className="car-meta-top heading-font clearfix">
													<div className="price">
														<div className="car-normal-price">$45 000</div>
													</div>
													<div className="car-title">BMW 535i, Navi, Leather, ABS</div>
												</div>
												<div className="car-meta-bottom">
													<ul>
														<li>
															<i className="fas fa-road"></i>
															<span>80</span>
														</li>
														<li>
															<i className="fas fa-gas-pump"></i>
															<span>70/100</span>
														</li>
														<li>
															<span>Automatic</span>
														</li>
													</ul>
												</div>
											</div>
										</a>
									</div>
									<div className="col-md-3 col-sm-4 col-xs-12 col-xxs-12 stm-template-front-loop">
										<a href="/" className="rmv">
											<div className="image">
												<img src={imgcard1} className="image-card" alt="xe1"></img>
											</div>
											<div className="listing-car-item-meta">
												<div className="car-meta-top heading-font clearfix">
													<div className="price">
														<div className="car-normal-price">$45 000</div>
													</div>
													<div className="car-title">BMW 535i, Navi, Leather, ABS</div>
												</div>
												<div className="car-meta-bottom">
													<ul>
														<li>
															<i className="fas fa-road"></i>
															<span>80</span>
														</li>
														<li>
															<i className="fas fa-gas-pump"></i>
															<span>70/100</span>
														</li>
														<li>
															<span>Automatic</span>
														</li>
													</ul>
												</div>
											</div>
										</a>
									</div>
								</div>
							</Tab>
							<Tab eventKey="profile" title="USED CARS">
							<div className="row row-4 car-listing-row">
									<div className="col-md-3 col-sm-4 col-xs-12 col-xxs-12 stm-template-front-loop">
										<a href="/" className="rmv">
											<div className="image">
												<img src="https://www.brandsvietnam.com/upload/news/480px/2018/14549_Xehoi.png" className="image-card"  alt="xe1"></img>
											</div>
											<div className="listing-car-item-meta">
												<div className="car-meta-top heading-font clearfix">
													<div className="price">
														<div className="car-normal-price">$45 000</div>
													</div>
													<div className="car-title">BMW 535i, Navi, Leather, ABS</div>
												</div>
												<div className="car-meta-bottom">
													<ul>
														<li>
															<i className="fas fa-road"></i>
															<span>80</span>
														</li>
														<li>
															<i className="fas fa-gas-pump"></i>
															<span>70/100</span>
														</li>
														<li>
															<span>Automatic</span>
														</li>
													</ul>
												</div>
											</div>
										</a>
									</div>
								</div>
							</Tab>
							<Tab eventKey="search" title="SEARCH INVENTORY">
								<div>
									home3
								</div>
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
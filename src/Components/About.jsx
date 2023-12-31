import React from "react";
import { Link } from "react-router-dom";
function About() {
	return (
		<div className>
			<div class='m-about' data-scrolling-animations='true'>
				<div id='page-preloader'>
					<span class='spinner'></span>
				</div>

				<section class='b-pageHeader'>
					<div class='container'>
						<h1 class='wow zoomInLeft' data-wow-delay='0.7s'>
							About Us
						</h1>
						<div
							class='b-pageHeader__search wow zoomInRight'
							data-wow-delay='0.7s'>
							<h3>The Largest Auto Dealer Online</h3>
						</div>
					</div>
				</section>
				<div class='b-breadCumbs s-shadow'>
					<div class='container'>
						<a href='home.html' class='b-breadCumbs__page'>
							Home
						</a>
						<span class='fa fa-angle-right'></span>
						<a href='about.html' class='b-breadCumbs__page m-active'>
							About Us
						</a>
					</div>
				</div>
				<section class='b-best'>
					<div class='container'>
						<div class='row'>
							<div class='col-sm-6 col-xs-12'>
								<div class='b-best__info'>
									<header class='s-lineDownLeft b-best__info-head'>
										<h2 class='wow zoomInUp' data-wow-delay='0.5s'>
											The Best &amp; the Largest Auto Dealer
										</h2>
									</header>

									<p class='wow zoomInUp' data-wow-delay='0.5s'>
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive.
										<br />
										We tend to deliver the very best quality vehicle at the
										foremost competitive cost. Sushil Car bazar is a one stop
										solution to sell yourPremium/ Luxury car at best price.
										<br />
									</p>
									<a
										href='listTableTwo.html'
										class='btn m-btn m-readMore wow zoomInUp'
										data-wow-delay='0.5s'>
										view listings<span class='fa fa-angle-right'></span>
									</a>
								</div>
							</div>
							<div class='col-sm-6 col-xs-12'>
								<img
									class='img-responsive center-block wow zoomInUp'
									data-wow-delay='0.5s'
									alt='best'
									src='media/about/best.jpg'
								/>
							</div>
						</div>
					</div>
				</section>
				<section class='b-what s-shadow m-home'>
					<div class='container'>
						<h3 class='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
							CUSTOMERS ARE IMPORTANT FOR US
						</h3>
						<br />
						<h2 class='s-title wow zoomInUp' data-wow-delay='0.5s'>
							WHAT WE OFFERS
						</h2>
						<div class='row'>
							<div class='col-sm-4 col-xs-12'>
								<div class='b-world__item wow zoomInLeft' data-wow-delay='0.5s'>
									<img
										class='img-responsive'
										src='media/370x200/jeep.jpg'
										alt='jeep'
									/>
									<div class='b-world__item-val'>
										<span class='b-world__item-val-title'>WE OFFER</span>
									</div>
									<h2>Low Prices, No Haggling</h2>
								</div>
							</div>
							<div class='col-sm-4 col-xs-12'>
								<div class='b-world__item wow zoomInUp' data-wow-delay='0.5s'>
									<img
										class='img-responsive'
										src='media/370x200/volvo.jpg'
										alt='mazda'
									/>
									<div class='b-world__item-val'>
										<span class='b-world__item-val-title'>WE ARE THE</span>
									</div>
									<h2>Largest Car Dealership</h2>
								</div>
							</div>
							<div class='col-sm-4 col-xs-12'>
								<div
									class='b-world__item wow zoomInRight'
									data-wow-delay='0.5s'>
									<img
										class='img-responsive'
										src='media/370x200/mg-interior.jpg'
										alt='chevrolet'
									/>
									<div class='b-world__item-val'>
										<span class='b-world__item-val-title'>
											OUR CUSTOMERS GET
										</span>
									</div>
									<h2>Multipoint Safety Check</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class='b-more'>
					<div class='container'>
						<div class='row'>
							<div class='col-sm-6 col-xs-12'>
								<div class='b-more__why wow zoomInLeft' data-wow-delay='0.5s'>
									<h2 class='s-title'>WHY SUSHIL CARS</h2>
									<p>
										Sushil Cars is one of the pre-owned cars suppliers in the
										geography who recommends and supplies cars as per your
										requirement and budget. We don’t sell cars only; we always
										try to give appropriate cars as per customers’ need.{" "}
									</p>
								</div>
							</div>
							{/* <div class='col-sm-6 col-xs-12'>
								<div class='b-more__info wow zoomInRight' data-wow-delay='0.5s'>
									<h2 class='s-title'>MORE INFO</h2>
									<div class='b-more__info-block'>
										<div class='b-more__info-block-title'>
											Fair Price for Everyone
											<a class='j-more' href='#'>
												<span class='fa fa-angle-left'></span>
											</a>
										</div>
										<div class='b-more__info-block-inside j-inside'>
											<p>
												We understand the value of your hard earned money and
												that’s why we keep pricing fair. Everything which is
												related to money is crystal clear and no hidden charges.{" "}
											</p>
										</div>
									</div>
									<div class='b-more__info-block'>
										<div class='b-more__info-block-title'>
											Large Number of Vehicles
											<a href='#' class='j-more'>
												<span class='fa fa-angle-left'></span>
											</a>
										</div>
										<div class='b-more__info-block-inside j-inside'>
											<p>
												CWe have large numbers of cars with us, whether you
												consider the make, brands, fuel, structure, segments,
												seating capacity & others.{" "}
											</p>
										</div>
									</div>
									<div class='b-more__info-block'>
										<div class='b-more__info-block-title'>
											Auto Loan Available
											<a href='#' class='j-more'>
												<span class='fa fa-angle-left'></span>
											</a>
										</div>
										<div class='b-more__info-block-inside j-inside'>
											<p>
												As your pre-owned cars partner we understand the value
												of your finances and that’s why we have all the possible
												loan options for you.
											</p>
										</div>
									</div>
								</div>
							</div> */}

							<div class='col-sm-6 col-xs-12'>
								<div class='b-more__info wow zoomInRight' data-wow-delay='0.5s'>
									<h2 class='s-title'>MORE INFO</h2>
									<div class='b-more__info-block'>
										<div class='b-more__info-block-title'>
											Fair Price for Everyone
											<a class='j-more' href='#'>
												<span class='fa fa-angle-left'></span>
											</a>
										</div>
										<div class='b-more__info-block-inside j-inside'>
											<p>
												We understand the value of your hard earned money and
												that’s why we keep pricing fair. Everything which is
												related to money is crystal clear and no hidden charges.{" "}
											</p>
										</div>
									</div>
									<div class='b-more__info-block'>
										<div class='b-more__info-block-title'>
											Large Number of Vehicles
											<a href='#' class='j-more'>
												<span class='fa fa-angle-left'></span>
											</a>
										</div>
										<div class='b-more__info-block-inside j-inside'>
											<p>
												CWe have large numbers of cars with us, whether you
												consider the make, brands, fuel, structure, segments,
												seating capacity & others.{" "}
											</p>
										</div>
									</div>
									<div class='b-more__info-block'>
										<div class='b-more__info-block-title'>
											Auto Loan Available
											<a href='#' class='j-more'>
												<span class='fa fa-angle-left'></span>
											</a>
										</div>
										<div class='b-more__info-block-inside j-inside'>
											<p>
												As your pre-owned cars partner we understand the value
												of your finances and that’s why we have all the possible
												loan options for you.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class='b-personal s-shadow'>
					<div class='container'>
						<h3 class='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
							the people you can trust ON
						</h3>
						<br />
						<h2 class='s-title wow zoomInUp' data-wow-delay='0.5s'>
							OUR TEAM MEMBERS
						</h2>
						<div
							id='carousel-small'
							class='owl-carousel enable-owl-carousel'
							data-items='4'
							data-navigation='true'
							data-auto-play='true'
							data-stop-on-hover='true'
							data-items-desktop='4'
							data-items-desktop-small='3'
							data-items-tablet='2'
							data-items-tablet-small='2'>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/jason.jpg'
											class='img-responsive'
											alt='jason'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Owner / Co-Invester</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Jason Roy</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/paul.jpg'
											class='img-responsive'
											alt='paul'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Delivery Incharge</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Paul Richard</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/peter.jpg'
											class='img-responsive'
											alt='peter'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Auto Reviewer / Technican</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Peter Harold</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/maria.jpg'
											class='img-responsive'
											alt='maria'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Sales Representative</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Maria Susan</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/jason.jpg'
											class='img-responsive'
											alt='jason'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Owner / Co-Invester</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Jason Roy</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/paul.jpg'
											class='img-responsive'
											alt='paul'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Delivery Incharge</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Paul Richard</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/peter.jpg'
											class='img-responsive'
											alt='peter'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Auto Reviewer / Technican</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Peter Harold</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									class='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div class='b-personal__worker-img'>
										<img
											src='media/persons/maria.jpg'
											class='img-responsive'
											alt='maria'
										/>
										<div class='b-personal__worker-img-social'>
											<div class='b-personal__worker-img-social-main'>
												<a href='#'>
													<span class='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span class='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Sales Representative</h6>
									<div class='b-personal__worker-name s-lineDownLeft'>
										<h4 class='s-titleDet'>Maria Susan</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div class='b-features'>
					<div class='container'>
						<div class='row'>
							<div class='col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6'>
								<ul class='b-features__items'>
									<li
										class='wow zoomInUp'
										data-wow-delay='0.3s'
										data-wow-offset='100'>
										Low Prices, No Haggling
									</li>
									<li
										class='wow zoomInUp'
										data-wow-delay='0.3s'
										data-wow-offset='100'>
										Largest Car Dealership
									</li>
									<li
										class='wow zoomInUp'
										data-wow-delay='0.3s'
										data-wow-offset='100'>
										Multipoint Safety Check
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class='b-info'>
					<div class='container'>
						<div class='row'>
							<div class='col-md-3 col-xs-6'>
								<aside
									class='b-info__aside wow zoomInLeft'
									data-wow-delay='0.3s'>
									<article class='b-info__aside-article'>
										<h3>OPENING HOURS</h3>
										<div class='b-info__aside-article-item'>
											<h6>Sales Department</h6>
											<p>
												Mon-Sat : 8:00am - 5:00pm
												<br />
												Sunday is closed
											</p>
										</div>
									</article>
									<article class='b-info__aside-article'>
										<h3>About us</h3>
										<p>
											Established in the year 2002, Sushil Car Bazar is one of
											the top & most trusted dealership for preowned luxury
											car.In over 17 years of business history we have always
											had a customer oriented approach & total customer
											satisfaction has been our motive.
										</p>
									</article>
									<a href='about.html' class='btn m-btn'>
										Read More<span class='fa fa-angle-right'></span>
									</a>
								</aside>
							</div>
							<div class='col-md-3 col-xs-6'>
								<div class='b-info__latest'>
									<h3>LATEST AUTOS</h3>
									<div
										class='b-info__latest-article wow zoomInUp'
										data-wow-delay='0.3s'>
										<div class='b-info__latest-article-photo m-audi'></div>
										<div class='b-info__latest-article-info'>
											<h6>
												<a href='detail.html'>HYUNDAI CRETA S PLUS</a>
											</h6>
											<p>
												<span class='fa fa-tachometer'></span> 33,000 KM
											</p>
										</div>
									</div>
									<div
										class='b-info__latest-article wow zoomInUp'
										data-wow-delay='0.3s'>
										<div class='b-info__latest-article-photo m-audiSpyder'></div>
										<div class='b-info__latest-article-info'>
											<h6>
												<a href='#'>MERCEDES BENZ A-CLASS</a>
											</h6>
											<p>
												<span class='fa fa-tachometer'></span> 8,000 KM
											</p>
										</div>
									</div>
									<div
										class='b-info__latest-article wow zoomInUp'
										data-wow-delay='0.3s'>
										<div class='b-info__latest-article-photo m-aston'></div>
										<div class='b-info__latest-article-info'>
											<h6>
												<a href='#'>VOLVO XC40 T4 R-DESIGN</a>
											</h6>
											<p>
												<span class='fa fa-tachometer'></span> 20,000 KM
											</p>
										</div>
									</div>
								</div>
							</div>

							<div class='col-md-3 col-xs-6'>
								<address
									class='b-info__contacts wow zoomInUp'
									data-wow-delay='0.3s'>
									<p>contact us</p>
									<div class='b-info__contacts-item'>
										<span class='fa fa-map-marker'></span>
										<ol>
											Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12
											Dividing Road Pincode 121006
										</ol>
									</div>
									<div class='b-info__contacts-item'>
										<span class='fa fa-map-marker'></span>
										<em>
											<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
										</em>
									</div>
									<div class='b-info__contacts-item'>
										<span class='fa fa-phone'></span>
										<ol>
											+91 92509 22333
											<br />
											+91 98114 36332
										</ol>
									</div>

									<div class='b-info__contacts-item'>
										<span class='fa fa-envelope'></span>
										<em>
											<ol>sushilcarbazar@gmail.com</ol>
										</em>
									</div>
								</address>
								<address class='b-info__map'>
									<a href='contacts.html'>Open Location Map</a>
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;

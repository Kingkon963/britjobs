import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {

	
    return (
        <footer >
		<div className="container-fluid">
			<div id="footer_grid">
				<div className="colf-1">
					<h3 className="footer_title">Job seekers</h3>
					<ul className="list-unstyled footer_list">
						<li><Link to='/home'>Browse jobs</Link></li>
						<li><Link to='/home'>Sign in</Link></li>
						<li><Link to='/home'>Find a company</Link></li>
						<li><Link to='/home'>Resources</Link></li>
						<li><Link to='/home'>Contact us - job seeker</Link></li>
					</ul>
				</div>
				<div className="colf-2">
					<h3 className="footer_title">Recruiter</h3>
					<ul className="list-unstyled footer_list">
						<li><Link to='/home'>Post a job</Link></li>
						<li><Link to='/home'>Why britjobs?</Link></li>
						<li><Link to='/home'>CV search</Link></li>
						<li><Link to='/home'>Contact us - recruiter</Link></li>
						<li><Link to='/home'>recruiter advice</Link></li>
					</ul>
				</div>
				<div className="colf-3">
					<h3 className="footer_title">Britjobs</h3>
					<ul className="list-unstyled footer_list">
						<li><Link to='/home'>About us</Link></li>
						<li><Link to='/home'>Privacy policy</Link></li>
						<li><Link to='/home'>Terms {'&'} conditions</Link></li>
						<li><Link to='/home'>Cookies</Link></li>
						<li><Link to='/home'>work for us</Link></li>
					</ul>
				</div>
				<div className="colf-4 d-flex flex-column align-items-center">
					<h3 className="footer_title">Socials</h3>
					<div className="d-flex mb-3" id="social_icons">
						<a href="www.google.com">
							<span className="fa fa-stack fa-lg">
								<i className="fa fa-stack-2x fa-circle"></i>
								<i className="fa fa-stack-1x fa-facebook text-white"></i>
							</span>
						</a>
						<a href="www.google.com">
							<span className="fa fa-stack fa-lg">
								<i className="fa fa-stack-2x fa-square"></i>
								<i className="fa fa-stack-1x fa-lg fa-instagram text-white"></i>
							</span>
						</a>
						<a href="www.google.com">
							<span className="fa fa-stack fa-lg">
								<i className="fa fa-stack-2x fa-square"></i>
								<i className="fa fa-stack-1x fa-lg fa-linkedin text-white"></i>
							</span>
						</a>
						<a href="www.google.com">
							<span className="fa fa-stack fa-lg">
								<i className="fa fa-stack-2x fa-square"></i>
								<i className="fa fa-stack-1x fa-lg fa-twitter text-white"></i>
							</span>
						</a>
					</div>
					<div className="d-flex align-items-center">
						<img className="img-fluid" src="assets/img/love-fill.svg" alt="love" width="45px" id="hashtagLove" />
						<h1>#TellYourWorth</h1>
					</div>
				</div>
				<div className="copywrite">
					<p><span className="fa fa-lg fa-copyright"></span> Copywrite Britjobs Limited 2020</p>
				</div>
			</div>
		</div>
	</footer>
    );
}

export default Footer;
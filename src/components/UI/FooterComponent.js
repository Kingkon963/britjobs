import React from 'react';

function Footer() {
    return (
        <footer >
		<div className="container-fluid">
			<div id="footer_grid">
				<div className="colf-1">
					<h3 className="footer_title">Job seekers</h3>
					<ul className="list-unstyled footer_list">
						<li><a href="#">Browse jobs</a></li>
						<li><a href="#">Sign in</a></li>
						<li><a href="#">Find a company</a></li>
						<li><a href="#">Resources</a></li>
						<li><a href="#">Contact us - job seeker</a></li>
					</ul>
				</div>
				<div className="colf-2">
					<h3 className="footer_title">Recruiter</h3>
					<ul className="list-unstyled footer_list">
						<li><a href="#">Post a job</a></li>
						<li><a href="#">Why britjobs?</a></li>
						<li><a href="#">CV search</a></li>
						<li><a href="#">Contact us - recruiter</a></li>
						<li><a href="#">recruiter advice</a></li>
					</ul>
				</div>
				<div className="colf-3">
					<h3 className="footer_title">Britjobs</h3>
					<ul className="list-unstyled footer_list">
						<li><a href="#">About us</a></li>
						<li><a href="#">Privacy policy</a></li>
						<li><a href="#">Terms {'&'} conditions</a></li>
						<li><a href="#">Cookies</a></li>
						<li><a href="#">work for us</a></li>
					</ul>
				</div>
				<div className="colf-4 d-flex flex-column align-items-center">
					<h3 className="footer_title">Socials</h3>
					<div className="d-flex mb-3" id="social_icons">
						<a className="" href="">
							<span className="fa fa-stack fa-lg">
								<i className="fa fa-stack-2x fa-circle"></i>
								<i className="fa fa-stack-1x fa-facebook text-white"></i>
							</span>
						</a>
						<a href="">
							<span className="fa fa-stack fa-lg">
								<i className="fa fa-stack-2x fa-square"></i>
								<i className="fa fa-stack-1x fa-lg fa-instagram text-white"></i>
							</span>
						</a>
						<a href="">
							<span className="fa fa-stack fa-lg">
								<i className="fa fa-stack-2x fa-square"></i>
								<i className="fa fa-stack-1x fa-lg fa-linkedin text-white"></i>
							</span>
						</a>
						<a href="">
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
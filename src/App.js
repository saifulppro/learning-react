import './App.css';

function App() {
  return (
    <div className="App">
	  <Components></Components>
	  <Intro></Intro>
	  <About></About>
    </div>
  );
}
function Components(){
	return(
		<header>   	
			<div className="row">

				<div className="top-bar">
					<a className="menu-toggle" href="#"><span>Menu</span></a>

					<div className="logo">
						 <a href="index.html">KARDS</a>
					  </div>		      

					<nav id="main-nav-wrap">
							<ul className="main-navigation">
								<li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
								<li><a className="smoothscroll"  href="#about" title="">About</a></li>
								<li><a className="smoothscroll"  href="#resume" title="">Resume</a></li>
								<li><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
								<li><a className="smoothscroll"  href="#services" title="">Services</a></li>					
								<li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>	
								<li><a href="styles.html" title="">Style Demo</a></li>				
							</ul>
						</nav>    		
				</div> 
				
			</div> 		
		</header> 
	)
}
function Intro(){
	return(
		<section id="intro">   
   			<div className="intro-overlay"></div>	
				<div className="intro-content">
					<div className="row">
						<div className="col-twelve">
							<h5>Hello, World.</h5>
							<h1>I'm Juan Dela Cruz.</h1>
							<p className="intro-position">
								<span>Front-end Developer</span>
								<span>UI/UX Designer</span> 
							</p>
							<a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
						</div>  
						
					</div>   		 		
				</div>
				<ul className="intro-social">        
					<li><a href="#"><i className="fa fa-facebook"></i></a></li>
					<li><a href="#"><i className="fa fa-behance"></i></a></li>
					<li><a href="#"><i className="fa fa-twitter"></i></a></li>
					<li><a href="#"><i claclassNames="fa fa-dribbble"></i></a></li>
					<li><a href="#"><i className="fa fa-instagram"></i></a></li>
				</ul>     
   		</section> 
	)
}
function About(){
	return(
		<section id="about">  
			<div className="row section-intro">
				<div className="col-twelve">
	
					<h5>About</h5>
					<h1>Let me introduce myself.</h1>
	
					<div className="intro-info">
	
						<img src="assets/images/profile-pic.jpg" alt="Profile Picture"/>
	
						<p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p>
					</div>   			
	
				</div>   		
			</div> 
 
		<div className="row about-content">
 
			<div className="col-six tab-full">
 
				<h3>Profile</h3>
				<p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
 
				<ul className="info-list">
					<li>
						<strong>Fullname:</strong>
						<span>Juan Dela Cruz</span>
					</li>
					<li>
						<strong>Birth Date:</strong>
						<span>September 28, 1987</span>
					</li>
					<li>
						<strong>Job:</strong>
						<span>Freelancer, Frontend Developer</span>
					</li>
					<li>
						<strong>Website:</strong>
						<span>www.kardswebsite.com</span>
					</li>
					<li>
						<strong>Email:</strong>
						<span>me@kardswebsite.com</span>
					</li>
 
				</ul> 
 
			</div>
 
			<div className="col-six tab-full">
 
				<h3>Skills</h3>
				<p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
 
				 <ul classNameclassName="skill-bars">
					<li>
						<div className="progress percent90"><span>90%</span></div>
						<strong>HTML5</strong>
					</li>
					<li>
						<div className="progress percent85"><span>85%</span></div>
						<strong>CSS3</strong>
					</li>
					<li>
						<div className="progress percent70"><span>70%</span></div>
						<strong>JQuery</strong>
					</li>
					<li>
						<div className="progress percent95"><span>95%</span></div>
						<strong>PHP</strong>
					</li>
					<li>
 
						<div className="progress percent75"><span>75%</span></div>
						<strong>Wordpress</strong>
					</li>
	   
				 </ul> 
 
			</div>
 
		</div>
 
		<div className="row button-section">
			<div className="col-twelve">
				<a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
				<a href="#" title="Download CV" className="button button-primary">Download CV</a>
			</div>   		
		</div>
	</section>

	)
}
export default App;

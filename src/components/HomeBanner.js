

const HomeBanner = () => {

  
    return(
      
        <div className="home-banner">
            <div className="our-story">
            <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
            <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
        <p className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Email Address" />
          <button className="input-group-button btn-danger text-white">Get Started</button>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://images.unsplash.com/photo-1656873186004-f53c335fa348?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt=""></img>
        </div>
       
    
    )
    
}

export default HomeBanner;
import React from 'react';

function About(props) {

    if(props.data){
      var name = props.data.name;
      var profilepic= "images/"+props.data.image;
      var bio = props.data.bio;
      var skype = props.data.address.skype;
      var github = props.data.address.github;
      var email = props.data.email;
      var resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>{name}</span><br />
                            <span>{email}<br />
                                {skype} {github}
                            </span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                            <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

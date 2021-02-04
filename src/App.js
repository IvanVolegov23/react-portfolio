import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

function App() {
    // const [foo, setFoo] = useState("bar");
    const [resumeData, setResumeData] = useState({});

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);


    const getResumeData = () => {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                setResumeData(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    useEffect(() => {
        getResumeData();
    });

    return (
        <div className="App">
            <Header data={resumeData.main}/>
            <About data={resumeData.main}/>
            <Resume data={resumeData.resume}/>
            <Portfolio data={resumeData.portfolio}/>
            <Testimonials data={resumeData.testimonials}/>
            <Footer data={resumeData.main}/>
        </div>
    );
};

export default App;

import React from 'react';
import './Body.css';
import Carousel from 'react-bootstrap/Carousel'

function Body() {
    return (
        <div>
        <section class="clearfix">
            <h2 id="about">ABOUT ME</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque</p>
            <br></br>
            <h2>MY WORK</h2>
            

        </section>
        
        

        <section>
            <h2 id="contact">CONTACT ME</h2>
                <div class="contact-info">
                <div class="container2">
                    <div class="box">
                        <div class="icon">
                            <i class="fas fa-phone-alt"></i>
                                <h4><a href="tel:7868977408">786.897.7408</a></h4>
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="box">
                        <div class="icon">
                            <i class="fas fa-envelope-square"></i>
                               <h4><a href="mailto:emilyfern121@gmail.com">emilyfern121@gmail.com</a></h4>
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="box">
                        <div class="icon">
                            <i class="fab fa-linkedin"></i>
                                <h4><a href="https://www.linkedin.com/in/emily-fernandez-13814569/" target="_blank">LinkedIn</a></h4>
                         </div>
                        </div>
                    </div>
                    <div class="container2">
                        <div class="box">
                            <div class="icon">
                                <i class="fab fa-github"></i>
                                    <h4><a href="https://github.com/emilyfern121" target="_blank">GitHub</a></h4>
                             </div>
                            </div>
                        </div>
                    </div>
        </section>
        </div>
    );
  }
  
  export default Body;
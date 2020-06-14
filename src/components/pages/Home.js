/* eslint-disable strict */
/* eslint-disable no-undef */
import React, {Component} from 'react'
import '../../components/App.css';
import '../../components/App.css';
import '../../components/App.scss';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from './Footer';
import Header from './Header';
// import Gallaries from '../Gallaries/Gallaries';
import videoBack from '../../images/videoBack2.gif'
import Offer from '../Pricing/Offer';


const Loading = () => <div className="loading" delay-hide="000">

    <div className="load-text">
        <img className='img-responsive' alt='logo' src={videoBack}/>
    </div>

</div>
export class Home extends Component {
    render() {
        return (
            <div>
                <Loading/>
                <Header/>
                <About/>
                <Offer/>
                <Contact/>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {

     
    
      
    //Collapse it the nav
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });

        $(document)
            .ready(function () {
                var loading = $(".loading");
                loading
                    .delay(loading.attr("delay-hide"))
                    .slideUp();
            });

            $('body').scrollspy({target: '.navbar-fixed-top', offset: 60});

            $('#topNav').affix({
                offset: {
                    top: 200
                }
            });

            $('#drop').affix({
                offset: {
                    top: 200
                }
            });
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document
                        .getElementById("topNav")
                        .style
                        .top = "0";
                } else {
                    document
                        .getElementById("topNav")
                        .style
                        .top = "-80px";
                }
                prevScrollpos = currentScrollPos;
            }
            new WOW().init();

            $('a.page-scroll').bind('click', function (event) {
                var $ele = $(this);
                $('html, body')
                    .stop()
                    .animate({
                        scrollTop: ($($ele.attr('href')).offset().top - 60)
                    }, 1450, 'none');
                event.preventDefault();
            });
            $('.navbar-collapse ul li a').click(function() {
                /* always close responsive nav after click */
                $('.navbar-toggle:visible').click();
              });
            
              $('.dropdown ul li Link').click(function() {
                $('.dropdown-toggle:visible').click();
              })
              
            $('#galleryModal').on('show.bs.modal', function (e) {
                $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
            });


    }

}

export default Home

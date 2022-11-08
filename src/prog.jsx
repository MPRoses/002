import './prog.css';
import $ from 'jquery';

import Preloader from './preloader';
import Cursor from './cursor'; 
import logo from './img/logosquarewhite.png';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import email from './img/email.png';
import bluebg from './img/square.png';
import arrow from './img/blue-arrow.png';
import koftw from './img/koftw.png';


function Prog() {

    $(function() {

      $("#logo").on("click", function(){
        window.location.reload()
     })

     $("#item-twitter").on("mouseenter", function() {
      $("#seperator").css("width", "calc(88px + .25vw");
      $(".socials-circle:eq(0)").addClass("socials-item-active");
      $(".socials-circle-svg:eq(0)").css("border", "1px solid rgba(255,255,255,0)");
      $(".socials-img:eq(0)").css({
        filter:  "invert(0%)",
        transform: "scale(0.9)"
     });
     })
      $("#item-twitter").on("mouseleave", function() {
      $("#seperator").css("width", "calc(88px + .5vw");
      $(".socials-circle:eq(0)").removeClass("socials-item-active");
      $(".socials-circle-svg:eq(0)").css("border", "1px white solid");
      $(".socials-img:eq(0)").css({
        filter:  "invert(100%)",
        transform: "scale(.9)"
     });
     })
     $("#item-linkedin").on("mouseenter", function() {
      $("#seperator").css("width", "calc(88px + .75vw");
      $(".socials-circle:eq(1)").addClass("socials-item-active");
      $(".socials-circle-svg:eq(1)").css("border", "1px rgba(255,255,255,0) solid");
      $(".socials-img:eq(1)").css({
        filter:  "invert(0%)",
        transform: "scale(1)"
     });
     })
      $("#item-linkedin").on("mouseleave", function() {
      $("#seperator").css("width", "calc(88px + .5vw");
      $(".socials-circle:eq(1)").removeClass("socials-item-active");
      $(".socials-circle-svg:eq(1)").css("border", "1px white solid");
      $(".socials-img:eq(1)").css({
        filter:  "invert(100%)",
        transform: "scale(.9)"
     });
     })
     $("#item-email").on("mouseenter", function() {
      $("#seperator").css("width", "calc(88px + 1vw");
      $(".socials-circle:eq(2)").addClass("socials-item-active");
      $(".socials-circle-svg:eq(2)").css("border", "1px rgba(255,255,255,0) solid");
      $(".socials-img:eq(2)").css({
        filter:  "invert(0%)",
        transform: "scale(1)"
     });
     })
      $("#item-email").on("mouseleave", function() {
      $("#seperator").css("width", "calc(88px + .5vw");
      $(".socials-circle:eq(2)").removeClass("socials-item-active");
      $(".socials-circle-svg:eq(2)").css("border", "1px white solid");
      $(".socials-img:eq(2)").css({
        filter:  "invert(100%)",
        transform: "scale(.9)"
     });
     })
      
     $(".nav-list-item").on("click", function(e) {
      var $target = $(e.currentTarget);
      $(".nav-list-item").removeClass("nav-list-active");
      $target.addClass("nav-list-active");

      if ($(".nav-list-item:eq(0)").hasClass("nav-list-active")) {
        $(".nav-list-circle-active").removeClass("nav-list-circle-active");
        $(".nav-list-circle").addClass("nav-list-circle-active");
       } else  if ($(".nav-list-item:eq(1)").hasClass("nav-list-active")) {
        $(".nav-list-circle-active").removeClass("nav-list-circle-active");
        $(".nav-list-circle2").addClass("nav-list-circle-active");
       } else if ($(".nav-list-item:eq(2)").hasClass("nav-list-active")) {
        $(".nav-list-circle-active").removeClass("nav-list-circle-active");
        $(".nav-list-circle3").addClass("nav-list-circle-active");
       } else if ($(".nav-list-item:eq(3)").hasClass("nav-list-active")) {
        $(".nav-list-circle-active").removeClass("nav-list-circle-active");
        $(".nav-list-circle4").addClass("nav-list-circle-active");
       }

     })

     $("#central-start").on("mouseenter", function(){
      $("#central-start-arrow").css("transform", "rotate(90deg)");
     })

     $("#central-start").on("mouseleave", function(){
      $("#central-start-arrow").css("transform", "rotate(0deg)");
     })

     $(document).on("scroll", function() {
 
      $(":root").css("--scrollbar-color", "rgba(255,255,255, 1)");
      setTimeout(() => {

      }, 1000);
      if ($(document).scrollTop() > 100 ) {
        $(".nav-list-scrolling").addClass("nav-list-scrolling-open");
      } else if ($(document).scrollTop() < 100 ) {
        $(".nav-list-scrolling").removeClass("nav-list-scrolling-open");
      }
     })
     

     
      setTimeout(() => {
        $(".right").addClass("open-right");
        $(".left").addClass("open-left");
        $("#header-main").addClass("header-main-2");
        $(".content-left").addClass("open-content-left");
        $(".content-right").addClass("open-content-right");
        $(".nav-list").css("top", "calc(3vw + 22.25px)");
        setTimeout(() => {
          $('#render-right').css("opacity", "0");
          $('#render-right-blur').css("opacity", "0");
          $('.wave-container-right').css("opacity", "0");
          $(".left").css("overflow", "visible");
          $("#root").css("max-height", "200vh");
        }, 3000);
      }, 4000);
    })


  return (
    <div className="prog" style={{ overflowX: "hidden" }}>
      
      <Preloader />

      <div className="right">
      <div className="wave-container-right">
            <div className="wave"></div>           
        </div>
        <img src={koftw} alt="koft" id="render-right-blur" />
        <img src={koftw} alt="koft" id="render-right" />
       </div>
      <div className="left">
      <div className="wave-container">
            <div className="wave"></div>           
        </div>
        <img src={koftw} alt="koft" id="render-left-blur" />
        <img src={koftw} alt="koft" id="render-left" />
      </div>
       <div className="content">
        <div className="content-left">
  
          <img src={logo} alt="logo" id="logo" className="logo clickable" />
          <img src={bluebg} alt="sideways square" id="squares" />
          <h2 id="txt1">This is my<br></br><div id="txt3">Portfolio</div></h2>
          <div id="seperator"></div>
          <div id="socials">
            <div className="socials-item clickable" id="item-twitter">
              <svg height="44" width="44" className="socials-circle-svg">
                <circle cx="22" cy="22" r="22" strokeWidth="0" className="socials-circle">
                </circle>
              </svg>
            </div>
            <img src={twitter} alt="twitter" className="socials-img" />
            <div className="socials-item clickable" id="item-linkedin">
              <svg height="44" width="44" className="socials-circle-svg">
                <circle cx="22" cy="22" r="22" className="socials-circle" strokeWidth="0"></circle>
              </svg>
            </div>
            <img src={linkedin} alt="linkedin" className="socials-img" />
            <div className="socials-item clickable" id="item-email">
              <svg height="44" width="44" className="socials-circle-svg">
                <circle cx="22" cy="22" r="22" className="socials-circle" strokeWidth="0"></circle>
              </svg>
            </div>
            <img src={email} alt="email" className="socials-img" />
          </div>
        </div>
        <div className="content-right">
        <div id="header-main">
            Hello world!<br></br>&nbsp;&nbsp;&nbsp;&nbsp;I'm Jens<br></br><div id="vander">van der</div><div id="sloot">Sloot</div>
        </div>
          <div className="nav-list">
            <div className="nav-list-item nav-list-active clickable">
              Home
            </div>
            <svg className="nav-list-circle nav-list-circle-active">
              <circle cx="4" cy="4" r="4"></circle>
            </svg>
            <div className="nav-list-item clickable">
              Work
            </div>
            <svg className="nav-list-circle2">
              <circle cx="4" cy="4" r="4"></circle>
            </svg>
            <div className="nav-list-item clickable">
              Journey
            </div>
            <svg className="nav-list-circle3">
              <circle cx="4" cy="4" r="4"></circle>
            </svg>
            <div className="nav-list-item clickable">
              Contact
            </div>
            <svg className="nav-list-circle4">
              <circle cx="4" cy="4" r="4"></circle>
            </svg>
          </div>
          <div className="nav-list-scrolling">
          </div>
          <div className="central-section">
            <div id="central-name">
              -&nbsp;Jens van der Sloot
            </div>
            <div id="central-description">
            Product Designer and
            Developer, based in
            Lisse, Netherlands.
            </div>
            <div id="central-text">
            It’s certainly not easy to get noticed in today’s
marketplace, but one thing is for certain: quality online representation is what
it takes to make a modern brand truly shine, and I'm here to help with that.    
            </div>
            <div id="central-start" className="clickable">
              Start Our Story
              <img src={arrow} alt="arrow" id="central-start-arrow"/>
            </div>
          
        </div>
        
          </div>
        </div>
        <div className="gradientback">
      </div>

      <Cursor />
    </div>

  );
}

export default Prog;

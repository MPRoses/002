import './prog.css';
import $ from 'jquery';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Sticky, StickyIn, FadeIn, ZoomIn } from "react-scroll-motion";


import Preloader from './preloader';
import Hero from './pages/hero.jsx';

import Rectangle7 from './img/Rectangle7.png';
import arrowDot1 from './img/1-arrow-dot.png';
import arrowDot2 from './img/2-arrow-dot.png';
import leftEye from './img/left-eye.png';
import rightEye from './img/right-eye.png';
import mouth from './img/mouth.png';



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
     var g = true;
     $(document).on("scroll", function() {

      if (g) {
        $(":root").css("--scrollbar-color", "rgba(255,255,255, 0)");
      } else {
        $(":root").css("--scrollbar-color", "rgba(255,255,255, .05)");
      }
      if ($(document).scrollTop() > 100 ) {
        $(".nav-list-scrolling").addClass("nav-list-scrolling-open");
      } else if ($(document).scrollTop() < 100 ) {
        $(".nav-list-scrolling").removeClass("nav-list-scrolling-open");
      } 
      if ($(document).scrollTop() > ($(window).height() - 750)) {
        $("#about-me-header").addClass("about-me-header-open");
      }
      if ($(document).scrollTop() > ($(window).height() - 650)) {
        $("#about-me-intro").addClass("about-me-intro-open");
      }

      $(".left-content").on("mouseenter", function() {
        $("#rightEyeAngry").css("top", "-35%");
        $("#leftEyeAngry").css("top", "-35%");
      });
      $(".left-content").on("mouseleave", function() {
        $("#rightEyeAngry").css("top", "-50%");
        $("#leftEyeAngry").css("top", "-50%");
    });

     })
     
      setTimeout(() => {
        $(".right").addClass("open-right");
        $(".left").addClass("open-left");
        $("#header-main").css("top", "-9%");
        $(".content-left").addClass("open-content-left");
        $(".content-right").addClass("open-content-right");
        $(".nav-list").css("top", "calc(3vw + 22.25px)");
        setTimeout(() => {
          $('#render-right').css("opacity", "0");
          $('#render-right-blur').css("opacity", "0");
          $('.wave-container-right').css("opacity", "0");

          $(".left").css("overflow", "visible");
          $("#butter").css("max-height", "200vh");
          g = false;
        }, 1500);
      }, 4000);
    })


  return (
    <ScrollContainer>
    <div className="prog" style={{ overflowX: "hidden" }}>
    <ScrollPage>
      <Preloader />
      <Animator animation={batch(Fade(), Sticky())}>
        <Hero />
      </Animator>
      </ScrollPage>
      <ScrollPage>
      <div className="about-me">
        <div className="line-1"></div>
        <div className="line-2"></div>



        <img src={Rectangle7} alt="rectangle" id="rec7" />

        <div>

        </div>
        <div className="right-content">
          <div id="about-me-header">
            1. ABOUT ME
          </div>
          <div id="about-me-intro">
          Hi! I’m Jens, a 17 year old web dev enthusiast. I have been gaining experience in this field for the past 2 and a half years managing small projects across the board. When I work on a project, the most important thing for me is to create beautiful websites that help people and make a difference. I can be as involved in each project as needed; from the core of the idea, to the creative design, to writing the code. My preferred environment to work in on a project would be React, but I am far from limited to that.
          </div>
        <div id="about-me-top3">
            <div id="about-me-top3-txt1">
              <div id="about-me-top3-line1"></div>
              MY TOP 3 FAVOURITE<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;APPS
              <div id="about-me-top3-line2"></div>
            </div>
            <div className="about-me-top3-app" id="top3-figma">
              Figma
              <img src={arrowDot2} id="arrowDot2" alt="arrow"/>
              <div id="figma-comment1">
                Wireframing
              </div>
              <div id="figma-comment2">
                UI Designing
              </div>
            </div>
            <div className="about-me-top3-app" id="top3-aae">
              Adobe After Affects
              <img src={arrowDot1} id="arrowDot1-aae" alt="arrow"/>
              <div id="aae-comment1">
                Motion Graphics
              </div>
            </div>
            <div className="about-me-top3-app" id="top3-vsc">
              Visual Studio Code
              <img src={arrowDot1} id="arrowDot1-vsc" alt="arrow"/>
              <div id="vsc-comment1">
                Best text editor?
                <br></br><span>I'll leave that up to you</span>
              </div>
            </div>
        </div>
        </div>
        <div className="left-content">
          <div className="eyes">
            <img src={leftEye} alt="figma" id="leftEye" />
            <div id="leftEyeAngryContainer">
              <div id="leftEyeAngry"></div>
            </div>
            <img src={rightEye} alt="aae" id="rightEye" />
            <div id="rightEyeAngryContainer">
              <div id="rightEyeAngry"></div>
            </div>
          </div>
            <div className="nose">
              <div id="nose-line1"></div>
              <div id="nose-line2"></div>
            </div>
            
            <img src={mouth} alt="code" id="mouth" />
        </div>
      </div>
      </ScrollPage>
    </div>
    </ScrollContainer>
  );
}

export default Prog;

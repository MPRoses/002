import './preloader.css';
import $ from 'jquery';

import gif from './img/preloader-transparent.gif'


function Preloader() {

   
  $(function() {
    localStorage.setItem("on", "");
      setTimeout(() => {
        $(".preloader").css({"opacity": "0", "top": "calc(50% - 250px)"});
        localStorage.removeItem("on");
      }, 3500);

      
      let constrain = 20;
      let mouseOverContainer = document.querySelector(".prog");
      let ex1Layer = document.querySelector(".preloader");

      function transforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let calcX = -(y - box.y - (box.height / 2)) / constrain;
        let calcY = (x - box.x - (box.width / 2)) / constrain;
        
        return "   rotateX("+ calcX +"deg) "
          + "   rotateY("+ calcY +"deg) ";
      };

      function transformElement(el, xyEl) {
        el.style.transform  = transforms.apply(null, xyEl);
      }
        mouseOverContainer.onmousemove = function(e) {
          if (localStorage.getItem("on") === "") {
          let xy = [e.clientX, e.clientY];
          let position = xy.concat([ex1Layer]);
  
          window.requestAnimationFrame(function(){
            transformElement(ex1Layer, position);
          });

        };
        
      }
      
    })
  

  return (
    <div className="preloader">
        <img src={gif} alt="gif by Ryan Hanley" id="gif"/>
                <span className="loading-text-words">L</span>
                <span className="loading-text-words">O</span>
                <span className="loading-text-words">A</span>
                <span className="loading-text-words">D</span>
                <span className="loading-text-words">I</span>
                <span className="loading-text-words">N</span>
                <span className="loading-text-words">G</span>
    </div>

  );
}

export default Preloader;

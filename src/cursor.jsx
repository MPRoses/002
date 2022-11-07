import './cursor.css';
import $ from 'jquery';


function Cursor() {

    $(function() {
        $(document).on('mousemove', function(e){
            $('.cursor').css({
               left:  e.clientX,
               top:   e.clientY
            });
            var xValue = (-500 + (e.clientX/1920) * 450);
            var yValue = (-250 + ((e.clientY/1080) * 45));

            $("#txt1").css("background-position", `${xValue}px ${yValue}px `)
        });




        $(".clickable").on("mouseenter", function() {
            $("#cursor-circle").css("transform", "scale(2, 2)"); 
            $("#cursor-circle").css("opacity", ".25"); 
            $("#cursor").css("mix-blend-mode", "hard-light");
        })
    
        $(".clickable").on("mouseleave", function() {
            $("#cursor-circle").css("transform", "scale(1, 1)"); 
            $("#cursor-circle").css("opacity", "1"); 
            $("#cursor").css("mix-blend-mode", "difference");
        })

         $(document).on('mousedown', function(){
            $('#cursor-circle').css("transform", "scale(1.15, 1.15)");
        });
        $(document).on('mouseup', function(){
            $('#cursor-circle').css("transform", "scale(1, 1)");
        });
    })


  return (
    <div className="cursor">
        <svg height="30" width="30" id="cursor-circle">
            <circle cx="12" cy="12" r="12" strokeWidth="0"></circle>
        </svg>
    </div>

  );
}

export default Cursor;

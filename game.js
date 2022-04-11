var isJumping=0;
function jump() {
    var jumpNum=400;
    var dff=0;
    setInterval(function(){
        if(jumpNum<400)
        {
            isJumping=1;
        }
        if(jumpNum<=-250)
        {
            isJumping=0;
        }
        if(jumpNum>100)
        {
            jumpNum=jumpNum-50;
            $(".people").css("top",jumpNum+"px");
        }
        if(jumpNum==100)
        {
            jumpNum=jumpNum-50;
            $(".people").css("top",jumpNum+"px");
        }
        if(jumpNum<100&jumpNum>-300)
        {
            jumpNum=jumpNum-50;
            dff=dff+100;
            $(".people").css("top",jumpNum+dff+"px");
        }
    }, 55);
}

function keyboard() {
    document.onkeydown = function() {
      let keycode = event.keyCode;
      if (keycode == 32&&isJumping==0) {
        jump();

      }
    }
}



keyboard();

//碰撞判定

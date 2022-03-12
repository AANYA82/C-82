var mousevent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
 
      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) 
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) 
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) 
{

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clienty - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginpath();
    ctx.strokeStyle = color;
    ctx.linewidth = width_of_line;

    console.log("last Position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(Last_position_of_x, Last_position_of_y);

    console.log("Current position of x and y cordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    
    }

    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y

}

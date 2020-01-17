let start_button = document.querySelector("#start_btn");
let stop_button  = document.querySelector("#stop_btn");
let intpu_text =  document.querySelector("input");

// Initialize
stop_button.disabled  = true;
stop_button.style.background = "#BFBFBF";

// click START
start_button.addEventListener("click", function(){
    start_button.disabled = true;
    start_button.style.background = "#BFBFBF";

    stop_button.disabled  = false;
    stop_button.style.background = "#FF6767";
    
    intpu_text.disabled = true;
});

// click START
stop_button.addEventListener("click", function(){
    stop_button.disabled  = true;
    stop_button.style.background = "#BFBFBF";

    start_button.disabled = false;
    start_button.style.background = "#428BCA";

    intpu_text.disabled = false;
});
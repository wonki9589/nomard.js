const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentclass = title.className;
    if(currentclass !== CLICKED_CLASS){
        title.classname = CLICKED_CLASS;
    }
    else{
        title.classname = "";
    }

}
function init(){
    title.addEventListener("click", handleClick);
}
init();

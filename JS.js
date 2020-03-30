//return a html collection with the target div within the collection 
//remember to select api in console 
//remember to remove child through parent element 

function getTargetDiv(){
    var gethtmlchildren = document.querySelector('div.gm-style').children;

    for (i = 0; i < gethtmlchildren.length; i++) {
        if (
            gethtmlchildren.item(i).nodeName == "DIV" &&
            gethtmlchildren.item(i).className == "" &&
            gethtmlchildren.item(i).style.cursor=='' &&
            gethtmlchildren.item(i).style.top == "0px" &&
            gethtmlchildren.item(i).style.left == "0px"
            )
            { 
                //document.querySelectorAll('div.gm-style')[0].removeChild[i];
                gethtmlchildren.item(i).style.top = "300px";
            }  
    }
}

// check width X height of html element
function gethtmlDimensions() {
    let html_width = document.scrollingElement.offsetWidth;
    let html_height = document.scrollingElement.offsetHeight;
    console.log(`${html_width} X ${html_height}`);
}

function addTabIndex(){
    let tools = document.querySelectorAll(".tool"); //select all tools 
    for (i=0; i < document.querySelectorAll(".tool").length; i++) {
        tools[i].tabIndex= `${i+1}`;
    }
}
addTabIndex();


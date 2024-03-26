//your JS code here. If required.
//traverse up the DOM tree
function getDomLevel(elementId){
    const targetElement=document.getElementById(elementId)

    let domLevel=1;
    let parentElement=targetElement.parentElement;
    while(parentElement!==null && parentElement.tagName!=='HTML'){
        domLevel++
        parentElement=parentElement.parentElement
}
return domLevel+1
}
alert(getDomLevel('level'))
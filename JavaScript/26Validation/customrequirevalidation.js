
function checkreq() {
    let SpanTag = document.createElement("span");
    const newtext = document.createTextNode("This field is required");
    SpanTag.appendChild(newtext);
    console.log(SpanTag.__proto__);
    // SpanTag.innerHTML="data"
}

// console.log(SpanTag);
// e.after(SpanTag)
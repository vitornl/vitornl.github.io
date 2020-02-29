function showbib(bibid) {
    var selectedobj = document.getElementById(bibid);

    if (selectedobj.className == 'hide') { //check if classname is hide 
        selectedobj.style.display = "block";
        selectedobj.readOnly = true;
        selectedobj.className = 'show';
    } else {
        selectedobj.style.display = "none";
        selectedobj.className = 'hide';
    }
}

function customTag(tagName, fn) {
    document.createElement(tagName);
    //find all the tags occurrences (instances) in the document
    var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}

function bibtex(element) {
    var id = element.attributes.id.value;
    element.innerHTML = "<a href='" + void(0) + "'><label onclick='showbib('" + id + "')'>bibtex</label></a>"
    element.innerHTML = "<textarea id='" + id + "' style='display:none' class='hide'>" + element.textContent + "</textarea>​"
}

customTag("bibtex", bibtex);
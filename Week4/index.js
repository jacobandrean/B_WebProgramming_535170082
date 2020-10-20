var items = [];

var info = document.getElementById("info")
var shownItems = document.getElementById("shownItems")

function clearInfo() {
    info.innerHTML = "";
    info.className = "";
}

function addItem(item) {
    clearInfo();

    var item = document.getElementById("item").value;

    if(items.length >= 5) {
        info.innerHTML = "You have reach maximum possible items"
        info.className = "warning"
    } 
    else if(item.length == 0) {
        info.innerHTML = "Item cannot be empty"
        info.className = "warning"
    } 
    else {
        items.push(item);
        info.innerHTML = "Success.";
        info.className = "success";
    }
}

function showItems() {
    for (item of items) {
        shownItems.innerHTML = shownItems.innerHTML + item + "<br>";
    }
}
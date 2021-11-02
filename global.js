

function updateList(item) {
    var list = getList();
    var index = list.indexOf(item);
    if (index === -1) {
        list.push(item)
        document.getElementById(item).innerHTML = "Löschen"
    } else {
        list.splice(item, 1);
        document.getElementById(item).innerHTML = "Hinzufügen"
    }
    console.log(list)
    this.sessionStorage.setItem("list", list);

}

function isPresent(item) {
    var list = getList();
    var index = list.indexOf(item);
    return index !== -1;
}

function preparePrint() {
    var list = getList();
    console.log(list);
    for (i = 0; i < list.length; i ++) {
        console.log(list[i]);
        console.log(document.getElementById(list[i].toString()));
        document.getElementById(list[i].toString()).style.display = "block";

    }

}

function getList() {
    var list = [];
    var sessionList = this.sessionStorage.getItem("list");
    if (sessionList !== null) {
        list = sessionList.split(",").map(String);
    }
    return list;
}
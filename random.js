    var links=new Array()
    links[0]="data/fig/TIC24750295.html"
    links[1]="data/fig/TIC350478065.html"
    links[2]="data/fig/TIC231844926.html"
    links[3]="data/fig/TIC52079311.html"
    links[4]="data/fig/TIC159857518.html"
    links[5]="data/fig/TIC277836910.html"
    links[6]="data/fig/TIC260855442.html"
    links[7]="data/fig/TIC126638586.html"
    links[8]="data/fig/TIC149124536.html"
    links[9]="data/fig/TIC204543760.html"

var myFrame = document.getElementsByClassName("frame")[0];
function getRandomUrl(myFrame) {
  var index = Math.floor(Math.random() * links.length);
  var url = links[index];
  myFrame.src = url;
}

function codeAddress() {
  getRandomUrl(myFrame);
}

codeAddress();
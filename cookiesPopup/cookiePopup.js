// create elements
let popup = document.createElement('div');
let popupTitle = document.createElement('div');
let popupBody = document.createElement('div');
let popupButtons = document.createElement('div');
let acceptButt = document.createElement('BUTTON');
let rejectButt = document.createElement('BUTTON');
let overlay = document.createElement('div');

// MAIN
document.addEventListener('DOMContentLoaded', function () {
    makePopupDiv();

    if(getCookie('decision')!="accept"){
        popupActivation();
    }

}, false);

function setCookie(cname,cvalue,exdays){
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); // [ms]
    
    let expires = "expires=" + d.toUTCString();
    
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {  
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function popupActivation(){
    popup.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow="hidden";
    document.getElementById('container').style.filter="blur(5px)";
    

    
    acceptButt.addEventListener('click', () => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow="auto";
        document.getElementById('container').style.filter="none";
        setCookie('decision','accept',1);
    })

    rejectButt.addEventListener('click', () => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow="auto";
        document.getElementById('container').style.filter="none";
        setCookie('decision','reject',1);
    })
}

function makePopupDiv() {

    darkenBackground();
    
    // add nameClass/Id
    popup.className = 'popup';
    popupTitle.id = 'popupTitle';
    popupBody.id = 'popupBody';
    popupButtons.className = 'popupButtonsSpace';
    acceptButt.id = 'acceptButton';
    rejectButt.id = 'rejectButton';

    // Content
    popupTitle.innerHTML = "GDPR consent";
    popupBody.innerHTML = "2012 roku przeglądaniu sieci towarzyszą powiadomienia o zbieraniu ciasteczek przez każdą ze stron, którą odwiedzasz. W związku tym, że w naszej firmie mamy do czynienia z danymi wrażliwymi prosimy Cię o zbudowanie narzędzia, które będzie pobierać od użytkownika decyzję odnośnie przetwarzania danych osobowych.";
    acceptButt.innerHTML = "Accept";
    rejectButt.innerHTML = "Reject";

    // put to HTML
    document.body.appendChild(popup);
        popup.appendChild(popupTitle);
        popup.appendChild(popupBody);
        popup.appendChild(popupButtons);
            popupButtons.appendChild(acceptButt);
            popupButtons.appendChild(rejectButt);
            
}

// Have to be used before an element which should be still light
function darkenBackground() {
     overlay.id = 'overlay';
    document.body.appendChild(overlay);
}
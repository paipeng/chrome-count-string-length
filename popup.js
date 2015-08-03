function onSelection(payload) {
    console.log('Got selection: ' + payload.method);

    if (payload.method === 'onSelection') {

        console.log('Got selection: ' + payload.html);
        var html = payload.text;

        chrome.runtime.getBackgroundPage(function (eventPage) {

            //updateQRCode(payload.text);

            //doTranslation(html);

            countStrlen(html);

        });
        chrome.extension.onMessage.removeListener(window.onSelection);
    }

};

function countStrlen(html) {
  var length = html.length;
  html += " has length <br/><b>" + length + "</b>";
  document.body.insertAdjacentHTML("beforeend", html);
}



chrome.extension.onMessage.addListener(onSelection);

chrome.tabs.executeScript(null, {file: "content.js"});


document.addEventListener("DOMContentLoaded", function () {
});

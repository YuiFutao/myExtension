chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "Action") {
    hogehoge();
  }
});

function hogehoge() {
  $("img").each(function (index) {
    $(this).css("-webkit-filter", "grayscale(100%)");
  });
}

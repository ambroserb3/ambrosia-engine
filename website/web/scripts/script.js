$(document).ready(function () {
  applyHeader();
  checkBrowser();
  plusToggle();
});

/* HEADER FUNCTIONS */

function applyHeader() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
}

/* IE7- FALLBACK FUNCTIONS */

function checkBrowser() {
  let loBrowserVersion = getBrowserAndVersion();

  if (loBrowserVersion.browser == "Explorer" && loBrowserVersion.version < 8) {
    $("#upgrade-dialog").modal({
      backdrop: "static",
      keyboard: false,
    });
  }
}

function getBrowserAndVersion() {
  let laBrowserData = [
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE",
    },
  ];

  return {
    browser: searchString(laBrowserData) || "Modern Browser",
    version:
      searchVersion(navigator.userAgent) ||
      searchVersion(navigator.appVersion) ||
      "0.0",
  };
}

function searchString(paData) {
  for (let i = 0; i < paData.length; i++) {
    let lstrDataString = paData[i].string;
    let lstrDataProp = paData[i].prop;

    this.versionSearchString = paData[i].versionSearch || paData[i].identity;

    if (lstrDataString) {
      if (lstrDataString.indexOf(paData[i].subString) != -1) {
        return paData[i].identity;
      }
    } else if (lstrDataProp) {
      return paData[i].identity;
    }
  }
}

function searchVersion(pstrDataString) {
  let lnIndex = pstrDataString.indexOf(this.versionSearchString);

  if (lnIndex == -1) {
    return;
  }

  return parseFloat(
    pstrDataString.substring(lnIndex + this.versionSearchString.length + 1)
  );
}

function plusToggle() {
  $(".fa").click(function () {
    $(this).toggleClass("fa-plus-circle").toggleClass("fa-minus-circle");
  });
}

function ExpandSkill(element) {
  let x = document.getElementById(element);
  if (x.style.display && x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

"use strict";

function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    // If Internet Explorer, return version number
    return true;
  }

  return false;
}

function getSvgUrl(name) {
  return "https://static.e-conomic.com/vismaconnect/production/icon-phone-black.svg";
}

function goToRegister(goToRegisterCustom) {
  var goToRegister = document.getElementById('GoToRegister');

  if (goToRegister != null) {
    goToRegisterCustom.setAttribute('href', goToRegister.href);
  } 
  else {
    var goToRegisterHrefValue = sessionStorage.getItem("goToRegisterHref");
    if (goToRegisterHrefValue != null) {
      goToRegisterCustom.setAttribute('href', goToRegisterHrefValue);
    }
  }
}

function setGoToRegisterSession() {
  var goToRegister = document.getElementById('GoToRegister');

  if (goToRegister != null) {
    sessionStorage.setItem("goToRegisterHref", goToRegister.href);
  }
}

function replaceSetup2FALinks() {
    var links = document.getElementsByTagName("a");
    if (links == null || links?.length == 0) {
        return;
    }

    for (let i = 0; i < links.length; i++) {
        if (links[i].href.includes("/docs/2fa-enrollment")) {
            links[i].href = "https://www.e-conomic.dk/support/artikler/totrinsbekraeftelse-ved-login-i-e-conomic";
        }
        else if (links[i].href.includes("/docs/2fa")) {
            links[i].href = "https://www.e-conomic.dk/sikkerhed/to-faktor-godkendelse-2fa";
        }
    }
}

(function($) {
  $(function() {
    $(".form-connect-login .theme-subheader")
      .append("&nbsp;")
      .append(
        $("<a></a>")
          .attr("href", "https://www.e-conomic.dk/")
          .text("e-conomic")
      );

      if ($("#page-twostepsetup-start").length) {
        $("#page-twostepsetup-start")
            .after(function () {
                replaceSetup2FALinks();
            })
      }

    if ($(".form-connect-login").length) {
      $.getJSON("https://www.e-conomic.dk/js/login-content-message", function(data) {
          $(".form-box").prepend(
            '<div class="content-message-container">' + data.message + "</div>"
          );
      });

      // Add info and trial block beneath login form.
      $('.form-connect-login')
        .after(function() {
          setGoToRegisterSession();

          var vismaConnectSignUp = '<div class="change-to-connect-container">';

          vismaConnectSignUp += '<h3 class="theme-header">Har du ikke skiftet login?</h3>';
          vismaConnectSignUp += '<h4 class="theme-subheader">Af hensyn til din sikkerhed skal du skifte til vores login-lÃ¸sning,<br> Visma Connect. Du kan oprette dit login pÃ¥ et Ã¸jeblik nedenfor.</h4><br>';
          vismaConnectSignUp += '<a class="btn btn-primary btn-primary-hollow btn-block" style="text-decoration:none" id="GoToRegisterCustom" onclick="goToRegister(this)">Skift til Visma Connect</a>';

          vismaConnectSignUp += '</div>';

          return vismaConnectSignUp;
        })
        .after('<div class="trial-signup">Ikke kunde endnu? <a target="_blank" href="https://www.e-conomic.dk/regnskabsprogram/demo">PrÃ¸v gratis i 14 dage</a></div>')
        .after('<style type="text/css">.trial-signup{margin-top:50px}.change-to-connect-container{border-top:1px solid #000;margin-top:50px;text-align:center}.change-to-connect-container h3{margin:40px 0}.btn-primary-hollow{color:#ef7d00;background-color:#fff;border:1px solid #ef7d00}.btn-primary-hollow:hover{color:#ef7d00;background-color:#fff;border:1px solid #ef7d00}.change-to-connect-container h3+a{display:block;padding-top:10px;text-decoration:none}</style>');

        $('.side-image').append(
          '<div style="text-align:center;position:absolute;bottom:30px;width:100%;color:#000;">' +
            '<div style="width:540px;margin:0 auto;">' +
              '<h2 style="margin-bottom:15px">BogfÃ¸rer du ofte nok?</h2>' +
              '<p>' +
              'Du skal bogfÃ¸re senest inden for lÃ¸bende mÃ¥ned â€“ har Erhvervsstyrelsen for nylig prÃ¦ciseret i sin Vejledning til BogfÃ¸ringsloven. Og her kan automatiseringsfunktionerne i e-conomic hjÃ¦lpe dig.'+
              '</p>' +
              '<p><a href="https://blog.e-conomic.dk/automatisering-kan-hjaelpe-med-at-bogfore-som-bogforingsloven-kraever/?utm_campaign=DK_EC_ecm-2916-blog-bogfÃ¸ringslov-automatisering-sep2025&utm_source=login-page&utm_medium=organic&utm_content=ecm-4312-blogpost-sep2025&utm_term=" style="font-weight:700" title="BogfÃ¸rer du ofte nok?" target="_blank">LÃ¦s mere om bogfÃ¸ringsloven og automatisering</a></p>' +
            '</div>' +
          '</div>'
        );
    }
  });
})(jQuery);

// Intercom chat integration.
if (window.innerWidth >= 1024) {
  window.intercomSettings = {
    api_base: "https://api-iam.eu.intercom.io",
    app_id: "fiqgaa8g"
  };

  (function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', w.intercomSettings); } else { var d = document; var i = function () { i.c(arguments); }; i.q = []; i.c = function (args) { i.q.push(args); }; w.Intercom = i; var l = function () { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/fiqgaa8g'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); }; if (document.readyState === 'complete') { l(); } else if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })();
  if (!window.LC_API) {
    window.LC_API = { open_chat_window: () => { Intercom('show') } }
  }
}
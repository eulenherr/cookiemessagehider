var cCInterval;
var isUsingCookies = false;

var checkCookie = function() {
    if(document.cookie.length > 0 || isUsingCookies) {
        isUsingCookies = true;
        safari.self.tab.dispatchMessage('cookie', '');
    } else {
        safari.self.tab.dispatchMessage('noCookie', '');
    }
};

safari.self.addEventListener(
    'message', 
    function(event) {
        if(event.name === 'startCheck') {
            cCInterval && clearInterval(cCInterval);
            cCInterval = setInterval(checkCookie, 1000);
            checkCookie();
        } else if(event.name === 'stopCheck') {
            cCInterval && clearInterval(cCInterval);
        }
    },
    false
);

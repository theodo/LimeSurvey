var assetsPath = '';

// Retrieve GET parameters
var pageUrl = window.location.search.substring(1);
var getVars = pageUrl.split('&');
var getParams = {};

for (var i = 0; i < getVars.length; i++) {
    var parameter = getVars[i].split('=');
    getParams[parameter[0]] = parameter[1];
}

$(document).ready(function(){
    // Load logo+stylesheet
    $('#scoreway-stylesheet').attr('href', assetsPath + getParams.sid + '/' + getParams.pdv + '/theme');
    $('#scoreway-survey-logo').attr('src', assetsPath + getParams.sid + '/' + getParams.pdv + '/logo');

    // Keep the same parameters all survey long
    var targetUrl = $('#limesurvey').attr('action');
    targetUrl += '&pdv=' + getParams.pdv;
    $('#limesurvey').attr('action', targetUrl);
});

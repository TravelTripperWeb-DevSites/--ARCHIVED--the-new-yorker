function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

 // Parse the URL
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Give the URL parameters variable names
var source = getParameterByName('utm_source');
var medium = getParameterByName('utm_medium');
var campaign = getParameterByName('utm_campaign');


// Set the cookies
if(readCookie('utm_source') == null || readCookie('utm_source') == "") {
    createCookie('utm_source', source);
}
if(readCookie('utm_medium') == null || readCookie('utm_medium') == "") {
    createCookie('utm_medium', medium);
}
if(readCookie('utm_campaign') == null || readCookie('utm_campaign') == "") {
    createCookie('utm_campaign', campaign);
}


$(document).ready(function(){
        $(document).on("click", "a", function(){
            var source = readCookie('utm_source');
            var medium = readCookie('utm_medium');
            var campaign = readCookie('utm_campaign');

            if(source != null || source != ''){
                var this_href = $(this).attr("href");
                if(this_href.indexOf('newyorkerhotel.reztrip.com') != -1){
                    this_href = this_href + '&utm_source='+source+ '&utm_medium='+medium+ '&utm_campaign='+campaign;
                    $(this).attr('href',this_href);
                }
            }
            

        })
        $('form').on('submit', function(){
            var source = readCookie('utm_source');
            var medium = readCookie('utm_medium');
            var campaign = readCookie('utm_campaign');
            if(source != null || source != ''){
                var $utmEl = $("<input type='hidden' name='utm_source' value='" + source + "'><input type='hidden' name='utm_medium' value='" + medium + "'><input type='hidden' name='utm_campaign' value='" + campaign + "'>");
                $(this).prepend($utmEl);
            }
        });

        // Parse the URL
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
})







(function($){
    // Give the URL parameters variable names
    var u_source = getParameterByName('utm_source');
    var u_medium = getParameterByName('utm_medium');
    var u_campaign = getParameterByName('utm_campaign');
    var u_term = getParameterByName('utm_term');
    var u_content = getParameterByName('utm_content');

    // Set the cookies
    if(u_source != "" ) {
        createCookie('utm_source', u_source);
    }
    if(u_medium != "") {
        createCookie('utm_medium', u_medium);
    }
    if(u_campaign !="") {
        createCookie('utm_campaign', u_campaign);
    }

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
    $(document).on('submit', 'form', function(){
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


})($);

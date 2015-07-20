/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio and Blog Theme.
 * Version: 1.8
 * Author: @htmlstream
 * Website: http://htmlstream.com
 */

var App = function () {

    function handleBootstrap() {
        /*Bootstrap Carousel*/
        jQuery('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });

        /*Tooltips*/
        jQuery('.tooltips').tooltip();
        jQuery('.tooltips-show').tooltip('show');
        jQuery('.tooltips-hide').tooltip('hide');
        jQuery('.tooltips-toggle').tooltip('toggle');
        jQuery('.tooltips-destroy').tooltip('destroy');

        /*Popovers*/
        jQuery('.popovers').popover();
        jQuery('.popovers-show').popover('show');
        jQuery('.popovers-hide').popover('hide');
        jQuery('.popovers-toggle').popover('toggle');
        jQuery('.popovers-destroy').popover('destroy');
    }

    var handleFullscreen = function () {
        var WindowHeight = $(window).height();

        if ($(document.body).hasClass("promo-padding-top")) {
            HeaderHeight = $(".header").height();
        } else {
            HeaderHeight = 0;
        }

        $(".fullheight").css("height", WindowHeight - HeaderHeight);

        $(window).resize(function () {
            var WindowHeight = $(window).height();
            $(".fullheight").css("height", WindowHeight - HeaderHeight);
        });
    }

    // handleLangs
    function handleLangs() {
        $(".lang-block").click(function () {
            console.log("click!");
        });
    }

    var handleValignMiddle = function () {
        $(".valign__middle").each(function () {
            $(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2);
        });
        $(window).resize(function () {
            $(".valign__middle").each(function () {
                $(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2);
            });
        });
    }

    function handleHeader() {
        //jQuery to collapse the navbar on scroll
        $(window).scroll(function () {
            if ($(".navbar").offset().top > 150) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });

        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function () {
            $('.page-scroll a').bind('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

        //Collapse Navbar When It's Clickicked
        $(window).scroll(function () {
            $(".navbar-collapse.in").collapse('hide');
        });


    }

    return {
        init: function () {
            handleHeader();
            handleBootstrap();
            //handleLangs();
            handleFullscreen();
            handleValignMiddle();
        },

        initCounter: function () {
            jQuery('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },

        initParallaxBg: function () {
            $(window).load(function () {
                jQuery('.parallaxBg').parallax("50%", 0.4);
                jQuery('.parallaxBg1').parallax("50%", 0.2);
            });
        },

        initParallaxBg2: function () {
            $(window).load(function () {
                jQuery('.parallaxBg').parallax("50%", "50%");
            });
        },

        toggleWashingtonUpdate: function () {
            $("#washingtonUpdate").toggleClass("preview-panel");
            $("#expandWashingtonUpdate").toggleClass("hide");
            $("#shrinkWashingtonUpdate").toggleClass("hide");
        }

    };



}();
var ContactPage = function () {

    return {

        //Basic Map
        initMap: function () {
            var map;
            $(document).ready(function () {
                map = new GMaps({
                    div: '#map',
                    scrollwheel: false,
                    lat: 38.903788,
                    lng: -77.038035
                });

                var marker = map.addMarker({
                    lat: 38.903788,
                    lng: -77.038035,
                    title: 'CHG & Associates 1660 L St. NW #501, Washington DC 20036',
                    infoWindow: {
                        content: '<span class="map-info-window"><div class="gm-title">CHG &amp; Associates: Transit Solutions</div><div class="gm-basicinfo" jstcache="0"><div class="gm-addr" jsdisplay="i.result.formatted_address" jscontent="i.result.formatted_address" jstcache="3">1660 L St NW, Washington, DC 20036, United States</div><div class="gm-website" jsdisplay="web" jstcache="4"><a jscontent="web" jsvalues=".href:i.result.website" target="_blank" jstcache="10" href="http://www.chgassociates.com">www.chgassociates.com</a></div><div class="gm-phone" jsdisplay="i.result.formatted_phone_number" jscontent="i.result.formatted_phone_number" jstcache="5"><a href="tel:2029692090"> 1-(202) 969 2090</a></div></span>'
                    }
                });


            });
        },

        //Panorama Map
        initPanorama: function () {
            var panorama;
            $(document).ready(function () {
                panorama = GMaps.createPanorama({
                    el: '#panorama',
                    lat: 38.903788,
                    lng: -77.038035
                });
            });
        }

    };
}();


var handleWashingtonUpdateUrl = function () {
    var hashVal = window.location.hash.split("#")[1];
    if (hashVal == 'wu') {
        App.toggleWashingtonUpdate();
    }
}

handleWashingtonUpdateUrl();


$("#expandWashingtonUpdate, #shrinkWashingtonUpdate, #showWashingtonUpdate").click(function (event) {
    //event.preventDefault();
    App.toggleWashingtonUpdate();
});

$("#showWashingtonUpdate").click(function (event) {
    if ($("#washingtonUpdate").hasClass("preview-panel")) {
        App.toggleWashingtonUpdate();
    }
});

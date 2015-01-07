function swapInfo(n) {
    n.preventDefault();
    $(".contact-info").hide();
    $("ul.subnav-contact-info li").removeClass("active");
    $(this).parent().addClass("active");
    switch ($(this).html()) {
        case "PepsiCo Corporate":
            $("#info-pepsico-corporate").show();
            break;
        case "Pepsi-Cola":
            $("#info-pepsi").show();
            break;
        case "Frito-Lay":
            $("#info-frito-lay").show();
            break;
        case "Quaker":
            $("#info-quaker").show();
            break;
        case "Tropicana":
            $("#info-tropicana").show();
            break;
        case "Gatorade":
            $("#info-gatorade").show();
            break;
        case "Global":
            window.location.href = "/Home/GlobalSites"
    }
}

function brandFilter(n) {
    n.preventDefault();
    $(".row-one .brands-section").css("display", "none");
    $("#brands-filter div.column").removeClass("active-column");
    $("#brands-filter div.icon-box").removeClass("active-box inactive-box").addClass("inactive-box");
    $("#main-content .brand-section").css("display", "none");
    switch ($(this).attr("id")) {
        case "top-global-brands":
            $(".section-top-global-brands").css("display", "block");
            $("#top-global-brands").addClass("active-column");
            $("#top-global-brands-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-1").addClass("current-page-link");
            break;
        case "good":
            $(".section-good-for-you").css("display", "block");
            $("#good").addClass("active-column");
            $("#good-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-2").addClass("current-page-link");
            break;
        case "better":
            $(".section-better-for-you").css("display", "block");
            $("#better").addClass("active-column");
            $("#better-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-4").addClass("current-page-link");
            break;
        case "fun":
            $(".section-fun-for-you").css("display", "block");
            $("#fun").addClass("active-column");
            $("#fun-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-3").addClass("current-page-link")
    }
}

function brandFilterMegaNav(n) {
    n.preventDefault();
    $("#main-content .brand-section").css("display", "none");
    $("#brands-filter div.column").removeClass("active-column");
    $("#brands-filter div.icon-box").removeClass("active-box inactive-box").addClass("inactive-box");
    $(".row-one .brands-section").hide();
    var t = $(this).attr("href").split("#");
    if (typeof t[1] != "undefined") switch (t[1]) {
        case "top-global":
            $(".section-top-global-brands").css("display", "block");
            $("#top-global-brands").addClass("active-column");
            $("#top-global-brands-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-1").addClass("current-page-link");
            break;
        case "good-for-you":
            $(".section-good-for-you").css("display", "block");
            $("#good").addClass("active-column");
            $("#good-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-2").addClass("current-page-link");
            break;
        case "better-for-you":
            $(".section-better-for-you").css("display", "block");
            $("#better").addClass("active-column");
            $("#better-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-4").addClass("current-page-link");
            break;
        case "fun-for-you":
            $(".section-fun-for-you").css("display", "block");
            $("#fun").addClass("active-column");
            $("#fun-box").removeClass("inactive-box").addClass("active-box");
            $(".main-nav-3 li").removeClass("current-page-link");
            $(".main-nav-3-3").addClass("current-page-link")
    }
}

function brandFilterMouseOver(n) {
    n.preventDefault();
    var t = "#" + $(this).attr("id");
    $(this).addClass("hover-column");
    $(t + " div.icon-box").removeClass("inactive-box").addClass("hover-box")
}

function brandFilterMouseOut() {
    var n = "#" + $(this).attr("id");
    $(this).removeClass("hover-column");
    $(n + " div.icon-box").hasClass("active-box") ? $(n + " div.icon-box").removeClass("hover-box") : $(n + " div.icon-box").removeClass("hover-box").addClass("inactive-box")
}

function brandOverlayMouseOver(n) {
    $(window).width() >= 767 && !isMobile() && (n.preventDefault(), $(this).css("display", "none"), $(this).next(".overlay").css("display", "block"))
}

function brandOverlayMouseOut(n) {
    $(window).width() >= 767 && !isMobile() && (n.preventDefault(), $(this).css("display", "none"), $(this).prev("img.active").css("display", "block"))
}

function updatePhoneNumbers() {
    (function(n) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);
    jQuery.browser.mobile || ($("a.phone").attr("href", "#"), $("a.phone").css("cursor", "default"), $("a.phone").click(function(n) {
        n.preventDefault()
    }))
}

function readCookie(n) {
    for (var t, r = escape(n) + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
        if (t.indexOf(r) == 0) return unescape(t.substring(r.length, t.length))
    }
    return null
}

function wasMobile() {
    var n = readCookie("isMobileDevice");
    return n && n == "true" ? !0 : !1
}

function isTouchDevice() {
    try {
        return document.createEvent("TouchEvent"), !0
    } catch (n) {
        return !1
    }
}

function touchScroll(n, t) {
    var u, i, r;
    isTouchDevice() && (t == "id" ? i = document.getElementById(n) : (u = document.getElementsByClassName(n), i = u[0]), r = 0, i.addEventListener("touchstart", function(n) {
        r = this.scrollTop + n.touches[0].pageY
    }, !1), i.addEventListener("touchmove", function(n) {
        this.scrollTop = r - n.touches[0].pageY;
        n.preventDefault()
    }, !1))
}(function(n) {
    var u = 74,
        t = 160,
        f = 750,
        i = "stuck",
        r = 20,
        e = 768;
    n("body").hasClass("our-history") && (t = 230, r = 100);
    n.fn.magellan = function() {
        return this.each(function() {
            var o = n(this);
            n(window).width() >= e && n(window).scroll(function() {
                var f = o.offset().top - n(window).scrollTop(),
                    r = n(".scrollable-content").offset().top - n(window).scrollTop();
                f <= u && r <= t ? (o.addClass(i), n("body").addClass(i)) : r > t && (o.removeClass(i), n("body").removeClass(i))
            });
            n("." + o.attr("class") + " li").click(function(i) {
                var u = n(this).find("a").attr("href");
                n(".magellan-scrollbar ul li").removeClass("active");
                n(this).addClass("active");
                n("html, body").animate({
                    scrollTop: n(u).offset().top - t + r + "px"
                }, f);
                i.preventDefault()
            })
        })
    }
})(jQuery);
$(document).on("ready", function() {
    $(".magellan-scrollbar ul li").hasClass("active") && $(".magellan-scrollbar ul li").removeClass("active");
    $(".footer-nav-8").length != 0 && setTimeout(function() {
        $(".footer-nav-8").removeClass("active")
    }, 8e3)
});
if (function(n) {
        n.fn.extend({
            customSelect: function() {
                if (!n.browser.msie || n.browser.msie && n.browser.version > 6) return this.each(function() {
                    var f = n(this).find(":selected"),
                        r = n(this).width() + 43,
                        t, i, u;
                    n(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">' + f.text() + "<\/span><\/span>").css({
                        width: r,
                        position: "absolute",
                        opacity: 0,
                        fontSize: n(this).next().css("font-size")
                    });
                    t = n(this).next();
                    i = t.find(":first-child");
                    t.css({
                        display: "inline-block"
                    });
                    i.css({
                        width: r,
                        display: "inline-block"
                    });
                    u = t.height();
                    n(this).height(u).change(function() {
                        i.text(n(this).find(":selected").text()).parent().addClass("changed")
                    })
                })
            }
        })
    }(jQuery), $(function() {
        var t, i, n;
        $("#scrolling-banner").smoothDivScroll({
            autoScrollingMode: "always",
            autoScrollingDirection: "endlessLoopRight",
            autoScrollingStep: 1,
            autoScrollingInterval: 25
        });
        $("#scrolling-banner").bind("mouseover", function() {
            $(this).smoothDivScroll("stopAutoScrolling")
        }).bind("mouseout", function() {
            $(this).smoothDivScroll("startAutoScrolling")
        });
        t = new Date(2014, 1, 2, 16, 30, 0, 0);
        $(".countdown").countdown({
            until: $.countdown.UTCDate(-7, t),
            layout: '<div class="days"><span>{d10}<\/span><span>{d1}<\/span><\/div> <div class="hours"><span>{h10}<\/span><span>{h1}<\/span><\/div> <div class="minutes"><span>{m10}<\/span><span>{m1}<\/span><\/div> <div class="seconds"><span>{s10}<\/span><span>{s1}<\/span><\/div>',
            onExpiry: function() {
                $(".countdown").html('<p class="gametime">GAMETIME!<\/p>')
            },
            alwaysExpire: !0
        });
        var e = navigator.userAgent.indexOf("Chrome") > -1,
            r = navigator.userAgent.indexOf("MSIE") > -1,
            u = navigator.userAgent.indexOf("Firefox") > -1,
            o = navigator.userAgent.indexOf("Safari") > -1,
            f = navigator.userAgent.indexOf("Presto") > -1;
        mainContainer = u || f || r ? $("html") : $("body");
        $(window).scroll(function() {
            $(".header-content, .footer-content").css({
                left: -mainContainer[0].scrollLeft + "px"
            })
        });
        $(".article .main-content img").map(function() {
            var n = $(this).prop("align");
            if (n == "right") $(this).addClass("right-aligned");
            else if (n == "left") $(this).addClass("left-aligned");
            else return
        });
        $(".magellan-scrollbar").scrollspy();
        $(".magellan-scrollbar").magellan();
        $(".custom-select").customSelect();
        $(".nav li").mouseenter(function() {
            $(this).children(".subnav").stop(!0, !0).fadeIn(100)
        });
        $(".nav li").mouseleave(function() {
            $(this).children(".subnav").stop(!0, !0).fadeOut(100)
        });
        $("li:first-child").each(function() {
            $(this).addClass("first-child")
        });
        $("li:last-child").each(function() {
            $(this).addClass("last-child")
        });
        $(".brand:last-child").each(function() {
            $(this).addClass("last-child")
        });
        $("input").change(function() {
            var n = $(this),
                t = $(this).attr("checked");
            $('input[type="radio"]').removeClass("checked");
            t ? n.addClass("checked") : $("input").removeClass("checked")
        });
        $("ul.subnav-contact-info").on("click", "li a", swapInfo);
        if (updatePhoneNumbers(), $("#brands-filter").length > 0) {
            $("#brands-filter").on("click", "div.column", brandFilter);
            $("#brands-filter div.column").hover(brandFilterMouseOver, brandFilterMouseOut);
            $(".brand").on("mouseenter", "img.active", brandOverlayMouseOver);
            $(".brand").on("mouseleave", ".overlay", brandOverlayMouseOut);
            $(".main-nav-3 .subnav-links ul li a").on("click", brandFilterMegaNav);
            if (i = window.location.href, n = i.split("#"), $("#main-content .brand-section").css("display", "none"), $("#brands-filter div.column").removeClass("active-column"), $("#brands-filter div.icon-box").removeClass("active-box inactive-box").addClass("inactive-box"), typeof n[1] != "undefined") switch (n[1]) {
                case "top-global":
                    $(".section-top-global-brands").css("display", "block");
                    $("#top-global-brands").addClass("active-column");
                    $("#top-global-brands-box").removeClass("inactive-box").addClass("active-box");
                    $(".main-nav-3 li").removeClass("current-page-link");
                    $(".main-nav-3-1").addClass("current-page-link");
                    break;
                case "good-for-you":
                    $(".section-good-for-you").css("display", "block");
                    $("#good").addClass("active-column");
                    $("#good-box").removeClass("inactive-box").addClass("active-box");
                    $(".main-nav-3 li").removeClass("current-page-link");
                    $(".main-nav-3-2").addClass("current-page-link");
                    break;
                case "better-for-you":
                    $(".section-better-for-you").css("display", "block");
                    $("#better").addClass("active-column");
                    $("#better-box").removeClass("inactive-box").addClass("active-box");
                    $(".main-nav-3 li").removeClass("current-page-link");
                    $(".main-nav-3-4").addClass("current-page-link");
                    break;
                case "fun-for-you":
                    $(".section-fun-for-you").css("display", "block");
                    $("#fun").addClass("active-column");
                    $("#fun-box").removeClass("inactive-box").addClass("active-box");
                    $(".main-nav-3 li").removeClass("current-page-link");
                    $(".main-nav-3-3").addClass("current-page-link")
            } else $(".section-top-global-brands").css("display", "block"), $("#main-content .section-top-global-brands").css("display", "block"), $("#top-global-brands").addClass("active-column"), $("#top-global-brands-box").removeClass("inactive-box").addClass("active-box"), $(".main-nav-3 li").removeClass("current-page-link"), $(".main-nav-3-1").addClass("current-page-link")
        }
        $(".btn-close-blue").on("click", function() {
            $(".accordion").hide()
        });
        $(".country-links li").on("click", function() {
            $(".accordion").hide();
            var i = $(this).attr("id"),
                n = $("#" + i + "-content"),
                t = new TimelineMax;
            t.to(n, 0, {
                display: "block"
            });
            t.from(n, .75, {
                alpha: 0,
                y: -20,
                ease: Power2.easeOut
            })
        });
        $(".btn-share").on("mouseenter", function() {
            var n = $(".social-bar"),
                t = new TimelineMax;
            t.to(n, 0, {
                display: "block"
            });
            t.to(n, .75, {
                alpha: 1,
                ease: Power2.easeOut
            });
            $(".social-bar").on("mouseleave", function() {
                setTimeout(function() {
                    var n = $(".social-bar"),
                        t = new TimelineMax;
                    t.to(n, .5, {
                        alpha: 0,
                        ease: Power2.easeOut
                    });
                    $(".social-bar").off("mouseleave")
                }, 500)
            })
        });
        $("body.leadership .column").on("click", function(n) {
            n.preventDefault();
            var t = $("#leadership-box"),
                i = $("#corporate-box");
            if ($(this).hasClass("active-column") || $(this).hasClass("starting-state")) $(this).removeClass("active-column"), i.addClass("inactive-box"), i.removeClass("active-box"), t.addClass("inactive-box"), t.removeClass("active-box"), $(this).removeClass("starting-state"), $(".executive-toggle").css("display", "none"), $(".leadership-toggle").css("display", "none");
            else if ($(this).attr("id") == "our-leadership") {
                $(this).addClass("active-column");
                $("#corporate-officers").removeClass("active-column");
                t.removeClass("inactive-box");
                i.addClass("inactive-box");
                $(".leadership-only").css("display", "none");
                $(".executive-only").css("display", "block");
                $(".executive-only").on("click", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                });
                $(".executive-only").on("mouseenter", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                })
            } else {
                $(this).addClass("active-column");
                $("#our-leadership").removeClass("active-column");
                $("#our-leadership").removeClass("starting-state");
                t.addClass("inactive-box");
                i.removeClass("inactive-box");
                $(".leadership-only").css("display", "block");
                $(".executive-only").css("display", "none");
                $(".leadership-only").on("click", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                });
                $(".leadership-only").on("mouseenter", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                })
            }
        });
        $(".leadership-column").on("mouseenter", function() {
            if (!$(this).find(".name-box").hasClass("active-click")) {
                $(this).find(".name-box").addClass("active");
                $(this).on("mouseleave", function() {
                    $(this).find(".name-box").removeClass("active")
                })
            }
        });
        $(".leadership-column").on("click", function() {
            function r() {
                $(".text-box").mCustomScrollbar("destroy");
                $(".text-box").mCustomScrollbar({
                    advanced: {
                        updateOnContentResize: !0
                    }
                })
            }
            $(".name-box").removeClass("active");
            $(".name-box").removeClass("active-click");
            $(this).find(".name-box").addClass("active-click");
            $(".leadership-column").off("mouseleave");
            $(".accordion").hide();
            var i = $(this).attr("id"),
                n = $("#" + i + "-content"),
                t = new TimelineMax;
            t.to(n, 0, {
                display: "block"
            });
            t.from(n, .75, {
                alpha: 0,
                y: -20,
                ease: Power2.easeOut,
                onComplete: r
            });
            $("html, body").animate({
                scrollTop: n.offset().top - 70
            }, 750);
            $(".leadership-close-btn").off().on("click", function() {
                var n = $(".accordion");
                n.hide();
                $("html, body").animate({
                    scrollTop: $(this).offset().top - 450
                }, 750)
            });
            $(".leadership-close-btn-m").on("click", function() {
                var n = $(".accordion");
                n.hide()
            })
        });
        $("body.leadership-m .column-m").on("click", function(n) {
            n.preventDefault();
            var t = $("#leadership-box"),
                i = $("#corporate-box");
            if ($(this).hasClass("active-column") || $(this).hasClass("starting-state")) $(this).removeClass("active-column"), i.addClass("inactive-box"), i.removeClass("active-box"), t.addClass("inactive-box"), t.removeClass("active-box"), $(this).removeClass("starting-state"), $(".executive-toggle").css("display", "none"), $(".leadership-toggle").css("display", "none");
            else if ($(this).attr("id") == "our-leadership") {
                $(this).addClass("active-column");
                $("#corporate-officers").removeClass("active-column");
                t.removeClass("inactive-box");
                i.addClass("inactive-box");
                $(".leadership-only").css("display", "none");
                $(".executive-only").css("display", "block");
                $(".executive-only").on("click", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                });
                $(".executive-only").on("mouseenter", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                })
            } else {
                $(this).addClass("active-column");
                $("#our-leadership").removeClass("active-column");
                $("#our-leadership").removeClass("starting-state");
                t.addClass("inactive-box");
                i.removeClass("inactive-box");
                $(".leadership-only").css("display", "block");
                $(".executive-only").css("display", "none");
                $(".leadership-only").on("click", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                });
                $(".leadership-only").on("mouseenter", function(n) {
                    n.preventDefault();
                    n.stopPropagation()
                })
            }
        });
        $(".military-column").on("mouseenter", function() {
            if (!$(this).find(".name-box").hasClass("active-click")) {
                $(this).find(".name-box").addClass("active");
                $(this).on("mouseleave", function() {
                    $(this).find(".name-box").removeClass("active")
                })
            }
        });
        $(".military-column").on("click", function() {
            $(".name-box").removeClass("active");
            $(".name-box").removeClass("active-click");
            $(this).find(".name-box").addClass("active-click");
            $(".military-column").off("mouseleave");
            $(".accordion").hide();
            var i = $(this).attr("id"),
                n = $("#" + i + "-content"),
                t = new TimelineMax;
            t.to(n, 0, {
                display: "block"
            });
            t.from(n, .75, {
                alpha: 0,
                y: -20,
                ease: Power2.easeOut
            });
            $("html, body").animate({
                scrollTop: n.offset().top - 120
            }, 750)
        });
        $(".military-close-btn").on("click", function() {
            $(".accordion").hide();
            $("html, body").animate({
                scrollTop: $(".military-row").offset().top - 100
            }, 750)
        });
        $(".refine-view-options h6").on("click", function() {
            var n = $(this).parents(".refine-view-options");
            n.toggleClass("open")
        });
        ($("#to").length || $("#from").length) && jQuery().dateinput && ($("#to").dateinput({
            selectors: !0,
            firstDay: 0
        }), $("#from").dateinput({
            selectors: !0,
            firstDay: 0
        }));
        $("#from").length > 0 && $("body.media #from").data("dateinput") && $("#from").data("dateinput").change(function() {
            $("body.media #to").data("dateinput").setMin(this.getValue(), !0)
        })
    }), $("#goback").click(function() {
        return history.back(), !1
    }), $("h4, .icon", $(".clickable")).click(function() {
        var t = $(this).parent(),
            n = t.find(".icon-plus");
        n.hasClass("icon-close") ? n.removeClass("icon-close") : n.addClass("icon-close");
        t.find(".expand-box").fadeToggle(100)
    }), $(window).width() <= 767 || isMobile()) {
    $('.magellan-scrollbar ul li a[href="#rss-feeds"]').parents("li").hide();
    $('.magellan-scrollbar ul li a[href="#multimedia-downloads"]').parents("li").hide();
    $('.subnav-resource-center ul li a[href="/Media/Resource-Center#rss-feeds"]').parents("li").hide();
    $('.subnav-resource-center ul li a[href="/Media/Resource-Center#multimedia-downloads"]').parents("li").hide();
    $(".magellan-scrollbar").on("click", function() {
        $(this).hasClass("menu-open") ? ($(this).removeClass("menu-open"), $(this).find(".nav").fadeOut(200)) : ($(this).find(".nav").fadeIn(200))
    })
}
$(document).ready(function() {
    if (($(window).width() <= 767 || isMobile()) && ($("#open-menu").sidr(), $("#sidr").css("width", "280px")), $(window).width() < 575) {
        var n = $(window).width() - 55;
        $(".magellan-scrollbar").addClass("closed");
        $("#sidr").css("width", n + "px");
        $(".sidr.left").css("left", -n + "px")
    }
});
$(window).resize(function() {
    var n, t;
    window.location.pathname.toLowerCase().indexOf("login") >= 0 || (($(window).width() <= 767 || isMobile()) && $(".header").hasClass("open") && ($(".nav").css("width", $(window).width() - 280), $("#sidr").css("width", "280px"), $("#open-menu").css("left", 280)), $(window).width() < 575 && $(".header").hasClass("open") && (n = $(window).width() - 55, $("#sidr").css("width", n + "px"), t = $("#sidr").width(), $("#open-menu").css("left", t)))
});
var wasMobileSave = wasMobile();
$("#open-menu").on("click", function() {
    var n = $(window).width() - 55;
    $(".header").hasClass("open") ? ($(".nav").animate({
        width: $(window).width()
    }), $(".header").removeClass("open"), $("#open-menu").animate({
        left: "0"
    }, 400), $(".logo").animate({
        "padding-left": "75px"
    }, 400)) : $(window).width() < 575 ? ($(".header").addClass("open"), $("#sidr").css("width", n + "px"), $(".sidr.left").css("left", -n + "px"), $("#open-menu").animate({
        left: n + "px"
    }, 400)) : ($("#sidr").css("width", "280px"), $(".logo").animate({
        "padding-left": "355px"
    }, 400), $(".sidr.left").css("left", "-280px"), $(".header").addClass("open"), $("#open-menu").animate({
        left: "280px"
    }, 400))
});
$(".expand, .menu-arrow, .menu-arrow-side").on("click", function() {
    var n = $(this).parent().find("ul").first(),
        t = $(this).parent().find("i").first();
    return n.hasClass("menu-open") ? (t.removeClass("menu-arrow"), t.addClass("menu-arrow-side"), n.slideUp(200), n.removeClass("menu-open"), !1) : (t.removeClass("menu-arrow-side"), t.addClass("menu-arrow"), n.slideDown(200), n.addClass("menu-open"), !1)
});
$(".back-to-top").off().on("click", function() {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1
});
$(document).ready(function() {
    var n = navigator.userAgent,
        t;
    n.indexOf("Android") >= 0 && (t = parseFloat(n.slice(n.indexOf("Android") + 8)), t <= 2.3 && (touchScroll("sidr", "id"), $(".options").length && touchScroll("options", "class")))
});
/*
//# sourceMappingURL=main.min.js.map
*/
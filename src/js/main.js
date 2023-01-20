import "./_functions";
import "./_components";

setTimeout(() => {
    document.getElementById("preloader")?.remove();
}, 500);

const searchBorderFunc = () => {
    const elements = document.querySelectorAll("[data-border]");
    elements.forEach((element) => {
        let borderVerticalId =
            typeof element.getAttribute("border-vertical-id") !== "undefined"
                ? "#" + element.getAttribute("border-vertical-id")
                : !1;
        let borderHorizonId =
            typeof element.getAttribute("border-horizon-id") !== "undefined"
                ? "#" + element.getAttribute("border-horizon-id")
                : !1;
        if (element.style.display !== "none") {
            if (borderVerticalId) {
                element.setAttribute(
                    "border-height",
                    Math.round(element.getBoundingClientRect().height)
                );
                // document.querySelector(
                //     borderVerticalId
                // ).style.cssText = `left: ${
                //     element.style.borderLeftStyle === "solid" ? "" : ""
                // }`;
            }
        }
    });
};
searchBorderFunc();

function searchBorder() {
    $("[border]").each(function () {
        let borderVerticalId =
            typeof $(this).attr("border-vertical-id") !== "undefined"
                ? "#" + $(this).attr("border-vertical-id")
                : !1;
        let borderHorizonId =
            typeof $(this).attr("border-horizon-id") !== "undefined"
                ? "#" + $(this).attr("border-horizon-id")
                : !1;
        if ($(this).css("display") !== "none") {
            if (borderVerticalId) {
                $(this).attr(
                    "border-height",
                    Math.round($(this).outerHeight())
                );
                $(borderVerticalId).css({
                    left:
                        $(this).css("border-left-style") === "solid"
                            ? $(this).offset().left
                            : $(this).offset().left + $(this).outerWidth() - 1,
                    top: $(this).offset().top,
                    height: $(this).outerHeight(),
                });
            }
            if (borderHorizonId) {
                $(this).attr("border-width", Math.round($(this).outerWidth()));
                $(borderHorizonId).css({
                    left: $(this).offset().left,
                    top:
                        $(this).css("border-top-style") === "solid"
                            ? $(this).offset().top
                            : $(this).offset().top + $(this).outerHeight() - 1,
                    width: $(this).outerWidth(),
                });
            }
            if (
                ($(this).css("border-right-style") === "solid" ||
                    $(this).css("border-left-style") === "solid") &&
                !borderVerticalId
            ) {
                let borderId = Math.random().toString(16).slice(2);
                $(this).attr(
                    "border-height",
                    Math.round($(this).outerHeight())
                );
                $(this).attr("border-vertical-id", borderId);
                $("body .border-store").append(
                    "<span id='" +
                        borderId +
                        "' class='border-element border-vertical " +
                        $(this).attr("border") +
                        " " +
                        (this.tagName === "HEADER" ||
                        $(this).closest("header").length
                            ? "overhead"
                            : "") +
                        "' " +
                        "style='left: " +
                        ($(this).css("border-left-style") === "solid"
                            ? $(this).offset().left
                            : $(this).offset().left +
                              $(this).outerWidth() -
                              1) +
                        "px; " +
                        "top: " +
                        $(this).offset().top +
                        "px;" +
                        "height:" +
                        $(this).outerHeight() +
                        "px;'></span>"
                );
            }
            if (
                ($(this).css("border-top-style") === "solid" ||
                    $(this).css("border-bottom-style") === "solid") &&
                !borderHorizonId
            ) {
                let borderId = Math.random().toString(16).slice(2);
                $(this).attr("border-width", Math.round($(this).outerWidth()));
                $(this).attr("border-horizon-id", borderId);
                $("body .border-store").append(
                    "<span id='" +
                        borderId +
                        "' class='border-element border-horizon " +
                        $(this).attr("border") +
                        " " +
                        (this.tagName === "HEADER" ||
                        $(this).closest("header").length
                            ? "overhead"
                            : "") +
                        "' " +
                        "style=' left: " +
                        $(this).offset().left +
                        "px; " +
                        "top: " +
                        ($(this).css("border-top-style") === "solid"
                            ? $(this).offset().top
                            : $(this).offset().top +
                              $(this).outerHeight() -
                              1) +
                        "px;" +
                        "width:" +
                        $(this).outerWidth() +
                        "px;'></span>"
                );
            }
        } else if (borderVerticalId) {
            $(borderVerticalId).detach();
        } else if (borderHorizonId) {
            $(borderHorizonId).detach();
        }
    });
}
function borderAnimation() {
    function animationBorder(
        borderId,
        borderLength,
        typePosition,
        typeLength,
        delayAnimation
    ) {
        if ($(borderId).length) {
            setTimeout(() => {
                $(borderId).css({
                    [typePosition]:
                        Number(borderLength) +
                        Number($(borderId).css(typePosition).replace("px", "")),
                    [typeLength]: 0,
                    transition: "all 1s linear",
                });
            }, delayAnimation * 1000);
            setTimeout(() => {
                $(borderId).detach();
            }, (delayAnimation + 2) * 1000);
        }
    }
    let arThreshold = [0, 0.2];
    if (window.innerWidth < 1200) {
        arThreshold = [0, 0.1];
    }
    let observerBorder = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio > arThreshold[1]
                ) {
                    $(entry.target).removeAttr("border");
                    let borderVerticalId =
                        "#" + $(entry.target).attr("border-vertical-id");
                    let borderHeight = Number(
                        $(entry.target).attr("border-height")
                    );
                    let borderHorizonId =
                        "#" + $(entry.target).attr("border-horizon-id");
                    let borderWidth = Number(
                        $(entry.target).attr("border-width")
                    );
                    let delayAnimation =
                        $(entry.target).attr("border-delay") > 0
                            ? Number($(entry.target).attr("border-delay"))
                            : 0;
                    if (borderHeight > 0 && $(borderVerticalId).length > 0) {
                        animationBorder(
                            borderVerticalId,
                            borderHeight,
                            "top",
                            "height",
                            delayAnimation
                        );
                    }
                    if (borderWidth > 0 && $(borderHorizonId).length > 0) {
                        animationBorder(
                            borderHorizonId,
                            borderWidth,
                            "left",
                            "width",
                            delayAnimation
                        );
                    }
                }
            });
        },
        {
            threshold: arThreshold,
        }
    );
    if ("IntersectionObserver" in window) {
        setTimeout(() => {
            searchBorder();
            bindObserver(observerBorder, "[border-vertical-id]");
            bindObserver(observerBorder, "[border-horizon-id]");
        }, 200);
        $(window).resize(function () {
            searchBorder();
            bindObserver(observerBorder, "[border-vertical-id]");
            bindObserver(observerBorder, "[border-horizon-id]");
            if (window.innerWidth < 1200) {
                arThreshold = [0, 0.1];
            } else {
                arThreshold = [0, 0.2];
            }
        });
    } else {
        $("[border]").each(function () {
            $(this).removeAttr("border");
        });
    }
    $(window).bind(
        "mousewheel DOMMouseScroll MozMousePixelScroll",
        function (event) {
            let delta = parseInt(
                event.originalEvent.wheelDelta || -event.originalEvent.detail
            );
            if (delta >= 0) {
                $(".overhead").detach();
            }
        }
    );
}

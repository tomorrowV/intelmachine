function searchBorder() {
    document.querySelector("[border]").each(function () {
        let borderVerticalId =
            typeof document.querySelector(this).attr("border-vertical-id") !==
            "undefined"
                ? "#" + document.querySelector(this).attr("border-vertical-id")
                : !1;
        let borderHorizonId =
            typeof document.querySelector(this).attr("border-horizon-id") !==
            "undefined"
                ? "#" + document.querySelector(this).attr("border-horizon-id")
                : !1;
        if (document.querySelector(this).css("display") !== "none") {
            if (borderVerticalId) {
                document
                    .querySelector(this)
                    .attr(
                        "border-height",
                        Math.round(document.querySelector(this).outerHeight())
                    );
                document.querySelector(borderVerticalId).css({
                    left:
                        document
                            .querySelector(this)
                            .css("border-left-style") === "solid"
                            ? document.querySelector(this).offset().left
                            : document.querySelector(this).offset().left +
                              document.querySelector(this).outerWidth() -
                              1,
                    top: document.querySelector(this).offset().top,
                    height: document.querySelector(this).outerHeight(),
                });
            }
            if (borderHorizonId) {
                document
                    .querySelector(this)
                    .attr(
                        "border-width",
                        Math.round(document.querySelector(this).outerWidth())
                    );
                document.querySelector(borderHorizonId).css({
                    left: document.querySelector(this).offset().left,
                    top:
                        document.querySelector(this).css("border-top-style") ===
                        "solid"
                            ? document.querySelector(this).offset().top
                            : document.querySelector(this).offset().top +
                              document.querySelector(this).outerHeight() -
                              1,
                    width: document.querySelector(this).outerWidth(),
                });
            }
            if (
                (document.querySelector(this).css("border-right-style") ===
                    "solid" ||
                    document.querySelector(this).css("border-left-style") ===
                        "solid") &&
                !borderVerticalId
            ) {
                let borderId = Math.random().toString(16).slice(2);
                document
                    .querySelector(this)
                    .attr(
                        "border-height",
                        Math.round(document.querySelector(this).outerHeight())
                    );
                document
                    .querySelector(this)
                    .attr("border-vertical-id", borderId);
                document
                    .querySelector("body .border-store")
                    .insertAdjacentHTML(
                        "beforeend",
                        "<span id='" +
                            borderId +
                            "' class='border-element border-vertical " +
                            document.querySelector(this).attr("border") +
                            " " +
                            (this.tagName === "HEADER" ||
                            document.querySelector(this).closest("header")
                                .length
                                ? "overhead"
                                : "") +
                            "' " +
                            "style='left: " +
                            (document
                                .querySelector(this)
                                .css("border-left-style") === "solid"
                                ? document.querySelector(this).offset().left
                                : document.querySelector(this).offset().left +
                                  document.querySelector(this).outerWidth() -
                                  1) +
                            "px; " +
                            "top: " +
                            document.querySelector(this).offset().top +
                            "px;" +
                            "height:" +
                            document.querySelector(this).outerHeight() +
                            "px;'></span>"
                    );
            }
            if (
                (document.querySelector(this).css("border-top-style") ===
                    "solid" ||
                    document.querySelector(this).css("border-bottom-style") ===
                        "solid") &&
                !borderHorizonId
            ) {
                let borderId = Math.random().toString(16).slice(2);
                document
                    .querySelector(this)
                    .attr(
                        "border-width",
                        Math.round(document.querySelector(this).outerWidth())
                    );
                document
                    .querySelector(this)
                    .attr("border-horizon-id", borderId);
                document
                    .querySelector("body .border-store")
                    .insertAdjacentHTML(
                        "beforeend",
                        "<span id='" +
                            borderId +
                            "' class='border-element border-horizon " +
                            document.querySelector(this).attr("border") +
                            " " +
                            (this.tagName === "HEADER" ||
                            document.querySelector(this).closest("header")
                                .length
                                ? "overhead"
                                : "") +
                            "' " +
                            "style=' left: " +
                            document.querySelector(this).offset().left +
                            "px; " +
                            "top: " +
                            (document
                                .querySelector(this)
                                .css("border-top-style") === "solid"
                                ? document.querySelector(this).offset().top
                                : document.querySelector(this).offset().top +
                                  document.querySelector(this).outerHeight() -
                                  1) +
                            "px;" +
                            "width:" +
                            document.querySelector(this).outerWidth() +
                            "px;'></span>"
                    );
            }
        } else if (borderVerticalId) {
            document.querySelector(borderVerticalId).detach();
        } else if (borderHorizonId) {
            document.querySelector(borderHorizonId).detach();
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
        if (document.querySelector(borderId).length) {
            setTimeout(() => {
                document.querySelector(borderId).css({
                    [typePosition]:
                        Number(borderLength) +
                        Number(
                            document
                                .querySelector(borderId)
                                .css(typePosition)
                                .replace("px", "")
                        ),
                    [typeLength]: 0,
                    transition: "all 1s linear",
                });
            }, delayAnimation * 1000);
            setTimeout(() => {
                document.querySelector(borderId).detach();
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
                    document.querySelector(entry.target).removeAttr("border");
                    let borderVerticalId =
                        "#" +
                        document
                            .querySelector(entry.target)
                            .attr("border-vertical-id");
                    let borderHeight = Number(
                        document
                            .querySelector(entry.target)
                            .attr("border-height")
                    );
                    let borderHorizonId =
                        "#" +
                        document
                            .querySelector(entry.target)
                            .attr("border-horizon-id");
                    let borderWidth = Number(
                        document
                            .querySelector(entry.target)
                            .attr("border-width")
                    );
                    let delayAnimation =
                        document
                            .querySelector(entry.target)
                            .attr("border-delay") > 0
                            ? Number(
                                  document
                                      .querySelector(entry.target)
                                      .attr("border-delay")
                              )
                            : 0;
                    if (
                        borderHeight > 0 &&
                        document.querySelector(borderVerticalId).length > 0
                    ) {
                        animationBorder(
                            borderVerticalId,
                            borderHeight,
                            "top",
                            "height",
                            delayAnimation
                        );
                    }
                    if (
                        borderWidth > 0 &&
                        document.querySelector(borderHorizonId).length > 0
                    ) {
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
        document.querySelector(window).resize(function () {
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
        document.querySelector("[border]").each(function () {
            document.querySelector(this).removeAttr("border");
        });
    }
    document
        .querySelector(window)
        .bind(
            "mousewheel DOMMouseScroll MozMousePixelScroll",
            function (event) {
                let delta = parseInt(
                    event.originalEvent.wheelDelta ||
                        -event.originalEvent.detail
                );
                if (delta >= 0) {
                    document.querySelector(".overhead").detach();
                }
            }
        );
}

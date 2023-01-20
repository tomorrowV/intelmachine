import "./_functions";
import "./_components";

setTimeout(() => {
    document.getElementById("preloader")?.remove();
}, 500);

const searchBorderFunc = () => {
    const elements = document.querySelectorAll("[data-border]");
    elements.forEach(function (element) {
        let borderVerticalId =
            typeof element.getAttribute("border-vertical-id") !== "undefined"
                ? element.getAttribute("border-vertical-id")
                : !1;
        let borderHorizonId =
            typeof element.getAttribute("border-horizon-id") !== "undefined"
                ? element.getAttribute("border-horizon-id")
                : !1;
        if (element.style.display !== "none") {
            if (borderHorizonId && borderHorizonId !== "#null") {
                element.setAttribute(
                    "border-width",
                    Math.round(element.getBoundingClientRect().width)
                );

                document.querySelector(
                    `[border-horizon-id="${borderHorizonId}"]`
                ).style.cssText = `left: ${
                    element.style.borderLeftStyle === "solid" ? element : ""
                }`;
            }
        }
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
        }
    });
};

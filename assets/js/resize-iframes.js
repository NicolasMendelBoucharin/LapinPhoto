document.addEventListener("DOMContentLoaded", function () {
    // Paysage : ratio 3/2
    const iframesLandscape = document.querySelectorAll(".responsive-iframe-landscape");
    iframesLandscape.forEach((iframe) => {
        function resizeIframe() {
            const width = iframe.offsetWidth;
            const ratio = 2/3;
            iframe.style.height = (width * ratio) + "px";
        }
        resizeIframe();
        window.addEventListener("resize", resizeIframe);
    });

    // Portrait : ratio 2/3
    const iframesPortrait = document.querySelectorAll(".responsive-iframe-portrait");
    iframesPortrait.forEach((iframe) => {
        function resizeIframe() {
            const width = iframe.offsetWidth;
            const ratio = 3/2;
            iframe.style.height = (width * ratio) + "px";
        }
        resizeIframe();
        window.addEventListener("resize", resizeIframe);
    });
});

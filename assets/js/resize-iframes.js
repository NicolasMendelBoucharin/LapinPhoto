document.addEventListener("DOMContentLoaded", function () {
    const iframes = document.querySelectorAll(".responsive-iframe");

    iframes.forEach((iframe) => {
        iframe.addEventListener("load", function () {
            try {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                const iframeBody = iframeDocument.body;
                const contentHeight = iframeBody.scrollHeight;

                iframe.style.height = contentHeight + "px";
            } catch (error) {
                console.warn("Impossible d'ajuster la hauteur de l'iframe pour des raisons de sécurité.");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const footerNavigation = document.getElementById("footer-navigation");


    const predefinedButtons = [
        { title: "AI Snake", url: "https://not-jasper.github.io/ai-snake/" },
        { title: "Website Extractor", url: "https://not-jasper.github.io/website-extractor/" },
        { title: "Emoji City", url: "https://not-jasper.github.io/emoji-city/" },
        { title: "Surprise", url: "https://not-jasper.github.io/surprise/" }
    ];


    function createButton(title, url) {
        const button = document.createElement("li");
        const link = document.createElement("a");
        link.href = url;
        link.textContent = title;
        button.appendChild(link);
        return button;
    }


    predefinedButtons.forEach(button => {
        footerNavigation.querySelector("ul").appendChild(createButton(button.title, button.url));
    });


    pathSegments.forEach(segment => {

        if (pathSegments.indexOf(segment) !== pathSegments.length - 1) {
            footerNavigation.querySelector("ul").appendChild(createButton(segment.charAt(0).toUpperCase() + segment.slice(1), `/${segment}/`));
        }
    });
});

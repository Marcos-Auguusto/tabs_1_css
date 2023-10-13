const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((elem) => {
    elem.adventListener("click", function() {
        const linkId = elem.id;
        const hrefLinkClick = elem.href;
        
        allLinks.forEach((link) => {
            if (link.href == hrefLinkClick) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        allTabs.forEach((tab) => {
            if (tab.id == linkId) {
                tab.classList.add("active");
                // generate content for tab
                generateTabItems(
                    elem,
                    tab
                );
            } else {
                tab.classList.remove("tab-content--active");
            }
        });
    });
});
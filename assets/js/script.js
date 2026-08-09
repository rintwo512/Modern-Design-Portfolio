

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SIDEBAR MENU
    ===================================================== */

    const navLinks = document.querySelectorAll(
        ".navigation a"
    );


    /* =====================================================
       SECTION
    ===================================================== */

    const sections = document.querySelectorAll(
        "section[id]"
    );


    /* =====================================================
       CLICK MENU
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =====================================================
       ACTIVE MENU SAAT SCROLL
    ===================================================== */

    const observerOptions = {

        root: null,

        rootMargin: "-35% 0px -55% 0px",

        threshold: 0

    };


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const id =
                            entry.target.getAttribute("id");


                        navLinks.forEach(link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    }

                });

            },
            observerOptions
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".scroll-reveal"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

});


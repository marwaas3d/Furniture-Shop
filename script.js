document.addEventListener("DOMContentLoaded", function () {
    let options = {
        threshold: 0.2
    };

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("start-animation");
            }
        });
    }, options);

    document.querySelectorAll(".feat").forEach(feat => {
        observer.observe(feat);
    });
});
/******************************************************************* */
document.addEventListener("DOMContentLoaded", function () {
    let options = {
        threshold: 0.2
    };

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("anim");
            }
        });
    }, options);

    document.querySelectorAll("li").forEach(serv => {
        observer.observe(serv);
    });
});

/***************************************************************** */
// to get the section from it's first
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            setTimeout(() => { 
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: "smooth"
                });
            }, 10);
        }
    });
});

/******************************************************************** */


document.addEventListener('DOMContentLoaded', function () {
    var counterElement = document.getElementById('counter');
    var counterNow = 0;
    var feedbacks = document.getElementById('feedbacks');

    if (isElementInViewport(feedbacks)) {
        startCounter();
    }

    window.addEventListener('beforeunload', function () {
        localStorage.setItem('counterNow', '0');
    });

    window.addEventListener('scroll', function () {
        if (isElementInViewport(feedbacks) && counterNow === 0) {
            startCounter();
        }
    });

    function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

    function startCounter() {
    var interval = setInterval(function () {
        counterElement.innerHTML = counterNow;

        if (counterNow >= 10000) {
        clearInterval(interval);
    } else {
        counterNow += 50;
        localStorage.setItem('counterNow', counterNow);
    }
    }, 1);
}
});

document.addEventListener('DOMContentLoaded', function () {
    var lazySections = document.querySelectorAll('.lazy-section');

    function lazyLoadSection(section) {
    if (isElementInViewport(section)) {
        section.classList.add('loaded');
    }
}

    function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

    function handleLazyLoad() {
    lazySections.forEach(function (section) {
        lazyLoadSection(section);
    });
}

  handleLazyLoad(); // Carregue as seções que são visíveis inicialmente

    window.addEventListener('scroll', function () {
    handleLazyLoad();
});
});

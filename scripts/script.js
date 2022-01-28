const ratings = document.querySelectorAll('.rating')

if (ratings.length > 0) {
    initRatings()
}

function initRatings() {
    let ratingActive, ratingValue;

    for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating)
    }
}

function initRating(rating) {
    initRatingVars(rating)

    setRatingActiveWidth()

    if (rating.classList.contains('rating-set')) {
        setRating(rating)
    }
}

function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-active')
    ratingValue = rating.querySelector('.rating-value')
}

function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i/ 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
}

function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-item')
    for (let i = 0; i < ratingItems.length; i++) {
        const ratingItem = ratingItems[i];
        ratingItem.addEventListener('mouseenter', function(x) {
            
            initRatingVars(rating)
            setRatingActiveWidth(ratingItem.value)
        });
        ratingItem.addEventListener('mouseleave', function(y) {

            setRatingActiveWidth()
        });
        ratingItem.addEventListener('click', function(z) {
            ratingValue.innerHTML = i + 1;
            setRatingActiveWidth()
        })
    }
}
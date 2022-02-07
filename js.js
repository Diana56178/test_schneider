function getNextMondayDate(asString = false) {

    var today = new Date();
    var day = today.getUTCDay() === 0 ? 7 : today.getUTCDay();
    var numberOfDaysToAdd = 7 - day + 1;
    var nextMondayDate = new Date(new Date().setUTCDate(today.getUTCDate() + numberOfDaysToAdd));

    if (asString) {
        var mMonth = nextMondayDate.getUTCMonth() + 1;

        if (mMonth < 10) {
            mMonth = '0' + mMonth;
        }

        var mDay = nextMondayDate.getUTCDate();
        if (mDay < 10) {
            mDay = '0' + mDay;
        }

        var mYear = nextMondayDate.getUTCFullYear();

        return mDay + "." + mMonth + "." + mYear;
    } else {

        return nextMondayDate
    }
}

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });

    $('.sale-till').append(getNextMondayDate(true))
    $('.sail').css('visibility', 'visible')
});
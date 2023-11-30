document.addEventListener("DOMContentLoaded", function () {
    let countdownElement = document.getElementById("countdown");

    function countdown(number, callback) {
        if (number > 0) {
            countdownElement.innerText = number;
            setTimeout(function () {
                countdown(number - 1, callback);
            }, 1000);
        } else {
            callback();
        }
    }

    countdown(5, function () {
        countdownElement.innerText = "Happy Independence Day!";
    });
});

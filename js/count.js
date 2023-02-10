const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let initial_count = 0;
    const final_count = counter.dataset.count;
    // console.log(final_count);

    let  counting = setInterval(updateCounting, 1);

   function updateCounting() {

        if (initial_count < 1000) {
            initial_count += 5;
            counter.innerText = initial_count;
        }

        if (initial_count >= 1000) {
            initial_count += 100;
            counter.innerText = (initial_count / 1000).toFixed(1) + 'K+';
        }

        if (initial_count >= 10000) {
            initial_count += 5000;
        }

        if (initial_count >= 1000000) {
            initial_count += 500000;
            counter.innerText = (initial_count / 1000000).toFixed(1) + 'M+';
        }

        if (initial_count >= final_count) {
            clearInterval(counting);
        }
    }
})
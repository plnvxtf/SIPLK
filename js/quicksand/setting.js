jQuery.noConflict();
jQuery(document).ready(function($) {
    // Check if quicksand plugin is available
    if ($.fn.quicksand) {
        // Clone applications to get a second collection
        const $data = $(".portfolio-area").clone();

        // Cache frequently used elements
        const $portfolioCateg = $('.portfolio-categ li');
        const $filterLi = $(".filter li");
        const $portfolioArea = $(".portfolio-area");

        // Bind click event to portfolio categories
        $portfolioCateg.on('click', function(e) {
            e.preventDefault();

            // Remove active class from all filter li elements
            $filterLi.removeClass("active");

            // Get the last category class from the clicked element
            const filterClass = $(this).attr('class').split(' ').slice(-1)[0];

            // Filter data based on the category class
            let $filteredData;
            if (filterClass === 'all') {
                $filteredData = $data.find('.item-thumbs');
            } else {
                $filteredData = $data.find(`.item-thumbs[data-type="${filterClass}"]`);
            }

            // Use quicksand plugin to filter and animate the portfolio area
            $portfolioArea.quicksand($filteredData, {
                duration: 600,
                adjustHeight: 'auto'
            });

            // Add active class to the clicked element
            $(this).addClass("active");
        });
    }
});
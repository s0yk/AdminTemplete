$(function(){
    
    // Gnb
    let hasDepth = $('.gnb-main-list > li > a');
    $(hasDepth).on('click', function () {
        if ((!$(this).hasClass('is-open'))) {
            $(hasDepth).removeClass('is-active');
            $(hasDepth).removeClass('is-open');
            $(hasDepth).siblings('.gnb-sub-list').slideUp(200);
            $(this).addClass('is-open');
            $(this).siblings('.gnb-sub-list').slideDown(200);
        } else { 
            $(this).removeClass('is-open');
            $(this).siblings('.gnb-sub-list').slideUp(200);
        }
    });

    // Tooltip Activate
    $('[data-toggle="tooltip"]').tooltip();

    // Tooltip Custom Style
    $('[data-toggle="tooltip"').on('shown.bs.tooltip', function(){
        const tooltipId = $(this).attr('aria-describedby');
        const classes = $(this).attr('class').split(/\s+/);
        const tooltipTheme = classes.find(cls => cls.startsWith('tooltip'))

        $('#' + tooltipId).addClass(tooltipTheme);
    })

    // Popover Activate
    $('[data-toggle="popover"]').popover()
});
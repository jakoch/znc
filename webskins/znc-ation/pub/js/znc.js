/*
 * ZNC Javascript - http://znc.in
 */
$(document).ready(function()
{
    /* binds the tooltip to input formelements
       uses "title" attr as source for tooltip text */
    $('input[title]').poshytip({
        className: 'tip-yellowsimple',
        showOn: 'focus',
        alignTo: 'target',
        alignX: 'inner-left',
        offsetX: 0,
        offsetY: 5
    });
})
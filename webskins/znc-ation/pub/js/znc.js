/*
 * ZNC Javascript - http://znc.in
 */
$(document).ready(function()
{
    /**
     * jQ.Poshytip
     * This binds the tooltip to input formelements
     * and uses "title" attr as source for tooltip text.
     */
    $('input[title]').poshytip({
        className: 'tip-yellowsimple',
        showOn: 'focus',
        alignTo: 'target',
        alignX: 'inner-left',
        offsetX: 0,
        offsetY: 5
    });
    /**
     * jQ.Checkbox
     * Hides input formelements of type checkbox and radio.
     * Replaces placeholder image empty.png with an image toggle.
     */
    $('input:checkbox').checkbox({empty: '/pub/img/empty.png'});
    $('input:radio').checkbox({empty: '/pub/img/empty.png'});
})
$(function () {
    $("#slider-width").slider({
        range: true,
        min: 0,
        max: 450,
        values: [75, 450],
        slide: function (event, ui) {
            $("#slider-width-from").val(ui.values[0]);
            $("#slider-width-to").val(ui.values[1]);
        }
    });

    $("#slider-width-from").val($("#slider-width").slider("values", 0));

    $("#slider-width-to").val($("#slider-width").slider("values", 1));

    $("#slider-width-from").on('input', function (v) {
        $("#slider-width").slider("values", 0, v.target.value)
    });

    $("#slider-width-to").on('input', function (v) {
        $("#slider-width").slider("values", 1, v.target.value)
    });
});

$(function () {
    $("#slider-length").slider({
        range: true,
        min: 0,
        max: 450,
        values: [225, 452],
        slide: function (event, ui) {
            $("#slider-length-from1").val(ui.values[0]);
            $("#slider-length-to1").val(ui.values[1]);
        }
    });

    $("#slider-length-from1").val($("#slider-length").slider("values", 0));

    $("#slider-length-to1").val($("#slider-length").slider("values", 1));

    $("#slider-length-from1").on('input', function (v) {
        $("#slider-length").slider("values", 0, v.target.value)
    });

    $("#slider-length-to1").on('input', function (v) {
        $("#slider-length").slider("values", 1, v.target.value)
    });
});

$(function () {
    $("#slider-height").slider({
        range: true,
        min: 0,
        max: 450,
        values: [52, 156],
        slide: function (event, ui) {
            $("#slider-height-from2").val(ui.values[0]);
            $("#slider-height-to2").val(ui.values[1]);
        }
    });

    $("#slider-height-from2").val($("#slider-height").slider("values", 0));

    $("#slider-height-to2").val($("#slider-height").slider("values", 1));

    $("#slider-height-from2").on('input', function (v) {
        $("#slider-height").slider("values", 0, v.target.value)
    });

    $("#slider-height-to2").on('input', function (v) {
        $("#slider-height").slider("values", 1, v.target.value)
    });
});

// Handle close filter

$('.filter-btn').click(function () {
    $("body").addClass("filter-open");
});

$('.handleClose').click(function () {
    $("body").removeClass("filter-open");
});
$(document).ready(function () {

    var keypressSlider = document.getElementById('input-range-container');

    var input0 = document.getElementById('min_range');
    var input1 = document.getElementById('max_range');
    var inputs = [input0, input1];

    if (keypressSlider) {
        noUiSlider.create(keypressSlider, {
            start: [600, 14000],
            connect: true,
            tooltips: [true, wNumb({
                decimals: 1
            })],
            range: {
                'min': [0, 100],
                'max': [15000, 100]
            }
        });
        var leftArrow = document.querySelectorAll(".noUi-handle.noUi-handle-upper")[0];
        var rightArrow = document.querySelectorAll(".noUi-handle.noUi-handle-lower")[0];
        var arrow = [leftArrow, rightArrow];

        function clickPoz(e) {
            keypressSlider.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = values[handle];
            });
        }
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("click", clickPoz, false);
            arrow[i].addEventListener("mousedown", clickPoz, false);
        }

        inputs.forEach(function (input, handle) {

            input.addEventListener('change', function () {
                keypressSlider.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function (e) {

                var values = keypressSlider.noUiSlider.get();
                var value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = keypressSlider.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];

                var position;

                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {

                    case 13:
                        keypressSlider.noUiSlider.setHandle(handle, this.value);
                        break;

                    case 38:

                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }

                        // null = edge of slider
                        if (position !== null) {
                            keypressSlider.noUiSlider.setHandle(handle, value + position);
                        }

                        break;

                    case 40:

                        position = step[0];

                        if (position === false) {
                            position = 1;
                        }

                        if (position !== null) {
                            keypressSlider.noUiSlider.setHandle(handle, value - position);
                        }

                        break;
                }
            });
        });
    }
    $(document).ready(function () {
        $('select').niceSelect();
    });
});

    var colorPickerPat = new iro.ColorPicker(".ms-colorpicker-pat", {
        width: 180,
        color: "rgb(252, 252, 252)",
        borderWidth: 1,
        borderColor: "#1b1b1b",
    });

    var valuesPat = document.getElementById("valuesPat");
    var hexInputPat = document.getElementById("hexInputPat");
    var swatchPat = document.getElementById("colorSwatchPat");

    // https://iro.js.org/guide.html#color-picker-events
    colorPickerPat.on(["color:init", "color:change"], function(color) {
        const svgsc = document.querySelectorAll('#my-svg');
        valuesPat.innerHTML = [
            "hex: " + color.hexString,
            "rgb: " + color.rgbString,
            "hsl: " + color.hslString,
        ].join("<br>");

        hexInputPat.value = color.hexString;
        swatchPat.style.backgroundColor = color.hexString;
        
        let selectedColor = color.hexString;
        
        svgsc.forEach(svg => {
          const paths = svg.querySelectorAll('path');
          paths.forEach(path => {
            path.setAttribute('stroke', selectedColor);
          });
        });
    });

    hexInputPat.addEventListener('change', function() {
        colorPickerPat.color.hexString = this.value;
        swatchPat.style.backgroundColor = this.value;
    });

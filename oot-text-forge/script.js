var input = document.getElementById("codeoutput");
if (input) {
    input.addEventListener("keyup", updateText);
}
var output = document.getElementById("output");
var mapObj = {
    "TWO_CHOICE": "➜&nbsp;&nbsp;&nbsp;",
    "UNSKIPPABLE": "",
    "PERSISTENT": "",
    "\\n": "<br>",
    "\"": "",
};
var iconMap = {
    45: "<div class=\"ico\"><img src=\"img\/45.png\"></div>",
    47: "<div class=\"ico\"><img src=\"img\/47.png\"></div>",
    48: "<div class=\"ico\"><img src=\"img\/48.png\"></div>",
    49: "<div class=\"ico\"><img src=\"img\/49.png\"></div>",
    50: "<div class=\"ico\"><img src=\"img\/50.png\"></div>",
    72: "<div class=\"ico\"><img src=\"img\/72.png\"></div>",
    51: "<div class=\"ico\"><img src=\"img\/51.png\"></div>",
    52: "<div class=\"ico\"><img src=\"img\/52.png\"></div>",
    55: "<div class=\"ico\"><img src=\"img\/55.png\"></div>",
    61: "<div class=\"ico\"><img src=\"img\/61.png\"></div>",
    53: "<div class=\"ico\"><img src=\"img\/53.png\"></div>",
    54: "<div class=\"ico\"><img src=\"img\/54.png\"></div>",
    37: "<div class=\"ico\"><img src=\"img\/37.png\"></div>",
    38: "<div class=\"ico\"><img src=\"img\/38.png\"></div>",
    36: "<div class=\"ico\"><img src=\"img\/36.png\"></div>",
    39: "<div class=\"ico\"><img src=\"img\/39.png\"></div>",
    40: "<div class=\"ico\"><img src=\"img\/40.png\"></div>",
    41: "<div class=\"ico\"><img src=\"img\/41.png\"></div>",
    42: "<div class=\"ico\"><img src=\"img\/42.png\"></div>",
    43: "<div class=\"ico\"><img src=\"img\/43.png\"></div>",
    113: "<div class=\"ico\"><img src=\"img\/113.png\"></div>",
    6: "<div class=\"ico\"><img src=\"img\/6.png\"></div>",
    3: "<div class=\"ico\"><img src=\"img\/3.png\"></div>",
    2: "<div class=\"ico\"><img src=\"img\/2.png\"></div>",
    9: "<div class=\"ico\"><img src=\"img\/9.png\"></div>",
    1: "<div class=\"ico\"><img src=\"img\/1.png\"></div>",
    14: "<div class=\"ico\"><img src=\"img\/14.png\"></div>",
    10: "<div class=\"ico\"><img src=\"img\/10.png\"></div>",
    0: "<div class=\"ico\"><img src=\"img\/0.png\"></div>",
    17: "<div class=\"ico\"><img src=\"img\/17.png\"></div>",
    15: "<div class=\"ico\"><img src=\"img\/15.png\"></div>",
    8: "<div class=\"ico\"><img src=\"img\/8.png\"></div>",
    103: "<div class=\"ico\"><img src=\"img\/103.png\"></div>",
    104: "<div class=\"ico\"><img src=\"img\/104.png\"></div>",
    102: "<div class=\"ico\"><img src=\"img\/102.png\"></div>",
    105: "<div class=\"ico\"><img src=\"img\/105.png\"></div>",
    107: "<div class=\"ico\"><img src=\"img\/107.png\"></div>",
    106: "<div class=\"ico\"><img src=\"img\/106.png\"></div>",
    20: "<div class=\"ico\"><img src=\"img\/20.png\"></div>",
    21: "<div class=\"ico\"><img src=\"img\/21.png\"></div>",
    22: "<div class=\"ico\"><img src=\"img\/22.png\"></div>",
    23: "<div class=\"ico\"><img src=\"img\/23.png\"></div>",
    24: "<div class=\"ico\"><img src=\"img\/24.png\"></div>",
    25: "<div class=\"ico\"><img src=\"img\/25.png\"></div>",
    16: "<div class=\"ico\"><img src=\"img\/16.png\"></div>",
    7: "<div class=\"ico\"><img src=\"img\/7.png\"></div>",
    62: "<div class=\"ico\"><img src=\"img\/62.png\"></div>",
    63: "<div class=\"ico\"><img src=\"img\/63.png\"></div>",
    64: "<div class=\"ico\"><img src=\"img\/64.png\"></div>",
    11: "<div class=\"ico\"><img src=\"img\/11.png\"></div>",
    66: "<div class=\"ico\"><img src=\"img\/66.png\"></div>",
    67: "<div class=\"ico\"><img src=\"img\/67.png\"></div>",
    69: "<div class=\"ico\"><img src=\"img\/69.png\"></div>",
    70: "<div class=\"ico\"><img src=\"img\/70.png\"></div>",
    75: "<div class=\"ico\"><img src=\"img\/75.png\"></div>",
    77: "<div class=\"ico\"><img src=\"img\/77.png\"></div>",
    78: "<div class=\"ico\"><img src=\"img\/78.png\"></div>",
    79: "<div class=\"ico\"><img src=\"img\/79.png\"></div>",
    81: "<div class=\"ico\"><img src=\"img\/81.png\"></div>",
    82: "<div class=\"ico\"><img src=\"img\/82.png\"></div>",
    28: "<div class=\"ico\"><img src=\"img\/28.png\"></div>",
    86: "<div class=\"ico\"><img src=\"img\/86.png\"></div>",
    87: "<div class=\"ico\"><img src=\"img\/87.png\"></div>",
    119: "<div class=\"ico\"><img src=\"img\/119.png\"></div>",
    118: "<div class=\"ico\"><img src=\"img\/118.png\"></div>",
    117: "<div class=\"ico\"><img src=\"img\/117.png\"></div>",
    111: "<div class=\"ico\"><img src=\"img\/111.png\"></div>",
    35: "<div class=\"ico\"><img src=\"img\/35.png\"></div>",
    73: "<div class=\"ico\"><img src=\"img\/73.png\"></div>",
    4: "<div class=\"ico\"><img src=\"img\/4.png\"></div>",
    12: "<div class=\"ico\"><img src=\"img\/12.png\"></div>",
    18: "<div class=\"ico\"><img src=\"img\/18.png\"></div>",
    80: "<div class=\"ico\"><img src=\"img\/80.png\"></div>",
    29: "<div class=\"ico\"><img src=\"img\/29.png\"></div>",
    112: "<div class=\"ico\"><img src=\"img\/112.png\"></div>",
    108: "<div class=\"ico\"><img src=\"img\/108.png\"></div>",
    109: "<div class=\"ico\"><img src=\"img\/109.png\"></div>",
    110: "<div class=\"ico\"><img src=\"img\/110.png\"></div>",
    32: "<div class=\"ico\"><img src=\"img\/32.png\"></div>",
    26: "<div class=\"ico\"><img src=\"img\/26.png\"></div>",
    27: "<div class=\"ico\"><img src=\"img\/27.png\"></div>",
    33: "<div class=\"ico\"><img src=\"img\/33.png\"></div>",
    59: "<div class=\"ico\"><img src=\"img\/59.png\"></div>",
    5: "<div class=\"ico\"><img src=\"img\/5.png\"></div>",
    13: "<div class=\"ico\"><img src=\"img\/13.png\"></div>",
    19: "<div class=\"ico\"><img src=\"img\/19.png\"></div>",
    115: "<div class=\"ico\"><img src=\"img\/115.png\"></div>",
    114: "<div class=\"ico\"><img src=\"img\/114.png\"></div>",
    116: "<div class=\"ico\"><img src=\"img\/116.png\"></div>",
    83: "<div class=\"ico\"><img src=\"img\/83.png\"></div>",
    84: "<div class=\"ico\"><img src=\"img\/84.png\"></div>",
    88: "<div class=\"ico\"><img src=\"img\/88.png\"></div>",
    30: "<div class=\"ico\"><img src=\"img\/30.png\"></div>"
};
var buttonMap = {
    "\[A\]": "A",
    "\[B\]": "B",
    "\[C-Left\]": "◄",
    "\[C-Up\]": "▲",
    "\[C-Down\]": "▼",
    "\[C-Right\]": "►"
};


var scriptBuffer = "";

function toggleCommandList() {
    var div = document.getElementById("infowindow");
    if (div.style.display == "none") {
        div.style.display = "inline-block";
    } else {
        div.style.display = "none";
    }
}

function openFaq() {
    var faqDiv = document.getElementById("commandListWindow");
    if (faqDiv.style.display == "none") {
        faqDiv.style.display = "inline-block";
    } else {
        faqDiv.style.display = "none";
    }
}

let waveTime = 0;
let last = performance.now();
function updateWaveAnimation() {
    const now = performance.now();
    const deltaMs = now - last;
    last = now;
    waveTime += deltaMs / 50.0;

    document.querySelectorAll('.wave-char').forEach(char => {
        const container = char.parentElement;
        let waveY = 0;
        let shakeX = 0, shakeY = 0;

        if (container.classList.contains('wave')) {
            const intensity = parseInt(container.dataset.wave, 16) || 0;
            const amplitude = (intensity / 255) * 80;
            const speed = 0.3;
            const wavelength = 0.75;
            const i = Array.from(container.children).indexOf(char);
            waveY = Math.sin(waveTime * speed - i * wavelength) * amplitude;
        }

        if (container.classList.contains('shake')) {
            const intensity = parseInt(container.dataset.shake, 16) || 0;
            const amplitude = (intensity / 255) * 80;
            shakeX = (Math.random() - 0.5) * 2 * amplitude;
            shakeY = (Math.random() - 0.5) * 2 * amplitude;
        }

        char.style.transform = `translate(${shakeX}px, ${waveY + shakeY}px)`;
    });

    requestAnimationFrame(updateWaveAnimation);
}

function splitWaveAndShakeLetters() {
    document.querySelectorAll(".wave, .shake").forEach(container => {
        if (container.dataset.splitDone) return;
        if (!container.classList.contains('wave') && !container.classList.contains('shake')) return;
        const text = container.textContent;
        const classes = container.className.split(' ').filter(c => c !== 'wave-char');
        container.innerHTML = "";
        [...text].forEach(ch => {
            const span = document.createElement("span");
            span.textContent = ch;
            span.classList.add("wave-char", ...classes);
            container.appendChild(span);
        });
        container.dataset.splitDone = "true";
    });
}

splitWaveAndShakeLetters();
requestAnimationFrame(updateWaveAnimation);

const colorMap = {
    R: 'RED',
    G: 'ADJUSTABLE',
    B: 'BLUE',
    L: 'LIGHTBLUE',
    P: 'PURPLE',
    Y: 'YELLOW',
    W: 'DEFAULT',
    TOK: 'TOK',
    LYN: 'LYN',
    IGA: 'IGA',
    OKO: 'OKO',
    RAINBOW: 'RAINBOW',
    GR: 'GREY',
    PLAYER: 'PLAYER',
    O: 'ORANGE',
    HP: 'HEXCOLOR_HOT_PINK',
    ANOUKI: 'HEXCOLOR_ANOUKI'
};

function expandColors(text) {
    text = String(text ?? '');
    return text.replace(/\$[A-Z]+/gi, match => {
        const key = match.slice(1).toUpperCase();

        if (colorMap[key] && colorMap[key].match("HEXCOLOR")) {
            return `CUSTOM(CUSTOM_HEXCOLOR, ${colorMap[key]})`
        }

        return colorMap[key] ? `COLOR(${colorMap[key]})` : match;
    });
}

function compressColors(text) {
    text = String(text ?? '');

    text = text.replace(/COLOR\(([A-Z_]+)\)/gi, (_, name) => {
        const entry = Object.entries(colorMap).find(([k, v]) => v === name.toUpperCase());
        return entry ? `$${entry[0]}` : `COLOR(${name})`;
    });

    text = text.replace(/CUSTOM\(CUSTOM_HEXCOLOR,\s*([A-Z0-9_]+)\)/gi, (_, name) => {
        const entry = Object.entries(colorMap).find(([k, v]) => v === name.toUpperCase());
        return entry ? `$${entry[0]}` : `CUSTOM(CUSTOM_HEXCOLOR, ${name})`;
    });

    return text;
}

function processCodeToHtml(code) {
    code = code.replace(/TWO_CHOICE/gi, mapObj["TWO_CHOICE"])
        .replace(/PERSISTENT|UNSKIPPABLE|\\n/gi, m => mapObj[m] || '')
        .replace(/\n/g, '')
        .replace(/QUICKTEXT_(ENABLE|DISABLE)|EVENT|SFX\(.*?\)/gi, '')
        .replace(/BOX_BREAK(_DELAYED\(.*?\))?/gi, 'BOX_BREAK')
        .replace(/DEFINE_MESSAGE\(.*? /gi, '');


    const commandRegex = /COLOR\([A-Z]+\)|CUSTOM\(CUSTOM_(WAVE|SHAKE),\s*"\\x[0-9A-Fa-f]{2}"\)|CUSTOM\(CUSTOM_HEXCOLOR,\s*(?:"(?:\\x[0-9A-Fa-f]{2})+"|[A-Z0-9_]+)\)|BOX_BREAK|ITEM_ICON\(\\x[0-9A-Fa-f]{2}\)|SHIFT\(\s*"\\x[0-9A-Fa-f]{2}"\)|TEXTBOX_TYPE_(BLACK|BLUE|WOODEN)|TEXTBOX_POS_(TOP|MIDDLE|BOTTOM|VARIABLE)|\[A\]|\[B\]|\[C-(Left|Up|Down|Right)\]|\\(.*?\\)|"[^"\\]*(?:\\.[^"\\]*)*"/gi;
    let html = '';
    let pos = 0;
    let inBoxBreak = false;

    let currentColor = 'white';
    let currentExtraClasses = [];
    let activeWave = 0;
    let activeShake = 0;
    let openSpan = false;

    function closeSpan() {
        if (openSpan) {
            html += '</span>';
            openSpan = false;
        }
    }

    function openNewSpan() {
        closeSpan();
        let classes = [];
        let dataAttrs = '';

        if (activeWave > 0) {
            classes.push('wave');
            dataAttrs += ` data-wave="${activeWave.toString(16).toUpperCase().padStart(2, '0')}"`;
        }

        if (activeShake > 0) {
            classes.push('shake');
            dataAttrs += ` data-shake="${activeShake.toString(16).toUpperCase().padStart(2, '0')}"`;
        }

        classes = classes.concat(currentExtraClasses);

        let style = currentColor ? `color: ${currentColor};` : '';
        html += `<span${classes.length ? ` class="${classes.join(' ')}"` : ''}${dataAttrs}${style ? ` style="${style}"` : ''}>`;
        openSpan = true;
    }

    openNewSpan();

    while (pos < code.length) {
        commandRegex.lastIndex = pos;
        const match = commandRegex.exec(code);

        if (match && match.index === pos) {
            const cmd = match[0];

            if (cmd.startsWith('COLOR(')) {
                const colName = cmd.slice(6, -1).toUpperCase();
                const colMap = {
                    RED: 'red',
                    DEFAULT: 'white',
                    ADJUSTABLE: 'lightgreen',
                    BLUE: 'blue',
                    LIGHTBLUE: 'lightblue',
                    PURPLE: 'pink',
                    YELLOW: 'yellow',
                    TOK: '#8aeb44',
                    LYN: '#e03a64',
                    IGA: '#a94deb',
                    OKO: '#7df0c4',
                    RAINBOW: 'transparent',
                    GREY: '#4a4a4a',
                    PLAYER: '#ded649',
                    ORANGE: '#ffd500',
                };
                currentColor = colMap[colName] || 'white';
                currentExtraClasses = colName === 'RAINBOW' ? ['rainbow-text'] : [];
                openNewSpan();
            } else if (cmd.startsWith('CUSTOM(CUSTOM_WAVE')) {
                const hex = cmd.match(/\\x([0-9A-Fa-f]{2})/)[1];
                activeWave = parseInt(hex, 16);
                openNewSpan();
            } else if (cmd.startsWith('CUSTOM(CUSTOM_SHAKE')) {
                const hex = cmd.match(/\\x([0-9A-Fa-f]{2})/)[1];
                activeShake = parseInt(hex, 16);
                openNewSpan();
            } else if (cmd.startsWith('CUSTOM(CUSTOM_HEXCOLOR')) {
                const outer = cmd.match(/CUSTOM\(CUSTOM_HEXCOLOR,\s*(?:"((?:\\x[0-9A-Fa-f]{2})+)"|([A-Z0-9_]+))\)/i);
                if (!outer) return;

                const byteSequence = outer[1];
                const name = outer[2];

                if (byteSequence) {
                    const byteRe = /\\x([0-9A-Fa-f]{2})/g;
                    const parts = [];
                    let m;
                    while ((m = byteRe.exec(byteSequence)) !== null) {
                        parts.push(m[1]);
                    }

                    if (parts.length > 0) {
                        const hex = parts.join('').toUpperCase();
                        currentColor = `#${hex}`;
                    }
                } else if (name) {
                    currentColor = "#" + hexColors[`${name.replace("HEXCOLOR_", "")}`] ?? null;
                }
                openNewSpan();
            } else if (cmd === 'BOX_BREAK') {
                closeSpan();
                if (!inBoxBreak) {
                    inBoxBreak = true;
                }
                html += `<div class="boxbreak">`;
                openNewSpan();
            } else if (cmd.startsWith('ITEM_ICON')) {
                const hex = cmd.match(/\\x([0-9A-Fa-f]{2})/)[1];
                const n = parseInt(hex, 16);
                html += iconMap[n] || '';
            } else if (cmd.startsWith('SHIFT')) {
                const hex = cmd.match(/\\x([0-9A-Fa-f]{2})/)[1];
                const n = parseInt(hex, 16);
                const spaces = Math.floor(n / 4) - 1;
                html += ' '.repeat(Math.max(0, spaces));
            } else if (cmd.startsWith('TEXTBOX_TYPE_') || cmd.startsWith('TEXTBOX_POS_')) {
                html += `<div id="${cmd}"></div>`;
            } else if (buttonMap[cmd]) {
                html += buttonMap[cmd];
            } else if (cmd.match(/\\(.*?)\\/)) {
                html += `<i>${cmd.slice(1, -1)}</i>`;
            } else if (cmd.startsWith('"')) {
                const text = cmd.slice(1, -1);
                if (!openSpan) openNewSpan();
                html += text;
            }

            pos += cmd.length;
            while (pos < code.length && code[pos].match(/\s/)) {
                pos++;
            }
        } else {
            commandRegex.lastIndex = pos;
            const nextMatch = commandRegex.exec(code);
            pos = nextMatch ? nextMatch.index : code.length;
        }
    }

    closeSpan();
    if (inBoxBreak) {
        html += '</div>';
    }
    return html;
}

function updateText() {
    codeToScript();
    const val = processCodeToHtml(input.value);
    output.innerHTML = val;
    splitWaveAndShakeLetters();
}

function iconTag(match, p1) {
    return `ITEM_ICON("\\x${p1}")`;
}

function shiftTag(match, p1) {
    return `SHIFT("\\x${p1}")`;
}

function sfxTag(match, p1) {
    return `SFX("\\x${p1}")`;
}

function waveTag(match, p1, offset, string) { 
    return "CUSTOM\(CUSTOM_WAVE, \"\\x" + p1 + "\"\)"; 
} 

function shakeTag(match, p1, offset, string) { 
    return "CUSTOM\(CUSTOM_SHAKE, \"\\x" + p1 + "\"\)"; 
}

function waveEndTag(match, p1, offset, string) { 
    return "CUSTOM\(CUSTOM_WAVE, \"\\x" + "00" + "\"\)";
} 

function shakeEndTag(match, p1, offset, string) { 
    return "CUSTOM\(CUSTOM_SHAKE, \"\\x" + "00" + "\"\)"; 
}

const hexColors = {
    HOT_PINK: `ff6ed1`,
    ANOUKI: `44b882`
};

function hexColorTag(match, p1, offset, string) { 
    let color = Object.entries(hexColors).find(([k, v]) => v.toUpperCase() === p1.toUpperCase());

    if (color) {
        return `CUSTOM\(CUSTOM_HEXCOLOR, HEXCOLOR_${color[0]})`.toUpperCase(); 
    }

    let r = p1.slice(0, 2);
    let g = p1.slice(2, 4);
    let b = p1.slice(4, 6);
    return `CUSTOM\(CUSTOM_HEXCOLOR, \"\\x${r}\\x${g}\\x${b}\"\)`.replace(/\\x([0-9a-f]{2})/g, (_, hex) => `\\x${hex.toUpperCase()}`);
}

function updateEditText() {
    const scriptInput = document.getElementById("otherinput");
    const codeOutput = document.getElementById("codeoutput");

    let text = expandColors(scriptInput.value);

    text = text
        .replace(/#B\n/g, 'BOX_BREAK ')
        .replace(/#QE/g, 'QUICKTEXT_ENABLE')
        .replace(/#QD/g, 'QUICKTEXT_DISABLE')
        .replace(/#PE/g, 'PERSISTENT')
        .replace(/#E/g, 'EVENT')
        .replace(/#SFX\s([0-9A-Fa-f]{2})/g, sfxTag)
        .replace(/#S\s([0-9A-Fa-f]{2})/g, shiftTag)
        .replace(/#I\s([0-9A-Fa-f]{2})/g, iconTag)
        .replace(/#WAVE\s([0-9A-F0-9]{2})/g, waveTag)
        .replace(/#WE/g, waveEndTag)
        .replace(/#SHAKE\s([0-9A-Fa-f]{2})/g, shakeTag)
        .replace(/#SE/g, shakeEndTag)
        .replace(/#HEX\s([0-9A-Fa-f]{6})/g, hexColorTag)
        .replace(/#U/g, 'UNSKIPPABLE')
        .replace(/\\n/g, '')
        .replace(/\$N/g, '\\n')
        .replace(/\n/g, '"\\n"');

    codeOutput.value = text.replace(/"\\n"(?=BOX_BREAK)/g, '');

    updateText();
}

function codeToScript() {
    var codeInput = document.getElementById("codeoutput");
    var scriptOutput = document.getElementById("otherinput");

    var text = compressColors(codeInput.value);

    text = text.replace(/(?<!"\n")(?=BOX_BREAK)/g, '"\\n"');

    scriptOutput.value = text
        .replace(/UNSKIPPABLE/gi, '#U')
        .replace(/EVENT/gi, '#E')
        .replace(/BOX_BREAK /gi, '#B\n')
        .replace(/QUICKTEXT_ENABLE/g, '#QE')
        .replace(/QUICKTEXT_DISABLE/g, '#QD')
        .replace(/PERSISTENT/g, '#PE')
        .replace(/ITEM_ICON\(\\x([0-9A-Fa-f]{2})\)/g, '#I $1')
        .replace(/SFX\(\\x([0-9A-Fa-f]{2})\)/g, '#SFX $1')
        .replace(/SHIFT\("\\x([0-9A-Fa-f]{2})"\)/g, '#S $1')
        .replace(/CUSTOM\(CUSTOM_WAVE, "\\x([a-fA-F0-9]{2})"\)/g, '#WAVE $1')
        .replace(/CUSTOM\(CUSTOM_WAVE, "\\x00"\)/g, '#WE')
        .replace(/CUSTOM\(CUSTOM_SHAKE, "\\x([a-fA-F0-9]{2})"\)/g, '#SHAKE $1')
        .replace(/CUSTOM\(CUSTOM_SHAKE, "\\x00"\)/g, '#SE')
        .replace(
            /CUSTOM\(CUSTOM_HEXCOLOR,\s*"((?:\\x[0-9a-fA-F]{2})+)"\)/g,
            (_, bytes) => {
                // Extract each byte pair
                const hex = [...bytes.matchAll(/\\x([0-9a-fA-F]{2})/g)]
                .map(m => m[1])
                .join('')
                .toUpperCase();

                // Return "#HEX #RRGGBB..."
                return `#HEX ${hex}`;
            }
        )
        .replace(/"\\n"/g, '\n');
}

function defMsg() {
    var textId = document.getElementById("textid");
    var type = document.getElementById("boxtype");
    var pos = document.getElementById("boxpos");
    var defOutput = document.getElementById("defineoutput");
    var message = "DEFINE_MESSAGE(";

    switch (type.value) {
        case "black":
            type = "TEXTBOX_TYPE_BLACK";
            $("#output").css("background-color", "rgb(85 85 85 /10%)");
            break;
        case "blue":
            type = "TEXTBOX_TYPE_BLUE";
            $("#output").css("background-color", "rgb(0 0 136 /10%)");
            break;
        case "wooden":
            type = "TEXTBOX_TYPE_WOODEN";
            $("#output").css("background-color", "rgb(99 72 45)");
            break;
    }

    $("#output").css("border", "0px solid white");
    switch (pos.value) {
        case "top":
            pos = "TEXTBOX_POS_TOP";
            $("#output").css("border-top", "1px solid white");
            break;
        case "variable":
            pos = "TEXTBOX_POS_VARIABLE";
            $("#output").css("border-left", "1px solid white");
            break;
        case "middle":
            pos = "TEXTBOX_POS_MIDDLE";
            $("#output").css("border-right", "1px solid white");
            break;
        case "bottom":
            pos = "TEXTBOX_POS_BOTTOM";
            $("#output").css("border-bottom", "1px solid white");
            break;
    }
    defOutput.innerHTML = message + textId.value + ", " + type + ", " + pos + ",";
}

function copyToClipboard() {
    var d = document.getElementById("defineoutput");
    var c = document.getElementById("codeoutput").value;
    c = c.replace(/"\\n"/gi, '$1\n');
    navigator.clipboard.writeText(d.innerHTML + '\n' + c + ",\n\",\",\n\"\"\n)");
}
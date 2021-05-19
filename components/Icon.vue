<template>
    <div class="icon" v-bind:class="[name]" v-html="icons[name]">

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: [
        'name'
    ],
    data() {
        let suitStrokeWidth = 16

        // https://thenounproject.com/divulture/collection/knowledge-kit/
        return {
            icons: {
                'chevron-left': `<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" fill="currentColor" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <path d="M67.208,94.614c-0.53,0-1.039-0.21-1.414-0.586L23.178,51.416c-0.487-0.487-0.671-1.163-0.55-1.792  c0.071-0.381,0.255-0.746,0.55-1.041L65.794,5.972c0.375-0.375,0.884-0.586,1.414-0.586l0,0c0.53,0,1.039,0.211,1.414,0.586  l8.2,8.201c0.781,0.781,0.781,2.047,0,2.828L43.823,50l32.999,32.999c0.781,0.781,0.781,2.047,0,2.828l-8.2,8.201  C68.247,94.403,67.738,94.614,67.208,94.614z"/>
</svg>`,
                'old-logo': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68" fill="currentColor" x="0px" y="0px">
    <path fill-rule="evenodd" d="M716.143878,223.194706 L723.720583,235.980395 C724.51063,237.313599 723.549712,239 722,239 L706.777778,239 L716.143878,223.194706 L716.143878,223.194706 Z M713.819085,219.271617 L713.819085,219.271617 L702.128191,239 L690.259259,239 L707.884619,209.257206 L713.819085,219.271617 Z M705.559826,205.334117 L705.559826,205.334117 L685.609673,239 L673.740741,239 L699.62536,195.319706 L705.559826,205.334117 Z M697.300566,191.396617 L697.300566,191.396617 L669.091154,239 L658,239 C656.450288,239 655.48937,237.313599 656.279417,235.980395 L688.279417,181.980395 C689.05405,180.673202 690.94595,180.673202 691.720583,181.980395 L697.300566,191.396617 Z" transform="translate(-656 -181)"/>
</svg>`,
                'book': `<svg width="100%" height="100%" viewBox="0 0 280 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="Artboard1" transform="matrix(1,0,0,1,-60,0)">
        <rect x="60" y="0" width="280" height="400" style="fill:none;"/>
        <g style="fill:none;stroke:currentColor;stroke-width:20px;" transform="matrix(1.21847,0,0,1.21847,-33.1065,-54.283)">
            <g transform="matrix(0.868975,0,0,0.868975,8.82542,26.2049)">
                <path d="M100,100L100,320L260,380L260,120L100,60" />
            </g>
            <g transform="matrix(0.868975,0,0,0.868975,60.9639,8.82542)">
                <path d="M260,380L260,120L100,60" />
            </g>
            <g transform="matrix(0.868975,0,0,0.868975,26.2049,26.2049)">
                <path d="M140,342.5L140,120" />
            </g>
            <!--
                <g transform="matrix(0.868975,0,0,0.868975,0.135668,16.429)">
                    <path d="M140,342.5L140,120" />
                </g>
            -->
            <g transform="matrix(0.868975,0,0,0.868975,26.2049,26.2049)">
                <path d="M80,60L140,40"/>
            </g>
        </g>
    </g>
</svg>`,
                'spread': `<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" fill="currentColor" x="0px" y="0px" viewBox="0 0 612 700" enable-background="new 0 0 612 700" xml:space="preserve">
    <g>
        <path d="M198.1,507c11.4,0,20.7-9.2,20.6-20.6V205.8c0-2.1,1.7-3.8,3.8-3.8H365c11.4,0,20.6-9.2,20.6-20.6s-9.2-20.6-20.6-20.6   H222.5c-24.8,0-45,20.2-45,45v280.6C177.5,497.8,186.7,507,198.1,507z"/>
        <path d="M227.4,566l-36.5,23.6c-1,0.5-2,0.4-2.6,0.2c-0.7-0.2-1.7-0.6-2.3-1.7l-140.3-243c-0.7-1.1-0.6-2.2-0.4-2.9   s0.6-1.7,1.7-2.3l86.5-51.6c9.8-5.9,13-18.5,7.2-28.3c-5.9-9.8-18.5-13-28.3-7.2l-86.2,51.4c-10.3,6-17.7,15.7-20.8,27.3   c-3.1,11.7-1.5,23.8,4.5,34.2l140.2,242.9c6,10.4,15.8,17.9,27.4,21c3.9,1.1,7.9,1.6,11.8,1.6c7.8,0,15.5-2,22.5-6l0.5-0.3   l37.5-24.3c9.6-6.2,12.3-18.9,6.1-28.5C249.7,562.5,237,559.8,227.4,566z"/>
        <path d="M606.6,320.7c-3.2-11.7-10.6-21.4-21-27.4L460.4,221c-6.8-3.9-14.5-6-22.4-6c-16.1,0-31.1,8.6-39.1,22.5l-140.3,243   c-6,10.4-7.6,22.6-4.5,34.2c3.2,11.7,10.6,21.4,21,27.4l125.3,72.3c6.8,3.9,14.5,6,22.4,6c16.1,0,31-8.7,39-22.5l140.3-243   C608.1,344.5,609.7,332.3,606.6,320.7z M566.3,334.3L426,577.3c-0.7,1.4-2.2,1.9-3.3,1.9c-0.6,0-1.2-0.2-1.8-0.5l-125.2-72.3   c-1.1-0.6-1.5-1.6-1.7-2.3c-0.1-0.7-0.2-1.8,0.4-2.9l140.3-243c0.7-1.4,2.2-1.9,3.3-1.9c0.6,0,1.2,0.1,1.7,0.5l125.2,72.3   c1.1,0.6,1.5,1.6,1.7,2.3S566.9,333.2,566.3,334.3z"/>
    </g>
</svg>`,
                'about': `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" fill="currentColor" x="0px" y="0px">
    <path d="M44.32312,28.34406a5.08295,5.08295,0,1,1,5.08289,5.083A5.083,5.083,0,0,1,44.32312,28.34406ZM57.35425,71.7019c-1.43848-.46093-3.19666-1.81359-3.19666-5.67047V40.70923a.68479.68479,0,0,0-.6842-.68543H43.37927a2.57266,2.57266,0,0,0-2.57214,2.57331,2.59968,2.59968,0,0,0,1.83935,2.46429c1.43824.46094,3.19654,1.8136,3.19654,5.67047V66.03143c0,3.85688-1.7583,5.20948-3.19727,5.67047a2.5995,2.5995,0,0,0-1.83923,2.46424A2.57279,2.57279,0,0,0,43.37927,76.739H56.62073a2.57279,2.57279,0,0,0,2.57275-2.57281A2.59955,2.59955,0,0,0,57.35425,71.7019ZM95,50A45,45,0,1,1,50,5,45.05077,45.05077,0,0,1,95,50Zm-6,0A39,39,0,1,0,50,89,39.0439,39.0439,0,0,0,89,50Z"/>
</svg>`,
                'chevron-down': `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="currentColor" x="0px" y="0px" viewBox="0 0 100 100">
    <g transform="translate(0,-952.36218)">
        <path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:currentColor;enable-background:accumulate;" d="m 50.281282,1024.3605 a 4.0003998,4.0003998 0 0 0 2.40624,-1 l 40,-35.99996 a 4.0161114,4.0161114 0 1 0 -5.375,-5.9687 l -37.31254,33.59366 -37.3125,-33.59366 a 4.0161114,4.0161114 0 1 0 -5.3749998,5.9687 l 39.9999998,35.99996 a 4.0003998,4.0003998 0 0 0 2.9688,1 z" fill-opacity="1" marker="none" visibility="visible" display="inline" overflow="visible"/>
    </g>
</svg>`,
                'chevron-right': `<svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/"
    xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/"
    xmlns:graph="http://ns.adobe.com/Graphs/1.0/"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
    <switch>
        <g i:extraneous="self">
            <path d="M29.1,97.5c-1.4,0-2.9-0.5-4-1.6c-2.2-2.2-2.2-5.7,0-7.9L63,50L25.1,12.1c-2.2-2.2-2.2-5.7,0-7.9C27.3,2,30.8,2,33,4.1    L74.9,46c1.1,1.1,1.6,2.5,1.6,4c0,1.5-0.6,2.9-1.6,4L33,95.9C31.9,97,30.5,97.5,29.1,97.5z"/>
        </g>
    </switch>
</svg>`,
                'hierophant': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
    xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="Artboard11" serif:id="Artboard1">
        <path d="M200,20l155.885,90l-0,180l-155.885,90l-155.885,-90l0,-180l155.885,-90Z" style="fill:none;stroke:currentColor;stroke-width:25px;"/>
        <path d="M150,110l100,0" style="fill:none;stroke:currentColor;stroke-width:25px;"/>
        <g id="Layer1">
            <path d="M100,200l200,0" style="fill:none;stroke:currentColor;stroke-width:25px;"/>
        </g>
        <g id="Layer2">
            <path d="M44.115,290l311.77,0" style="fill:none;stroke:currentColor;stroke-width:25px;"/>
        </g>
        <g id="Layer3">
            <path d="M200,380l0,-360" style="fill:none;stroke:currentColor;stroke-width:25px;"/>
        </g>
    </g>
</svg>`,
                'settings': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
    xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <path style="fill:currentColor" d="M10.113,59.981l4.325,1.982c1.799,0.821 2.669,2.917 1.981,4.771l-1.692,4.455c-1.294,3.346 -0.814,7.128 1.274,10.046c2.031,2.973 5.411,4.752 9.013,4.743c1.336,0.004 2.661,-0.242 3.906,-0.725l4.455,-1.693c0.422,-0.172 0.876,-0.251 1.33,-0.233c1.481,-0.012 2.833,0.861 3.433,2.214l1.981,4.325c1.774,3.906 5.686,6.425 9.975,6.425c4.29,-0 8.201,-2.519 9.976,-6.425l2.027,-4.353c0.609,-1.345 1.956,-2.214 3.433,-2.214c0.454,-0.011 0.906,0.068 1.33,0.233l4.455,1.749c1.245,0.49 2.568,0.755 3.906,0.781c3.601,-0.066 6.958,-1.861 9.013,-4.818c2.052,-2.953 2.529,-6.732 1.274,-10.101l-1.739,-4.455c-0.666,-1.846 0.2,-3.92 1.981,-4.744l4.325,-1.981c3.906,-1.775 6.425,-5.686 6.425,-9.976c-0,-4.289 -2.519,-8.201 -6.425,-9.975l-4.325,-1.981c-1.803,-0.822 -2.674,-2.925 -1.981,-4.781l1.693,-4.455c1.293,-3.346 0.813,-7.129 -1.274,-10.046c-2.032,-2.973 -5.412,-4.752 -9.013,-4.743c-1.336,-0.004 -2.661,0.242 -3.907,0.725l-4.455,1.693c-0.422,0.172 -0.875,0.251 -1.33,0.233c-1.457,-0.002 -2.785,-0.859 -3.386,-2.186l-2.027,-4.325c-1.755,-3.921 -5.675,-6.452 -9.971,-6.437c-4.36,-0.004 -8.34,2.547 -10.157,6.511l-2.028,4.307c-0.609,1.345 -1.955,2.213 -3.432,2.213c-0.439,0.006 -0.874,-0.073 -1.283,-0.232l-4.456,-1.693c-4.701,-1.805 -10.071,-0.135 -12.919,4.018c-2.047,2.933 -2.524,6.694 -1.274,10.045l1.693,4.456c0.666,1.845 -0.201,3.919 -1.982,4.743l-4.325,1.981c-3.909,1.75 -6.436,5.651 -6.436,9.934c0.037,4.336 2.636,8.262 6.613,9.989Zm2.949,-13.412l4.325,-1.981c5.213,-2.38 7.725,-8.466 5.711,-13.831l-1.693,-4.455c-0.451,-1.14 -0.293,-2.434 0.418,-3.432c0.961,-1.461 2.839,-2.041 4.456,-1.377l4.455,1.693c1.229,0.473 2.534,0.718 3.851,0.725c4.294,-0.029 8.196,-2.563 9.97,-6.473l1.982,-4.325c0.613,-1.355 1.982,-2.218 3.469,-2.186c1.48,-0.012 2.833,0.86 3.432,2.214l1.944,4.297c1.764,3.928 5.674,6.478 9.98,6.511c1.318,0.002 2.624,-0.245 3.851,-0.726l4.455,-1.693c1.621,-0.589 3.45,-0.024 4.455,1.377c0.714,0.997 0.872,2.292 0.419,3.432l-1.693,4.455c-1.959,5.355 0.54,11.391 5.711,13.794l4.325,1.981c1.34,0.607 2.199,1.953 2.186,3.423c0.012,1.48 -0.86,2.833 -2.214,3.432l-4.297,1.991c-5.213,2.38 -7.726,8.466 -5.711,13.83l1.693,4.456c0.451,1.14 0.293,2.434 -0.419,3.432c-0.96,1.46 -2.838,2.041 -4.455,1.376l-4.455,-1.692c-1.229,-0.473 -2.534,-0.719 -3.851,-0.726c-4.293,0.022 -8.199,2.549 -9.98,6.455l-1.981,4.325c-0.603,1.33 -1.935,2.188 -3.395,2.186c-1.48,0.012 -2.833,-0.86 -3.432,-2.214l-2.019,-4.297c-1.786,-3.899 -5.691,-6.417 -9.98,-6.436c-1.317,-0.002 -2.624,0.244 -3.85,0.725l-4.456,1.693c-1.621,0.59 -3.449,0.025 -4.455,-1.377c-0.713,-0.997 -0.871,-2.292 -0.419,-3.432l1.693,-4.455c1.982,-5.365 -0.521,-11.427 -5.711,-13.831l-4.315,-2c-1.361,-0.598 -2.238,-1.955 -2.223,-3.441c-0.007,-1.479 0.869,-2.828 2.223,-3.423Z" style="fill-rule:nonzero;"/>
    <circle cx="50" cy="50" r="16" style="fill:none;stroke:currentColor;stroke-width:7.12px;"/>
</svg>`,
                'about2': `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 80 80" version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
    xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2; fill:currentColor;">
    <g id="Artboard1" transform="matrix(1,0,0,1,-10,-10)">
        <g>
            <g>
                <g>
                    <path d="M50,85c-19.3,0 -35,-15.7 -35,-35c0,-19.3 15.7,-35 35,-35c19.3,0 35,15.7 35,35c0,19.3 -15.7,35 -35,35Zm0,-64c-16.1,0 -29.1,13 -29.1,29c0,16 13,29.1 29.1,29.1c16.1,0 29.1,-13 29.1,-29.1c-0.1,-16 -13.1,-29 -29.1,-29Z" style="fill-rule:nonzero;"/>
                    <path d="M49.1,59.7c-1.6,0 -3,-1.3 -3,-3c0,-4.6 3,-8.6 7.3,-9.9c1.9,-0.6 3.2,-2.3 3.1,-4.3c0,-3.6 -3,-6.6 -6.6,-6.6c-3.6,0 -6.6,3 -6.6,6.6c0,1.6 -1.3,3 -3,3c-1.6,0 -3,-1.3 -3,-3c0.2,-6.9 5.8,-12.5 12.7,-12.5c6.9,-0 12.5,5.6 12.5,12.5c0,4.6 -3,8.6 -7.3,9.9c-1.9,0.6 -3.2,2.3 -3.1,4.3c0,1.6 -1.4,3 -3,3Z" style="fill-rule:nonzero;"/>
                    <circle cx="49.1" cy="65.9" r="3.6"/>
                </g>
            </g>
        </g>
    </g>
</svg>`,
                'cups': `<svg width="100%" height="100%" viewBox="0 0 170 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1,-199,0)">
        <g id="cup" transform="matrix(0.944444,0,0,1,-8.77778,0)">
            <rect x="220" y="0" width="180" height="200" style="fill:none;"/>
            <g id="Layer2" transform="matrix(1.05882,0,0,1,-28.8235,5)">
                <g transform="matrix(0.833333,0,0,0.860963,53.3333,-4.97326)">
                    <path d="M260,180L380,180" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth}px;"/>
                </g>
                <g transform="matrix(0.833333,0,0,0.860963,53.3333,25.4474)">
                    <path d="M320,144.667L320,80" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth}px;"/>
                </g>
                <g transform="matrix(1,0,0,1,0,-40)">
                    <path d="M370,80C370,107.596 347.596,130 320,130C292.404,130 270,107.596 270,80" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth * 0.9}px;"/>
                </g>
                <path d="M270,40L370,40" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth * 0.9}px;"/>
            </g>
        </g>
    </g>
</svg>`,
                'pentacles': `<svg width="100%" height="100%" viewBox="0 0 170 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1,-199,-220)">
        <g id="pentacles" transform="matrix(0.85,0,0,1,12,0)">
            <rect x="220" y="220" width="200" height="200" style="fill:none;"/>
            <g transform="matrix(1.17647,0,0,1,-56.4706,10)">
                <circle cx="320" cy="310" r="50" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth}px;"/>
            </g>
        </g>
    </g>
</svg>`,
                'swords': `<svg width="100%" height="100%" viewBox="0 0 120 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1,-4,0)">
        <g id="sword" transform="matrix(0.6,0,0,1,4,0)">
            <rect x="0" y="0" width="200" height="200" style="fill:none;"/>
            <g id="Layer1" transform="matrix(1.66667,0,0,1,-66.6667,0)">
                <g transform="matrix(1,0,0,1,1.42109e-14,-15)">
                    <path d="M70,150L130,150" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth}px;"/>
                </g>
                <g transform="matrix(1,0,0,0.875,0,12.5)">
                    <path d="M100,180L100,20" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth}px;"/>
                </g>
            </g>
        </g>
    </g>
</svg>`,
                'wands': `<svg width="100%" height="100%" viewBox="0 0 128 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1,0,0,1,0,-220)">
        <g id="wand" transform="matrix(0.64,0,0,1,0,0)">
            <rect x="0" y="220" width="200" height="200" style="fill:none;"/>
            <g transform="matrix(1.5625,0,0,0.875,-56.25,232.5)">
                <path d="M100,180L100,20" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth};"/>
            </g>
            <g transform="matrix(2.34375,0,0,1.5,-134.375,-120)">
                <circle cx="100" cy="280" r="20" style="fill:none;stroke:currentColor;stroke-width:${suitStrokeWidth * 0.6}px;"/>
            </g>
        </g>
    </g>
</svg>`
            }
        }
    }
})
</script>

<style lang="scss" scoped>
    .icon {
        color: var(--color-fg);
    }

    .icon.book, .icon.spread {
        // hack for uncleaned icons
        transform: translateY(-7px)
    }
</style>
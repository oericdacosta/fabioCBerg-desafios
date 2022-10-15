

//Através de um código de cor RGB, calcula-se o nível de luminosidade de uma cor, essa função retorna um valor entre 0 e 255
//quanto mais perto de 0, menos luminoso é e quanto mais perto de 255 mais luminoso é
const calcLuminosityOfColor = ([r, g, b] =  colorRGB) => ((r * 299) + (g * 587) + (b * 114)) / 1000;


//const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
//Através de expressões regulares, transforma uma cor hexadecimal em uma cor rgb, retornando um array com três valores [r, g, b];
const hexToRgb = hex => {
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
}


//const brightestColor = colors => colors.reduce((firstColor, secondColor) => (calcLuminosityOfColor(hexToRgb(firstColor)) > calcLuminosityOfColor(hexToRgb(secondColor))) ? firstColor : secondColor);*/
//dada uma array de cores em hexadecimal, retorna a cor mais clara
function brightestColor(colors){
    return colors.reduce(function(firstColor, secondColor){
        let luminosityOfFirstColor = calcLuminosityOfColor(hexToRgb(firstColor));
        let luminosityOfSecondColor = calcLuminosityOfColor(hexToRgb(secondColor));
        return (luminosityOfFirstColor > luminosityOfSecondColor) ? firstColor : secondColor;
    })
} 
console.log(brightestColor(["#001000", "#000000"]));
console.log(brightestColor(["#ABCDEF", "#123456"]));
console.log(brightestColor(["#00FF00", "#FFFF00"]));
//設置canvas元素
const cvs = document.getElementById('bg');
//獲取窗口尺寸
var width = window.innerWidth;
var heigth = window.innerHeight;
//設置canvas尺寸為窗口尺寸
cvs.width = width;
cvs.heigth = heigth;
console.log(cvs.heigth);
//獲得繪製上下文
const ctx = cvs.getContext('2d');
//列寬
const columnWidth =20;
//列數
const columnCount = Math.floor(window.innerWidth / columnWidth);
//記錄每列寫到第幾個文字
const columnNextIndexes = new Array(columnCount);
columnNextIndexes.fill(1);
//繪畫的函數
function draw(){
    ctx.fillStyle = 'rgba(240,240,240,0.1)';
    ctx.fillRect(0,0,width,heigth);
    const fz = 20;
    ctx.fillStyle = getRandomColor();
    ctx.font = `${fz}px "Roboto Mono"`;
    for(let i=0; i<columnCount;i++){
        const x = i*columnWidth;
        const y = fz*columnNextIndexes[i];
        ctx.fillText(getRandomChar(),x,y);
        if(y>heigth && Math.random()>0.99){
            columnNextIndexes[i] = 0;
        }else{
            columnNextIndexes[i]++;
        }
    }
    
}
//隨機顏色
function getRandomColor(){
    const fontColors = [
        '#33B5E5',
        '#0099CC',
        '#AA66CC',
        '#9933CC',
        '#99CC00',
        '#669900',
        '#FFBB33',
        '#FF8800',
        '#FF4444',
        '#CC0000',
    ];
    return fontColors[Math.floor(Math.random()* fontColors.length)];
}
function getRandomChar(){
    const str ='011010101110101101';
    return str[Math.floor(Math.random()* str.length)];
}
draw();
setInterval(draw,40);


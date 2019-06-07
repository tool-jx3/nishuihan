
var qas = [];

rawdata.forEach(ary => {
    qas.push({ q: ary[0], a: ary[1] })
});

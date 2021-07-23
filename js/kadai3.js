function kaijou(n) {
    var i, k = 1;
    for (i = 1; i <= n; i++) {
        k *= i;
    }
    return k;
}

function ncr(n, r) {
    var m;
    m = kaijou(n) / (kaijou(r) * kaijou(n - r));
    return m;
}

var button1 = document.getElementById("button1");

button1.addEventListener("click", function (a) {

    a.preventDefault();

    var n = document.getElementById("n").value;
    var p = document.getElementById("p").value;
    var k = document.getElementById("k").value;


    n = parseFloat(n, 10);
    p = parseFloat(p, 10);
    k = parseFloat(k, 10);


    var ex_result = n * p;
    var html_ex_result = document.getElementById("ex_result");
    html_ex_result.value = ex_result;

    var vx_result = n * p * (1 - p);
    var html_vx_result = document.getElementById("vx_result");
    html_vx_result.value = vx_result;

    var h_result = Math.sqrt(vx_result);
    var html_h_result = document.getElementById("h_result");
    html_h_result.value = h_result;

    var ncr_result = ncr(n, k);
    var html_ncr_result = document.getElementById("ncr_result");
    html_ncr_result.value = ncr_result;

    var kkou_result = ncr_result * Math.pow(p, k) * Math.pow((1 - p), (n - k));
    var html_kkou_result = document.getElementById("kkou_result");
    html_kkou_result.value = kkou_result;

    var poisson_result = Math.pow(ex_result, k) * Math.pow(Math.E, -ex_result) / kaijou(k);
    var html_poisson_result = document.getElementById("poisson_result");
    html_poisson_result.value = poisson_result;
});

var button2 = document.getElementById("button2");
button2.addEventListener("click", function (b) {

    b.preventDefault();

    var X = document.getElementById("X").value;
    X = parseFloat(X, 10);
    var n2 = document.getElementById("n2").value;
    n2 = parseFloat(n2, 10);
    var p2 = document.getElementById("p2").value;
    p2 = parseFloat(p2, 10);

    var t_result = (X - (n2 * p2)) / Math.sqrt(n2 * p2 * (1 - p2));
    var html_t_result = document.getElementById("t_result");
    html_t_result.value = t_result;

});

var button3 = document.getElementById("button3");
button3.addEventListener("click", function (c) {

    c.preventDefault();

    var W = document.getElementById("W").value;
    W = parseFloat(W, 10);

    var W_result = Math.log2(W);
    var html_W_result = document.getElementById("W_result");
    html_W_result.value = W_result;

});
var current = document.getElementById('c');
var box = document.getElementById;
current.style.backgroundColor = "red";
var done = false;
function insert_color(i) {
    if (done) return;
    var j = 35 + i;
    while (j >= 0) {
        //console.log(document.getElementById(j).style);

        if (document.getElementById(j).style.backgroundColor == "") {
            document.getElementById(j).style.backgroundColor = current.style.backgroundColor;
            //console.log(j);
            if (check(j) == 'r') {
                document.getElementById('result').innerHTML = "Red Wins";
                done = true;
            }
            else if (check(j) == 'b') {
                alert('Blue wins');
                done = true;
            }
            break;
        }
        j = j - 7;
    }
    current.style.backgroundColor = current.style.backgroundColor === "red" ? "blue" : "red";
}

function get_color(j) {
    return document.getElementById(j).style.backgroundColor === "red" ? 'r' : document.getElementById(j).style.backgroundColor === "blue" ? 'b' : 'w';
}

function reg_check(s) {
    re = RegExp('rrrr');
    if (re.test(s)) return 'r';
    re = RegExp('bbbb');
    if (re.test(s)) return 'b';
    return 'w';
}

function check(j) {
    var row = Math.floor(j / 7);
    var col = j % 7;
    // Check horizontal
    var s = '';
    for (var i = 0; i < 7; i++) {
        s += get_color(row * 7 + i);
    }
    if (reg_check(s) !== 'w') return reg_check(s);

    //Check Vertical
    s = '';

    for (var i = 0; i < 6; i++) {
        s += get_color(col + i * 7);
    }
    if (reg_check(s) !== 'w') return reg_check(s);

    //Check diagonal 1 
    s = '';
    var r = row, c = col;

    for (var i = -6; i < 7; i++) {
        r = row + i;
        c = col + i;
        if (r >= 0 && c >= 0 && r <= 5 && c <= 6) {
            s += get_color((r) * 7 + c);
        }
        else {
            continue;
        }
    }
    if (reg_check(s) !== 'w') return reg_check(s);

    //Check Diagonal 2 
    s = '';
    for (var i = -6; i < 7; i++) {
        r = row + i;
        c = col - i;
        if (r >= 0 && c >= 0 && r <= 5 && c <= 6) {
            s = get_color((r) * 7 + c) + s;
        }
        else {
            continue;
        }
    }
    if (reg_check(s) !== 'w') return reg_check(s);
}

function reset() {
    location.reload();
}
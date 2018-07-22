var Film = {
    title: "Raiders of the Lost Ark",
    genre: "Adventure",
    rating: 9,
    year: 1981
};

function Film2(title, genre, rating, year) {
    this.title = title;
    this.genre = genre;
    this.rating = rating,
        this.year = year
}

var Film2Instance = new Film2("Raiders of the Lost Ark", "Adventure", 9, 1981);

var Film3 = Object.create(Object.prototype, {
    title: {
        value: "Raiders of the Lost Ark",
        writable: true,
        configurable: true,
        enumerable: true
    },
    genre: {
        value: "Adventure",
        writable: true,
        configurable: true,
        enumerable: true
    },
    rating: {
        value: 9,
        writable: true,
        configurable: true,
        enumerable: true
    },
    year: {
        value: 1981,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

class Film4 {
    constructor(title, genre, rating, year) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.year = year;
    }
}
var Film4Instance = new Film4("Raiders of the Lost Ark", "Adventure", 9, 1981);

console.log(Film);
console.log(Film2);
console.log(Film2Instance);
console.log(Film3);
console.log(Film4);
console.log(Film4Instance);


//B

function wahtIsThis() {
    let arr = ["Window", "Object", "CustomObject"];
    if (typeof wahtIsThis.counter == 'undefined' || wahtIsThis.counter > 2) {
        wahtIsThis.counter = 0;
    }

    console.log("this is:", arr[wahtIsThis.counter++]);

}
wahtIsThis();
wahtIsThis();
wahtIsThis();
wahtIsThis();
// C

var addTax = function (steuersatz, geldbetrag, callbackFkt) {

    var result = steuersatz * geldbetrag;
    if (typeof (callbackFkt) === "function") {
        callbackFkt(result)
    }else{
        console.log("fehler");
    }
}


addTax(10, 10, function (result) {
    console.log(result);
});

addTax(10, 10, function (result) {
    document.write(result);
});
addTax(10,10,10);

// D

function scoping() {
    var v = "Hello";
    const c = "Function"

    console.log(v, c); {
        const c = "Block";
        console.log(v, c);
    }
}
scoping();
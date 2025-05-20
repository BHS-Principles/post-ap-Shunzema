var LIST = [
    "Druhv is nonchalant",
    "Austin is such a baddie",
    "Amin is my brotha"
];

var BTN = document.getElementById("thebutton");

for(var i = 0; i <3; i++){
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
    alert("Vamooossss" + LIST[i] );
}
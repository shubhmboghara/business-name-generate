let frist, second, thirad;
rad = Math.random();

//1
if (rad < 0.33) {
    frist = "crazy";
}
else if (rad < 0.66 && rad >= 0.33) {
    frist = "Amazing";
}
else {
    frist = "fire";
}

// 2
if (rad < 0.33) {
    second = "Engine";
}
else if (rad < 0.66 && rad >= 0.33) {
    second = "foods";
}
else {
    second = "Garments";
}  

//3
if (rad < 0.33) {
    thirad = "Bros";
}
else if (rad < 0.66 && rad >= 0.33) {
    thirad = "Limited";
}
else {
    thirad = "Hub";
}

alert(` business name is ${frist}${second}${thirad}`)



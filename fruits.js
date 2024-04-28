function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

//Zadanie Utwórz tablicę o nazwie fruits
const fruits = ["Jablko", "Banan", "Pomarancza", "Winogrona", "Arbuz"]

console.log(fruits);


// Zadanie Utworz tablice numbers - Deklaracja tablicy numbers i zainicjowanie jej kilkoma liczbami
const numbers = [1, 2, 3, 4, 6, 8, 10, 11, 12, 13, 14];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > 5) {
        
        console.log(numbers[i]);
    }
}

let quantities = {
    appel: 0,
    peer: 0,
    banaan: 0
};

let prices = {
    appel: 1,
    peer: 2,
    banaan: 3
};

function koopProduct(product, price) {
    quantities[product]++;
    updateQuantity(product);
    updateTotalPrice(product, price);
}

function verwijderProduct(product, price) {
    if (quantities[product] > 0) {
        quantities[product]--;
        updateQuantity(product);
        updateTotalPrice(product, -price);
    }
}

function updateQuantity(product) {
    document.getElementById(`totaal_${product}`).value = quantities[product];
}

function updateTotalPrice(product, price) {
    let totalPrijsField = document.getElementById(`totaalPrijs_${product}`);
    totalPrijsField.value = quantities[product] * price;
}

function berekenPrijs() {
    let totalPrijsField = document.getElementById('totaalPrijs');
    let totalPrijs = quantities.appel * prices.appel +
        quantities.peer * prices.peer +
        quantities.banaan * prices.banaan;
    totalPrijsField.value = totalPrijs;
}

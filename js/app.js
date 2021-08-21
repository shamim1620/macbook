function addAmount(name, cost) {
    document.getElementById(name).innerText = cost;
    getTotalPrice();
}
// total price 
function getTotalPrice() {
    const basePrice = parseFloat(document.getElementById('base-price').innerText);
    const extraMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalPrice = basePrice + extraMemoryCost + extraStorageCost + deliveryCost;
    document.getElementById('sub-total').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
    return totalPrice;
}
// memory cost
document.getElementById('memory-8gb').addEventListener('click', function () {
    addAmount('extra-memory-cost', 0);
})

document.getElementById('memory-16gb').addEventListener('click', function () {
    addAmount('extra-memory-cost', 180);
})
// Storage cost 
document.getElementById('storage-256gb').addEventListener('click', function () {
    addAmount('extra-storage-cost', 0);
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    addAmount('extra-storage-cost', 100);
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    addAmount('extra-storage-cost', 180);
})
// delivery cost 
document.getElementById('delivery-free').addEventListener('click', function () {
    addAmount('delivery-cost', 0);
})
document.getElementById('delivery-paid').addEventListener('click', function () {
    addAmount('delivery-cost', 20);
})

// promo code 
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    const totalPrice = getTotalPrice();
    if (promoCode == "stevekaku") {
        const discount = totalPrice / 5;
        document.getElementById('total').innerText = totalPrice - discount;
        console.log('promofound');
    }
})

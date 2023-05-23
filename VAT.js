priceTTC = 1000
VAT = (priceTTC/100) * 21
vatFREEprice = priceTTC - VAT

console.log(vatFREEprice)

// Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.
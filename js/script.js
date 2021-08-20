// initial charge of memory/storage/delivery cost-----
let memoryCost = 0;
let storageCost = 0;
let deliveryCost = 0;

// // discount & total cost capture---
let totalPrice = document.getElementById("total-price");
let total = parseInt(totalPrice.innerText);
let discountField = document.getElementById("discount-cost");

// promo code discount rate---
let codeDiscountRate = 20;
codeDiscountRate = 20 / 100;

// Promo code features function adding----
function promoCodeApply() {
  let promoCode = document.getElementById("promo-code");
  if (promoCode.value == "stevekaku") {
    let discount = total * codeDiscountRate;
    discountField.innerText = Math.round(total - discount);
    console.log(discount);
  } else {
    console.log("please, input a valid promo code.");
  }
  promoCode.value = "";
}

// countCost function----
function countCost(costField) {
  let fixedCost = document.getElementById("fixed-price").innerText;

  // storing cost for memory/storage/delivery---
  if (costField.id == "memory-price") {
    memoryCost = parseInt(costField.innerText);
  } else if (costField.id == "storage-price") {
    storageCost = parseInt(costField.innerText);
  } else if (costField.id == "delivery-price") {
    deliveryCost = parseInt(costField.innerText);
  }

  // making total cost and set in total field-----
  let countTotal =
    parseInt(fixedCost) + memoryCost + storageCost + deliveryCost;
  discountField.innerText = countTotal;
  total = countTotal;
  totalPrice.innerText = countTotal;
  console.log(countTotal);
}

// mac product main function----
function macProduct(partsName, partsField, price) {
  document
    .getElementById(partsName + "-mac")
    .addEventListener("click", function () {
      let priceBox = document.getElementById(partsField + "-price");
      priceBox.innerText = price;
      countCost(priceBox);
    });
}

// main functio calling---
macProduct("firstMemory", "memory", 0);
macProduct("secondMemory", "memory", 180);
macProduct("firstStorage", "storage", 0);
macProduct("secondStorage", "storage", 100);
macProduct("thirdStorage", "storage", 180);
macProduct("firstDelivery", "delivery", 0);
macProduct("secondDelivery", "delivery", 20);

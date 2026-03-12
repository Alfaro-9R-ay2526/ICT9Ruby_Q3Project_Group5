function calculateFare(){

    var baseFare = 50;
    var perKm = 15;

    var pick = document.getElementById("pickup").value;
    var drop = document.getElementById("dropoff").value;

    if(pick === "" || drop === ""){
        alert("Please select both stations.");
        return;
    }

    var distance = Math.abs(pick - drop);

    var total = baseFare + (distance * perKm);

    document.getElementById("fareOutput").value = total.toFixed(2);
}


function discountFare(){

    var currentFare = document.getElementById("fareOutput").value;

    if(currentFare === ""){
        alert("Calculate the fare first.");
        return;
    }

    var discounted = currentFare * 0.80;

    document.getElementById("fareOutput").value = discounted.toFixed(2);
}
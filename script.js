function findFactorial() {

    let num = Number(
        document.getElementById("num").value
    );

    let fact = 1;

    if (num < 0) {

        document.getElementById("result").innerHTML =
            "Factorial is not defined for negative numbers";

        return;
    }

    for (let i = 1; i <= num; i++) {

        fact = fact * i;

    }

    document.getElementById("result").innerHTML =
        "Factorial of " + num + " = " + fact;
}
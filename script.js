document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const calculateButton = document.getElementById("calculate");
    const resetButton = document.getElementById("reset");
    const bmiResultSpan = document.getElementById("bmiResult");
    const bmiCategoryP = document.getElementById("bmiCategory");

    calculateButton.addEventListener("click", calculateBMI);
    resetButton.addEventListener("click", resetCalculator);

    function calculateBMI() {
        const heightValue = parseFloat(heightInput.value);
        const weightValue = parseFloat(weightInput.value);

        if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
            alert("Please enter valid height and weight values.");
            return;
        }

        const bmi = calculateBMIValue(heightValue, weightValue);
        const category = classifyBMI(bmi);

        bmiResultSpan.textContent = bmi.toFixed(2);
        bmiCategoryP.textContent = `You are ${category}`;
    }

    function calculateBMIValue(height, weight) {
        // Assuming height is in meters and weight is in kilograms
        return weight / (height * height);
    }

    function classifyBMI(bmi) {
        if (bmi < 18.5) {
            return "underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            return "overweight";
        } else {
            return "obese";
        }
    }

    function resetCalculator() {
        heightInput.value = "";
        weightInput.value = "";
        bmiResultSpan.textContent = "";
        bmiCategoryP.textContent = "";
    }
});

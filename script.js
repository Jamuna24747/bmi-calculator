document.getElementById ("bmiform").add|addEventListener("submit",
function (e)
{
    e.preventDefault();


const height = document.getElementById("height").value;
const weight= document.getElementById("weight").value;
const result= document.getElementById("result");

if (!height || !weight || height <=0 || weight <=0)
    {
    result.textContent ="Please enter the valid height and weight!";
    return;
    }
const heightInMeter = height/100;
const bmi =(weight /(heightInMeter * heightInMeter)).toFixed(2);

let category ="";
if(bmi<18.5)
    {
    category="Underweight";
    }
else if (bmi<24.9)
{
    category="Normal Weight";
}
else if(bmi<29.9)
    {
    category="Overweight";
     }
else
{
    category="Obesity";
}
result.textContent =`your BMI is ${bmi} (${category})`;
});

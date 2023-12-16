/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var daily_cost = 35;
var  num_days = 0;
var total_cost = 0;

const Mon_button = document.querySelector("#monday");
const Tue_button = document.querySelector("#tuesday");
const Wed_button= document.querySelector("#wednesday");
const Thu_button = document.querySelector("#thursday");
const Fri_button = document.querySelector("#friday");

const full_Day = document.querySelector('#full');
const half_Day = document.querySelector('#half');
const clear_Button = document.querySelector('#clear-button');
const calculateCost = document.querySelector('#calculated-cost');





/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
 function color_change(change){
        if(change.classList.contains("clicked")){
            change.classList.remove('clicked');
            num_days--;
        }
        else{
            change.classList.add('clicked');
            num_days++;   
        }
        calculated();
 }
Mon_button.addEventListener('click', function() { color_change(this); });
Tue_button.addEventListener('click', function() { color_change(this); });
Wed_button.addEventListener('click', function() { color_change(this); });
Thu_button.addEventListener('click', function() { color_change(this); });
Fri_button.addEventListener('click', function() { color_change(this); });


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function reset(){
    Mon_button.classList.remove('clicked');
    Tue_button.classList.remove('clicked');
    Wed_button.classList.remove('clicked');
    Thu_button.classList.remove('clicked');
    Fri_button.classList.remove('clicked');


full_Day.classList.add('clicked');
half_Day.classList.remove('clicked');
daily_cost = 35;
num_days = 0;
total_cost = 0;
calculated();
}

clear_Button.addEventListener('click', function() {
    reset();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_Day.addEventListener("click",function(){
    half_Day.classList.add('clicked');
    full_Day.classList.remove('clicked');
    daily_cost = 20;
    calculated();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_Day.addEventListener('click',function(){
  half_Day.classList.remove('clicked');
  full_Day.classList.add('clicked');
  daily_cost = 35;
  calculated();

});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculated(){
    total_cost = daily_cost * num_days;
    calculateCost.innerText = total_cost;
}

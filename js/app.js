class CalorieTracker {
    constructor() {

        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];

        this._displayCalorieLimit();
        this._renderStats();
    }

//   ****  public methods ****

    addMeal(meal){
        this._meals.push(meal);

        this._totalCalories += meal.calories
        this._renderStats();

    }
    addWorkout(workout){
        this._workouts.push(workout);

        this._totalCalories -= workout.calories

        this._renderStats();


    }

//   ****  private methods ****
    _displayCaloriesTotal(){

        const caloriesTotalEle = document.getElementById('calories-total');

        caloriesTotalEle.innerHTML = this._totalCalories;

    }

    _displayCalorieLimit(){
        const caloriesLimitEle = document.getElementById('calories-limit');

        caloriesLimitEle.innerHTML = this._calorieLimit
    }

    _displayCaloriesConsumed(){
        const caloriesConsumedEle = document.getElementById('calories-consumed')

        const consumed = this._meals.reduce((total,currentValue) => {
           return currentValue.calories+total
        },0)

        caloriesConsumedEle.innerHTML = consumed;

    }
    _displayCaloriesBurned(){
        const caloriesConsumedEle = document.getElementById('calories-burned')

        const burned = this._workouts.reduce((total,currentValue) => {
           return currentValue.calories+total
        },0)

        caloriesConsumedEle.innerHTML = burned;

    }

    _displayCaloriesRemaining(){
        const caloriesRemainingEle = document.getElementById('calories-remaining');

        const progressBarEle = document.getElementById('calorie-progress');

        const remaining = this._calorieLimit - this._totalCalories;

        caloriesRemainingEle.innerHTML = remaining;

        if (remaining <= 0){
            caloriesRemainingEle.parentElement.parentElement.classList.remove('bg-light')
            caloriesRemainingEle.parentElement.parentElement.classList.add('bg-danger')

            progressBarEle.classList.remove('bg-success')
            progressBarEle.classList.add('bg-danger')
        }else{
            caloriesRemainingEle.parentElement.parentElement.classList.remove('bg-danger')
            caloriesRemainingEle.parentElement.parentElement.classList.add('bg-light')


            progressBarEle.classList.replace('bg-danger','bg-success')

        }


    }

    _displayCaloriesProgress() {
        const progressBarEle = document.getElementById('calorie-progress');

        const percentage = (this._totalCalories / this._calorieLimit) * 100;

        const width = Math.min(percentage,100);

        progressBarEle.style.width = `${width}%`

    }

    _renderStats(){
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }


}

class Meal {
    constructor(name,calories) {
        this.id =Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}
class Workout {
    constructor(name,calories) {
        this.id =Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}








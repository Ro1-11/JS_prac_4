//Create a function that takes a number (step) as an argument and returns the
//number of matchsticks in that step.

function matchsticks_count(step) //pass the value of step you want
{
    if (step===0)
    {
        console.log("Please Enter Valid Input");
    }
    else if(/\D/.test(step))  //use to search everything except numbers
    {
       console.log("Please Enter Numbers Only");
    }
    else
    {
        let final_count=5*step+1
        console.log(final_count); 
    }
      
}
matchsticks_count(87)
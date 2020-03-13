'use strict'

var sum = 0;
var counter = 0;

do
{
    var number = parseInt(prompt("Input a number until you input a negative number",0));

    if(isNaN(number))
    {
        number = 0;
    }else if(number >=  0)
    {
        sum = sum + number;
        //sum += number;

        counter ++;
    }

    console.log(sum);
    console.log(counter);

}while(number >= 0)

alert("The sum of all the numbers is: "+ sum);
alert("The averge is: " + (sum/counter));
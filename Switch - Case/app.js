


/* This is how it works:

The switch expression is evaluated once. 

The value of the expression is compared with the values of each case.

If there is a match, the associated block of code is executed.

If there is no match, the default code block is executed. 

When JavaScript reaches a break keyword, it breaks out of the switch block (Exit of block)

*/
const process = 1;


switch(process){
    case 1:
        console.log("process 1");
        break;
    case 2:
        console.log("process 2");
        break;

    case 3:
        console.log("process 3");
        break;
    default:
        console.log("Incalid process");
    

}



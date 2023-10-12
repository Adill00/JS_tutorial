// console.log("statement 1");
// console.log("statement 2");


/*DOM
console.log (document.getElementById("blue_box").innerHTML); 

document.getElementById("blue_box").innerHTML ="<h1>Testing</h1>"; 
*/


/*Variables
var user_name="Adil";

document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";
*/

/*Numbers
Math.pow(2,4);

Math.round(2.7);

Math.ceil(4.3);

Math.floor(4.6);

Math.sqrt(36);

Math.random();

var myNum=3.78633;
myNum.toFixed(); //with no parameter no decimal, if 2 as paramter:3.79 

var sales=20;
sales+=5;

var Name="Adil";
Name+=" ";
Name+="Aliyev";

var firstNumber="21";
var secondNumber="4";
firstNumber+secondNumber; //will output 214

parseInt(firstNumber)+parseInt(secondNumber);  //this will sum up 21 and 4
*/

/*Booleans
"4"== 4    //true

"4"=== 4   //false

"4"==="4"  //true
*/

/*functions 

function sum_number() {
    var num1=5;
    var num2=2;
    var sum=num1+num2;
    console.log(sum);
}

function sum_args(num1,num2){
    sum=num1+num2;
    return sum;
}

document.getElementById("sum_result").innerHTML=sum_args(-27,55) ; */


/* arrays

var students=["John","Mary","Paul"];

var courses=['PHP',"HTML','GO","JS"];
courses.push("JAVA");       //adding to end of array

courses.unshift("swift");   //adding to first of array

courses.pop();              //deleting from last,returns deleted element

courses.shift();            //deleting from first         

courses.slice(0,2);         // () -> starting index,how many included in 1slice
                            //if not writing 2nd,to the end   */


/*Objects

var employee = {                        //object
    'name': 'James Taylor',             //key: value    
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',                   
    'role': 'IT Analyst'
};

 //no index,length functions
employee['name']     //if key property follows naming rules,also can use .name

employee.role= 'IT manager'  //changes value
employee.password= 'tyerty5678' //adding new key

//
var courses = [
    {
        'title': 'Learn code in Python 3',
        'reviews': 6802,
        'students': 130129,
        'categories': ['programming', 'technology']
    },

    {
        'title': 'Learn PHP -  Beginner to Advanced',
        'reviews': 1204,
        'students': 30521,
        'categories': ['web development', 'programming']
    },

    {
        'title': 'Learn Microsoft Excel 2020',
        'reviews': 4209,
        'students': 18560,
        'categories': ['productivity', 'business']
    }
    
];
//to access web development :  courses[1]['categories'][0]
*/

/*
Object methods
var student={
    'firstName':'Marie',
    'lastName':'Smith',
    'fullName': function(){
        return this.firstName+" "+this.lastName;
    }
};

student.fullName();  //for output
*/
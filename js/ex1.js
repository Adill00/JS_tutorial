//1
console.log("This is ex1.js");

//2
var firstName="Adil";
var lastName="Aliyev";
var birthYear="2004";

var message = "Hi,my name is "+firstName+" "+lastName+". "+"I'm "+(2022-birthYear)+" years old and learning JS." ;

document.getElementById("student_message").innerHTML=message;     //get String under the name of student-message

// 3
var num1=parseInt ( document.getElementById("num_1").innerHTML );   //get the String under the name of num_1
var num2=parseInt ( document.getElementById("num_2").innerHTML );
var average = (num1+num2)/2 ;
average=average.toFixed(2);

document.getElementById("result").innerHTML=average;    //put this average to place of result

//4
    var phone1 = "988866552";
    var phone2 = "99087612366";
    var phone3 = 876543123;
    phone3=phone3.toString();

    console.log( phone1.length == 9 );
    console.log( phone2.lenght == 9 );
    console.log( phone3.length == 9 );

//5
    console.log ( Math.pow(32,6) )  

//8

var url1= "https://" + document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url1;

var url2=(document.getElementById("url_3").innerHTML).replace("https://","");
document.getElementById("url_4").innerHTML=url2;
//Chapter 1 

/*
alert("Hi Thankyou for visiting SShaniastree") // Question 1

alert("Error! Please enter a valid password.") // Question 2 

alert("Welcome to JS Land...\nHappy Coding!") // Question 3 

alert("Welcome to JS Land") //Question 4
alert("Happy Coding!") //Question 4 Continue

alert("Hello... I can run JS through my web browser's console") //Question 5

*/

//Chapter 2

/*
var username //Question 1

var myName = "Shania Khan" //Question 2

var message= "Hello World" //Question 3
alert(message)

var student_name="Jhone Doe" //Question 4
var student_age="15 years old"
var student_course ="Certified Mobile Application Development"
alert(student_name)
alert(student_age)
alert(student_course)

alert("                                                     "+    // Question 5
"PIZZA\n"+"                                                     "+
"PIZZ\n"+"                                                      "+
"PIZ\n"+"                                                       "+
"PI\n"+"                                                       "+
"P")

var email = "shaniaakhann64@gmail.com" //Question 6
alert("My email address is "+email)

var book =  "A smarter way to learn JavaScript" //Question 7
alert("I am trying to learn from the Book "+book)

document.write("Yeah! I can write HTML content through JavaScript") //Question 8

alert("-----------ஜ۩۞۩ஜ-------------") //Question 9

*/

//Chapter 3

/*
var age ="22"
alert("I am "+age+" years old")  //Question 1

var visit ="14" //Question 2
alert("You have visited this site "+visit+" times")


var birthYear = 1997 //Question 3
document.write("My birth year is "+birthYear+"<br/>"+"Data type of my declared variable is "+typeof(birthYear))  //for new line with document.write i m using <br/> tag

Visitor_name=prompt("Enter Your Name") //Question 4
Product_title=prompt("Enter What you wanted to purchase")
Quantity=prompt("How much you like to order it?")
document.writeln("<br/>"+Visitor_name+" ordered "+Quantity+" "+Product_title+"(s) on XYZ Clothing store")

*/


//Chapter 4
/*

//Question 1
var shania,shayan,siblings; 

//Question 2
//legal variables  
var mango, _banana, _1apple, fiji1, _12345

//illegal variables
var 1shania, pineapple!, true@, 1apple, if; */

/*
//Question 3
var headingg="Rules for naming JS variables" 
document.write(headingg.bold())
document.write("<br/><br/>"+"Variable names can only contain, numbers, $ and _. For example $my_1stVariable"+"<br/>"+"Variable must begin with a letter, $ or _. For example : $name, _name or name"+"<br/>Variable names are case sensitive"+"<br/>Variable names should not be JS keywords")

*/

//Chapter 5 MATH EXPRESSIONS

//Question1
/*
a=prompt("Enter First Number")
b=prompt("Enter Second Number")
a=parseInt(a)
b=parseInt(b)
c=a+b
document.write("Sum of "+a+" and "+b+" is "+c)
document.write("<br\>")

//Question 2

d=a-b
e=a*b
f=a/b
g=a%b
document.write("Subtraction of "+a+" and "+b+" is "+d+"<br/>Multiplication of "+a+" and "+b+" is "+e+"<br/>Division of "+a+" and "+b+" is "+f+"<br/>Modulus of "+a+" and "+b+" is "+g)
*/
//Question 3

/*
var p
document.write("Value after variable declaration is "+typeof(p))
document.write("<br/>")
p=prompt("Initialize value of p by some number")
document.write("Initial Value: "+p)
p=parseInt(p)
p++   
document.write("<br/>Value after increment is: "+p)
b=p+7
document.write("<br/>Value after addition is: "+b)
b--
document.write("<br/>Value after decrement is: "+b)
v=b%b
document.write("<br/>The remainder is: "+v)
*/

//Question 4

/*

ticket_price = 600
g=prompt("How many tickets you wanted to buy? ")
total_price = ticket_price*g
document.write("Total cost to buy "+g+" tickets to a movie is "+total_price+"PKR")

*/


//Question  5

/*
a=prompt("Which table you want to print? ")

document.write("Table of "+a+"<br/>")
for (i=1;i<=10;i++){
    multiple=a*i
    document.write(a+"x"+i+"="+multiple)
    document.write("<br/>")
}
*/

//Question 6

/*
Celsius=parseInt(prompt("Enter the value of Celsius"))
Fahrenheit=parseInt(prompt("Enter the value of Fahrenheit"))

ww=((Fahrenheit-32)*5/9)
www=((Celsius*9/5)+32)

document.write(Celsius+"C is "+www+"F")
document.write("<br/>"+Fahrenheit+"F is "+ww+"C")

*/

//Question 7

/*
document.write("<h1> Shopping Cart</h1><br/><br/><br/><br/>")

var price_item1 = 650
var quantityy_item1 = parseInt(prompt("How much quantity you need for item 1"))
var price_item2 = 100
var quantityy_item2 = parseInt(prompt("How much quantity you need for item 2"))
var shipping_charges = 100

var total_cost = price_item1*quantityy_item1+price_item2*quantityy_item2+shipping_charges

document.write("Price of item 1 is 650 <br/>"+"Quantity of item 1 is "+quantityy_item1+"<br/>Price of item 2 is 100 <br/>"+"Quantity of item 2 is "+quantityy_item2+"<br/>Shipping Charges 100<br/><br/>"+"Total cost of your order is "+ total_cost)

*/

//Question 8

/*
document.write("<h1> Marks Sheet</h1><br/><br/><br/><br/>")

var total_marks = 980
var marks_obtained = 804

var percentage = (marks_obtained/total_marks )*100
document.write("Total marks: 980<br/>Marks obtained: 804 <br/>Percentage: "+percentage+"%")
*/

//Question 9

/*

var us_dollar = 104.80
var saudi_riyal = 28
var usDollar_quantity = parseInt(prompt("Enter How Much you Have Dollars?"))
var saudiRiyal_quantity = parseInt(prompt("Enter How Much you Have Saudi Riyals?"))

var total_currency=usDollar_quantity*us_dollar+saudiRiyal_quantity*saudi_riyal

document.write("<h1> Currency in PKR</h1><br/><br/><br/><br/>Total Currency in PKR: "+total_currency)

*/

//Question 10
/*
var value = 5

document.write("Ans is "+(((value+5)*10))/2)
*/
//Question 11

/*
document.write("<h1> Age Calculator</h1><br/><br/><br/><br/>")

var current_year = new Date().getFullYear()
var birth = parseInt(prompt("What is your birth year?"))

var agee=current_year-birth
document.write("Current Year: "+current_year+"<br/>Birth Year: "+birth+"<br/>Your Age is: "+agee)
*/

//Question 12
/*
var radius =parseInt(prompt("Enter value of Radius: "))
var Circumference = 2*3.142*radius
var areaCircle = 3.142*radius*radius

document.write("<h1> <b>The Geometrizer</b></h1><br/><br/><br/><br/>Radius of a Circle: "+radius+"<br/>The circumference is: "+Circumference+"<br/>The area is: "+areaCircle)
*/

//Question 13

/*
var snack=prompt("Enter your favorite snack ")
var current_age=parseInt(prompt("What's your current age?"))
var max_age=parseInt(prompt("What is the maximum age?"))
var snack_daily=parseInt(prompt("Amount of Snack per Day? "))
var estimate = ((max_age-current_age)*snack_daily)

document.write("<h1> The Lifetime Supply Calculator</h1><br/><br/><br/><br/>Favourite Snack: "+snack+"<br/>Current age: "+current_age+"<br/>Estimated Maximum Age: "+max_age+"<br/>Amount of snacks per day: "+snack_daily+"<br/>You will need "+estimate+" chocolate chip to last you until the ripe old age of "+max_age)
*/

//Chapter 6-9 MATH EXPRESSIONS (ALERTS)

//Question 1

/*
var a = parseInt(prompt("Enter any number: "))

document.write("Result:<br/>The value of a is: "+a+"<br/>-----------------------------------<br/>")

++a
document.write("The value of ++a is: "+a+"<br/>Now the value of a is: "+a)


document.write("<br/><br/>The value of a++ is: "+a+"<br/>")
a++
document.write("Now the value of a is: "+a)

--a
document.write("<br/><br/>The value of --a is: "+a+"<br/>")
document.write("Now the value of a is: "+a)

document.write("<br/><br/>The value of a-- is: "+a+"<br/>")
a--
document.write("Now the value of a is: "+a)
*/

//Question 2
/*
var a=2, b=1
var result= --a - --b + ++b + b-- //--a=1 --b=0 so 1-0=1, ++b=1 so 1+1=2, 2+1=3
--a //It pre-decrement the value of a , now a will be a=1
--a - --b // now again decrement a=0 and this time decrement b too b=0 so 0-0 = 0
--a - --b + ++b //a becomes -1,b becomes -1, -1 - -1 will be 0 now ++b so b will be 0 so -1+0 =-1 . b=0 and a=-1
--a - --b + ++b + b--// a=-2,b=-1,-2 - -1=-1, -1 + 0=-1, -1+ -1=-2. SO a=-2 b=-1 
document.write("a is: "+a+"<br/>b is: "+b+"<br/>result is "+result)
*/

//Question 3

/*
name = prompt("Enter your name: ")

alert("Welcome "+name+" to my site!")
*/

//Question 5
/*
a=prompt("Which table you want to print? ")

document.write("Table of "+a+"<br/>")
if(a==""){
    for (i=1;i<=10;i++){
        multiple=5*i
        document.write(5+"x"+i+"="+multiple)
        document.write("<br/>")
    }
    
}
else{
for (i=1;i<=10;i++){
    multiple=a*i
    document.write(a+"x"+i+"="+multiple)
    document.write("<br/>")
}}
*/

//Question 6

/*
var subject1 = prompt("Enter 1st subject: ")
var subject2 = prompt("Enter 2nd subject: ")
var subject3 = prompt("Enter 3rd subject: ")
var total_markss = 100
var subject1_marks = parseInt(prompt("Enter Obtained Marks in Subject 1: "))
var subject2_marks = parseInt(prompt("Enter Obtained Marks in Subject 2: "))
var subject3_marks = parseInt(prompt("Enter Obtained Marks in Subject 3: "))
var totalmarks= total_markss*3
var total_obtained_marks=subject1_marks+subject2_marks+subject3_marks
var percent_sub1 = subject1_marks
var percent_sub2 = subject2_marks
var percent_sub3 = subject3_marks
var percent_total= (((percent_sub1+percent_sub2+percent_sub3)/totalmarks)*100)

document.write("<table>"+
"<tr>"
+
"<td>"+"Subject"+"</td>"+
"<td>"+"Total Marks"+"</td>"+
"<td>"+"Obtained Marks"+"</td>"+
"<td>"+"Percentage"+"</td>"+
"</tr>"
+
"<tr>"
+
"<td>"+subject1+"</td>"+
"<td>"+total_markss+"</td>"+
"<td>"+subject1_marks+"</td>"+
"<td>"+percent_sub1+"%"+"</td>"+
"</tr>"
+
"<tr>"
+
"<td>"+subject2+"</td>"+
"<td>"+total_markss+"</td>"+
"<td>"+subject2_marks+"</td>"+
"<td>"+percent_sub2+"%"+"</td>"+
"</tr>"
+
"<tr>"
+
"<td>"+subject3+"</td>"+
"<td>"+total_markss+"</td>"+
"<td>"+subject3_marks+"</td>"+
"<td>"+percent_sub3+"%"+"</td>"+
"</tr>"
+
"<tr>"
+
"<td>"+" "+"</td>"+
"<td>"+totalmarks+"</td>"+
"<td>"+total_obtained_marks+"</td>"+
"<td>"+percent_total+"%"+"</td>"+
"</tr>"

+ "</table>"
)

*/

//Chapter 9-11 User Input & Conditional Statement

//Question 1
/*
var city = prompt("Enter name of city: ")

if(city=="Karachi" || city=="karachi"){
    alert("Welcome to city of lights")
}
*/

//Question 2

/*
gender = prompt("What is your gender? ")

if(gender=="Female" || gender=="female" || gender=="f")
{
    alert("Good Morning Ma'am.")
}
else if(gender=="Male" || gender=="male" || gender=="m")
{
    alert("Good Morning Sir.")
}
*/

//Question 3
/*
var colorr = prompt("Enter color for table: ")

if (colorr=="Red" || colorr=="red"){
    alert("Must Stop")
}
else if (colorr=="Yellow" || colorr=="yellow"){
    alert("Ready to move")
}
else if (colorr=="Green" || colorr=="green"){
    alert("Move now")
}
*/

//Question 4
/*
var fuel = parseInt(prompt("Enter How much fuel is remaining in car?"))

if(fuel<0.25){
    alert("Please refill the fuel in your car")
}

*/

//Question 5
/*
var a = 4; //part a
if (++a === 5){     //yes alert is displaying
alert("given condition for variable a is true");
}
*/
/*
var b = 82; //Part b
if (b++ === 83){   //No alert is not displaying
alert("given condition for variable b is true");
}*/

/*
var c = 12; //Part c
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); //true
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true"); //true
}
*/

/*
var materialCost = 20000;  //part d
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); //yes alert is displaying
}
*/

/*
if (true){   //part e
    alert("True"); //true
    }
    if (false){
    alert("False");
    }
*/

/*
if("car" < "cat"){  //part f
    alert("car is smaller than cat"); //yes alert is displaying
    }
    
*/

//Question 6
/*
var totalmarkss = 300
var subject1obtained = parseInt(prompt("Enter how much marks you obtained in 1st subject: "))
var subject2obtained = parseInt(prompt("Enter how much marks you obtained in 2nd subject: "))
var subject3obtained = parseInt(prompt("Enter how much marks you obtained in 3rd subject: "))
var marksobtained = subject1obtained+subject2obtained+subject3obtained
var percentagee = parseInt(((subject1obtained+subject2obtained+subject3obtained)/300)*100)

document.write("<h1> Marks Sheet</h1><br/><br/><br/><br/>")
document.write("Total marks: "+totalmarkss+"<br/>Marks Obtained: "+marksobtained+"<br/>Percentage: "+percentagee+"%"+"<br/>")
if(percentagee>=80){
    document.write("Grade: A-one"+"<br/>Remarks: Excellent")
}
else if (percentagee>=70){
    document.write("Grade: A"+"<br/>Remarks: Good")

}
else if (percentagee>=60){
    document.write("Grade: B"+"<br/>Remarks: You need to improve")

}
else if (percentagee<60){
    document.write("Grade: Fail"+"<br/>Remarks: Sorry")

}
*/

//Question 7
/*
var secretnumber = 7
var guessnumber = parseInt(prompt("Guess the number: "))

if(guessnumber==7){
    alert("Bingo! Correct answer.")
}
if(++guessnumber==7){
    alert("Close enough to the correct answer")
}
*/

//Question 8

/*
var numm = parseInt(prompt("Enter a number: "))

if(numm%3==0){
    alert("Number is divisible by 3")
}
else{
    alert("Sorry! its not divisible by 3")
}
*/

//Question 9
/*
var numm = parseInt(prompt("Enter a number: "))

if(numm%3==0){
    alert("Number is odd")
}
else if (numm%2==0){
    alert("Number is even")
}
*/

//Question 10

/*
var temp = parseInt(prompt("Enter a temperature: "))

if(temp>40){
    alert("It is too hot outside.")
}
else if(temp>30){
    alert("The Weather today is Normal.")
    
}
else if(temp>20){
    alert("Today’s Weather is cool.")
    
}
else if(temp>10){
    alert("OMG! Today weather is so Cool.")
    
}
*/

//Question 11
/*
var firstnum = parseInt(prompt("Enter first number: "))
var secondnum = parseInt(prompt("Enter second number: "))
var operation = prompt("Enter what operations you want to perform on calculator: ")
var Resultt

if(operation=='+'){
    Resultt=firstnum+secondnum
    alert(firstnum+" + "+secondnum+" = "+Resultt)
}
else if(operation=='-'){
    Resultt=firstnum-secondnum
    alert(firstnum+" - "+secondnum+" = "+Resultt)
}
else if(operation=='*'){
    Resultt=firstnum*secondnum
    alert(firstnum+" * "+secondnum+" = "+Resultt)
}
else if(operation=='/'){
    Resultt=firstnum/secondnum
    alert(firstnum+" / "+secondnum+" = "+Resultt)
}
else if(operation=='%'){
    Resultt=firstnum%secondnum
    alert(firstnum+" % "+secondnum+" = "+Resultt)
}
*/


//Chapter 12-13 IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

//Question 1

/*
var vall = prompt("Enter any character: ")
var val = vall.charCodeAt(0)

if(val>=65 && val<=90){
    alert("It is an upper case")
}
else if (val>=97 && val<=122){
    alert("It is lower case")
}
*/
//Question 2
/*
var num1 = parseInt(prompt("Enter 1st number: ")) 
var num2 = parseInt(prompt("Enter second number: "))

if(num1>num2)
{
    alert(num1+" is greater")
}
else if(num2>num1)
{
    alert(num2+" is greater")
}
else if(num1==num2)
{
    alert(num1 +" and "+num2+" are equal")
}
*/

//Question 3

/*
var numberr = parseInt(prompt("Enter a number: ")) 

if(numberr>0)
{
    alert(numberr+" is positive number")
}
else if(numberr<0)
{
    alert(numberr+" is negative number")
}
else if(numberr==0)
{
    alert(numberr +" number is zero")
}
*/

//Question 4

/*
var valuee = prompt("Enter a character: ")
var checkk = valuee.charCodeAt(0)

if(checkk==65 || checkk==69 || checkk==73 || checkk==79 || checkk==85|| checkk==97||checkk==101 || checkk==105 || checkk==111||checkk==117){
alert("True")
}
else{
    alert("False")
}
*/

//Question 5
/*
var c_pass="shania20"
var pass= prompt("Enter your password: ")

if(pass=="")
{
    alert("Please enter your password")
}
else if(c_pass==pass){
    alert("Correct! The password you entered matches the original password")
}
else if (c_pass!=pass){
    alert("Incorrect password")
}
*/

//Question 6

/*
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day"
alert(greeting)
}
else{
greeting = "Good evening"
alert(greeting)

}
*/

//Question 7
/*
var time = parseInt(prompt("Enter a time: "))


    if(time>=0000 && time<1200){
        alert("Good Morning")
    }
    else if(time>=1200 && time<1700){
        alert("Good Afternoon")
    }
    else if(time>=1700 && time<2100){
        alert("Good Evening")
    }
    else if(tme>=2100 && time<=2359){
        alert("Good Night")
    }
*/


//Chapter 14-16 Arrays

//Question 1
/*
var studentname= []  

//Question 2
 var studentname = {}

 //Question 3
 var s_arr = ["mango","banana"]
//Question 4
var n_arr = [1,2,3,4,5]
//Question 6
var m_Arr = ["shania",1,"Khan"]

//Question 7
var educa = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil.','PhD']
document.write("<h1> Qualifications</h1><br/><br/><br/>")
var x = educa.toString();

for(i=x;i<=x;i++)
{
    document.write(i+'\n')   
}
*/
//Question 8
/*
studentname =["Micheal","John","Tony"]
var score = [320,230,480]

var total = 500
var percen1 = ((score[0]/500)*100) 
var percen2 = ((score[1]/500)*100) 
var percen3 = ((score[2]/500)*100) 

document.write("Score of "+studentname[0]+" is "+score[0]+". Percentage: "+percen1+"%<br/>")
document.write("Score of "+studentname[1]+" is "+score[1]+". Percentage: "+percen2+"%<br/>")
document.write("Score of "+studentname[2]+" is "+score[2]+". Percentage: "+percen3+"%<br/>")
*/

//Question 9

//var color = ["Pink","orange","yellow","blue"]
//document.write(color)

//var user_need = prompt("What color you want to add in list? ")
//var user_need2 = prompt("What color you want to add in list? ")

/*
color.unshift(user_need)  //part a
document.write("<br/>Update Array after user's color entrance: "+color)
*/
/*
color.push(user_need) //part b
document.write("<br/>Update Array after user's color entrance: "+color)
*/
/*
color.unshift(user_need+","+user_need2)  //part c
document.write("<br/>Update Array after user's color entrance: "+color)
*/
/*
color.shift() //part d
document.write("<br/>Update Array after user's color entrance: "+color)
*/
/*
color.pop() //part e
document.write("<br/>Update Array after user's color entrance: "+color)
*/
/*
var ind = parseInt(prompt("At which index you want to add color? ")) //part f
var col = (prompt("What color you like to enter? "))

color.splice(ind,0,col)
document.write("<br/>Update Array after user's color entrance: "+color)
*/
//part g
/*
var ind = parseInt(prompt("At which index you want to add color? ")) //part f
var col = parseInt(prompt("How many colors you like to delete? "))

color.splice(ind,col)
document.write("<br/>Update Array after user's color entrance: "+color)
*/

//Question 10
/*
var std_score = [320,230,480,120]
var new_score = std_score.sort()

document.write("Ordered Scores of Students: "+new_score)
*/
//Question 11
/*
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]

var sel_cities = cities.slice(2,4)

document.write("Cities list:<br/>"+cities+"<br/><br/>Selected cities list: <br/>"+sel_cities)
*/

//Question 12
/*
var arr = ["This","is","my","cat"]
var n_arrr = arr.join()
var aa = n_arrr.replace(/,/g, ' ')
document.write(aa)
*/
//Question 13
/*
var devices = ["keyboard","mouse","printer","monitor"]

document.write("Devices: <br/>"+devices+"<br/>")

for(i=0;i<devices.length;i++){
    document.write("Out:<br/>"+devices[i]+"<br/>")
}
*/
//Question 14
/*
var devices = ["keyboard","mouse","printer","monitor"]
document.write("Devices: <br/>"+devices+"<br/>")

for(i=devices.length;i>=0;i--){
    document.write("Out:<br/>"+devices[i]+"<br/>")
}
*/

//Question 15
/*
var p_manufacturer = ["Apple","Samsung","Motorola","Nokia","Sony & Haier"]

document.write("<select>")
for(i=0;i<p_manufacturer.length;i++){
    document.write("<option>"+p_manufacturer[i]+"</option>")
}
document.write("</select>")
*/

//Chapter 17-20

//Question 1
/*
var a1 = [],[]
a1=[2],[3]
*/

//Question 2
/*
var m_array = [],[],[]

m_array = [0,1,2,3],[1,0,1,2],[2,1,0,1]
*/
//Question 3
/*
for (i=1;i<=10;i++){
    document.write(i+"<br/>")

}*/

//Question 4
/*
var tablee = parseInt(prompt("Enter a number to show its multiplication table "))
var lengthh= parseInt(prompt("Enter length of multiplication table"))
var resulttt
for (i=1;i<=lengthh;i++){
    resulttt=tablee*i
    document.write(tablee+" x "+i+" = "+resulttt+"<br/>")
}

*/
//Question 5
/*
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']

document.write(fruits+"<br/><br/>")

for(i=0;i<fruits.length;i++){
    document.write("Element at index "+ i+" is "+fruits[i]+"<br/>")
}
*/

//Question 6

//var reversecounting=parseInt(prompt("Enter range for Reverse counting: "))
//var even=parseInt(prompt("Enter range for even: "))
//var odd=parseInt(prompt("Enter range for odd: "))
//var series=parseInt(prompt("Enter range for series: "))

/*
document.write("Counting: <br/><br/>")
//counting
for (var i=1;i<=15;i++)
{

document.write(i+" ")
//res_c+=i
}
document.write("<br/><br/>Reverse counting: <br/><br/>")
for (var i=10;i>=1;i--)
{

document.write(i+" ")
//res_c+=i
}

document.write("<br/><br/>Even: <br/><br/>")
for (var i=0;i<=20;i+=2)
{

document.write(i+" ")
//res_c+=i
}

document.write("<br/><br/>Odd: <br/><br/>")
for (var i=1;i<=20;i+=2)
{

document.write(i+" ")
//res_c+=i
}

document.write("<br/><br/>Series: <br/><br/>")
for (var i=2;i<=20;i+=2)
{

document.write(i+"k ")
//res_c+=i
}
*/

//Question 7
/*
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

var search = prompt("Enter Search Value: ")


var available =false;

if(A.indexOf(search)!==-1){
    alert(search+" is available in our bakery")
}
else{
    alert("We are sorry. "+search+" is not available in our bakery")
}
*/

//Question 8
/*
var A = [24,53,78,91,12]

document.write("Array items: "+A)
document.write("<br/>The largest number is "+Math.max(24,53,78,91,12))

*/

//Question 9
/*
var A = [24,53,78,91,12]

document.write("Array items: "+A)
document.write("<br/>The largest number is "+Math.min(24,53,78,91,12))
*/

//Question 10
var multiply
for (i=1;i<=20;i+=1){
    multiply = 5*i
    document.write(multiply+" ")

}

















































































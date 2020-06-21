//Chapter 21 -25

//Task1

// var name1=prompt('Enter Name ')
// var name2=prompt(' Enter name')
// var username=name1 + name2
// alert(username)

//Task 2
// var model=prompt('enter you phone model')
// document.write('His favorite phone model is: '+model,'<br/>')
// document.write('the length of input is :'+model.length)


//Task3

// var name="Pakistan"
// var name1=name.indexOf('n')

// document.write('the variable is: ' +name,'<br/>')
// document.write('index of n is: ' +name1)

//Task 4


// var word="Hello world"
// var word1=word.lastIndexOf('l')

// document.write('the variable is: ' +word,'<br/>')
// document.write('last index of l is: ' +word1)


//Task 5
// var string='Pakistan'
// var string1=string.charAt(3)

// document.write('the variable is: ' +string,'<br/>')
// document.write(' letter of 3rd index  is: ' +string1)


//Task 6

// var  name=['faizan']
// var  name2=['sohail']
// var name3=name.concat(name2)
// document.write(name3)


//Task 7

// var city='Hyderabad'
// var city2=city.replace('Hyder','Islam')
// document.write('The first city was :'+city,'<br/>')
// document.write('After replacing :'+city2)


//Task 8
// var message = 'Ali and Sami are best friends. They play cricket and football together.'
// var message1=message.replace('and','&')

// document.write('The first message was :'+message,'<br/>','<br/>','<br/>')
// document.write('After replacing :'+message1)


//Task 9

// var string='475';
// document.write('value of string ' + string,'<br>' )
// document.write('type of string '+typeof "475",'<br>')
// document.write('value of number : '+string,'<br>')
// document.write("type of same number "+typeof  Number(string),'<br>')

//Task 10


// var enter=prompt('Enter anything')
// var enter1=enter.toUpperCase()
// document.write('in lowercase : '+enter,'<br/>')
// document.write('converted to uppercase : '+enter1,'<br/>')



//TAsk 11

// var enter=prompt('Enter anything')
// var enter1=enter.()
// document.write('in lowercase : '+enter,'<br/>')
// document.write('converted to uppercase : '+enter1,'<br/>')


//TAsk 12

// var num = 35.36
// var num1=num.toString()
// var num1=num1.replace('.','')
// document.write('number : '+num,'<br/>')
// document.write('converted to string : '+num1,'<br/>')
// document.write('converted to string : '+ typeof "num1",'<br/>')

//Task 13

// var name=prompt('enter name')

// if (name == name.charcode){
//     alert('ok')
// }

//Task 14

// var input='Enter food'
// var A=['cook','biryani','karahi','korma']

// if (input==A)

//TAsk 15


//TAsk 16


//Task 17
// var country=prompt('enter ')
// alert(country.slice(-1))

//TAsk 18


// var sent='The quick brown fox jumps over the lazy dog'
// var sent1=sent.split
// alert(sent.(the))




//chapter 26-30

//TAsk 1
// var num=3.45214
// document.write('value of num: '+num,'<br/>')
// document.write('round value of num: '+Math.round(num),'<br/>')
// document.write('floor value of num: '+Math.floor(num),'<br/>')
// document.write('ceil value of num: '+Math.ceil(num),'<br/>')

//Task 2

// var num=prompt('enter number')
//  document.write('value of num: '+num,'<br/>')
//  document.write('round value of num: '+Math.round(num),'<br/>')
//  document.write('floor value of num: '+Math.floor(num),'<br/>')
//  document.write('ceil value of num: '+Math.ceil(num),'<br/>')


//Task 3

// var num=prompt('enter value')
// document.write('absolute value: '+Math.abs(num))

//Task 4


// var dice=Math.floor( Math.random() * 6 )
// var dice1=Math.floor( Math.random() * 6 )
// document.write('random dice value:'+dice,'<br/>')
// document.write('random dice value:'+dice1,'<br/>')


//Task 5

// var coin=Math.ceil( Math.random() * 2 )
// alert(coin)

//Task  6

// var random=Math.ceil( Math.random() * 100 )
// document.write('random number between 1 to 100: '+random)

//Task 7

// var weight=prompt('input your weight')
// document.write('weight of user is: '+weight+' kilograms')


//Task 8
// var num1=Math.ceil(Math.random()*10)
// var user=prompt('enter number')
// if (user==num1){
//     alert('congratulations sir you guess is correct')
// }

// else{
//     alert('better luck next time')
// }



//chapter 31 -34

//Task 1
// var date=new Date()
// document.write('today\'s date : '+date)


//Task 2

// var monthNames = ["jan", "feb", "march", "april", "may", "june", "july","august","september","octubar","november","December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var month = monthNames[11];
// alert(month)

//Task 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// if (nameOfToday=='Sat'|| nameOfToday=='Sun'){
//     alert('its fun day')
// }
// else{
//     alert('its not fun day')
// }


//Task 5

// var day=prompt('enter date number')
// if(day <= 15){
//     alert('First Fifteen days of month')
// }
// else{
//     alert('Last days of month')
// }


//Chapter 35-38
//Task 1

// function date(){
//     return new Date
// }
// document.write(date())


//TAsk 2

// function name(firstname,lastname){
//     document.write('Greetings ' + firstname+' ' + lastname)
    
// }
// name('faizan','sohail')


//Task 3


// var num=Number(prompt('enter number'))
// var num1=Number(prompt('enter number'))


// function add(num,num1){
//     document.write(num + num1)
// }

// add(num,num1)


//Task 4

// function calculator(num1,num2,operator){
//     if (operator=='+'){
//         document.write(num1 + num2)
//     }
//     else if (operator=='-'){
//         document.write(num1 - num2)
//     }
//     else if (operator=='*'){
//         document.write(num1 * num2)
//     }
//     else if (operator=='%'){
//         document.write(num1 % num2)
//     }
//     else{
//         alert('operator not found')
//     }
// }
// calculator(2,3,'*')  



//TAsk 5

// function sq(a){
     
// }

// alert(sq(2))



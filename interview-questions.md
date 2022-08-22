# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
  JSX is a a language that is used in React. It is used so that you can use sub components. To be honest i do not really know much about JSX. i know what HTML is and I know that JSX is a markup language for JS so its very very different from HTML. Whoah wait, but we also do HTML while using JSX in React. So maybe it is a bridge between the 2? 

Researched answer:
JXS is a JS syntax extension to JS. When using JSX, you are able to use all things JS within HTML. for example: if you made a function called "join" that combined a first and last name of a person. In REACT, you could call on it inside of HTML script. <h1> Hello, {join}</h1>; and that would return somehting like "hello Franky MachineGunHand", assumming MachineGunHand is Franky's last name. You can also use it in if statements or for loops. ex: if user is over 18 return "hey {join} you can buy ammo" else "Get out of here little kid!"
HTML is still the main language for web development, but JSX is like a mix between HTML and JS. It is syntactical sugar for REACT. JSX almost works the same as HTML, but a main difference is the className vs class. JSX uses the term className syntax instead of class.

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yet Another Resource Negotiator. Yarn is created by Facebook, along with REACT. Yarn adds a ton of files to your project, mainly in the folder called NodeModules. running yarn while using a REACT project makes it so that the JSX syntax functions and all the different componenets are able to commmunicate and the UI is able to function.

Researched answer:Yet Another Resource Negotiator. Yarn is created by Facebook, along with REACT. Yarn adds a ton of files to your project, mainly in the folder called NodeModules. running yarn while using a REACT project makes it so that the JSX syntax functions and all the different componenets are able to commmunicate and the UI is able to function. Yarn is stored on the local machine and then added to the project. 

3. What is an anonymous function in JavaScript?

Your answer: i have had to look this up before, becasue i could not figure out why when i googled a question, instead of naming a function, people were just calling it a function. It is because it can only be used one time. It only pertains to a variable but i dont really get how it works. 

Researched answer: After further research... It can only be used one time. It only pertains to a variable that it was assigned to. You can choose to pass information into the function. I do not really see why you would use an anonymous function assigned to a variable instead of just using a function though. unless you wanted to have the code in a different area, kind of like ex. var cigs = function { console.log("smoke away old man")} var candy = function {console.log("stick to RedVines little Man!")} if age is > 18 then return  cigs else return candy. 

4. What is the difference between a class and an object?

Your answer:
A class is roadmap for objects
An Object is KEY VALUE PAIRS

Researched answer: Class is the blueprint, roadmap, thomas guide, exploded specs of objects. I see it as like I run a  mechanic shop, well its myslef, my buddy zach and our friend aaron. All the different stuff people bring us require different tools, different parts, different everything. i mean we work on boats also, you dont need to hook up a water hose to a motorcycle. so what happens is when a new customer shows up, we enter thier vehicle with the Vin and their name for the vehicle. so example,  VIN:"123" Elenore. thats just a name and some didgets, now who is supposed to work on it. no idea, well, its a Dupont Pepper Grey 1967 Ford Mustang fastback, depicted as a Shelby GT500, with a customized body kit.  Now it would be silly to assign that to zach, zach only works on boats. So i put Elenore in the Class of "Cars" already i can look up things about Elenore.  I can see what type of oil she takes, how to work on her electrical wiring. What is going on is i created a bunch of "methods" in my program for cars, and when i assigned Elenore,the object, the class of "car" i gave her access to all of the methods associated with that class. WHOAh. 

5. What is the difference between state and props in React?

Your answer: State is the actual value of something at a given time, like the weather in vegas is 114 deg F. Now on my phone, in san diego,  i look up the weaher and it says "Las Vegas 114 deg". my phone showing the weather is the "props." Props is referencing or showing what the state is up to, at, whatever, at a given time. my phone wasnt in vegas. Its giving props to the state though for hooking it up with such accurate on time weather and allowing it show it to my eyeballs through my phone though.  

Researched answer: State is the actual value of something at a given time, like the weather in vegas is 114 deg F. I am in San diego and am thinking about going to vegas but not sure if its cold. I look up the weaher and it says "Las Vegas 114 deg". My phone showing the state of the weather in Vegas by using "props." A little better breakdown would be that REACT uses props so that my phone can show what the state is. The weather in Vegas can not move. That would just be silly, but props can move. Soooooo, Props_vegas is pretty much like a live cam mounted and pointed right at the worlds biggest theremometer that the city of Vegas has at a gas station. Now my phone, it has the code written so that it can be friends with props_vegas if i want it to be, and it can watch that live feed. When i say, hey, whats the weather in vegas. The program goes, hey props, ask your homie props_vegas, what the weather is out there, and props_vegas shows the live cam feed showing what the state/weather is at 114 deg f. 

6. STRETCH: Which is the difference between a div and a span?

Your answer: I know that div is block level organization. i am not sure what span is. I used div yesterday when working on my portfolio. i set up divs in different sections of the body and was able to give those sections different back grounds which seperated out the different content on my page. 

Researched answer:WHOAH! so span and div are kinda similar. You can use span to inline style. So i could be like 
<h3>
<p><span style="background-color:#fffff">Smokers are good for casinos</span> Barbaques are very usefull for cooking</p>
</h3>
The info contained in the <span> is going to have different background than the rest of the info in the <p>. I am very impressed and do not want to forget span because i want to try and use it. Am not sure why. i wonder if <strong> or something like that is considered a span but with syntactical sugar. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: relies on the concept of classes and objects. Ruby does this. I watched the first 10 min of sarah explaining ruby and she says that ruby is object oriented programming. 

2. Ruby: created by a guy whos name sounds like quazimoto, its like 30 years old, it has only been changed majorly like 3 times. we are on version 3. it does basic arthmatic and if you want a decimal for an ansewr you have to tell it before you do the problem. that is how far i got in the lecture. 

3. Implicit return: means that a function returns a value/values without you actually saying the word return. kind of like me tossing you a ball and instead of saying "catch" i just say AUSTIN! and you look and i toss it. 

4. Ruby blocks: they contain chunks of code, it has an assigned name, its enclosed in ({})

5. Ruby hashes: its like an array, actualy it sounds more like a bunch of objects, keys and value pairs. hmmm this is silly. it says, its like an array, but instead of 0 indexed it has the help of "arbitrary keys of any object type". thats confusing. 
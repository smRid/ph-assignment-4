# ph-assignment-4



1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans - 
    getElementById : 
    This is a type of selector in DOM where it specifically targets a single element based on its unique id attribute. 

    getElementByClassName :
    This is a type of method in DOM where it targets every element taht has a specific class. 

    querySelector / querySelectorAll :
    This is a method that utilizes the selector API to find elements using CSS syntax.

2. How do you create and insert a new element into the DOM?
Ans - To manipulate the DOM effectively first I need to create the element in memory then attach it to the stucture of a webpage.

3. What is Event Bubbling? And how does it work?
Ans - Event bubbling is the way of browser handles nested clicking.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans - Event delegation is a method that takes advantage of event bubbling. 
    It is useful for memory efficiency where it can take up small amount of memry for a big data table, it can optimise the listeners in browser.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans - While both methods are used to "interrupt" the normal flow of an event, they handle two completely different aspects of how a browser reacts to a user's action. preventDefault() stops the browser's built-in behavior, while stopPropagation() stops the event from traveling up the DOM tree.

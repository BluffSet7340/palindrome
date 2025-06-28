### Notes

Using the defer boolean flag allowed me to actually read the input text and log it to the console. Rather than stopping the parsing of HTML the moment it hits the script tag and starts executing it, it first allows the entire DOM to be loaded entirely and then executes the content of the script. 

I used the spread operator to make a copy of the array in a new memory location. Without using the spread operator, it was simply comparing the references, and since str1 and str2 point to the same string object, the branch that says "not a palindrome" will never run.

Another thing that I just learnt is that leaving the variable assignment outside of any funtions in the script file means that it only runs once and since the input field is intially empty, the input variable will always hold an empty string. Keeping it in a function makes more sense as by the time the button is clicked, the user will have already typed something into the input field.

I used ChatGPT to generate a regular expression that keeps only alphanumeric characters.

To make the height of the div box dynamic I used min-height rather than height so that when the output is printed, the height of the div box increases to accomodate it.


/*
Pseudocode:
Possible themes:

Grateful Dead themed hangman? 
skeleton hanging? the goal is to make the dead, grateful (the skeleton is a dead Jerry Garcia and getting the word 
    right brings his flesh back on to his bones)
the words can be names of songs or lyrics 
life bar is the wall of sound
Jerry is 'hanging' on stage with the rest of the Dead
the keys are the audiance in the 'pit' 


MVP:

layout web page with css grid and flexbox so it is responsive
set up the title and supporting text
set up a responsive keyboard illustrating each letter of the alphabet
- In html create divs containing each letter of the alphabet
- set clickable buttons in the form of a keyboard on page displaying the divs
In html create a div for the empty tag containing the new "secret word"
set up library of random theme related words. Start with a few, can add more later
set function for showing the clicked letter, IF correct, in the CONTAINER of the secret word
set animation or transition for clicking action on keyboard
set event for new background color of key button after letter clicked (greyed out)
set function for positive sound IF letter is correct and negative sound IF incorrect
set function for adding a body limb to IMG OF JERRY (maybe revealing part of an existing image) IF incorrect
set function for decreasing part of sound(or volume) bar IF incorrect
set function for animation IF the word is complete and Jerry is alive
set function for animation IF Jerry has all of his/her limbs and hung
add button to restart

https://www.pinterest.com/pin/329677635220872061/visual-search/?x=11&y=10&w=272&h=561

Nice to haves:
selects the song of the secret word (the song which contains the lyric or the name of the song) to play in the back
set function and possible animation for when the human has all of his/her limbs (JERRY TURNS INTO 70'S JERRY AND 
THE DEAD JOIN HIM ON STAGE AND *RIPPLE* PLAYS

*/

$('h1').css('color','blue')
/**
 * @name teeNine
 * @param message
 * @description
 * T9 is a system used in mobile phones with numeric keypads, that uses a predictive algorithm to help make texting faster.nokia 3390
   Normally in order to type the word dish, you'd need to hit the 3 key once, the 4 key three times, the 7 key four times, and then the 4 key again twice. But using T9, you could just type 3, 4, 7, 4, and it'll predict the word "dish" (or maybe "fish", but for this challenge we won't need to worry about that).
   You need to send an urgent text, but your Nokia 3390 is out of battery so you borrow a friend's phone. You quickly type out the text and hit send, but in your haste you forgot that the phone you're using isn't equipped with T9, so the text comes out all garbled.
   Given a string representing the text you intend to send, return the string that you do end up sending.
   Let's assume we're dealing with a standard mobile phone keyboard layout, where each key corresponds to a set of letters as follows:
   2 = A,B,C
   3 = D,E,F
   4 = G,H,I
   5 = J,K,L
   6 = M,N,O
   7 = P,Q,R,S
   8 = T,U,V
   9 = W,X,Y,Z
   And let's also assume that all punctuation and whitespace is handled normally.
   Examples
   For message = "cat", the output should be teeNine(message) = "bt". To spell "cat" using T9, you would press the 2 key twice, then the 8 key once, but without it two strokes of the 2 key would produce a "b".
   For message = "a cup of tea", the output should be teeNine(message) = "a atp md tda". You would enter the commands "2 287 63 832", and since each key is being pressed once at a time, it'll produce the first letter on the key each time ("a" for 2, "t" for 8, "p" for 7, etc).
   For message = "Oh noooooo!!", the output should be teeNine(message) = "mg m!!". To spell the word "noooooo", you'd need to hit the 6 key seven times, which would cycle through the letters "m", "n", "o", "m", "n", "o", "m", settling on the final "m". Also note that the punctuation remains the same.
   */
 
function teeNine(message) {

}

var cat = "cat";
//Expected Output for cat is : "bt"
var message1 = "may be the force with you";
//Expected for message1 is: "maw ad tgd dmpad wgtg wmt"
var message2 = "I think that is supercalifragilisticexpialidocious.";
//Expected Output is : "g thmj tgat gp ptpdpbjgdpahjgptgadwpgajgdmagmtp."
var message3 = "hii badelkjiggedtvted ghion zwymnout";
//Expected Output is: "i believe in you"
var message4 = "Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.";
//Expected Output is: "jdt tp ad gpatetj tm pdmpjd wgm majd tp gaqw, tgdw apd tgd agapmgmg gapemdq wgm majd mtp pmtjp ajmqn."
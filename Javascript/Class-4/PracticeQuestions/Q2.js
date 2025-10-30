/*

    Q2 Create a function reverseWords(sentence) that:
        - Takes a string sentence.
        - Returns a new string where the order of words is reversed.
        - Example: "Hello world" → "world Hello".

        - sentence = "The blue fox jumps over a white lazy dog";
                   => "dog lazy white a over jumps fox blue The"


*/


// Declarative form of writing code - prefered
function reverseWords(sentence) {
     if (sentence == null || sentence.length == 0) {
        return;
    }
    return sentence.split(" ").reverse().join(" ");
}


// imperative way of writing code - not prefered
function reverseWordsImperative(sentence) {
    if (sentence == null || sentence.length == 0) {
        return;
    }
    const words = sentence.split(" ");
    let ans = "";
    for (let i = words.length - 1; i >= 0; --i) {
        ans += words[i];
        ans += " ";
    }
    return ans.trim();
}


console.log(reverseWords("Hello World"));
console.log(reverseWords("The quick brown fox jumps over the white lazy dog"));
function unique_char(str) {
  // Create a Set to store unique characters
  var uniqueSet = new Set();

  // Iterate through each character in the input string
  for (var char of str) {
    // Add the character to the Set (automatically eliminates duplicates)
    uniqueSet.add(char);
  }

  // Convert the Set back to a string and return
  return Array.from(uniqueSet).join("");
}

// Log the result of calling unique_char with the input string "thequickbrownfoxjumpsoverthelazydog" to the console
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

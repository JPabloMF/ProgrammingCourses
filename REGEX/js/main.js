/* CHARACTER */

/*
  DOT: .
    - Find all that be a character (everyone)
    - a,1, (spaces,tabs).etc
  
  Example:
   - "abcd123" apply ., found every character
   - "abc1" apply .1, found every character that contain a 1 after it
   - "abcdef"
     "123"    apply ...., found where are 4 characters together
  
  Warnings: if you apply ... you could finde "abcdefghi" => "(abc)(def)(ghi)"

  DIGITS (\d) WORDS (\w) SPACES (\s): 

  \d or [0-9]: found only digits (1,2,3,4,5,6,7,8,9,0)
    - \d\d\d works equal to ... but with only with digits
  \D: found all that not be digits

  \w or [a-zA-Z0-9_]: found all that could be part of a word (*digits* a z A Z _)
    - FIND DOT: [a-zA-Z0-9_\]
  \W: found all that couldn't be part of a word

  \s: found only white spaces
  \S: found all that not be white spaces
*/
function multiplyMatrices(A, B) {
    // let rows = A.length;
    // let cols = A[0].length;
    let result = [];
  
    // for (let i = 0; i < rows; i++) {
    //   result[i] = [];
    //   for (let j = 0; j < cols; j++) {
    //     result[i][j] = A[i][j] * B[i][j];
    //   }
    // }

      
    // for (let i = 0; i < A.length; i++) {
    //     result[i] = [];
    //     for (let j = 0; j < A[0].length; j++) {
    //       result[i][j] = A[i][j] * B[i][j];
    //     }
    //   }
  
  //   // return result;

    const newArr1 = A.flat()
    const newArr2 = B.flat()
    const maxLength = Math.max(newArr1.length, newArr2.length);
  //   console.log(newArr1, newArr2)
  //   for(i=0; i<=newArr1.length; i++){
  //     // console.log(i,newArr1)
  //     for(j=0; j<=newArr2.length; j++){
  //       result = newArr1[i] * newArr2[j];
  //   }
  // }
  // return result;

  for (let i = 0; i < maxLength; i++) {
    const val1 = newArr1[i] || 0;
    const val2 = newArr2[i] || 0;
    result.push(val1 + val2);
  }
  return result;
}
  
  // Example input
  const A = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
  ];
  
  const B = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
  ];
  
  const productMatrix = multiplyMatrices(A, B);
  console.log(productMatrix);
  


  let obj = {
    parent_name: 'Father',
    child1: 'Sumair'
  };
  
  let arr = ["Hamza", "Shahbaz", "Jahanzaib", "Junaid", "Tabish", "Ahtisham", "Asghar"];
  

for(const x in arr){
    // console.log(x, arr)
    // console.log(`child${x}: ${arr[x]}`)
    obj[`child${Number(x) + 2}`] = arr[x]
}

// arr.forEach((name,index)=>{
//     // console.log({child,name})
//     obj[`child${index + 2}`] = name

// })
// arr.map((name,index)=>{
//     //  console.log({name,index})
//     //  console.log(obj)
//      obj[`child${index + 2}`] = name
    
// })

  console.log(obj);
  

// Object =
// {
// parent_name: 'Father',
// child1: 'Sumair',
// child2: 'Hamza',
// child3: 'Shahbaz',
// child4: 'Jahanzaib',
// child5: 'Junaid',
// child6: 'Tabish',
// child7: 'Ahtisham',
// child8: 'Asghar',
// }
  

// check vowels in a string
// function checkVowel(str) {
// // const vowels = ["a","e","i","o","u"]
// const vowels = "aeiou"

// const arrStr = str.split("")
// // console.log(arrStr, vowels)
// for(let arr of arrStr){
//   // console.log(arr)
//   if (!vowels.includes(arr)) {
//     console.log(arr,vowels)
//   }
// }
// return true
// }
// const strWithoutVowel =  checkVowel("A quick brown fox jumps over the lazy dog")
// console.log(strWithoutVowel)


const checkVowel = (str) => {
// const vowels = ["a","e","i","o","u"]
const vowels = "aeiou"
const updatedArrWithoutVowel = []
const arrStr = str.split("")
// console.log(arrStr, vowels)
for(let arr of arrStr){
  // console.log(arr)
  if (!vowels.includes(arr)) {
    console.log(arr,vowels)
    updatedArrWithoutVowel.push(arr)
  }
}
return updatedArrWithoutVowel.join("")
}
console.log(checkVowel("A quick brown fox jumps over the lazy dog"))



✅ 1) What is the difference between HTML and XHTML?
🔷 HTML (HyperText Markup Language):
It is not case-sensitive (<Div> is valid).

Tags can be not properly closed in older HTML.

Follows SGML (Standard Generalized Markup Language) rules, more relaxed.

Browsers are forgiving of syntax errors.

🔷 XHTML (Extensible HyperText Markup Language):
It is case-sensitive: All tags must be lowercase.

All tags must be closed (even empty tags).

Attributes must be quoted and properly formatted.

XHTML is stricter, based on XML rules.

🔷 Example Comparison:
✅ Valid in HTML:

html
Copy
Edit
<img src="logo.png">
❌ Invalid in XHTML (must be self-closed with lowercase and quoted attribute):

html
Copy
Edit
<img src="logo.png" />
🔍 Summary Table:
Feature	HTML	XHTML
Syntax rules	Lenient	Strict (XML-based)
Tag case	Not case-sensitive	Must be lowercase
Closing tags	Optional sometimes	Mandatory for all tags
Error handling	Forgiving	Strict (won’t render if errors)

Follow-up Questions:

Q: Why use XHTML if it's stricter?
A: XHTML forces cleaner, well-structured code, and it’s better for integration with XML-based systems like RSS, SVG, or MathML.

Q: Is XHTML still used today?
A: It’s not commonly used for websites now. HTML5 is preferred due to its flexibility and modern features.

✅ 2) What is the difference between HTML and HTML5?
🔷 HTML:
Older versions like HTML 4.01.

Lacked support for multimedia (video/audio).

Limited semantic tags.

Needed Flash or external plugins for multimedia.

🔷 HTML5 (Latest version):
Supports audio/video playback natively (no plugins).

Introduced semantic tags (<header>, <footer>, <article>, etc.)

Supports local storage (no cookies required).

Enhanced form controls (<input type="date">, <email>, <range>, etc.)

Introduced Canvas API, Geolocation API, WebSockets, and more.

🔍 Summary Table:
Feature	HTML	HTML5
Multimedia support	Needs plugins	Built-in <audio>, <video>
Form types	Limited	Advanced types like email, date
Semantic tags	Minimal	Many semantic tags
APIs	None or external	Built-in APIs (Canvas, Geo, etc.)
Mobile support	Limited	Designed with mobile in mind

Follow-up Questions:

Q: What is Canvas in HTML5?
A: <canvas> is an HTML5 element that allows dynamic drawing of graphics via JavaScript — great for games, charts, and animations.

Q: Does HTML5 work in old browsers?
A: Most modern browsers support HTML5. Older browsers (like IE8 or below) have limited or no support.

✅ 3) What is the role of the <head> tag in HTML?
🔷 Purpose:
The <head> tag contains meta-information about the document that’s not directly visible to users but is essential for:

Browser behavior

SEO

External file linking

Page metadata

🔷 What it can contain:
Tag/Element	Purpose
<title>	Sets page title (shows in tab)
<meta>	Defines metadata (charset, viewport, etc.)
<link>	Link to stylesheets or favicons
<style>	Internal CSS
<script>	Link or write JS

🔷 Example:
html
Copy
Edit
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css" />
</head>
Follow-up Questions:

Q: Why is <meta charset="UTF-8"> important?
A: It tells the browser which character encoding to use, ensuring symbols and special characters render properly.

Q: What does <meta name="viewport" ...> do?
A: It ensures your site is responsive on all devices — crucial for mobile-first design.

✅ 4) What is the role of the method attribute in HTML forms?
🔷 Purpose:
The method attribute defines how form data is sent to the server.

🔷 Two Common Values:
Method	Description
GET	Sends form data as URL parameters. Used for search, filter, or read-only actions.
POST	Sends data inside the HTTP request body. Used for actions like login, form submission, etc.

🔷 Example:
html
Copy
Edit
<form method="GET" action="/search">
  <input type="text" name="query" />
  <button type="submit">Search</button>
</form>
html
Copy
Edit
<form method="POST" action="/submit">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form>

{/* 🔍 Key Differences:
Feature	GET	POST
Data Visibility	Visible in URL	Hidden in body
Length Limit	Limited	No limit (practically)
Use Case	Search, read operations	Submit, write operations
Bookmarkable	Yes	No
Secure?	Less secure	More secure for sensitive data

Follow-up Questions:

Q: Why should login forms use POST?
A: Because GET exposes data in the URL, which can be logged or cached. POST hides it in the request body, making it safer.

Q: What happens if I omit the method attribute?
A: The browser defaults to GET.

Let me know if you'd like me to continue with more important HTML topics like:

Semantic vs Non-Semantic tags

Accessibility attributes

Best practices for SEO in HTML

Common form attributes (action, enctype, autocomplete)

Input types and validation

Would you like a complete HTML Interview PDF cheat sheet at the end as well?

<img src="logo.png">


❌ Invalid in XHTML (must be self-closed with lowercase and quoted attribute):

<img src="logo.png" />



{/* 🔍 Summary Table: */}
| Feature        | HTML               | XHTML                           |
| -------------- | ------------------ | ------------------------------- |
| Syntax rules   | Lenient            | Strict (XML-based)              |
| Tag case       | Not case-sensitive | Must be lowercase               |
| Closing tags   | Optional sometimes | Mandatory for all tags          |
| Error handling | Forgiving          | Strict (won’t render if errors) |



Follow-up Questions:

Q: Why use XHTML if it's stricter?
A: XHTML forces cleaner, well-structured code, and it’s better for integration with XML-based systems like RSS, SVG, or MathML.

Q: Is XHTML still used today?
A: It’s not commonly used for websites now. HTML5 is preferred due to its flexibility and modern features.

✅ 2) What is the difference between HTML and HTML5?
🔷 HTML:
Older versions like HTML 4.01.

Lacked support for multimedia (video/audio).

Limited semantic tags.

Needed Flash or external plugins for multimedia.

🔷 HTML5 (Latest version):
Supports audio/video playback natively (no plugins).

Introduced semantic tags (<header>, <footer>, <article>, etc.)

Supports local storage (no cookies required).

Enhanced form controls (<input type="date">, <email>, <range>, etc.)

Introduced Canvas API, Geolocation API, WebSockets, and more. */}










Tools





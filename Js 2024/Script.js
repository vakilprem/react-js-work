// // console.log("hello");
// // console.log("I like Pizza");
// // window.alert(`This is an alert`);
// document.getElementById("data").textContent = "hello";
// document.getElementById("test").textContent = `I like Pizzz`;

// console.log("hello");
// function getrandomrole() {
//   const role = ["ADMIN", "USER", "GUEST"];
//   const randomRole = role[Math.floor(Math.random() * role.length)];
//   console.log("Random role:", randomRole);
//   return randomRole;
// }

// function getrandomUsernName() {
//   const name = "lksdsnfilnfng";
//   let usenamee = "";
//   for (let i = 0; i < 8; i++) {
//     usenamee += name.charAt(Math.floor(Math.random() * name.length));
//   }
//   console.log("Random username:", usenamee);
//   return usenamee;
// }

// // Example usage:
// console.log("Random role:", getrandomrole());
// console.log("Random username:", getrandomUsernName());

function getRandomRole() {
  const roles = ["ADMIN", "USER", "GUEST"]; // Use a more descriptive variable name
  const randomIndex = Math.floor(Math.random() * roles.length);
  const randomRole = roles[randomIndex];

  console.log("Possible roles:", roles); // Log all possible roles
  console.log("Generated random index:", randomIndex); // Log for debugging
  console.log("Random role:", randomRole);
  return randomRole;
}

function getRandomUsername() {
  const name = "lksdsnfilnfng";
  let username = "";
  for (let i = 0; i < 8; i++) {
    const randomCharIndex = Math.floor(Math.random() * name.length);
    const randomChar = name.charAt(randomCharIndex);
    username += randomChar;
    console.log(
      "Iteration",
      i + 1,
      ":",
      "Selected character index:",
      randomCharIndex,
      "Character:",
      randomChar
    );
  }
  console.log("Random username:", username);
  return username;
}

// Example usage:
console.log("Random role:", getRandomRole());
console.log("Random username:", getRandomUsername());

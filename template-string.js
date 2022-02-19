
const friends = ['mofu', 'mofazzal', 'jibon', 'papa']
const count = 5;
// const new1 = ` <h3 class="friend-name">Friend-${count}</h3>`;
const new1 = ` <h3 class="friend-name">Friend-${friends.length}</h3>`;
console.log(new1);


// another example

const first = 'shakil';
const last  = 'ahasan';
// const fullName = 'This person name is' + first + ' '  + last;
const fullName = `This person name is: ${first} ${last}. Has money ${friends.length *500}`;
console.log(fullName);



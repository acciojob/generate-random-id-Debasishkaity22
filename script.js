function makeid(l) {
  // write your code here
	let random1="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
	let res='';
	for(let i=0;i<l;i++){
		let index=Math.floor(Math.random() * random1.length);
		res+=random1.charAt(index);
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

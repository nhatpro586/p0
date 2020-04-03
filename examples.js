let mStr= "welcome To the realm";

function lowStr(str) {
	return str.toLowerCase();
}

function capitalStr(str) {
	str = str.split(" ");
	
	let strLen = str.length;

	for (let i = 0; i < strLen; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	}

	return str.join(" ");
}

console.log(lowStr(mStr));
console.log(capitalStr(mStr));


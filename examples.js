let mStr= "Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.";

function insertStr(bStr,str,pos) {
	let rs="";
	rs = bStr.slice(0,pos) + str + bStr.slice(pos);
	return rs;
}

function splitStr(str) {
	let count=0;
	for (let i=0;i<str.length;i++) {
		if (str[i]=="\n") count =0;
		if (str[i]==" ") count+=1;
		if (count==6) {
			str=insertStr(str, "\n", i+1);
			count =0;
		}
	}
	return str;
}

function countSpc(str) {
	let count=0;
	let line=1;
	for (let i=0;i<str.length;i++) {
		if (str[i]==" ") count+=1;
		if (str[i]==" \n") {
			console.log("Dong",line,"co", count, "khoang trong");
			line+=1;
			count =0;
		}
	}
	return "Done!!";
}

console.log(splitStr(mStr));
console.log(countSpc(mStr));

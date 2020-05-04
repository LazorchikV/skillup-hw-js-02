// #1
let a = "i am in the easycode";
let newa = "";

for (let i = 0; i < a.length; i ++){
    if(a[i-1] === ' ' || a[i] === a[0]){
	newa += a[i].toUpperCase();	
	}else{
	newa += a[i];
	}
};
console.log(newa);
document.write('1) Каждое новое слово в строке с Большой буквы \"',newa,'\"<br>');

// I Am In The Easycode
// #2
let str1 = "tseb eht ma i"
let newstr1 = "";

for (let i = str1.length-1; i>=0; i--){
	newstr1 += str1[i];
};
console.log(newstr1);
document.write('2) Читаем задом наперед строку \"tseb eht ma i\" - \"',newstr1,'\"<br>');

//#3
let number = 10;
let factorial = 1;

for (let i = 1; i <= number; i ++){
	factorial *= i;
}
console.log(factorial);
document.write('3) 10! = ',factorial,'<br>');

//#4
let str2 = "JavaScript is a pretty good language";
let newstr2= "";

for (let i = 0; i < str2.length; i ++){
    if(str2[i-1] === ' ' || str2[i] === str2[0]){
	newstr2 += str2[i].toUpperCase(); 
	}else if(str2[i] !== " "){
	newstr2 += str2[i];
	}
}
console.log(newstr2);
document.write('4) Убираем пробелы и пишем каждое новое слово с большой буквы \" ',newstr2,'\"<br>');
//#5
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let a of arr){
	if (a % 2 !== 0){
		console.log(a);
		document.write('5) Выводим нечетные числа из массива: ',a,'<br>');
	}
}

//#6
let list = {
	name: 'denis',
	work: 'easycode',
	age: 29
}

for(let b in list){
	if(typeof list[b] === "string"){
		list[b] = list[b].toUpperCase();
	}
}
console.log(list);
document.write('6) Пишем каждое новое слово с большой буквы \"',list.name,'\"', ', \"', list.work ,'\"<br>');
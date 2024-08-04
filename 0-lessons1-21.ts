// it's java script with types, it helps you detect errors in the code before even running the code, a process called (static type checking)
// its code get converted to js code a process called (Transpilation), all js code is valid ts code.

// npm i -g typescript //-g is global which means that you will install typescript in the system not for a specific project only
// tsc -v // to check the version
// tsc index.ts // to compile the file, you will notice that a js file is added (Transpilation)
// tsc -w index.ts// if you changed your ts file you should compile it again so the js file can see these changes, but when you compile the ts file using (-w)
// flag which stands for (watch mode), it will automatically see any changes you make in the ts file and apply the changes to the js file
//now to run your file you will run the js file using node
//tsc // node dist/index.js==

//configuration file
// tsc --init // it will automatically create for you the configuration file called (tsconfig.json)
// target // which version of ecma script is specified e:g target: 'es2016'
// rootDir // where is your typescript files that will be compiled, you should put it in a src directory e:g rootDir: './src'
// outDir // where will your compiled files be transferred e:i the js file from ts files, it should be in a dist directory so outDir: './dist' 
// removeComments: true // remove the comment from the js compiled file
//sourceMap: true

// when you declare a function without explicitly mention its parameter data Types you will get an error\
// because this is what ts is all about to define your data types clearly, but if you want to be able to\
// declare the parameter without specifying the datatypes, in your configuration file do:- 
// noImplicitAny: false

// all functions if not explicitly return a value it returns undefined, if you want to disable this\
// and force all of your function to return a value do in the configuration:-
// noImplicitReturns: true
// noUnusedLocals: true= // to get an error of unused variables
// noUnusedParameters: true // raise an error if you don't use a function parameter
// allowUnreachableCode: false // raise an error with unreachable code,
    // code that come after a function that never returns

// Type Annotations(type signature), Any data type, functions
// you do it to force the data type checking, if you haven't specified the type the compiler will conclude
// the type according to the value you provided and if you tried to assign to the variable a value that 
// don't match with it's type it will cause an error.
// to make the variable as js variable that accept any type of value and you will be able to change its type
//in the subsequent code we use any data type.
// you can also specify that a variable can be one of two types or one of some types only using |

let num: number = 9;
num = "messi" // will cause an error
let input: any = 9;
input = "messi" // will not cause an error
let myvar; // will be any datatype as you didn't specify
let strOrInt: string | number = "initial";
let strArr: string[] = ["messi", "neymar"];
let strNumArr = ["messi", 10]; // this ok an the type of your array will be 
// (string | number) []
let twoDarray: string[][] = [[], [], []] // for multi dimensional array
let mix: (number | string | string[])[]; // an array that will hold numbers, strings and array of strings
function func(num: number, name: string) : string {} // this function should return only a string values

//any js function parameter is obtional, if you don't pass it will just be undefined
function func(name, age) {
	console.log(name, age)
}
func() // notice that i didn't pass any parameter so it will print 
// undefined undefined

function func(name="unKnown", num) // this is a default value if you don't pass the argument to the function, the default value will be used

// when you call this function and you want to skip the first arg and pass the second arg you can do this:
func(undefined, 20)
// if you call it like this: func(20), the name parameter will be 20 and age will be undefined

// with ts you can't skip passing an argument, you should specify them all, if you don't want to pass certain arg use undefined
function func(name: string, num: number)
func(undefined, 20);
// but if you specify default value for the parameter you can skip it
function func(name: stirng = "Unkonwn", num: number)
func(20) // here the name will take the default value
// if you want to create optional parameter you use ?
function func(name: string, num?: number)
// required parameter should come before optional ones in the function prototype
function func(name?: string, num: numebr) // this will produce an error as num parameter is required and name is optional so num must come first then name like this (num: number, name?: string)

function func(...nums: number[]) : number {

}
func(10, 20, 11.5, 15, +true) // +true will be 1 so there is no error will occur

//anonyms function
const add = function (num: number, num2: number): number {
	return num + num2;
}
//arrow function
const add = (num: number, num2: number) => num + num2;

// type alias: is a short name for you data type
type str = string;
let name: str = "messi";
type strNum = string | number;
let strOrNum: strNum = "string"
strOrNum = 10; // no error

// type annotations to objects
let obj: {
	readonly name: string, //readonly -> you will not be able to change name value
	age: number,
	hire?: boolean
	skills: {
		one: string,
		two: string
	}
} = {
	name: "mostafa"
	age: 21,
	hire: true // optional
	skills: {
		one: "HTML",
		two: "CSS"
	}
};

//defining new types
type buttons = {
	up: string,
	down: string
}
// extending from type + adding another
type newType = buttons & {
	x: boolean
}
function func(btn: newType) {
	// ...
}
func({up: "messi", down: "neymar", x: 1});

// intersection type
type mix = buttons & newType;

//literal Types
// if you have a function that will always return some values you can specify it like this
function compare(num: number, num2: number) : 1 | -1 | 0 {
	if ..
		return 1
	else if ..
		return -1
	else ..
		return 0
}
// you can also use "type" to create a type that is only one of these 3 values
type nums = 0 | 1 | -1;
function compare(num: number, num2: number) : nums {}

// Tuple
// is another sort of an array, we know exactly how many elements it's contain,\
    //we know which type its contain in a specific position.

let myTuple: [number, string, boolean] = [11, "title", true];
myTuple = [12, "title 2", false]
article.push(100) // you can push because there is no restriction
// if you make the tuple readonly then you will can't push
console.log(myTuple) // [11, title, ture, 100]
let myTuple: readonly [number, string, boolean] = [11, "title", true];
// you will be able to reassign but not add new key 
const [id, title, published] = article; // destructing
console.log(id, title, published);

// void and never
function func(num) : void {
	return;
}
console.log(func(4)) // void function returns undefined
//never function doesn't return at all ! like function that throw an error or that have an infinite loop\
    //it returns type called never which means never reutrns!!
function func(n: number) : never {
	throw new Error("msg");
}

// enum
// allow for more clear and organized way to define your constants variables,
// it can be numeric or string based or heterogenous both number and string, by default it's number based
function func(): number {
	return 15;
}
enum kids {
	five = 25,
	seven = 20,
	ten = getTen()
}
enum level {
	EASY = kids.five,
	MEDIUM = 9,
	HARD = MEDIUM - 6
	aVar // you should initialize it because you did with all other enum variables
	//but if you put it at the beginning of the enum without initialization
	// it will work as it will take the value of 0
}
console.log(level.EASY) // 25
console.log(level.HARD) // 3

//Type Assertion
// you can tell the ts compiler that the variable you made is of a certain type and the compiler will\
    // not check after you if it's the correct type or not.
let myImage = document.getElementById("my-image") as HTMLImageElement;
console.log(myImage.src);
// if you didn't specify the "as HTMLImageElement" the data type will be just HTMLElement, image element don't have value attribute, so if you tried myImage.value will raise an error

//another way
let myImage = <HTMLImageElement> document.getElementById("my-image");
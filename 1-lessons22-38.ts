// interface
interface User {
	readonly id: number,
	username: string,
	country?: string
	sayhello(): string
	saywelcome: () => string
	getdouble: (num: number) => number
}
const userOne: User = {
	id: 1,
	username: "mostafa",
	country: egypt // optional
	sayhello() {
		return `hello ${this.username}`;
	}
	saywelcome: () =>{
		return `welcome ${this.username}`
	}
	getdouble:(n) => {
		return n * 2;
	}
}
 
interface User {
	address: string
}
// interface reopen to add new property, now address is part of the User

interface Nurse extends User, anotherInterface {
	departement: string
}

// index signature, this allow you when you create an object form this interface to add
    // new properiteis that you haven't explicitly define in you interface
interface newType {
	[key: string]: any
}

//index signature
// An index signature in TypeScript allows you to define a type for the keys and values of an object\
// without needing to specify every possible property explicitly. This is particularly useful when you\
// want to create flexible and dynamic data structures where the number of properties is not known in advance.
// Syntax
interface MyObject {
  [key: string]: boolean;
}
//Components
// Square Brackets `[key: string]`: This part of the syntax indicates that any property name \
    // (key) of type `string` can be added to the object.
// `key`: A placeholder name for the property key.
// `string`: The type of the property key (can also be `number` for numeric keys).
// Value Type `boolean`: This specifies the type of the values that the properties can have.\
    //In this example, all values associated with keys in `MyObject` must be of type `boolean`.
// Usage
// Define Interface with Index Signature
interface MyObject {
  [key: string]: boolean;
}
// Create Object with Arbitrary Properties
const obj: MyObject = {
  contract: true,
  isActive: false,
  anotherProperty: true,
};
// Access Properties
console.log(obj.contract); // true
console.log(obj.isActive); // false
// Use Cases
// Dynamic Properties**: When you have an object where the property names are not known ahead of time but\
    //  you know the type of the values.
interface Config {
    [option: string]: string;
}
const config: Config = {
    url: "http://example.com",
    method: "GET",
    timeout: "5000",
};
//Dictionaries or Maps: Useful for creating key-value pairs where keys are strings or numbers.
interface StringNumberMap {
    [key: string]: number;
}
const scores: StringNumberMap = {
    Alice: 90,
    Bob: 85,
    Charlie: 92,
};
//Type Safety
// While index signatures provide flexibility, they can sometimes reduce type safety.\
    // For example, if you misspell a property name or assign a value of the wrong type,\
    // TypeScript may not catch these errors if the index signature is too permissive.\
    // Therefore, it's essential to balance flexibility with the need for precise typing in your application.

//    class with type Annotation
//Access modifiers and parameters properties (Encapsulation)

class User {
	name: string
	private salary: number
	protected departement: string
	msg: () => string; // a function that return string
	constructor(name: string, salary: number, departement: string) {
		this.name = name
		this.salary = salary
		this.departement = departement
		this.msg = () => {
			return `${this.name}`
		}
	}
}
//another way to specify the types is using parameter properties
// the underscore before user name is just a convention that this var is private in some lang that don't support full oop so don't have private key word
class User{
	private static created: number = 0;
	constructor(private _username: string, protected readonly address: string){
	} // you don't have to type this.name = name and so on 
	get username(): string {
		return this._username
	}
	set username(value: string) {
		this._username = value
	}
} 
console.log(userOne.username)
userOne.username = "newName"

//class implement interface: watch
// https://youtu.be/klcmDKP_34s?si=pICtrHT63mubYXYa

// abstract class and memebers
// this is the base class that only job is for other subclasses to inherit from 
    // abstract method is the method that must be overridden by subclasses

abstract class User {
	constructor(title: string){}
	abstract cookingTime(): void;
}

//polymorphism and override
class player {
	constructor(name: string){}
	attack(): void {
		console.log("attacking now");
	}
}
class legend extends player {
	constructor(name: string, spears: number) {
		super(name)
	}
	override attack(): void { // override
		super.attack();
		console.log("attacking with spear")
		this.spears -= 1;
	}
}

// generic type
function func<GenericType>(val: GenericType): GenericType{
	return val;
}
func<number>(100)
func<string>("100")
func<number[]>([1, 2, 3])

function func<T>(val: T): string {
	return `the val is ${val}`;
}
//this is a function that accept any type of data but you should specify the type of data when you call the\
    //function inside the <>, you don't have to write "GenericType" between the <>, just write anything
// arrow function syntax
const func = <T>(val: T): T => val;

//generic multiple types
function func<T1, T2>(val1: T1, val2: T2): void {
	console.log(`the first type is ${typeof val1}\
		the second is ${typeof val2}`);
}
func<number, string>(100, "mostafa")

// class generic type and default value
class User<T = number> { //default Type if you don't specify
	constructor(value: T){}
	show(msg: T): void {
		console.log(`${msg} - ${this.value}`)
	}
}
let UserOne = new User<number>(100)
let UserOne = new User(100)
UserOne.show("message") // here you will get an error as you already
//specified that your type is number so you can't pass a string, workaround is
let UserOne = new User<number | string>

// classes and interfaces
interface user {
	name: string,
	user_id: number
}
class User<T> {
	data: T[] = [] 
	add(item: T): void {
		this.data.push(item)
	}
}
let userOne = new User<user>();
userOne.add({name: "mostafa", user_id: 10});
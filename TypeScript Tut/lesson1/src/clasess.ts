// CHAPTER 6 CLASSES 2:07:41

//////////////////////////////////////////////////////////////////////////

class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello I am ${this.age} years old`;
  }
}

const Raj = new Coder("Raj", "Rock", 22);
// console.log(Raj.age);
// console.log(Raj.lang);
console.log(Raj.music);
console.log(Raj.getAge());

//////////////////////////////////////////////////////////////////////////

// extended classes

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I code in ${this.lang}`;
  }
}

const Ashish = new WebDev("HP 15s", "Ashish", "Melody", 20);
// console.log(Ashish.age);
// console.log(Ashish.lang);
console.log(Ashish.getLang());
console.log(Ashish.getAge());

//////////////////////////////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmi", "guitar");

console.log(Page.play("strums"));

//////////////////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0; // it applies directly to the class and not to the objects that you inciate

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

//calling Peeps three times  then console.log(Peeps.count) = 3

const Ritu = new Peeps("Ritu");
const Vikash = new Peeps("Vikash");
const Shubham = new Peeps("Sam");

console.log(Ritu.id);
console.log(Shubham.id);
console.log(Peeps.count); // use of static keyword

//////////////////////////////////////////////////////////////////////////

// Getter and Setter

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of string");
  }
}

const Myband = new Bands();

// calling gettter
Myband.data = ["Neil Young", "Led Zep"];
console.log(Myband.data);

//calling setter
Myband.data = [...Myband.data, "ZZ Top"];
console.log(Myband.data);

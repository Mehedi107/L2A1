// Problem 1: Solution
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === undefined) return input.toUpperCase();

  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// Problem 2: Solution
type Obj = { title: string; rating: number };

function filterByRating(items: Obj[]): Obj[] {
  return items.filter(item => item.rating >= 4);
}

// Problem 3: Solution
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// Problem 4: Solution
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

// Problem 5: Solution
function processValue(value: string | number): number {
  return typeof value === 'string' ? value.length : value * 2;
}

// Problem 6: Solution
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((prevMax, nextMax) => {
    return prevMax.price > nextMax.price ? prevMax : nextMax;
  });
}

// Problem 7: Solution
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return 'Weekend';

    default:
      return 'Weekday';
  }
}

// Problem 8: Solution
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject('Error: Negative number not allowed');
    }

    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

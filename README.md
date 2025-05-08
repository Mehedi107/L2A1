## Difference between **interface** and **type**

Type and interface are both use to define or shape a object pattern. But they have some difference too. There are given below:

### **Declaration Merging:**

Interface can be re-open or re-declare. But Types can not be re-open or re-declare.
**Example:**

```
// Interface declaration merging
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = { name: "John", age: 30 }; // OK
```

```
// Type alias - cannot be re-opened
type Animal = {
  name: string;
};

// Error: Duplicate identifier 'Animal'
// type Animal = {
//   age: number;
// };
```

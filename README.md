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

### **Unions and Intersections::**

Type can define "union" & "intersection" but in interface these does not support directly.

**Example**

```
// Type alias with union and intersection types

type StringOrNumber = string | number;
type NameAndAge = { name: string } & { age: number };
```

### Primitive Types:

Types can be use to create alias for primitive types or other non-object types. On the other hand interface only use to cerate object types.

**Example:**

```
// Type alias for a primitive type
type ID = string;
```

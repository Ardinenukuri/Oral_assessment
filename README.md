# LinkedList Manipulation & Temperature Converter (TypeScript & React)

## Project Overview

This project contains two key components:
1. **LinkedList Manipulation**: A TypeScript-based implementation of a Linked List data structure, allowing adding, removing, and finding elements in the list.
2. **Temperature Converter**: A React class component (written in TypeScript) that converts temperatures between Celsius and Fahrenheit.

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [LinkedList Manipulation](#linkedlist-manipulation)
  - [Implementation](#implementation)
  - [Testing](#testing)
- [Temperature Converter](#temperature-converter)
  - [Implementation](#implementation-1)
  - [Testing](#testing-1)
- [License](#license)

## Installation

To get started, clone this repository and install the dependencies for both sections of the assignment.

### Steps:
1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies for the React Temperature Converter project:
    ```bash
    cd temperature-converter
    npm install
    ```

---

## LinkedList Manipulation

### Implementation

The `LinkedList` is implemented as a class in TypeScript. It supports three primary operations:
- **Add**: Append a new node to the list.
- **Remove**: Delete a node by value.
- **Find**: Search for a node by value.


```

### Testing

#### Manual Testing

A simple test file (`LinkedListTest.ts`) is provided to manually verify the functionality of the linked list.

To run the TypeScript file:
```bash
npx tsc
node LinkedListTest.js
```

#### Automated Testing with Jest

For automated testing, the project uses **Jest**. The test file `LinkedList.test.ts` includes unit tests for the linked list methods.

To run the tests:
1. Install Jest:
    ```bash
    npm install --save-dev jest @types/jest ts-jest
    npx ts-jest config:init
    ```
2. Run the tests:
    ```bash
    npm test
    ```

---

## Temperature Converter

### Implementation

The Temperature Converter is implemented as a class-based React component in TypeScript. It allows users to convert temperatures between Celsius and Fahrenheit.

#### Key Features:
- Input field for temperature.
- Dropdown to select the temperature scale (Celsius or Fahrenheit).
- Converted temperature displayed below the input.



### Testing

#### Manual Testing

To manually verify the Temperature Converter:
1. Start the React development server:
    ```bash
    npm start
    ```
2. Open the browser at `http://localhost:3000` and test the temperature conversion functionality.

#### Automated Testing with Jest & React Testing Library

Automated tests are written using **Jest** and **React Testing Library** in `TemperatureConverter.test.tsx`.

To run the tests:
```bash
npm test
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify the README as per your specific project needs! Let me know if you need further assistance!

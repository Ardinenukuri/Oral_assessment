# LinkedList Manipulation & Temperature Converter (TypeScript & React)

## Project Overview

This project consists of two main components:

1. **LinkedList Manipulation**: A TypeScript-based implementation of a Linked List data structure that allows adding, removing, and finding elements in the list.
2. **Temperature Converter**: A class-based React component (written in TypeScript) that converts temperatures between Celsius and Fahrenheit.

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

To get started, follow these steps to clone the repository and install dependencies for both components of the project.

### Steps:
1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies for the Temperature Converter**:
    ```bash
    cd temperature-converter
    npm install
    ```

---

## LinkedList Manipulation

### Implementation

The LinkedList is implemented as a TypeScript class, supporting the following primary operations:

- **Add**: Appends a new node to the list.
- **Remove**: Deletes a node by its value.
- **Find**: Searches for a node by its value.

### Testing

#### Manual Testing

To manually verify the functionality of the linked list, a test file (`LinkedListTest.ts`) is provided.

To run the TypeScript file:

1. Compile the TypeScript file:
    ```bash
    npx tsc LinkedListTest.ts
    ```

2. Run the compiled JavaScript file:
    ```bash
    node LinkedListTest.js
    ```

#### Automated Testing with Jest

Automated testing for the linked list methods is implemented using **Jest**. The test file `LinkedList.test.ts` includes unit tests for adding, removing, and finding nodes.

To run the tests:

1. **Install Jest**:
    ```bash
    npm install --save-dev jest @types/jest ts-jest
    npx ts-jest config:init
    ```

2. **Run the tests**:
    ```bash
    npm test
    ```

---

## Temperature Converter

### Implementation

The Temperature Converter is implemented as a class-based React component using TypeScript. It allows users to input a temperature and select the scale (Celsius or Fahrenheit), then displays the converted temperature in the other scale.

#### Key Features:
- **Input field**: Allows users to enter the temperature.
- **Dropdown menu**: Lets users select between Celsius and Fahrenheit.
- **Converted temperature**: Displays the converted temperature based on the selected scale.

### Testing

#### Manual Testing

To manually test the functionality of the Temperature Converter:

1. Start the React development server:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000` to test the temperature conversion.

#### Automated Testing with Jest & React Testing Library

Automated tests for the Temperature Converter are written using **Jest** and **React Testing Library** in the `TemperatureConverter.test.tsx` file.

To run the tests:

```bash
npm test
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


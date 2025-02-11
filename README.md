# IP Lookup UI

This project is a React-based UI component that allows users to search for an IP address, fetch its location data, and display relevant information such as the country flag and current time. The project includes form validation and error handling to ensure valid IP inputs.

## Prerequisites

Ensure you have the following installed before setting up the project:

- **Node.js**: Version **21** or above
- **Yarn**: Latest stable version

## Installation

Clone the repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/ofekshalom/ip-lookup.git
cd ip-lookup

# Install dependencies using Yarn
yarn install
```

## Scripts

The following scripts are available in the `package.json` file:

- **Start the development server:**

  ```sh
  yarn start
  ```

  Runs the project in development mode. Open `http://localhost:3000` in your browser.

- **Build the project for production:**

  ```sh
  yarn build
  ```

  Creates an optimized production build in the `build` directory.

- **Run tests:**

  ```sh
  yarn test
  ```

  Executes unit tests using Jest and React Testing Library.

- **Lint the code:**

  ```sh
  yarn lint
  ```

  Runs ESLint to check for code quality issues.

## Running Tests

The project includes React Testing Library. To run the tests, use:

```sh
yarn test
```

For continuous testing while coding, run:

```sh
yarn test --watch
```

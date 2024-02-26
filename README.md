# Built with Next.js, Tailwind, DaisyUI, Wagmi (for ENS resolution), Framer Motion and react-toastify

# Coding Challenge Overview

## Objective
Build a React application that allows users to enter a cryptocurrency wallet address. The application should then use Pulsar's API to fetch and display a dashboard of all the assets held by that wallet address, along with their current prices and balances.

## Key Features to Implement

### User Input for Wallet Address
- Create a user interface that allows the user to input or paste a cryptocurrency wallet address.
- Validate the input to ensure it conforms to standard wallet address formats.

### Fetching Data
- Use Pulsar's API to fetch the assets held by the entered wallet address. You may need to simulate API requests if you don't have immediate access to Pulsar's API or if you're setting this challenge without the actual API keys. API link: [Pulsar's API](https://app.pulsar.finance/api-early-access)
- Implement error handling for the API request to manage scenarios where the wallet address is invalid, the API service is down, or the wallet address has no assets.

### Displaying Data on Dashboard
- Dynamically display the fetched data in a user-friendly dashboard. The dashboard should list each asset held in the wallet, showing the current balance and price.
- Ensure the data presentation is clear and accessible, possibly using tables or card layouts.

### Refreshing Data
- Provide an option to refresh the data, either through a manual refresh button or by automatically refreshing the data at a set interval.

### Responsive Design
- Ensure the application is responsive and provides a consistent user experience across different devices and screen sizes.

## Technical Requirements
- The application should be developed using React.js.
- State management can be handled with React's built-in hooks (e.g., `useState`, `useEffect`) or any state management library of choice if deemed necessary.
- Styling can be accomplished with CSS, SASS, or any CSS-in-JS library (e.g., styled-components, emotion).
- Ensure code is clean, well-commented, and follows best practices for readability and maintainability.

## Deliverables
- Source code for the React application.
- Instructions on how to run the application locally.
- Any assumptions made during the development process or notes on future improvements if given more time.

## Evaluation Criteria
- **Functionality**: The application correctly fetches and displays the data based on the entered wallet address.
- **Code Quality**: The code is clean, well-organized, and follows best practices.
- **Error Handling**: The application gracefully handles and displays errors from the API or user input.
- **User Interface**: The application has a user-friendly interface that is responsive and accessible.
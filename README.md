# Smart Retail Checkout

## Project Overview

Smart Retail Checkout is a React-based billing application designed to simulate a retail checkout system. The application allows users to add products with their name, price, and quantity, automatically calculate cart totals, apply discounts, calculate GST, and generate the final bill.

The application includes a modern login interface, intuitive user experience, and responsive design to provide a seamless checkout process.

---

## Features

* User Login Page
* Add Items with Name, Price, and Quantity
* Dynamic Cart Management
* Delete Items from Cart
* Automatic Cart Total Calculation
* 10% Discount on Orders Above ₹1000
* GST (18%) Calculation
* Final Bill Generation
* Responsive User Interface
* Smart Retail Branding

---

## Technology Stack

* React JS
* Vite
* Bootstrap 5
* React Router DOM
* React Icons
* CSS3

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/likithamanyam/smart-retail-checkout.git
```

### Navigate to Project Folder

```bash
cd smart-retail-checkout
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Open Application

```text
http://localhost:5173
```

---

## Business Logic

### Offer Applied

* Customers receive a 10% discount when the cart value exceeds ₹1000.

### Tax Applied

* GST is calculated at 18% after applying the discount.

### Final Bill Formula

```text
Final Bill = (Cart Total - Discount) + GST
```

---

## Assumptions

* Login functionality is implemented for demonstration purposes only.
* Backend authentication is not included.
* All prices are entered in Indian Rupees (₹).
* GST rate is fixed at 18%.
* Discount rate is fixed at 10% for orders above ₹1000.

---

## AI Usage Note

AI Tool Used:

* ChatGPT

How AI Helped:

* Assisted with React component development.
* Helped design the application structure.
* Assisted in implementing billing calculations.
* Helped improve UI/UX design and styling.
* Assisted in debugging and code refinement.
* Helped prepare project documentation.

Challenges Encountered:
One challenge encountered during development was integrating routing, component styling, and maintaining a consistent user interface across multiple pages. This was resolved through iterative testing, debugging, and refinement of the React components and CSS structure.

---

## Author

Likitha M R

Smart Retail Checkout – Albertsons Case Study Submission

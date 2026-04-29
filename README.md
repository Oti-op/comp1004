# COMP1004 Computing Practice Project

## Distribution Company Customer Support Chatbot

## Project Overview

This project is a browser-based customer support chatbot developed for the COMP1004 Computing Practice module. It was inspired by real operational challenges observed in distribution businesses, where staff often spend time responding to repetitive enquiries such as tracking deliveries, checking stock availability, receiving invoices, and logging customer issues.

The system provides a simple conversational interface that allows users to complete these tasks quickly through a single-page web application (SPA).

The chatbot is built entirely using frontend technologies (**HTML, CSS, JavaScript**) and runs locally in the browser without requiring a backend server or database.

---

## Key Features

* Track orders using an Order ID
* Check inventory / stock availability
* Upload invoice files through the chat interface
* Report customer issues or complaints
* Download inventory/order reports as PDF
* Context-aware responses using session memory
* Simple chatbot conversation flow
* Responsive single-page interface

---

## Technologies Used

* **HTML5** – application structure
* **CSS3 / Tailwind CSS** – styling and responsive layout
* **JavaScript (Vanilla JS)** – chatbot logic and state management
* **jsPDF** – PDF report generation
* **JSON Objects / Arrays** – simulated data storage

---

## Project Structure

```text id="4lgf9h"
public/
│── index.html
│── style.css
│── chat.js
│── intents.js
│── responses.js
│── data.js
│── fileHandler.js
│── main.js
```

### File Descriptions

* **index.html** – Main page layout
* **style.css** – Custom styling
* **chat.js** – Handles message display in chat window
* **intents.js** – Detects user intent from keywords/menu inputs
* **responses.js** – Stores chatbot responses
* **data.js** – Sample orders and inventory data
* **fileHandler.js** – Handles file uploads and report downloads
* **main.js** – Main chatbot control logic

---

## How to Run the Project

### Option 1 – Open Directly

Open `index.html` in any modern web browser.

### Option 2 – VS Code Live Server (Recommended)

1. Open the project folder in Visual Studio Code
2. Install the **Live Server** extension
3. Right-click `index.html`
4. Select **Open with Live Server**

---

## Example Usage

### Track an Order

Type:

```text id="u7e0wq"
1
```

or

```text id="mj56f0"
track order
```

Then enter:

```text id="gh6n5r"
123
```

---

### Check Inventory

Type:

```text id="4vkk1z"
2
```

Then enter:

```text id="ib7f8n"
Rice
```

---

### Upload Invoice

Type:

```text id="sxyc8l"
3
```

Then choose a file.

---

### Report an Issue

Type:

```text id="1h76e5"
4
```

Then describe the issue.

---

## Functional Requirements Implemented

* Order Tracking
* Inventory Check
* Invoice Submission
* Issue Reporting
* Session Memory for follow-up questions

---

## Limitations

* Uses sample static data only
* No backend database
* No real authentication system
* File uploads are simulated in prototype mode
* Session resets when page refreshes

---

## Future Improvements

* Connect to real backend API
* Add database storage
* Add user login system
* Improve chatbot natural language understanding
* Add admin dashboard
* Mobile-first redesign
* Email notifications for reported issues

---

## Academic Context

This project demonstrates:

* Software Development Lifecycle (SDLC) planning
* Agile / Sprint-based development
* Frontend JavaScript programming
* UI/UX design principles
* Requirements engineering
* Testing and maintenance practices

---

## GitHub Repository

Source code and commit history:

```text id="w0ny6v"
https://github.com/Oti-op/comp1004
```

---

## Author

Created by Otitechukwuka Oseji for **COMP1004 Computing Practice Project**.

---

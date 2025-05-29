# 📇 Contact CLI App

A simple Command Line Interface (CLI) application built with **Node.js** to manage contact information. Contacts are stored in a local JSON file.

## 🚀 Features

- Add new contact (name, email, phone number)
- List all saved contacts
- Show detailed info for a specific contact
- Delete contact by name
- Automatically creates the necessary folders and JSON file

## 🛠️ Technologies Used

- Node.js
- [Yargs](https://github.com/yargs/yargs) for CLI command parsing
- [Validator](https://www.npmjs.com/package/validator) for email and phone number validation
- File System (fs) for JSON read/write

## 📦 Installation

### 1. Clone this repository:

```
git clone https://github.com/bmaarianto/contact-app.git
```

### 2. Install dependencies

```
npm install
```

## 🧪 Usage

```
# Add a new contact
node app.js add --name="John Doe" --email="john@example.com" --phoneNumber="081234567890"

# List all contacts
node app.js list

# Show detail of a contact
node app.js detail --name="John Doe"

# Delete a contact
node app.js delete --name="John Doe"
```

📁 All contact data will be saved in data/contacts.json.

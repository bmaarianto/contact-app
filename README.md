# 📇 Contact CLI App

A simple Command Line Interface (CLI) application built with **Node.js** and **Yargs** to store contact information (name, email, and phone number) in a JSON file.

## 🚀 Features

- Add contact via CLI command
- Save data to `contacts.json` in the `data/` folder
- Automatically creates necessary folders/files if missing
- Supports optional email input
- Modular code (separated logic into `contacts.js`)

## 🛠️ How to Use

1. Clone this repo:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Run the command to add a contact:

```bash
node app.js add --name="John Doe" --email="john@example.com" --phoneNumber="08123456789"
```

Email is optional. You can skip it like this:

```bash
node app.js add --name="John Doe" --phoneNumber="08123456789"
```

## ✅ Sample Output

```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phoneNumber": "08123456789"
  }
]
```

## 🔧 Requirements

- Node.js (latest version recommended)
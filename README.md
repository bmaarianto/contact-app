# 📇 Contact CLI App

A simple Node.js Command Line Interface (CLI) app to store contact information (name, email, and phone number) in a JSON file.

## 🚀 Features

- Add contact data through terminal using Yargs
- Automatically saves contacts to `data/contacts.json`
- Automatically creates `data` folder and JSON file if they don't exist
- Validates:
  - Email format (optional field)
  - Phone number format (must be Indonesian number)
  - Prevents duplicate phone numbers

## 🛠️ How to Use

### 1. Install dependencies

```
npm install
```

### 2. Run the app

```
node app.js add --name="John Doe" --email="john@example.com" --phoneNumber="081234567890"

```

Email is optional, but name and phone number are required.

Example without email:

```
node app.js add --name="Jane Doe" --phoneNumber="082112345678"
```

### 3. Output

If successful:

```
✅ Terima kasih, kontak berhasil disimpan.
```

If error (e.g. duplicate or invalid format):

```
❌ Kontak sudah terdaftar
❌ Email tidak valid
❌ Nomor HP tidak valid
```

## 📦 Dependencies

- yargs
- validator

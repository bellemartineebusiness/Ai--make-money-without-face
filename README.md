# TikTok Money Machine — AI-Powered Guide

A full-stack website that teaches you how to **make money on TikTok without showing your face**, powered by an **OpenAI** AI assistant that answers your questions in real time.

---

## Features

- 📖 **Complete faceless TikTok guide** — video formats, monetization methods, growth tips, and recommended tools
- 🏷️ **Top profitable niches** — curated list of faceless content categories
- 🤖 **AI Assistant** — chat interface powered by OpenAI GPT-4o-mini, specialised in TikTok strategy

---

## Tech Stack

| Layer    | Technology            |
|----------|-----------------------|
| Backend  | Node.js + Express     |
| AI       | OpenAI API (GPT-4o-mini) |
| Frontend | HTML, CSS, Vanilla JS |

---

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- An [OpenAI API key](https://platform.openai.com/api-keys)

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and replace `your_openai_api_key_here` with your actual OpenAI API key:

```
OPENAI_API_KEY=sk-...
PORT=3000
```

### 4. Start the server

```bash
npm start
```

Open your browser at **http://localhost:3000**

---

## Project Structure

```
.
├── public/
│   ├── index.html   # Frontend HTML
│   ├── style.css    # Styles
│   └── script.js    # Chat UI logic
├── server.js        # Express server + OpenAI API route
├── .env.example     # Environment variable template (copy to .env)
├── .gitignore       # Excludes node_modules/, .env, and logs
├── package.json
└── README.md
```

---

## API

### `POST /api/chat`

Send a message to the AI assistant.

**Request body**
```json
{ "message": "What are the best faceless TikTok niches?" }
```

**Response**
```json
{ "reply": "Great question! Here are some top faceless niches..." }
```

---

## Security Notes

- Your `OPENAI_API_KEY` is kept server-side and is **never exposed to the browser**.
- The `.env` file is listed in `.gitignore` — never commit it to version control.

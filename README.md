# 🚀 Code Execution Service (Docker-based Judge System)

A scalable and secure **code execution platform** that runs user-submitted code inside isolated Docker containers.
Supports multiple languages and is designed as a foundation for building platforms like **LeetCode / Codeforces**.

---

## ✨ Features

* 🐳 **Docker-based sandboxing** (secure execution)
* ⚡ **Multi-language support** (C++, Python, Java)
* 🔒 **Resource limits** (CPU, memory, no network)
* 🧼 **Isolated execution environment**
* 📡 **REST API for execution**
* 💻 **Frontend integration ready (React + Monaco Editor)**

---

## 🧠 Architecture

```
Frontend (React)
        ↓
Backend (Node.js / Express)
        ↓
Docker Container (Sandbox)
        ↓
Compile + Execute Code
        ↓
Return Output
```

---

## 🛠️ Tech Stack

* **Frontend:** React + Monaco Editor
* **Backend:** Node.js + Express
* **Execution Engine:** Docker
* **Languages Supported:** C++, Python, Java

---

## 📦 Project Structure

```
code-executor/
│
├── docker/
│   ├── Dockerfile
│   └── run.sh
│
├── temp/              # temporary execution files
├── index.js           # backend server
├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/code-executor.git
cd code-executor
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Build Docker image

```
docker build -t code-runner ./docker
```

---

### 4️⃣ Run backend server

```
node index.js
```

Server will start at:

```
http://localhost:5000
```

---

## 🚀 API Usage

### POST `/run`

#### Request Body

```json
{
  "language": "cpp",
  "code": "#include <iostream>\nusing namespace std;\nint main(){cout<<\"Hello\";}",
  "input": ""
}
```

---

#### Response

```json
{
  "output": "Hello"
}
```

---

## 🔒 Security Features

* 🚫 No network access (`--network=none`)
* 🧠 Memory limits (`--memory=100m`)
* ⚡ CPU limits (`--cpus=0.5`)
* ⏱️ Execution timeout
* 🧹 Clean environment per execution

---

## ⚠️ Known Limitations

* Shared temp folder (race conditions possible)
* No queue system yet
* Container startup latency (~300–800ms)

---

## 🚀 Future Improvements

* 🧵 Job Queue (BullMQ + Redis)
* ⚡ Worker-based execution system
* 📦 Unique execution directories (UUID)
* 🧪 Test case evaluation system
* 🧠 Container pooling (faster execution)
* ☁️ Kubernetes scaling

---

## 🧪 Example Use Case

* Online Judge System
* Coding Interview Platform
* Educational Code Runner
* Competitive Programming Practice Tool

---

## 🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with ❤️ by **Tejas Pokalwar**

---

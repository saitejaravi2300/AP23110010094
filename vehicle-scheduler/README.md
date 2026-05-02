# 🚗 Vehicle Maintenance Scheduler Microservice

## 📌 Overview

This project is a backend microservice designed to optimize daily vehicle maintenance scheduling for a logistics company.

Each depot receives multiple maintenance tasks every day. Due to limited mechanic hours, it is not possible to complete all tasks. Therefore, the system selects an optimal subset of tasks that maximizes operational impact while staying within the available time.

---

## 🎯 Objective

Given:

* A list of maintenance tasks (vehicles)
* Each task has:

  * **Duration (hours)**
  * **Impact Score (importance)**
* A daily **mechanic-hour budget** per depot

### Goal:

Select tasks such that:

* Total Duration ≤ Available Mechanic Hours
* Total Impact Score is **maximized**

---

## 🧠 Problem Type

This problem is modeled as a:

👉 **0/1 Knapsack Problem**

Where:

* Weight = Duration
* Value = Impact
* Capacity = Mechanic Hours

---

## 🧮 Mathematical Formulation

max \sum Impact_i \quad subject\ to\ \sum Duration_i \leq Capacity

---

## 📡 APIs Used

### 1. Depot API

```
GET http://20.207.122.201/evaluation-service/depots
```

Returns:

* Depot ID
* Available Mechanic Hours

---

### 2. Vehicles API

```
GET http://20.207.122.201/evaluation-service/vehicles
```

Returns:

* Task ID
* Duration
* Impact Score

---

## ⚠️ Constraints

* APIs are protected routes (Authorization required)
* No hardcoding of data
* Must handle large datasets efficiently

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Axios
* JavaScript

---

## 📁 Project Structure

```
vehicle-scheduler/
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   └── app.js
│
├── config/
├── package.json
├── .env
└── README.md
```

---

## 🚀 How It Works

1. Fetch depot data (mechanic hours)
2. Fetch vehicle maintenance tasks
3. Apply **Knapsack Algorithm**
4. Select optimal tasks for each depot
5. Return:

   * Selected tasks
   * Maximum impact score

---

## 🧮 Algorithm Used

### Dynamic Programming (0/1 Knapsack)

* Time Complexity: **O(n × W)**
* Space Complexity: **O(n × W)**

Where:

* `n` = number of tasks
* `W` = mechanic hours

---

## 🔌 API Endpoint

### Get Optimized Schedule

```
GET /api/schedule
```

### Sample Response

```json
[
  {
    "depotId": 1,
    "maxImpact": 120,
    "selectedTasks": [
      {
        "TaskID": "abc",
        "Duration": 5,
        "Impact": 10
      }
    ]
  }
]
```

---

## 🛠 Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/your-username/vehicle-scheduler.git
cd vehicle-scheduler
```

### 2. Install Dependencies

```
npm install
```

### 3. Configure Environment Variables

Create `.env` file:

```
BASE_URL=http://20.207.122.201/evaluation-service
TOKEN=your_token_here
PORT=3000
```

---

### 4. Run Application

```
npm start
```

---

### 5. Test API

```
http://localhost:3000/api/schedule
```

---

## 📸 Output

Include screenshots of:

* Server running
* API response in browser/Postman

---

## ⚡ Optimization Notes

* Dynamic Programming guarantees optimal solution
* For very large inputs:

  * Greedy approach (Impact/Duration ratio) can be used
  * Trade-off: faster but not always optimal

---

## 📌 Key Learnings

* Applied real-world optimization problem
* Used API integration with authentication
* Implemented Dynamic Programming
* Designed scalable backend architecture

---

## 👨‍💻 Author

Saiteja Ravi

---

## 📄 License

This project is for evaluation and learning purposes.
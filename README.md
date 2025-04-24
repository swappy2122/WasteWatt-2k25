# WasteWatt-2k25


EcoDisposal Solutions is a web application that enables users to submit waste disposal service requests. Admins can log in to view and manage submissions. The app also includes an IoT simulation and map integration.

## 🌐 Features

- User-friendly form for disposal service requests
- Data saved to MongoDB (with reference numbers)
- Admin login with session-based authentication
- Confirmation modal after successful request
- Frontend and backend hosted together
- Vercel-ready with `vercel.json`
- Includes an IoT simulation and Google Maps

## 📁 Folder Structure

```bash 
project/ ├── public/ # Frontend (HTML/CSS/JS) │ ├── index.html │ ├── main.js │ ├── style.css │ └── admin.html / login.html / simulation.html ├── server.js # Express.js backend ├── package.json └── vercel.json # Vercel deployment configuration
```


## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Deployment:** Vercel

## 🚀 Getting Started Locally

### 1. Clone and install
```bash
git clone https://github.com/your-username/ecodisposal.git
cd ecodisposal
npm install
```
### 2. Update MongoDB URI
```bash
mongoose.connect('YOUR_MONGODB_URI_HERE')
```

### 3. Run the app locally
```bash
node server.js
```

### 🔒 Admin Login
- Username: admin
- Password: <PASSWORD>


## 👥 Contributors

| Name             | GitHub                                             | LinkedIn                                                |
|------------------|----------------------------------------------------|----------------------------------------------------------|
| Swarup Patankar  | [@patankarswarup9](https://github.com/patankarswarup9) | [Swarup Patankar](https://in.linkedin.com/in/swarup-patankar-908a6434a) |
| Om Patil         | None                                                   |  None                                                          |
| Aditya Pednekar  | None                                                   |  None                                                          |
| Nidhi Inamdar    | [@Techy-specy01](https://github.com/Techy-specy01)     | [Nidhi Inamdar](https://www.linkedin.com/in/nidhi-inamdar-056327213?) |
| Dipti Khande     | [@Diptikhande](https://github.com/Diptikhande)         | None                                                           |


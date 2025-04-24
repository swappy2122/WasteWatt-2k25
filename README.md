# WasteWatt-2k25


WasteWatt is a web application that enables users to submit waste disposal service requests. Admins can log in to view and manage submissions. The app also includes an IoT simulation and map integration.

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
project/
|               
├── index.html          # Main landing page
├── main.js             # Frontend JavaScript logic
├── style.css           # Styling for the app
├── admin.html          # Admin panel page
├── login.html          # Login page
├── simulation.html     # Simulation view/page
├── server.js               # Express.js backend server
├── package.json            # Node.js dependencies and scripts
└── vercel.json             # Vercel deployment configuration

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
| Swarup Patankar  | [@patankarswarup9](https://github.com/patankarswarup9) | [@Swarup Patankar](https://in.linkedin.com/in/swarup-patankar-908a6434a) |
| Om Patil         | None                                                   |  None                                                          |
| Aditya Pednekar  | None                                                   |  None                                                          |
| Nidhi Inamdar    | [@Techy-specy01](https://github.com/Techy-specy01)     | [@Nidhi Inamdar](https://www.linkedin.com/in/nidhi-inamdar-056327213?) |
| Dipti Khande     | [@Diptikhande](https://github.com/Diptikhande)         |  None                                                           |


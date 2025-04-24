const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://patankarswarup9:a3nsuenyYouIUlNg@cluster0.brc07ga.mongodb.net/foodwaste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Schema
const disposalRequestSchema = new mongoose.Schema({
  company: String,
  contactPerson: String,
  phone: String,
  email: String,
  serviceType: String,
  address: String,
  materials: [String],
  date: String,
  time: String,
  notes: String,
  referenceNumber: String,
  createdAt: { type: Date, default: Date.now }
});

const DisposalRequest = mongoose.model('DisposalRequest', disposalRequestSchema);

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'ecodisposalsecretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3600000 }
}));

// Admin login credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

// Auth middleware
function isAuthenticated(req, res, next) {
  if (req.session.isAuthenticated) return next();
  res.redirect('/admin/login');
}

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/simulation', (req, res) => res.sendFile(path.join(__dirname, 'simulation.html')));
app.get('/admin/login', (req, res) => res.sendFile(path.join(__dirname, 'admin-login.html')));
app.get('/admin', isAuthenticated, (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));
app.get('/admin/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

// Admin login
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    req.session.isAuthenticated = true;
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Form submission
app.post('/api/disposal-request', async (req, res) => {
  try {
    const referenceNumber = 'REF' + Math.floor(100000 + Math.random() * 900000);
    const newRequest = new DisposalRequest({ ...req.body, referenceNumber });
    await newRequest.save();
    console.log('✅ Saved to MongoDB:', newRequest);
    res.json({ success: true, referenceNumber });
  } catch (err) {
    console.error('❌ Error saving request:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Fetch disposal requests for admin dashboard
app.get('/admin/requests', isAuthenticated, async (req, res) => {
  try {
    const requests = await DisposalRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    console.error('❌ Error fetching requests:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

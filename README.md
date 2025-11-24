# FarmEasee - Farm to Consumer Marketplace

FarmEasee is a React web application that connects farmers directly with consumers and suppliers. It helps farmers sell fresh produce, manage product listings, and provides consumers with an easy way to buy directly from local farmers.

## 🌱 Features

- **Consumer Marketplace**: Browse and search for fresh produce from local farmers.
- **Product Filtering**: Search by name and filter by category (Vegetables, Fruits, etc.).
- **Farmer Dashboard**: Farmers can add, view, and manage their product listings.
- **Buy Flow**: Simple order form for consumers to purchase products.
- **Feedback System**: Users can provide feedback to help improve the platform.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Modern UI**: Clean interface with smooth notifications instead of browser alerts.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/narani-11/FarmEasee.git
cd FarmEasee
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🛠️ Technology Stack

- **React 19.2**: Frontend framework
- **React Router 7.9**: Client-side routing
- **Vite 7.2**: Build tool and dev server
- **CSS3**: Styling with Flexbox and Grid
- **JavaScript (ES6+)**: Modern syntax and features

## 📁 Project Structure

```
FarmEasee/
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Site header and navigation
│   │   ├── Footer.jsx   # Site footer
│   │   ├── Homepage.jsx # Landing page
│   │   ├── FarmerDashboard.jsx  # Farmer product management
│   │   ├── ConsumerBrowse.jsx   # Product browsing
│   │   ├── BuyFarm.jsx          # Purchase form
│   │   ├── Feedback.jsx         # Feedback form
│   │   ├── ProductCard.jsx      # Reusable product card
│   │   └── Notification.jsx     # Success notifications
│   ├── data/            # Sample product data
│   ├── styles/          # Component-specific CSS
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── index.html           # HTML template
```

## 🎯 Features Breakdown

### For Consumers
- Browse all available produce
- Search products by name
- Filter by category
- View product details (price, unit, farmer name)
- Simple purchase flow with order confirmation

### For Farmers
- Add new products to marketplace
- View all listed products
- Manage product information (name, category, price, description)

### User Experience
- Clean, modern interface
- Smooth notifications for user actions
- Responsive design for all devices
- Easy navigation between sections

## 🧪 Testing

The application has been thoroughly tested:
- ✅ Homepage navigation
- ✅ Consumer search and filtering
- ✅ Product purchase flow
- ✅ Farmer product management
- ✅ Feedback submission
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ No console errors or browser alerts

## 📝 Future Enhancements (MVP+)

- Equipment rental marketplace
- User authentication
- Payment integration
- Order history and tracking
- Farmer analytics dashboard
- Image uploads for products
- Reviews and ratings

## 📄 License

This project was created as part of a LaunchCode coursework assignment.

## 👥 Author

**Tejaswini Narani**
- GitHub: [@narani-11](https://github.com/narani-11)

## 🙏 Acknowledgments

- LaunchCode for the project requirements and guidance
- React and Vite communities for excellent documentation

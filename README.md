# 📸 Image Gallery with Search & Infinite Scroll

A modern React app that displays images from the Unsplash API with features including debounced search, infinite scrolling, and image detail modals. State management is handled by Zustand, and data fetching uses React Query.

---

## Access the Project

You can access the **Classic Photo Gallery** project and explore its features live by visiting the deployed site here:

[**View Live Demo**](https://cpgallery.netlify.app)

Feel free to search for your favorite photos, browse the gallery, and enjoy seamless infinite scrolling. The project is open source, so you can also clone the repository and customize it as you like!

---

## 🚀 Features

- 🔍 Search images with debounced input to reduce API calls  
- 📷 Fetch images from the Unsplash API  
- 🖼️ Responsive image grid layout  
- 🔄 Infinite scrolling loads more images as you scroll down  
- 🪟 Modal popup with image details on click  
- ⚡ Efficient caching and pagination using React Query  
- 🔧 Global state management with Zustand  

---

## 🔑 Environment Variables

Create a `.env` file in your project root with your Unsplash access key:

```
REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

> After editing `.env`, **restart** your development server for changes to take effect.

---

## 🧑‍💻 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/image-gallery.git
cd image-gallery
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Add your Unsplash API key** to `.env` as shown above.

4. **Start the development server:**

```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## ⚙️ Usage

- Use the search bar at the top to find images by keyword.  
- Scroll down to load more images automatically.  
- Click any image to open a modal with the larger view and details.  
- Close the modal by clicking outside or the close button.

---

## 🛠️ Tech Stack

| Technology      | Role                                   |
|-----------------|---------------------------------------|
| React           | UI Library                            |
| React Query     | Data fetching, caching, pagination    |
| Zustand         | Global state management                |
| Axios           | HTTP requests                         |
| Unsplash API    | Image data source                     |
| IntersectionObserver | Detect scroll for infinite loading |
| Vite / Create React App | Project bundler and dev server    |

---

## 🙋‍♂️ Contact

For questions or feedback, feel free to reach out at [https://vidhey.netlify.app/]

---

Enjoy building and browsing beautiful images! 📸✨

export const travelCategories = [
  "Destination",
  "Trip Ideas",
  "Food & Culture",
  "Tip & Planning",
  "News & Advice",
  "Photography",
];

const wpImage = (file) =>
  `https://soledaddemo.pencidesign.net/soledad-travel-magazine2/wp-content/uploads/sites/47/2024/03/${file}`;

export const featuredPosts = [
  {
    id: 1,
    title: "Bucket List Experiences: Must-Do Adventures Around the Globe",
    category: "Tip & Planning",
    author: "Penci Design",
    date: "March 28, 2024",
    image: wpImage("young-couple-car-trip-1170x780.jpg"),
    excerpt:
      "A hand-picked guide to immersive landscapes, memorable journeys, and once-in-a-lifetime travel moments.",
  },
  {
    id: 2,
    title: "Culinary Journeys: Exploring Foodie Destinations Around the World",
    category: "Food & Culture",
    author: "Penci Design",
    date: "March 28, 2024",
    image: wpImage("couple-enjoying-food-restaurant-1-1170x780.jpg"),
    excerpt:
      "From night markets to chef-led tables, these cities turn every meal into part of the itinerary.",
  },
  {
    id: 3,
    title:
      "Photography Expeditions: Capturing the World's Wonders Through Lens",
    category: "Destination",
    secondCategory: "News & Advice",
    author: "Penci Design",
    date: "March 28, 2024",
    image: wpImage("peakpx-23-1170x780.jpg"),
    excerpt:
      "The luxury train service, spearheaded by the Saudi Ministry of Tourism and the Saudi Railway Company, promises to redefine luxury travel in the region.",
  },
];

export const sidePosts = [
  "Experience Luxury at Four Seasons Hotel, Surf Club, Surfside, Florida",
  "25 Most Beautiful Places in the Caribbean From Emerald Sinkholes to Private Islands",
  "How to Plan the Perfect Hawaii Honeymoon, According to Experts",
  "50 Best Honeymoon Destinations Around the World",
  "How to Plan the Perfect Trip to Bolzano, Italy",
  "How to Plan the Perfect Trip to Wimberley, Texas",
];

export const listPosts = [
  {
    id: 4,
    title: "Eco-Tourism: Discovering Sustainable Travel Destinations",
    category: "Trip Ideas",
    date: "March 28, 2024",
    image: wpImage(
      "side-view-woman-looking-through-binoculars-while-sitting-car-roof-against-sky-263x175.jpg",
    ),
    content:
      "The luxury train service, spearheaded by the Saudi Ministry of Tourism and the Saudi Railway Company, promises to redefine luxury travel in the region.",
  },
  {
    id: 5,
    title: "Cultural Immersion: Delving Deep into Local Traditions and Customs",
    category: "Trip Ideas",
    date: "March 28, 2024",
    image: wpImage(
      "traveller-woman-sit-roof-top-tarp-car-drink-coffee-with-morning-sunrise-fog-263x175.jpg",
    ),
    content:
      "Immerse yourself in the rich cultural tapestry of this vibrant destination and create unforgettable memories.",
  },
  {
    id: 6,
    title: "The Cayman Cookout: A Star-Studded Culinary Beach Party Experience",
    category: "Food & Culture",
    date: "March 26, 2024",
    image: wpImage("people-eating-seaweed-snacks-263x175.jpg"),
    content:
      "Join us for an unforgettable evening of delicious cuisine and live entertainment at the Cayman Cookout.",
  },
  {
    id: 7,
    title:
      "Experience Luxury at Four Seasons Hotel, Surf Club, Surfside, Florida",
    category: "Destination",
    date: "March 25, 2024",
    image: wpImage("Frame-3761.jpg"),
    content:
      "Indulge in the ultimate luxury experience at the Four Seasons Hotel, where every detail is crafted to perfection.",
  },
  {
    id: 8,
    title: "How to Plan the Perfect Hawaii Honeymoon, According to Experts",
    category: "News & Advice",
    date: "March 24, 2024",
    image: wpImage("beautiful-day-palau-royal-resort-263x175.jpg"),
    content:
      "Discover the perfect balance of relaxation and adventure in this tropical paradise.",
  },
  {
    id: 9,
    title: "50 Best Honeymoon Destinations Around the World",
    category: "Destination",
    date: "March 22, 2024",
    image: wpImage(
      "beautiful-shot-small-village-surrounded-by-lake-snowy-hills-1-263x175.jpg",
    ),
    content:
      "From secluded islands to bustling cities, find your dream honeymoon destination.",
  },
];

export const mockVideos = [
  {
    id: 1,
    title: "[4K] Hawaii 🇺🇸 | The BEST DAY TO VISIT WAIKIKI!...",
    duration: "23:13",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&auto=format&fit=crop&q=60",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Thay bằng link video thực tế của bạn
  },
  {
    id: 2,
    title: "[4K] San Francisco 🇺🇸 | Golden Gate Bridge & Fisherman's...",
    duration: "29:38",
    thumbnail:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=300&auto=format&fit=crop&q=60",
    embedUrl: "",
  },
  {
    id: 3,
    title: "[4K] Japan 🇯🇵 | Tokyo Ginza Weekend Walking Tour: Exploring...",
    duration: "35:01",
    thumbnail:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&auto=format&fit=crop&q=60",
    embedUrl: "",
  },
  {
    id: 4,
    title: "Walk Around Ueno Park and Shinobazu Pond | Tokyo",
    duration: "10:54",
    thumbnail:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&auto=format&fit=crop&q=60",
    embedUrl: "",
  },
  {
    id: 5,
    title: "[4K] Bali 🇮🇩 | Walking Tour of Conrad Hotel Bali:...",
    duration: "22:43",
    thumbnail:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&auto=format&fit=crop&q=60",
    embedUrl: "",
  },
  {
    id: 6,
    title: "[4K] USA 🇺🇸 | New York Tour of Brooklyn Bridge...",
    duration: "23:56",
    thumbnail:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&auto=format&fit=crop&q=60",
    embedUrl: "",
  },
  {
    id: 7,
    title: "[4K] Hawaii 🇺🇸 | The BEST DAY TO VISIT WAIKIKI!...",
    duration: "23:13",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&auto=format&fit=crop&q=60",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Thay bằng link video thực tế của bạn
  },
];

export const footerGallery = listPosts.slice(0, 6);

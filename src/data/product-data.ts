import { IProductData } from "@/types/product-d-t";

const product_data: IProductData[] = [
  {
    id: 1,
    sku: "001",
    title: "1kg purple onion/ onion/ dried onion Kinh men",
    price: 20,
    sale_price: 18,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-1.jpg",
      thumbnail: "/assets/img/product/new/product-img-1-thumb.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Onion',
    },
    brand: "Super Market",
    quantity: 20,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-1.jpg",
      "/assets/img/product/new/product-img-1-thumb.jpg",
    ],
    description: "Onion Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      },
      {
        id: 2,
        name: "Mark",
        comment: "Awesome",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Onion",
      "Dried Onion",
      "Purple Onion",
    ],
    color: ['Blue'],
    status: "publish",
    sold: 2,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 2,
    sku: "002",
    title: "Fresh And Sour Lemon Like An Old Lover",
    price: 25,
    sale_price: 22,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-2.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Lemon',
    },
    brand: "Super Market",
    quantity: 30,
    unit: '4pc(s)',
    description: "Lemon Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Lemon" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Lemon",
      "Fresh",
    ],
    color: ['Red', 'Green'],
    status: "publish",
    sold: 10,
    created_at: "2023-10-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 3,
    sku: "003",
    title: "Fresh Organic SuSu Cheap Tasty Tonic",
    price: 25,
    sale_price: 24,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-3.jpg",
      thumbnail: "/assets/img/product/new/product-img-3-thumb.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Kiwi',
    },
    brand: "Super Market",
    quantity: 45,
    unit: '8pc(s)',
    gallery: [
      "/assets/img/product/new/product-img-3.jpg",
      "/assets/img/product/new/product-img-3-thumb.jpg",
    ],
    description: "Kiwi Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "8pc(s)" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Mark",
        comment: "Awesome",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Kiwi",
      "Fresh",
      "Organic",
    ],
    color: ['Black', 'Gray'],
    status: "publish",
    sold: 15,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 4,
    sku: "004",
    title: "Ginger Fresh, Whole, Organic – 250gram",
    price: 30,
    sale_price: 27,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-4.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Ginger',
    },
    brand: "Super Market",
    quantity: 30,
    unit: '250gm',
    description: "Ginger Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "250gm" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Ginger",
      "Vegetables",
    ],
    color: ['Yellow'],
    status: "publish",
    sold: 25,
    created_at: "2023-09-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 5,
    sku: "005",
    title: "Guava Leaves From Trees Grown In South",
    price: 35,
    sale_price: 30,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-5.jpg",
      thumbnail: "/assets/img/product/new/product-img-5-thumb.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Apricots',
    },
    brand: "Super Market",
    quantity: 50,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-5.jpg",
      "/assets/img/product/new/product-img-5-thumb.jpg",
    ],
    description: "Apricots Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Mark",
        comment: "Awesome",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Apricots",
      "Fresh"
    ],
    color: ['White'],
    status: "publish",
    sold: 19,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
    offerDate: {
      startDate: "2023-08-15T18:00:00.000Z",
      endDate: "2024-07-19T18:00:00.000Z",
    },
  },
  {
    id: 6,
    sku: "006",
    title: "Lettuce Fresh Produce Vegetables",
    price: 10,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-6.jpg",
      thumbnail: "/assets/img/product/new/product-img-6-thumb.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Cauliflower',
    },
    brand: "Super Market",
    quantity: 30,
    unit: '1kg',
    gallery: [
      "/assets/img/product/new/product-img-6.jpg",
      "/assets/img/product/new/product-img-6-thumb.jpg",
    ],
    description: "Cauliflower Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1kg" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Naim",
        comment: "Average",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "10 April, 2023",
      }
    ],
    tags: [
      "cauliflower",
      "vegetables",
    ],
    color: ['Orange'],
    status: "publish",
    sold: 17,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 7,
    sku: "007",
    title: "VietNamese Specialty Fresh Litchi, Plump Fruit",
    price: 38,
    sale_price: 35,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-7.jpg",
      thumbnail: "/assets/img/product/new/product-img-7-thumb.jpg",
    },
    category: {
      parent: 'Vegetables',
      child: 'Cranberries',
    },
    brand: "Aldi",
    quantity: 20,
    unit: '1lb',
    gallery: [
      "/assets/img/product/new/product-img-7.jpg",
      "/assets/img/product/new/product-img-7-thumb.jpg",
    ],
    description: "Cranberries Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Awesome",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "25 March, 2023",
      }
    ],
    tags: [
      "cranberries",
      "vegetables",
    ],
    color: ['Black'],
    status: "publish",
    sold: 12,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 8,
    sku: "008",
    title: "Enormous Granite Bag Fresh Goods 100%",
    price: 42,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-8.jpg"
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Chicken Tenders',
    },
    brand: "Aldi",
    quantity: 20,
    unit: '4pc(s)',
    description: "Cranberries Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "White" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Smith",
        comment: "Good",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "25 June, 2023",
      }
    ],
    tags: [
      "chicken",
      "fresh",
    ],
    color: ['Silver'],
    status: "publish",
    sold: 8,
    created_at: "2023-11-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 9,
    sku: "009",
    title: "Fresh And Sour Lemon Like An Old Lover",
    price: 25,
    sale_price: 22,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-2.jpg",
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Lemon',
    },
    brand: "Aldi",
    quantity: 30,
    unit: '4pc(s)',
    description: "Lemon Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Lemon" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 4,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "06 March, 2023",
      }
    ],
    tags: [
      "Lemon",
      "Fresh",
    ],
    color: ['Green'],
    status: "publish",
    sold: 15,
    created_at: "2023-10-08T07:18:25.000000Z",
    updated_at: "2023-12-26T15:23:32.000000Z",
  },
  {
    id: 10,
    sku: "0010",
    title: "Fresh Fruit Sapodilla Organic USA 100g",
    price: 21,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-9.jpg",
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Common Grape',
    },
    brand: "Albertsons",
    quantity: 35,
    unit: '100gm',
    description: "Common Grape Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "100gm" },
      { key: "Color", value: "Orange" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "John",
        comment: "Good",
        rating: 3.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "12 March, 2023",
      }
    ],
    tags: [
      "Common Grape",
      "Fresh",
    ],
    color: ['Pink'],
    status: "publish",
    sold: 14,
    created_at: "2023-08-08T07:18:25.000000Z",
    updated_at: "2023-11-26T15:23:32.000000Z",
  },
  {
    id: 11,
    sku: "0011",
    title: "Fresh Organic Plum Moc Chau Trip 100g",
    price: 26,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-10.jpg",
      thumbnail: "/assets/img/product/new/product-img-10-thumb.jpg",
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Plum',
    },
    brand: "Albertsons",
    quantity: 50,
    unit: '100gm',
    gallery: [
      "/assets/img/product/new/product-img-10.jpg",
      "/assets/img/product/new/product-img-10-thumb.jpg",
    ],
    description: "Plum Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "100gm" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Vikas",
        comment: "Average",
        rating: 4.2,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "16 April, 2023",
      }
    ],
    tags: [
      "Plum",
      "fresh",
    ],
    color: ['Cyan'],
    status: "publish",
    sold: 13,
    created_at: "2023-07-08T07:18:25.000000Z",
    updated_at: "2023-09-26T15:23:32.000000Z",
  },
  {
    id: 12,
    sku: "0012",
    title: "Mangosteen Organic From VietNamese",
    price: 30,
    sale_price: 15,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-11.jpg"
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Mangosteen',
    },
    brand: "Albertsons",
    quantity: 55,
    unit: '5pc(s)',
    description: "Mangosteen Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "5pc(s)" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Pik",
        comment: "Average",
        rating: 4.3,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "18 April, 2023",
      }
    ],
    tags: [
      "Mangosteen",
      "fresh",
    ],
    color: ['Indigo'],
    status: "publish",
    sold: 10,
    created_at: "2023-07-08T07:18:25.000000Z",
    updated_at: "2023-09-26T15:23:32.000000Z",
  },
  {
    id: 13,
    sku: "0013",
    title: "Organic Sweet Banana Crisps Snacks",
    price: 20,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-12.jpg"
    },
    category: {
      parent: 'Fresh Fruits',
      child: 'Banana',
    },
    brand: "Vons",
    quantity: 60,
    unit: '20pc(s)',
    description: "Banana Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "20pc(s)" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Will",
        comment: "Good",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "Banana",
      "fresh",
    ],
    color: ['Lime'],
    status: "publish",
    sold: 16,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
    offerDate: {
      startDate: "2023-10-15T18:00:00.000Z",
      endDate: "2024-03-19T18:00:00.000Z",
    },
  },

  {
    id: 14,
    sku: "0014",
    title: "Fresh Milk Chocolate Quaker Popped Rice Crisps",
    price: 19,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-13.jpg",
      thumbnail: "/assets/img/product/new/product-img-13-thumb.jpg",
    },
    category: {
      parent: 'Fruit Drink',
      child: 'Milk',
    },
    brand: "Vons",
    gallery: [
      "/assets/img/product/new/product-img-13.jpg",
      "/assets/img/product/new/product-img-13-thumb.jpg",
    ],
    quantity: 40,
    unit: '2lb',
    description: "Milk Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2lb" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Zack",
        comment: "Good",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "Milk",
      "fresh",
    ],
    color: ['Gold'],
    status: "publish",
    sold: 21,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
  },
  {
    id: 15,
    sku: "0015",
    title: "Soda Sparkling Water Maker (Rose Gold)",
    price: 65,
    sale_price: 55,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-14.jpg"
    },
    category: {
      parent: 'Fruit Drink',
      child: 'Soda Sparkling',
    },
    brand: "Vons",
    quantity: 40,
    unit: '1lb',
    description: "Soda Sparkling Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1lb" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Zack",
        comment: "Good",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "soda",
      "sparkling",
      "fresh",
    ],
    color: ['Navy'],
    status: "publish",
    sold: 27,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
  },

  {
    id: 16,
    sku: "0016",
    title: "Banana, Beautiful Skin, Good For Health 1Kg",
    price: 20,
    sale_price: 19,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-15.jpg"
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Strawberry',
    },
    brand: "Vons",
    quantity: 40,
    unit: '1kg',
    description: "Strawberry Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "1kg" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Xyz",
        comment: "Perfect",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "22 June, 2023",
      }
    ],
    tags: [
      "Strawberry",
      "fresh",
    ],
    color: ['Black'],
    status: "publish",
    sold: 29,
    created_at: "2023-06-09T07:18:25.000000Z",
    updated_at: "2023-10-29T15:23:32.000000Z",
  },
  {
    id: 17,
    sku: "0017",
    title: "Fresh Organic Dragon Fruit Vietnam Number-1",
    price: 32,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-16.jpg",
      thumbnail: "/assets/img/product/new/product-img-16-thumb.jpg",
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Dragon Fruit',
    },
    brand: "Vons",
    quantity: 42,
    unit: '2kg',
    gallery: [
      "/assets/img/product/new/product-img-16.jpg",
      "/assets/img/product/new/product-img-16-thumb.jpg",
    ],
    description: "Dragon Fruit Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2kg" },
      { key: "Color", value: "Red" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Def",
        comment: "Perfect",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Dragon",
      "Fruit",
    ],
    color: ['Red'],
    status: "publish",
    sold: 30,
    created_at: "2023-08-09T07:18:25.000000Z",
    updated_at: "2023-11-29T15:23:32.000000Z",
  },
  {
    id: 18,
    sku: "0018",
    title: "Fresh Organic Lemon Leaves USA 5kg",
    price: 31,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-17.jpg",
      thumbnail: "/assets/img/product/new/product-img-17-thumb.jpg",
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Lime Fruit',
    },
    brand: "Ralphs",
    quantity: 42,
    unit: '2kg',
    gallery: [
      "/assets/img/product/new/product-img-16.jpg",
      "/assets/img/product/new/product-img-16-thumb.jpg",
    ],
    description: "Lime Fruit Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2kg" },
      { key: "Color", value: "Red" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Def",
        comment: "Perfect",
        rating: 4.8,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Lime",
      "Fruit",
    ],
    color: ['Pink'],
    status: "publish",
    sold: 32,
    created_at: "2023-10-09T07:18:25.000000Z",
    updated_at: "2023-10-29T15:23:32.000000Z",
  },
  {
    id: 19,
    sku: "0019",
    title: "Fresh Organic Mustard Leaves Quaker Popped",
    price: 54,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-18.jpg",
      thumbnail: "/assets/img/product/new/product-img-18-thumb.jpg",
    },
    category: {
      parent: 'Fresh Bakery',
      child: 'Apricot Fruit',
    },
    brand: "Ralphs",
    quantity: 47,
    unit: '4pc(s)',
    gallery: [
      "/assets/img/product/new/product-img-18.jpg",
      "/assets/img/product/new/product-img-18-thumb.jpg",
    ],
    description: "Apricot Fruit Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Red" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Christ",
        comment: "Good",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Apricot",
      "Fruit",
    ],
    color: ['Lime'],
    status: "publish",
    sold: 35,
    created_at: "2023-11-09T07:18:25.000000Z",
    updated_at: "2023-12-29T15:23:32.000000Z",
  },

  {
    id: 20,
    sku: "0020",
    title: "Quaker Popped Rice Crisps Snacks Chocolate",
    price: 33,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-19.jpg"
    },
    category: {
      parent: 'Biscuits Snack',
      child: 'Rice Crisps',
    },
    brand: "Ralphs",
    quantity: 53,
    unit: '5pc(s)',
    description: "Rice Crisps Fruit Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "4pc(s)" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Ursula",
        comment: "Good",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Rice",
      "Crisps",
    ],
    color: ['Orange'],
    status: "publish",
    sold: 15,
    created_at: "2023-09-11T07:18:25.000000Z",
    updated_at: "2023-11-20T15:23:32.000000Z",
  },
  {
    id: 21,
    sku: "0021",
    title: "Laffy Taffy Laff Bites Gone Bananas – 4 Packs",
    price: 55,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-20.jpg"
    },
    category: {
      parent: 'Biscuits Snack',
      child: 'Laffy Taffy',
    },
    brand: "ShopRite",
    quantity: 55,
    unit: '5pc(s)',
    description: "Laffy Taffy Fruit Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: null,
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "5pc(s)" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Ursula",
        comment: "Good",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Laffy Taffy",
      "Snacks",
    ],
    color: ['Orange'],
    status: "publish",
    sold: 20,
    created_at: "2023-09-11T07:18:25.000000Z",
    updated_at: "2023-11-20T15:23:32.000000Z",
  },

  {
    id: 22,
    sku: "0022",
    title: "USDA Choice Angus Beef Stew Meat – 1Kg",
    price: 120,
    sale_price: 100,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-21.jpg"
    },
    category: {
      parent: 'Fresh Meat',
      child: 'Beef',
    },
    brand: "ShopRite",
    quantity: 55,
    unit: '2Kg',
    description: "Beef Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: 'https://www.youtube.com/watch?v=QhBjJBQ4pgo',
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2Kg" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Ursula",
        comment: "Good",
        rating: 4.9,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "28 June, 2023",
      }
    ],
    tags: [
      "Beef",
      "Fresh",
    ],
    color: ['White'],
    status: "publish",
    sold: 11,
    created_at: "2023-08-12T07:18:25.000000Z",
    updated_at: "2023-09-13T15:23:32.000000Z",
  },
  {
    id: 23,
    sku: "0023",
    title: "Cheap And Delicious Fresh Chicken",
    price: 150,
    sale_price: 120,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-22.jpg",
      thumbnail: "/assets/img/product/new/product-img-22-thumb.jpg",
    },
    category: {
      parent: 'Fresh Meat',
      child: 'Chicken',
    },
    brand: "ShopRite",
    quantity: 62,
    unit: '2Kg',
    gallery: [
      "/assets/img/product/new/product-img-22.jpg",
      "/assets/img/product/new/product-img-22-thumb.jpg",
    ],
    description: "Chicken is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: 'https://www.youtube.com/watch?v=QhBjJBQ4pgo',
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2Kg" },
      { key: "Color", value: "Black" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Iris",
        comment: "Medium",
        rating: 3.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "14 June, 2023",
      }
    ],
    tags: [
      "Chicken",
      "Fresh",
    ],
    status: "publish",
    color: ['Lime'],
    sold: 9,
    created_at: "2023-05-12T07:18:25.000000Z",
    updated_at: "2023-07-14T15:23:32.000000Z",
  },
  {
    id: 24,
    sku: "0024",
    title: "1st Quality Fresh Meat From USA 500g",
    price: 80,
    sale_price: 70,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-23.jpg",
      thumbnail: "/assets/img/product/new/product-img-23-thumb.jpg",
    },
    category: {
      parent: 'Fresh Meat',
      child: 'Meat',
    },
    brand: "ShopRite",
    quantity: 30,
    unit: '500gm',
    gallery: [
      "/assets/img/product/new/product-img-23.jpg",
      "/assets/img/product/new/product-img-23-thumb.jpg",
    ],
    description: "Meat is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: 'https://www.youtube.com/watch?v=QhBjJBQ4pgo',
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "500gm" },
      { key: "Color", value: "Red" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Iris",
        comment: "Medium",
        rating: 3.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "7 June, 2023",
      }
    ],
    tags: [
      "Meat",
      "Fresh",
    ],
    status: "publish",
    color: ['Indigo'],
    sold: 7,
    created_at: "2023-06-18T07:18:25.000000Z",
    updated_at: "2023-07-19T15:23:32.000000Z",
  },

  {
    id: 25,
    sku: "0025",
    title: "Fresh Milk Chocolate Quaker Popped Rice Crisps",
    price: 19,
    image: {
      id: 1,
      original: "/assets/img/product/new/product-img-13.jpg",
      thumbnail: "/assets/img/product/new/product-img-13-thumb.jpg",
    },
    category: {
      parent: 'Fresh Milk',
      child: 'Milk',
    },
    brand: "ShopRite",
    gallery: [
      "/assets/img/product/new/product-img-13.jpg",
      "/assets/img/product/new/product-img-13-thumb.jpg",
    ],
    quantity: 40,
    unit: '2lb',
    description: "Milk Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.",
    videoId: "rLrV5Tel7zw",
    additionalInfo: [
      { key: "Material", value: "Plastic, Wood" },
      { key: "Legs", value: "Lacquered oak and black painted oak" },
      { key: "Length", value: "48cm" },
      { key: "Depth", value: "52cm" },
      { key: "Weight", value: "2lb" },
      { key: "Color", value: "Yellow" },
    ],
    productInfoList: [
      'Delicious non - dairy cheese sauce',
      'Vegan & Allergy friendly',
      'Smooth, velvety dairy free cheese sauce'
    ],
    reviews: [
      {
        id: 1,
        name: "Zack",
        comment: "Good",
        rating: 4.5,
        user: "/assets/img/testimonial/test-avata-1.png",
        date: "20 June, 2023",
      }
    ],
    tags: [
      "Milk",
      "fresh",
    ],
    color: ['Cyan'],
    status: "publish",
    sold: 26,
    created_at: "2023-07-09T07:18:25.000000Z",
    updated_at: "2023-09-29T15:23:32.000000Z",
  },
]

export default product_data;
 

const productsData = {
  // Classic Pizza
  classicPizza: [
    {
      id: 'cp1',
      name: 'Margherita Pizza',
      price: 99,
      originalPrice: 120,
      image: 'https://i.pinimg.com/736x/87/d3/dc/87d3dc0225d21869daf72e1f9a198ba4.jpg',
      rating: 4.8,
      sizes: { small: 99, medium: 189, large: 289 },
      originalSizes: { small: 120, medium: 220, large: 319 }
    },
    {
      id: 'cp2',
      name: 'Cheese & Corn',
      price: 99,
      originalPrice: 120,
      image: 'https://i.pinimg.com/1200x/80/a5/61/80a5612c8b0a7b4399af79cd6e9d4a33.jpg',
      rating: 4.8,
      sizes: { small: 99, medium: 189, large: 289 },
      originalSizes: { small: 120, medium: 220, large: 319 }
    },
    {
      id: 'cp3',
      name: 'Double Cheese Pizza',
      price: 199,
      originalPrice: 139,
      image: 'https://i.pinimg.com/736x/ba/7d/89/ba7d893d4ef7b51e96f47ca257c54308.jpg',
      rating: 4.8,
      sizes: { small: 199, medium: 219, large: 399 },
      originalSizes: { small: 139, medium: 249, large: 439 }
    },
    {
      id: 'cp4',
      name: 'Garden Fresh Pizza',
      price: 119,
      originalPrice: 139,
      image: 'https://i.pinimg.com/736x/02/16/ed/0216ed5035ddc708aea2afde7cc61050.jpg',
      rating: 4.8,
      sizes: { small: 119, medium: 219, large: 399 },
      originalSizes: { small: 139, medium: 249, large: 439 }
    },
    {
      id: 'cp5',
      name: 'Chilli Paneer Pizza',
      price: 119,
      originalPrice: 139,
      image: 'https://i.pinimg.com/736x/ff/d7/83/ffd783490a9a42304a62dec0a4cf117a.jpg',
      rating: 4.8,
      sizes: { small: 119, medium: 219, large: 319 },
      originalSizes: { small: 139, medium: 239, large: 439 }
    }
  ],

  // Veg Treat Pizza
  vegTreatPizza: [
    {
      id: 'vt1',
      name: 'Country Fest Pizza',
      price: 149,
      originalPrice: 169,
      image: 'https://i.pinimg.com/1200x/75/ca/ab/75caabefbd68c11aaf93abd5e9dcf4b5.jpg',
      rating: 4.8,
      sizes: { small: 149, medium: 269, large: 399 },
      originalSizes: { small: 169, medium: 299, large: 439 }
    },
    {
      id: 'vt2',
      name: 'Farm House Pizza',
      price: 149,
      originalPrice: 169,
      image: 'https://i.pinimg.com/736x/cc/18/c4/cc18c446b9c0cf894d79bc8f676a8aae.jpg',
      rating: 4.8,
      sizes: { small: 149, medium: 269, large: 399 },
      originalSizes: { small: 169, medium: 299, large: 439 }
    },
    {
      id: 'vt3',
      name: 'Italian Spicy Pizza',
      price: 149,
      originalPrice: 169,
      image: 'https://i.pinimg.com/736x/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg',
      rating: 4.8,
      sizes: { small: 149, medium: 269, large: 399 },
      originalSizes: { small: 169, medium: 299, large: 439 }
    },
    {
      id: 'vt4',
      name: 'Veggie Delight Pizza',
      price: 149,
      originalPrice: 169,
      image: 'https://i.pinimg.com/736x/62/d8/d2/62d8d2de85f4c8bc6ef9e082b05bc1e3.jpg',
      rating: 4.8,
      sizes: { small: 149, medium: 269, large: 399 },
      originalSizes: { small: 169, medium: 299, large: 439 }
    },
    {
      id: 'vt5',
      name: 'Moon Light Pizza',
      price: 199,
      originalPrice: 219,
      image: 'https://i.pinimg.com/736x/df/11/13/df11137f7ea78702571c15bccc691eb6.jpg',
      rating: 4.8,
      sizes: { small: 199, medium: 349, large: 499 },
      originalSizes: { small: 219, medium: 369, large: 539 }
    }
  ],

  // Veg Special Pizza
  vegSpecialPizza: [
    {
      id: 'vs1',
      name: 'Peppy Paneer Pizza',
      price: 179,
      originalPrice: 199,
      image: 'https://i.pinimg.com/1200x/fc/83/45/fc8345e8146ca1c5e36e622ad1ad1117.jpg',
      rating: 4.8,
      sizes: { small: 179, medium: 309, large: 499 },
      originalSizes: { small: 199, medium: 339, large: 549 }
    },
    {
      id: 'vs2',
      name: 'Three Peppers Pizza',
      price: 179,
      originalPrice: 199,
      image: 'https://i.pinimg.com/1200x/97/ec/9f/97ec9fa2557c229797b92a3f9c4d46a4.jpg',
      rating: 4.8,
      sizes: { small: 179, medium: 309, large: 499 },
      originalSizes: { small: 199, medium: 339, large: 549 }
    },
    {
      id: 'vs3',
      name: 'Deluxe Veggie Pizza',
      price: 179,
      originalPrice: 199,
      image: 'https://i.pinimg.com/1200x/b7/e5/83/b7e5833766140c24d5c96ee3ae612664.jpg',
      rating: 4.8,
      sizes: { small: 179, medium: 309, large: 499 },
      originalSizes: { small: 199, medium: 339, large: 549 }
    },
    {
      id: 'vs4',
      name: 'Magic of Pine Pizza',
      price: 179,
      originalPrice: 199,
      image: 'https://i.pinimg.com/736x/fa/d5/45/fad545937e7fbd21d9c0d1a627fd8ca8.jpg',
      rating: 4.8,
      sizes: { small: 179, medium: 309, large: 499 },
      originalSizes: { small: 199, medium: 339, large: 549 }
    },
    {
      id: 'vs5',
      name: 'Achari Pizza',
      price: 179,
      originalPrice: 199,
      image: 'https://i.pinimg.com/736x/74/78/f2/7478f29606655414adab4a69046cc356.jpg',
      rating: 4.8,
      sizes: { small: 179, medium: 309, large: 499 },
      originalSizes: { small: 199, medium: 339, large: 549 }
    }
  ],

  // Single & Double Topping Pizza
  singleDoublePizza: [
    {
      id: 'sd1',
      name: 'Tomato Pizza',
      price: 49,
      originalPrice: 61,
      image: 'https://i.pinimg.com/736x/8a/bc/32/8abc32d74c1c84e83081fbf4229bf24f.jpg',
      rating: 4.8
    },
    {
      id: 'sd2',
      name: 'Onion Pizza',
      price: 55,
      originalPrice: 75,
      image: 'https://i.pinimg.com/736x/6e/82/eb/6e82ebfbe389f10aaae5a404eb78250f.jpg',
      rating: 4.8
    },
    {
      id: 'sd3',
      name: 'Capsicum Pizza',
      price: 65,
      originalPrice: 80,
      image: 'https://i.pinimg.com/1200x/14/3e/ea/143eeace476bf58fc83302233b88d400.jpg',
      rating: 4.8
    },
    {
      id: 'sd4',
      name: 'Corn Pizza',
      price: 69,
      originalPrice: 78,
      image: 'https://i.pinimg.com/736x/59/cb/f7/59cbf767fd59c008fa9e9a8a2f8d6741.jpg',
      rating: 4.8
    },
    {
      id: 'sd5',
      name: 'Onion & Capsicum Pizza',
      price: 79,
      originalPrice: 85,
      image: 'https://i.pinimg.com/736x/f7/5d/f9/f75df93b8bfe1ce252bdf21e06614b90.jpg',
      rating: 4.8
    },
    {
      id: 'sd6',
      name: 'Tomato & Corn Pizza',
      price: 89,
      originalPrice: 99,
      image: 'https://i.pinimg.com/736x/6d/bd/23/6dbd23858d3383e4540b5a4950bcdf4f.jpg',
      rating: 4.8
    },
    {
      id: 'sd7',
      name: 'Onion & Paneer Pizza',
      price: 99,
      originalPrice: 120,
      image: 'https://i.pinimg.com/1200x/e3/6e/8d/e36e8d54f31d5cee26ffd89613faa077.jpg',
      rating: 4.8
    },
    {
      id: 'sd8',
      name: 'Corn & Paneer Pizza',
      price: 99,
      originalPrice: 120,
      image: 'https://i.pinimg.com/1200x/45/a2/c0/45a2c09c9722c43aff55f63dea4e4bdb.jpg',
      rating: 4.8
    }
  ],

  // Burger
  burger: [
    {
      id: 'bg1',
      name: 'Aloo Tikki Burger',
      price: 35,
      originalPrice: 40,
      image: 'https://i.pinimg.com/736x/9d/02/b7/9d02b7a8da61091110dc65cbc1a325e6.jpg',
      rating: 4.8
    },
    {
      id: 'bg2',
      name: 'Cheese Burger',
      price: 39,
      originalPrice: 51,
      image: 'https://i.pinimg.com/736x/1f/a6/a6/1fa6a68b3d2df3d3bce57b3fcf4c547f.jpg',
      rating: 4.8
    },
    {
      id: 'bg3',
      name: 'Veg Delight Burger',
      price: 49,
      originalPrice: 61,
      image: 'https://i.pinimg.com/1200x/27/ab/5e/27ab5edd0885b823023a2b5ba47a1f04.jpg',
      rating: 4.8
    },
    {
      id: 'bg4',
      name: 'Spicy Paneer Burger',
      price: 59,
      originalPrice: 68,
      image: 'https://i.pinimg.com/736x/ae/87/34/ae8734bba9f10dc8cc91e36251802345.jpg',
      rating: 4.8
    },
    {
      id: 'bg5',
      name: 'Achari Paneer Burger',
      price: 69,
      originalPrice: 81,
      image: 'https://i.pinimg.com/736x/94/67/50/946750ea3f0a6ea7c80e011b3edb36c6.jpg',
      rating: 4.8
    },
  
  ],

  // Momos
  momos: [
    {
      id: 'mo1',
      name: 'Veg Momos Steam',
      price: 40,
      originalPrice: 80,
      image: 'https://i.pinimg.com/736x/77/e3/4a/77e34a1c214505230504e81a38dabbb9.jpg',
      rating: 4.8
    },
    {
      id: 'mo2',
      name: 'Veg Momo Fried',
      price: 40,
      originalPrice: 80,
      image: 'https://i.pinimg.com/736x/57/1a/b0/571ab0a00eb9278dcbbaa74802422943.jpg',
      rating: 4.8
    },
    {
      id: 'mo3',
      name: 'Paneer Momo Steam',
      price: 50,
      originalPrice: 100,
      image: 'https://i.pinimg.com/736x/fe/c3/b3/fec3b34d5edb094554ed761c0d6f9d17.jpg',
      rating: 4.8
    },
    {
      id: 'mo4',
      name: 'Paneer Momo Fried',
      price: 50,
      originalPrice: 100,
      image: 'https://i.pinimg.com/1200x/8d/16/33/8d1633d85a3d67902c81cf7ca454ae6a.jpg',
      rating: 4.8
    },
    {
      id: 'mo5',
      name: 'Kurkure Momo',
      price: 70,
      originalPrice: 130,
      image: 'https://i.pinimg.com/736x/76/42/3f/76423f37af3460b12c9368f19cc941bf.jpg',
      rating: 4.8
    }
  ],

  // Pasta
  pasta: [
    {
      id: 'ps1',
      name: 'Red Sauce Pasta',
      price: 99,
      originalPrice: 120,
      image: 'https://i.pinimg.com/1200x/9c/3b/72/9c3b7274384a0bab197fd68115a395ff.jpg',
      rating: 4.8
    },
    {
      id: 'ps2',
      name: 'White Sauce Pasta',
      price: 109,
      originalPrice: 133,
      image: 'https://i.pinimg.com/1200x/29/74/5d/29745d18dab2b5f267488eccbce0a576.jpg',
      rating: 4.8
    },
    {
      id: 'ps3',
      name: 'Makhani Pasta',
      price: 119,
      originalPrice: 140,
      image: 'https://i.pinimg.com/736x/a6/80/54/a68054e651f0e76bd07e3a69c86f1d66.jpg',
      rating: 4.8
    },
    {
      id: 'ps4',
      name: 'White & Red Mix Pasta',
      price: 119,
      originalPrice: 139,
      image: 'https://i.pinimg.com/1200x/91/8c/1f/918c1f36d70fe46be4735229cf48b47b.jpg',
      rating: 4.8
    }
  ],

  // Chinese
  chinese: [
    {
      id: 'ch1',
      name: 'Chilli Potato',
      price: 50,
      originalPrice: 100,
      image: 'https://i.pinimg.com/736x/5d/2d/ea/5d2deaef85d57d42325db719324cb415.jpg',
      rating: 4.8
    },
    {
      id: 'ch2',
      name: 'Veg Chowmin',
      price: 40,
      originalPrice: 80,
      image: 'https://i.pinimg.com/736x/25/2e/01/252e01a45942bc9ae8fa9453942fc036.jpg',
      rating: 4.8
    },
    {
      id: 'ch3',
      name: 'Soya Chowmin',
      price: 40,
      originalPrice: 80,
      image: 'https://i.pinimg.com/1200x/c4/8a/3a/c48a3a37c154cd9eb91e676af69ca2e3.jpg',
      rating: 4.8
    },
    {
      id: 'ch4',
      name: 'Chilli Garlic Noodles',
      price: 50,
      originalPrice: 100,
      image: 'https://i.pinimg.com/1200x/4f/f9/09/4ff909ef06076434b6c179218ab832ba.jpg',
      rating: 4.8
    },
    {
      id: 'ch5',
      name: 'Schezwan Noodles',
      price: 60,
      originalPrice: 110,
      image: 'https://i.pinimg.com/1200x/6a/f9/0c/6af90c4027fc2b0125314436821abb49.jpg',
      rating: 4.8
    },
  
  ],

  // Shakes & Mocktails
  shakes: [
    {
      id: 'sh1',
      name: 'Vanilla Shake',
      price: 69,
      originalPrice: 81,
      image: 'https://i.pinimg.com/1200x/dc/83/37/dc833736a16a5d16416c76348d860b15.jpg',
      rating: 4.8
    },
    {
      id: 'sh2',
      name: 'Strawberry Shake',
      price: 79,
      originalPrice: 99,
      image: 'https://i.pinimg.com/736x/ca/dc/c0/cadcc039f7e8e58e8c27dd1f90aac995.jpg',
      rating: 4.8
    },
    {
      id: 'sh3',
      name: 'Chocolate Shake',
      price: 69,
      originalPrice: 75,
      image: 'https://i.pinimg.com/736x/07/de/ca/07deca25c60699088843cdfa97ef6e03.jpg',
      rating: 4.8
    },
    {
      id: 'sh4',
      name: 'Cold Coffee',
      price: 79,
      originalPrice: 99,
      image: 'https://i.pinimg.com/736x/20/29/ef/2029ef7a62e7b477632b27c2db403bb8.jpg',
      rating: 4.8
    },
    {
      id: 'sh5',
      name: 'Kit Kat Shake',
      price: 89,
      originalPrice: 99,
      image: 'https://i.pinimg.com/736x/74/62/3b/74623b8ea9c0ce70badaff066f6a745d.jpg',
      rating: 4.8
    },
   
  ]
};
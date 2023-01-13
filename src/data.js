import { v4 as uuidv4 } from "uuid";
import productImg1 from "./image/product-1.jpg.webp";
import productImg2 from "./image/product-2.jpg.webp";
import productImg3 from "./image/product-3.jpg.webp";
import productImg4 from "./image/product-4.jpg.webp";
import productImg6 from "./image/product-6.jpg.webp";
import productImg7 from "./image/product-7.jpg.webp";
import productImg8 from "./image/product-8.jpg.webp";
import shopImg1 from "./image/shop-1.jpg.webp";
import shopImg2 from "./image/shop-2.jpg.webp";
import shopImg3 from "./image/shop-3.jpg.webp";
import shopImg4 from "./image/shop-4.jpg.webp";
import shopImg7 from "./image/shop-7.jpg.webp";
import shopImg8 from "./image/shop-8.jpg.webp";

import trendImg1 from "./image/trending-1.jpg.pagespeed.ic.egi4bL3t5c.webp";
import trendImg2 from "./image/trending-2.jpg.pagespeed.ic.3YjuD2AOub.webp";
import trendImg3 from "./image/trending-3.jpg.pagespeed.ic.fw_LsIXAiZ.webp";
import sellerImg1 from "./image/seller-1.jpg.pagespeed.ic.mJ3HA8np2n.webp";
import sellerImg2 from "./image/seller-2.jpg.pagespeed.ic.oPC5eRYONC.webp";
import sellerImg3 from "./image/seller-3.jpg.pagespeed.ic.UbErREAs1-.webp";
import featureImg1 from "./image/feature-1.jpg.pagespeed.ic.Q7t675Gcer.webp";
import featureImg2 from "./image/feature-2.jpg.pagespeed.ic.LE7FQXfxeP.webp";
import featureImg3 from "./image/feature-3.jpg.pagespeed.ic.larkQpUfvs.webp";

export const datProduct = [
  {
    id: uuidv4(),
    title: "Buttons tweed blazer",
    info: "Shirts",
    category: "Women's",
    price: 59,
    newProduct: false,
    img: productImg1,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Furry hooded parka",
    info: "Coats",
    category: "Women's",
    price: 89,
    newProduct: false,
    img: shopImg1,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Furry hooded parka",
    info: "Jeans",
    category: "Women's",
    price: 62,
    newProduct: false,
    img: shopImg2,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Flowy striped skirt",
    info: "Shirts",
    category: "Men's",
    price: 62,
    newProduct: true,
    img: productImg2,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Cotton T-Shirt",
    info: "T-Shirts",
    category: "Cosmetics",
    price: 52,
    newProduct: true,
    img: productImg3,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Croc-effect bag",
    info: "Bag's",
    category: "Women's",
    price: 32,
    newProduct: false,
    img: shopImg3,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Dark wash Xavi jeans",
    info: "Jeans",
    category: "Men's",
    price: 49,
    newProduct: false,
    img: shopImg4,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Cotton T-Shirt",
    info: "T-Shirt",
    category: "Accessories",
    price: 72,
    newProduct: true,
    img: shopImg8,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: true,
  },
  {
    id: uuidv4(),
    title: "Slim striped pocket shirt",
    info: "Shirts",
    category: "Men's",
    price: 56,
    newProduct: true,
    img: productImg4,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Fit micro corduroy shirt",
    info: "Shirts",
    category: "Men's",
    price: 56,
    newProduct: false,
    img: productImg6,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Tropical Kimono",
    info: "Shirts",
    category: "Women's",
    price: 56,
    newProduct: true,
    img: productImg6,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: true,
  },
  {
    id: uuidv4(),
    title: "Contrasting sunglasses",
    info: "T-Shirts",
    category: "Women's",
    price: 56,
    newProduct: true,
    img: productImg7,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Water resistant backpack",
    info: "Shirts",
    category: "Kid's",
    price: 56,
    newProduct: true,
    img: productImg8,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: false,
  },
  {
    id: uuidv4(),
    title: "Circular pendant earrings",
    info: "Jeans",
    category: "Accessories",
    price: 72,
    newProduct: true,
    img: shopImg7,
    desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
    sale: true,
  },
];

export const dataTrending = [
  {
    id: uuidv4(),
    title: "Chain bucket bag",
    category: "trend",
    price: 54,
    img: trendImg1,
  },
  {
    id: uuidv4(),
    title: "Pendant earrings",
    category: "trend",
    price: 79,
    img: trendImg2,
  },
  {
    id: uuidv4(),
    title: "Cotton T-Shirt",
    category: "trend",
    price: 42,
    img: trendImg3,
  },
  {
    id: uuidv4(),
    title: "Cotton T-Shirt",
    category: "seller",
    price: 39,
    img: sellerImg1,
  },
  {
    id: uuidv4(),
    title: "Zip-pockets",
    category: "seller",
    price: 59,
    img: sellerImg2,
  },
  {
    id: uuidv4(),
    title: "Round leather bag",
    category: "seller",
    price: 59,
    img: sellerImg3,
  },
  {
    id: uuidv4(),
    title: "Bow wrap skirt",
    category: "feature",
    price: 59,
    img: featureImg1,
  },
  {
    id: uuidv4(),
    title: "Metallic earrings",
    category: "feature",
    price: 59,
    img: featureImg2,
  },
  {
    id: uuidv4(),
    title: "Flap cross-body bag",
    category: "feature",
    price: 59,
    img: featureImg3,
  },
];

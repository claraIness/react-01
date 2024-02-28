const products = [
    {
      id: "1",
      name: "OG Kush",
      img: "",
      price: 200,
      category: "Autofloreciente",
      description: "Cultivo rápido",
      stock: 10,
    },
    {
      id: "2",
      name: "Pineapple Chem",
      img: "",
      price: 850,
      category: "Autofloreciente",
      description: "Floración abundante",
      stock: 6,
    },
  
    {
      id: "3",
      name: "Mango OG",
      img: "",
      price: 750,
      category: "Autofloreciente",
      description: "Cruce de Green Crack Auto",
      stock: 8,
      
    },
    {
        id: "4",
        name: "Chem Bomb",
        img: "",
        price: 750,
        category: "Autofloreciente",
        description: "Cultivo exterior e interior",
        stock: 8,
      },
      {
        id: "5",
        name: "Amnesia CBD",
        img: "",
        price: 750,
        category: "Autofloreciente",
        description: "Aroma cítrico",
        stock: 8,
      },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("no hay productos");
      }
    });
  };
  
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        const item = products.find((product) => product.id === id);
  
        setTimeout(() => {
          if (item) {
            resolve(item);
          } else {
            reject(`No se encuentra el producto con el id ${id}`);
          }
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
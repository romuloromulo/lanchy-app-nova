const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Espinafre",
        price: 30,
        ingredients: [
          "Molho de tomate",
          "Mozzarella",
          "Espinafre, Calabresa, Presunto",
        ],
        glutenFree: true,
        categoria: "Salgada",
        description:
          "Clássica pizza italiana com molho de tomate, queijo mozzarella e folhas de espinafre fresco.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Espinafre.png?t=2023-08-30T17%3A50%3A38.224Z",
      },
    });

    await prisma.products.create({
      data: {
        title: "Pepperoni",
        price: 25,
        ingredients: ["Molho de tomate", "Pepperoni", "Mozzarella"],
        glutenFree: false,
        categoria: "Salgada",

        description:
          "Pizza coberta com generosas fatias de pepperoni sobre queijo derretido.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Pepperoni.png",
      },
    });

    await prisma.products.create({
      data: {
        title: "Calabresa",
        price: 28,
        ingredients: ["Molho de tomate", "Calabresa", "Cebola", "Mozzarella"],
        glutenFree: false,
        categoria: "Salgada",

        description:
          "Pizza de calabresa com cebola e queijo mozzarella derretido.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Tomato.png",
      },
    });

    await prisma.products.create({
      data: {
        title: "Misturada",
        price: 30,
        ingredients: [
          "Molho de tomate",
          "Presunto",
          "Picles",
          "Cebola",
          "Mozzarella",
          "Salsinha",
        ],
        glutenFree: false,
        categoria: "Salgada",

        description: "Pizza da casa com presunto, picles, cebola e azeitonas.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Mixed.png",
      },
    });

    await prisma.products.create({
      data: {
        title: "Vegetariana",
        price: 28,
        ingredients: [
          "Molho de tomate",
          "Brócolis",
          "Cogumelos",
          "Pimentão",
          "Cebola",
          "Mozzarella",
        ],
        glutenFree: true,

        categoria: "Salgada",
        description:
          "Pizza repleta de vegetais frescos, perfeita para os amantes de comida vegetariana.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Vegetariana.png",
      },
    });

    await prisma.products.create({
      data: {
        title: "Presunto & Cogumelo",
        price: 27,
        ingredients: ["Molho de tomate", "Presunto", "Cogumelo", "Mozzarella"],
        glutenFree: false,
        categoria: "Salgada",

        description:
          "Uma combinação do suave cogumelo e do salgado do presunto, molho e queijo derretido.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Presunto.png",
      },
    });

    await prisma.products.create({
      data: {
        title: "Mediterrânea",
        price: 38,
        ingredients: [
          "Molho de tomate",
          "Azeitonas",
          "Tomate seco",
          "Rúcula",
          "Queijo feta",
          "Mozzarella",
        ],
        glutenFree: true,

        categoria: "Salgada",
        description:
          "Inspirada na culinária mediterrânea, esta products apresenta ingredientes como azeitonas, tomate seco e queijo feta.",
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Azeitona.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9BemVpdG9uYS5wbmciLCJpYXQiOjE3MTM0ODE2NTAsImV4cCI6MTc0NTAxNzY1MH0.tYSZHoj_s3mOI3S41zQSD90vUtIkmpRpQ-QlK8mZFQE&t=2024-04-18T23%3A07%3A30.697Z",
      },
    });

    await prisma.products.create({
      data: {
        title: "Cogumelo",

        price: 33,
        ingredients: [
          "Molho branco",
          "Cogumelo",
          "Azeitona",
          "Tomate",
          "Mozzarella",
        ],
        glutenFree: false,
        categoria: "Salgada",

        description: "Pizza de cogumelo com azeitona,tomate e molho branco.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Cogumelo.png",
      },
    });

    await prisma.products.create({
      data: {
        title: "Churrasco",

        price: 40,
        ingredients: [
          "Molho de tomate",
          "Carne de churrasco",
          "Cebola",
          "Pimentão",
          "Mozzarella",
        ],
        glutenFree: false,
        categoria: "Salgada",

        description:
          "Pizza com pedaços suculentos de carne de churrasco, cebola e pimentão.",
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Azeitona.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9BemVpdG9uYS5wbmciLCJpYXQiOjE3MTM0ODE2NTAsImV4cCI6MTc0NTAxNzY1MH0.tYSZHoj_s3mOI3S41zQSD90vUtIkmpRpQ-QlK8mZFQE&t=2024-04-18T23%3A07%3A30.697Z",
      },
    });

    await prisma.products.create({
      data: {
        title: "Chocolate com Morango",

        price: 25,
        ingredients: [
          "Chocolate derretido",
          "Morangos frescos",
          "Chocolate granulado",
        ],
        glutenFree: true,

        categoria: "Doce",
        description:
          "Uma deliciosa products de sobremesa com chocolate derretido, morangos frescos e chocolate granulado.",
        url: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PizzaImages/Chocolate.png",
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();

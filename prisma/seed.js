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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Espinafre.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9Fc3BpbmFmcmUucG5nIiwiaWF0IjoxNzEzOTE0MDkxLCJleHAiOjE3NDU0NTAwOTF9.h9f-Pyi0HrhQ5bljmtbA7wWujX95LAIPa9EoaWnEMDg&t=2024-04-23T23%3A14%3A50.422Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Pepperoni.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9QZXBwZXJvbmkucG5nIiwiaWF0IjoxNzEzOTE0MjQxLCJleHAiOjE3NDU0NTAyNDF9.i6gHyMDryuySW8WcA37p6OlI7Cx3uQDif5NPrZGBrHY&t=2024-04-23T23%3A17%3A20.214Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Tomato.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9Ub21hdG8ucG5nIiwiaWF0IjoxNzEzOTE0MjU4LCJleHAiOjE3NDU0NTAyNTh9.wSZJAcC-TtcVpTGf7DdvOekEWpvclKOUmV_Yod5C8qU&t=2024-04-23T23%3A17%3A37.340Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Mixed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9NaXhlZC5wbmciLCJpYXQiOjE3MTM5MTQyOTMsImV4cCI6MTc0NTQ1MDI5M30.twGc4TjmG_2iajxx8NWniUnNrLAmIQdfm5e0QDOF0OU&t=2024-04-23T23%3A18%3A12.550Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Vegetariana.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9WZWdldGFyaWFuYS5wbmciLCJpYXQiOjE3MTM5MTQzMTQsImV4cCI6MTc0NTQ1MDMxNH0.idwL3aMyoB8aZo5wZiGmlYnZERzf4F-ZpD1pwSB_njw&t=2024-04-23T23%3A18%3A34.057Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Presunto.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9QcmVzdW50by5wbmciLCJpYXQiOjE3MTM5MTQzMjcsImV4cCI6MTc0NTQ1MDMyN30.oJatddmdQ0UJlOq3j_s0QChtoDIGvR1M49dccuF2S8U&t=2024-04-23T23%3A18%3A47.121Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Presunto.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9QcmVzdW50by5wbmciLCJpYXQiOjE3MTM5MTQzMjcsImV4cCI6MTc0NTQ1MDMyN30.oJatddmdQ0UJlOq3j_s0QChtoDIGvR1M49dccuF2S8U&t=2024-04-23T23%3A18%3A47.121Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Churrasco.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9DaHVycmFzY28ucG5nIiwiaWF0IjoxNzEzOTE0Mzk0LCJleHAiOjE3NDU0NTAzOTR9.6CDXHMe8V98E33H7xzkxaq_YLa6XChyQAIH4PJHMk4w&t=2024-04-23T23%3A19%3A54.154Z",
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
        url: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PizzaImages/Chocolate.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQaXp6YUltYWdlcy9DaG9jb2xhdGUucG5nIiwiaWF0IjoxNzEzOTE0NDI3LCJleHAiOjE3NDU0NTA0Mjd9.VDvwrFJkvXFuXwGWoNNHCJrZHiNXtIDjxKt6_mBdrNQ&t=2024-04-23T23%3A20%3A26.525Z",
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();

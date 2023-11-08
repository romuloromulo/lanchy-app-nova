"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();
  const [isItemAdded, setIsItemAdded] = useState(false);

  const getCart = () => {
    let cart = [];
    let totalAmount = 0;
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    return cart;
  };

  function addToCart(product, amount) {
    let cart = [];
    if (!amount) amount = 1;

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.amount = amount;
    } else {
      cart.push({ ...product, amount: amount });
    }
    // console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    isItemAddedToCart(product);
    router.refresh();
  }

  function removeFromCart(product) {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    cart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    isItemAddedToCart(product);
    router.refresh();
  }

  function isItemAddedToCart(product) {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    cart = cart.filter((item) => item.id === product.id);
    if (cart.length > 0) {
      setIsItemAdded(true);
      return;
    }

    setIsItemAdded(false);
  }

  function cartCount() {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    return cart.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  }

  function cartTotal() {
    let total = 0;
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      total += item.price * item.amount;
    }

    return total;
  }
  function clearCart() {
    localStorage.removeItem("cart");
    router.refresh();
  }

  const exposed = {
    isItemAdded,
    getCart,
    addToCart,
    removeFromCart,
    isItemAddedToCart,
    cartCount,
    cartTotal,
    clearCart,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useCart = () => useContext(Context);

export default Provider;

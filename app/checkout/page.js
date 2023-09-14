"use client";
import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import CheckoutItem from "../components/CheckoutItem";
import { useUser } from "../context/user";
import { useCart } from "../context/cart";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useUserAddress from "../hooks/useUserAddress";
import { loadStripe } from "@stripe/stripe-js";
import useIsLoading from "../hooks/useIsLoading";
import Link from "next/link";
import ClientOnly from "../components/ClientOnly";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Checkout() {
  const user = useUser();
  const cart = useCart();
  const router = useRouter();

  let stripe = useRef(null);
  let elements = useRef(null);
  let card = useRef(null);
  let clientSecret = useRef(null);

  const [addressDetails, setAddressDetails] = useState({});
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

  useEffect(() => {
    if (cart?.cartTotal() <= 0) {
      toast.error("Your cart is empty!", { autoClose: 3000 });
      return router.push("/");
    }

    useIsLoading(true);

    const getAdddress = async () => {
      if (user?.id == null || user?.id == undefined) {
        useIsLoading(false);
        return;
      }

      setIsLoadingAddress(true);
      const response = await useUserAddress();
      if (response) setAddressDetails(response);
      setIsLoadingAddress(false);
    };

    getAdddress();
    setTimeout(() => stripeInit(), 300);
  }, [user]);

  async function stripeInit() {
    stripe.current = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PK_KEY || ""
    );

    const response = await fetch("/api/stripe", {
      method: "POST",
      body: JSON.stringify({ amount: cart.cartTotal() }),
    });
    const result = await response.json();

    clientSecret.current = result.client_secret;
    elements.current = stripe.current.elements();
    var style = {
      base: { fontSize: "18px" },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#EE4B2B",
        iconColor: "#EE4B2B",
      },
    };
    card.current = elements.current.create("card", {
      hidePostalCode: true,
      style: style,
    });

    card.current.mount("#card-element");
    card.current.on("change", function (event) {
      document.querySelector("button").disabled = event.empty;
      document.querySelector("#card-error").textContent = event.error
        ? event.error.message
        : "";
    });

    useIsLoading(false);
  }

  async function pay(event) {
    event.preventDefault();

    if (Object.entries(addressDetails).length == 0) {
      showError("Please add shipping address!");
      return;
    }

    let result = await stripe.current.confirmCardPayment(clientSecret.current, {
      payment_method: { card: card.current },
    });

    if (result.error) {
      showError(result.error.message);
    } else {
      useIsLoading(true);

      try {
        let response = await fetch("/api/orders/create", {
          method: "POST",
          body: JSON.stringify({
            stripe_id: result.paymentIntent.id,
            name: addressDetails.name,
            address: addressDetails.address,
            zipcode: addressDetails.zipcode,
            city: addressDetails.city,
            country: addressDetails.country,
            products: cart.getCart(),
            total: cart.cartTotal(),
          }),
        });

        console.log(
          response,
          "-------RESPONSE--------RESPONSE--------RESPOSNE"
        );
        if (response.status == 200) {
          toast.success("Order Complete!", { autoClose: 3000 });
          cart.clearCart();
          return router.push("/success");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong?", { autoClose: 3000 });
      }

      useIsLoading(false);
    }
  }

  const showError = (errorMsgText) => {
    let errorMsg = document.querySelector("#card-error");
    toast.error(errorMsgText, { autoClose: 3000 });
    errorMsg.textContent = errorMsgText;
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 3000);
  };

  return (
    <React.Fragment>
      <MainLayout>
        <div className="bg-white w-full py-12">
          <div id="CheckoutPage" className="mt-4 max-w-[1200px] mx-auto">
            <div className="text-3xl text-center md:text-start font-bold mt-4 mb-4">
              Checkout
            </div>

            <div className="relative flex md:flex-row flex-col md:items-baseline items-center gap-4 justify-between mx-auto w-full">
              <div className="md:w-[65%] w-[90%]">
                <div className="bg-red-500 p-4 border-2 border-black">
                  <div className="text-xl font-bold mb-2">
                    Endereço de entrega
                  </div>

                  <div>
                    {!isLoadingAddress ? (
                      <Link
                        href="/address"
                        className="text-white text-lg font-bold underline">
                        {addressDetails.name
                          ? "Atualizar endereço"
                          : "Adicionar endereço"}
                      </Link>
                    ) : null}

                    {!isLoadingAddress && addressDetails.name ? (
                      <ul className="text-sm mt-2">
                        <li>Nome: {addressDetails.name}</li>
                        <li>Endereço: {addressDetails.address}</li>
                        <li>CEP: {addressDetails.zipcode}</li>
                        <li>Cidade: {addressDetails.city}</li>
                      </ul>
                    ) : null}
                  </div>
                </div>

                {isLoadingAddress ? (
                  <div className="flex items-center mt-1 gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin" />
                    Carregando endereço...
                  </div>
                ) : (
                  <div></div>
                )}
                <ClientOnly>
                  <div id="Items" className="bg-white rounded-lg mt-4">
                    {cart.getCart().map((products) => (
                      <CheckoutItem key={products.id} product={products} />
                    ))}
                  </div>
                </ClientOnly>
              </div>

              <div
                id="PlaceOrder"
                className="relative -top-[6px] md:w-[35%] w-[90%] border-2 border-black ">
                <ClientOnly>
                  <div className="p-4">
                    <div className="flex items-baseline justify-between text-sm mb-1">
                      <div>Items({cart.getCart().length}) </div>
                      <div>R${cart.cartTotal().toFixed(2)}</div>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div>Delivery:</div>
                      <div>Grátis</div>
                    </div>

                    <div className="border-t" />

                    <div className="flex items-center justify-between my-4">
                      <div className="font-semibold">Total do pedido</div>
                      <div className="text-2xl font-semibold">
                        R$: {cart.cartTotal().toFixed(2)}
                      </div>
                    </div>

                    <form onSubmit={pay}>
                      <div
                        className="border-2 border-black p-2 rounded-sm"
                        id="card-element"
                      />

                      <p
                        id="card-error"
                        role="alert"
                        className="text-red-700 text-center font-semibold relative top-2"
                      />

                      <button
                        type="submit"
                        className="mt-4 bg-amber-400 text-lg font-bold w-full text-black p-3 border-2 hover:bg-amber-500 duration-300 border-black">
                        <div>Confirmar e pagar</div>
                      </button>
                    </form>
                  </div>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
}

export default Checkout;

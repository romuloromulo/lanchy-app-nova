"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { useCart } from "../../context/cart";
import useIsLoading from "../../hooks/useIsLoading";
import ClientOnly from "../../components/ClientOnly";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CartItem from "./CartItem";

function CartModal({ isOpen }) {
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    useIsLoading(true);
    cart.getCart();
    cart.cartTotal();
    useIsLoading(false);
  }, [cart]);

  function goToCheckout() {
    if (!cart.cartTotal()) {
      alert("Você não tem items no carrinho de compras.");
      return;
    }
    router.push("/checkout");
  }

  return (
    <div>
      {" "}
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="h-[90%] w-full">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full flex items-center justify-center">
              Seu Carrinho
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="h-full w-full overflow-y-auto">
            {cart.cartTotal() > 0 ? (
              <ClientOnly>
                {cart.getCart().map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ClientOnly>
            ) : (
              <div className="text-4xl text-black font-bold">
                {" "}
                Carrinho Vazio
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default CartModal;

"use client";

import Link from "next/link";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import MainLayout from "../layouts/MainLayout";
import moment from "moment";
import { useUser } from "../context/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useIsLoading from "../hooks/useIsLoading";

function Orders() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    try {
      if (!user && !user?.id) return;

      const response = await fetch("/api/orders");
      const result = await response.json();

      setOrders(result);
      useIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong?", { autoClose: 3000 });
      useIsLoading(false);
    }
  }

  useEffect(() => {
    useIsLoading(true);
    getOrders();
  }, [user]);

  // const product = DUMMY_DATA[0];
  // const orders = [
  //   {
  //     id: 1,
  //     stripe_id: "12313",
  //     name: "Teste",
  //     address: "Teste",
  //     zipcode: "Teste",
  //     city: "Teste",
  //     country: "Teste",
  //     total: 1299,
  //     orderItem: [product],
  //   },
  // ];

  return (
    <MainLayout>
      <div
        id="OrdersPage"
        className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh] mb-4">
        <div className="bg-amber-400 w-full p-6 min-h-[150px]">
          <div className="flex items-center text-xl">
            <CiDeliveryTruck className="text-red-500" size={35} />
            <span className="pl-4">Pedidos</span>
          </div>
          {orders.length < 1 ? (
            <div className="flex items-center justify-center">
              You have no order history
            </div>
          ) : null}
          {orders.map((order) => (
            <div key={order?.id} className="text-sm pl-[50px]">
              <div className="border-b py-1">
                <div className="pt-2">
                  <span className="font-bold mr-2">Stripe ID:</span>
                  {order?.stripe_id}
                </div>

                <div className="pt-2">
                  <span className="font-bold mr-2">Endereço de entrega:</span>
                  {order?.name}, {order?.address}, {order?.zipcode},{" "}
                  {order?.city}, {order?.country}
                </div>

                <div className="pt-2">
                  <span className="font-bold mr-2">Total:</span>R$
                  {order?.total}
                </div>

                <div className="pt-2">
                  <span className="font-bold mr-2">Pedido criado em:</span>
                  {moment(order?.created_at).calendar()}
                </div>

                <div className="py-2">
                  <span className="font-bold mr-2">Tempo de entrega:</span>
                  {moment(order?.created_at).add(30, "minutes").calendar()}
                </div>

                <div className="flex items-center gap-4">
                  {order?.orderItem.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <Link
                        className="py-1 hover:underline text-black font-bold"
                        href={`/product/${item.d}`}>
                        <Image
                          className="rounded"
                          width={120}
                          height={120}
                          src={item.product.url}
                          alt="pizza"
                        />
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Orders;

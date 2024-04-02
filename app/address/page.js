"use client";

import MainLayout from "../layouts/MainLayout";
import TextInput from "../components/TextInput";
import { useEffect, useState } from "react";
import { useUser } from "@/app/context/user";
import useIsLoading from "@/app/hooks/useIsLoading";
import useCreateAddress from "../hooks/useCreateAddress";
import useUserAddress from "../hooks/useUserAddress";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ClientOnly from "../components/ClientOnly";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  const [addressId, setAddressId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [isUpdatingAddress, setIsUpdatingAddress] = useState(false);
  const [error, setError] = useState({});

  const showError = (type) => {
    if (Object.entries(error).length > 0 && error?.type == type) {
      return error.message;
    }
    return "";
  };

  const getAdddress = async () => {
    if (user?.id == null || user?.id == undefined) {
      useIsLoading(false);
      return;
    }

    const response = await useUserAddress();
    if (response) {
      setTheCurrentAddres(response);
      useIsLoading(false);
      return;
    }
    useIsLoading(false);
  };

  useEffect(() => {
    useIsLoading(true);
    getAdddress();
  }, [user]);

  const setTheCurrentAddres = (result) => {
    setAddressId(result.id);
    setName(result.name);
    setAddress(result.address);
    setZipcode(result.zipcode);
    setCity(result.city);
  };

  const validate = () => {
    setError(null);
    setError({});
    let isError = false;

    if (!name) {
      setError({ type: "name", message: "Nome obrigatório" });
      isError = true;
    } else if (!address) {
      setError({ type: "address", message: "Endereço obrigatório" });
      isError = true;
    } else if (!zipcode) {
      setError({ type: "zipcode", message: "CEP obrigatório" });
      isError = true;
    } else if (!city) {
      setError({ type: "city", message: "Cidade obrigatório" });
      isError = true;
    }
    return isError;
  };

  const submit = async (event) => {
    event.preventDefault();
    let isError = validate();

    if (isError) {
      toast.error(error.message, { autoClose: 3000 });
      return;
    }

    try {
      setIsUpdatingAddress(true);

      const response = await useCreateAddress({
        addressId,
        name,
        address,
        zipcode,
        city,
      });

      setTheCurrentAddres(response);
      setIsUpdatingAddress(false);

      toast.success("Endereço pronto!", { autoClose: 3000 });

      router.push("/checkout");
    } catch (error) {
      setIsUpdatingAddress(false);
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <MainLayout>
        <div
          id="AddressPage"
          className="mt-4 max-w-[600px] mx-auto px-2 py-10 h-screen">
          <div className="mx-auto bg-amber-400  rounded-md shadow-lg p-3">
            <div className="text-xl text-bold mb-2">Endereço completo</div>

            <form onSubmit={submit}>
              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full"
                    string={name}
                    placeholder="Nome"
                    onUpdate={setName}
                    error={showError("name")}
                  />
                </ClientOnly>
              </div>

              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full border-2 border-black mt-2 rounded-md"
                    string={address}
                    placeholder="Endereço"
                    onUpdate={setAddress}
                    error={showError("address")}
                  />
                </ClientOnly>
              </div>

              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full border-2 border-black mt-2"
                    string={zipcode}
                    placeholder="CEP"
                    onUpdate={setZipcode}
                    error={showError("zipcode")}
                  />
                </ClientOnly>
              </div>

              <div className="mb-4">
                <ClientOnly>
                  <TextInput
                    className="w-full border-2 border-black mt-2"
                    string={city}
                    placeholder="Cidade"
                    onUpdate={setCity}
                    error={showError("city")}
                  />
                </ClientOnly>
              </div>

              <button
                type="submit"
                disabled={isUpdatingAddress}
                className={`
                                mt-6
                                w-full 
                                text-black
                                text-lg 
                                font-semibold 
                                p-3 
                           
                            hover:bg-red-600
                            duration-300 rounded-md
                                ${
                                  isUpdatingAddress
                                    ? "bg-red-400"
                                    : "bg-red-500"
                                }
                            `}>
                {!isUpdatingAddress ? (
                  <div>Atualizar endereço</div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin" />
                    Espere...
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

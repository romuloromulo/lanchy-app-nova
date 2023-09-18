import React from "react";
import { getPlaiceholder } from "plaiceholder";

async function getLocalBase64(src) {
  try {
    const res = await fetch(src);

    if (!res.ok) {
      throw new Error(
        `Falha ao carregar imagem: ${res.status} ${res.statusText}`
      );
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    console.log(`base64:${base64}`);
    return base64;
  } catch (err) {
    console.log(err);
  }
}

export default getLocalBase64;

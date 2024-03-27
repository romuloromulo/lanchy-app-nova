import Link from "next/link";

function SearchResults({ items }) {
  return (
    <div className="absolute bg-amber-400  h-auto w-[20rem] z-20 left-0 top-10 border-2 border-black p-1">
      {items.map((item) => (
        <div className="p-1" key={item.id}>
          <Link
            href={`/product/${item.id}`}
            className="flex items-center justify-between w-full cursor-pointer border-b border-amber-200 hover:border-red-500 p-1 px-2">
            <div className="flex items-center">
              <img
                className="rounded-md"
                width="40px"
                height="40px"
                src={item?.url}
              />
              <div className="truncate ml-2 w-full">{item?.title}</div>
            </div>
            <div className="truncate">R${item?.price.toFixed(2)}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;

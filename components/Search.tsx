import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const searchProduct = () => {
  const handleSearch = () => {
    console.log("searching.. handleSearch");
  };
  return (
    <div className="text-center max-w-3xs mb-5">
      <Search />
      <Input
        type="text"
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </div>
  );
};

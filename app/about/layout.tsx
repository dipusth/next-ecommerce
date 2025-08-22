import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "OnlineShopping are passionate about delivering",
};
function layout({ children }: { children: React.ReactNode }) {
  console.log("layout about page");
  return (
    <div className="container">
      This is about layout
      <div>{children} </div>{" "}
    </div>
  );
}

export default layout;

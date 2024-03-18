import Navbar from "../ui/NavBar/index";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <section></section>
    </>
  );
}

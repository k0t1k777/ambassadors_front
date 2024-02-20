import "./Main.css";
import Header from "../Header/Header";
import DataAmbassador from "./DataAmbassador/DataAmbassador";
import Sidebar from "../Main/Sidebar/Sidebar";

export default function Main() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Header />
        <DataAmbassador />
      </main>
    </>
  );
}

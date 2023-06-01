import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CurrentTodo from "./components/currentTodo";
function App() {
  return (
    <div className="flex flex-col justify-between items-center h-screen bg-[url(./assets/bg-new.jpg)] bg-cover bg-center">
      <Navbar />
      <div className=" flex h-3/4 sm:h-3/5  bg-white bg-opacity-20 backdrop-blur-lg w-11/12 sm:w-3/5 md:w-3/5  border lg:w-1/3 rounded-lg duration-300">
        <CurrentTodo />
      </div>

      <Footer />
    </div>
  );
}
export default App;

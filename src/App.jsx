import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          {/* Portada */}
          <div className="rounded-2xl mb-4">
            <img
              src="https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630415976_693445_1630416052_portada_normal.jpg"
              className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
            <Card
              img="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
              title="Marvel's Spider-Man"
              category="PS5"
              price="51"
            />
            <Card
              img="https://m.media-amazon.com/images/I/91OWgMrKsQL.jpg"
              title="Little Nightmares II"
              category="PS4"
              price="40"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9y1PxNvYmDfb8QFD.png"
              title="Ghost of Tsushima"
              category="PS4"
              price="48"
            />
            <Card
              img="https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg"
              title="Call of Duty: Warzone"
              category="PC"
              price="60"
            />
            <Card
              img="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png"
              title="Fifa 22"
              category="Xbox Series X"
              price="120"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

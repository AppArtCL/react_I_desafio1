import Header from './components/Header'
import Footer from './components/Footer'
import MyCard from './components/MyCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <div className='cards'>
        <MyCard 
          imagen="https://cdn.pixabay.com/photo/2022/08/15/09/33/saint-bernard-7387479_1280.jpg"
          nombre="Bartolo"
          descripcion="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          raza="San Bernardo"
          color="success"
        />        
        <MyCard 
          imagen="https://cdn.pixabay.com/photo/2018/05/10/19/51/schafer-dog-3388580_1280.jpg" 
          nombre="Messi"
          descripcion="Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          raza="Pastor Alemán"
          color="primary"
        />
        <MyCard 
          imagen="https://cdn.pixabay.com/photo/2017/11/29/20/16/dog-2987024_1280.jpg" 
          nombre="Gohan"
          descripcion="Un perro de tamaño mediano con corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          raza="Rottweiler"
          color="danger"
        />
        <MyCard 
          imagen="https://cdn.pixabay.com/photo/2018/05/10/10/35/great-dane-3387239_1280.jpg" 
          nombre="Princesa"
          descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a princesa a encontrar su final feliz!"
          raza="Gran Danés"
          color="warning"
        />
      </div>
      <Footer />
    </>
  );
}

export default App
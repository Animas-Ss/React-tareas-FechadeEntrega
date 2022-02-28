import React, { useState } from 'react'


const Carousel = () => {
    // definimos una array de imagenes las cuales vana a ser las que pasen por neustro carousel

    const images = ["familiaS.jpg", "fondos.jpg", "github.png"];


    // definimos el hook de estado, lo inicializamos en cero por que seria la posicion inicial de nuestro
    // carousel 
    const [selectedIndex, setSelectedIndex] = useState(0);
    // definimos el hook de estado , para las imagenes
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // juntamos ambas condicimones en un solo componenete osea una funcion que sirva apara ambas funciones

    const selectNewIamge = (index, images, next = true) => {
        const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex = 1 : images.length = 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }
     

    
    // funciones, para avanzar y para retroceder


    const previous = () => {
        // junto ambas logicas en la funcion de arriba -------------
        //const condition = selectedIndex > 0;
        //const nextIndex = condition ? selectedIndex = 1 : image.length = 1;
        //setSelectedImage(image[nextIndex]);
        //setSelectedIndex(nextIndex);
        selectNewIamge(selectedIndex, images, false)
    }

    const next = () => {
        // se juntan ambas logicas en la funcion de arriba ----------------------
        //const condition = selectedIndex < image.length;
        //const nextIndex = condition ? selectedIndex + 1 : 0;
        //setSelectedImage(image[nextIndex]);
        //setSelectedIndex(nextIndex);
        selectNewIamge(selectedIndex, images)
    }



    // lo que nuestro elemento va a retornar o renderizar en nuestra aplicacion
  return (
    <>

     <img src={require(`./static/media/Imagenes/${selectedImage}`).default} />
    

    </>
  )
}

export default Carousel;
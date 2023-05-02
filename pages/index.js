import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"


export default function Home() {
   return <main >

      <HeroBanner />
      <Wrapper>
         <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]" >
            <div className="text-[28px] md:text-[34px] mb-66 font-semibold leading-tight">
              Explore Immersive Spaces 
            </div>
            <div className="text-md md:text-xl">
               Discover the world's creativity through interactive,3D experiences
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
           
            
         </div>
      </Wrapper>

      <div class="flex items-center justify-center flex-col lg:flex-row lg:justify-between bg-blue-950 ">
  <div class="lg:w-1/2 lg:pr-10 mt-10 ml-3">
    <h2 class="text-3xl font-bold mb-4 text-white">Your Virtual Identity</h2>
    <p class="mb-4 text-white text-2xl md:items-center justify-center flex">Customize your Ready Player Me or lifelike avatar with thousands of combinations from leading brands including VOGUE, Adidas, The Fabricant, Dress X and more!</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Customize My Avatar
    </button>
  </div>
  <div class="lg:w-1/2">
    <img src="https://www.spatial.io/_next/static/media/avatars.757b7595.webp" alt="Image" class="w-full mt-10" />
  </div>
</div>



<div class="relative">

  <video class="w-[100%] h-[100%]" src="/running-1.mp4" muted autoPlay loop alt="Slider Image" />
  
 
  <div class="absolute inset-0 bg-black opacity-50"></div>
  

  <div class="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-0">
    <h2 class="text-xl font-bold text-white mb-2 text-center sm:text-xl">Build Your Own 3D World in 1-Click</h2>
    <p className="text-white mb-4 text-center sm:text-sm">Start customizing your virtual space with one of our free 3D templates, Sketchfab models, </p>
    <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-[-15px]">Button</a>
  </div>
</div>

<div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]" >
            <div className="text-[28px] md:text-[34px] mb-66 font-semibold leading-tight text-2xl text-bold">
            Simply Drag, Drop and Share Your Creation
            </div>
         </div>

<div class="flex flex-col sm:flex-row">

<video class="w-full sm:w-1/2 h-auto ml-4" muted autoPlay loop src="/1.mp4" alt="Left Image" />
  
  
  <div class="w-full sm:w-1/2 px-4 sm:px-8 py-8">
  <span className="grid justify-center align-center items-center w-[40px] h-[40px]  border-solid border-2 border-black-500 rounded-full text-[1.25rem] ">1</span>
    <h2 class="text-4xl font-bold mb-4">Sign up for an account</h2>
    <p class="mb-8">and become a Spatian</p>
    <span className="grid justify-center items-center align-center w-[40px] h-[40px] border-solid border-2 border-black-500  rounded-full text-[1.25rem] ">2</span>
    <h2 class="text-4xl font-bold mb-4">Choose your
free Spatial template</h2>
    <p class="mb-8">and customize with 2D, 3D or video files</p>
    <span className="grid justify-center align-center items-center w-[40px] h-[40px] border-solid border-2 border-black-500  rounded-full text-[1.25rem] ">3</span>
    <h2 class="text-4xl font-bold mb-4">Share your space</h2>
    <p>with friends, colleagues and fans
around the world.</p>
  </div>
</div>


<div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]" >
  <div className="text-[28px] md:text-[34px] mb-66 font-semibold leading-tight text-2xl text-bold">Host Your Friends and Community
  </div>
<p>So much is possible in Spatial 3D spaces. Moderate your virtual events using our Host Tools, enable Spatial Audio for tailored curation, Token Gate your space for a more private experience, and more!</p>
</div>

<div class="flex flex-col md:flex-row gap-4 my-6">
  <div class="bg-white shadow-md rounded-md overflow-hidden w-full md:w-1/3">
    <video class="w-full h-40 object-cover" src="/running-3.mp4" muted autoPlay loop alt="Card image"/>
    <div class="p-4">
      <h3 class="text-lg font-medium mb-2">Community Hangouts</h3>
     
    </div>
  </div>
  <div class="bg-white shadow-md rounded-md overflow-hidden w-full md:w-1/3">
    <video class="w-full h-40 object-cover" src="/running-2.mp4" muted autoPlay loop  alt="Card image" />
    <div class="p-4">
      <h3 class="text-lg font-medium mb-2">Immerisive Galleries</h3>
     
    </div>
  </div>
  <div class="bg-white shadow-md rounded-md overflow-hidden w-full md:w-1/3">
    <video class="w-full h-40 object-cover" src="\running-1.mp4" muted autoPlay loop  alt="Card image" />
    <div class="p-4">
      <h3 class="text-lg font-medium mb-2">Live Shows</h3>
    
    </div>
  </div>
</div>



<div className="bg-gray-100 py-20" id="section-third">
  <h2 className="text-4xl font-bold mb-4 text-center">What You Can
Experience</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src="/pngwing.com.png" alt="icon1" className="w-16 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2 text-center">Build with Unity</h3>
      <p className="text-center">
      Create your custom space and publish direct from Unity straight to a live multiplayer experience.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src="/space.png"  alt="icon1" className="w-16 mx-auto mb-4 rounded-full" />
      <h3 className="text-xl font-bold mb-2 text-center">Easy Space Creation</h3>
      <p className="text-center">
      Bring your world to life through drag and drop, free templates, Sketchfab Integration or the Spatial Creator Toolkit.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src="https://previews.123rf.com/images/eljanstock/eljanstock1809/eljanstock180900603/107944013-creator-icon-vector-isolated-on-white-background-logo-concept-of-creator-sign-on-transparent.jpg" alt="icon1" className="rounded-full w-16 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2 text-center">Creator Centric</h3>
      <p className="text-center">
      Create your personal world, gallery or virtual hangout on Spatial free of cost*.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src="https://static.thenounproject.com/png/3674450-200.png" alt="icon1" className="w-16 mx-auto mb-4 rounded-full" />
      <h3 className="text-xl font-bold mb-2 text-center">Cross Platform</h3>
      <p className="text-center">
      xplore thousands of immersive experiences straight from desktop web, mobile, or VR.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4afD8MhdA7KKXlKZqFGyivpHGBYk1oCpdg&usqp=CAU" alt="icon1" className="w-16 mx-auto mb-4 rounded-full" />
      <h3 className="text-xl font-bold mb-2 text-center">Avatar Customization</h3>
      <p className="text-center">
      Create your virtual identity - choose looks from top brands like Calvin Klein, Tommy Hilfiger, Adidas, and more, or upload your own!
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src="https://www.pngitem.com/pimgs/m/123-1237966_fortnite-dance-black-and-white-hd-png-download.png" alt="icon1" className="w-16 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2 text-center">Dance and Emotes</h3>
      <p className="text-center">
      Unleash your self expression and share the love with different emotes and dance moves.
      </p>
    </div>
  </div>
</div>


<div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]" >
  <div className="text-[28px] md:text-[34px] mb-66 font-semibold leading-tight text-2xl text-bold">Join the Spatian Community
  </div>
<p>Spatians are a new generation of creators, ambassadors, educators and trailblazers pioneering immersive co-experiences in the Metaverse. Need help getting started?
Reach out to one of our guides today for community support!</p>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-3">Meet Our Creators</button>
</div>
<div>
<div class="flex flex-col md:flex-row ml-2">
  <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden mb-4 md:mb-0 md:w-1/2 ">
    <div class="md:flex">
      <div class="md:w-1/2">
        <img src="https://www.spatial.io/_next/static/media/treeple-dreamers.5cb37e31.png" alt="Placeholder Image" class="w-full h-full object-cover bg-yellow-400"/>
      </div>
      <div class="md:w-2/3 p-6">
        <h3 class="text-2xl font-bold mb-2">Treeple Dreamers</h3>
        <p class="text-gray-700 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eum inventore cumque tenetur, maxime rem eius repellendus. Tenetur recusandae dolore, amet voluptatum natus ab saepe?</p>
        <a href="#" class="text-blue-500 hover:text-blue-700">View Profile &rarr;</a>
      </div>
    </div>
  </div>
  <div class="bg-gray-100 rounded-lg shadow-md overflow-hidden mb-4 md:mb-0 md:w-1/2">
    <div class="md:flex">
      <div class="md:w-1/2">
        <img src="https://www.spatial.io/_next/static/media/hi-cee-cee.daf05639.png" alt="Placeholder Image" class="w-full h-full object-cover  bg-violet-700"/>
      </div>
      <div class="md:w-2/3 p-6">
        <h3 class="text-2xl font-bold mb-2">HiCeeCee</h3>
        <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, arcu id congue maximus, est eros mollis massa, sit amet maximus purus dolor a justo.</p>
        <a href="#" class="text-blue-500 hover:text-blue-700">View Profile &rarr;</a>
      </div> 
    </div>
  </div>
</div>
</div>
<div class="flex flex-col md:flex-row md:space-x-4 ml-2">
  <div class="flex-1 bg-gray-100 rounded-lg overflow-hidden">
    <img src="https://www.spatial.io/_next/static/media/tina-bonner.3270d927.png" alt="Box 1 Image" class="w-full h-48 object-cover bg-cover bg-center bg-green-400"/>
    <div class="p-4">
      <h3 class="text-2xl font-semibold">Tina Bonner</h3>
      <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ex et cumque dolorum officia </p>
      <a href="#" class="text-blue-500 hover:underline">View Profile &rarr;</a>
    </div>
  </div>
  <div class="flex-1 bg-gray-100 rounded-lg overflow-hidden">
    <img src="https://www.spatial.io/_next/static/media/creative-owls.217d9a21.png" alt="Box 2 Image" class="w-full h-48 object-cover bg-cover bg-center bg-sky-300"/>
    <div class="p-4">
      <h3 class="text-2xl font-semibold">Creative Owls</h3>
      <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reprehenderit soluta eius repellendus earum vero.</p>
      <a href="#" class="text-blue-500 hover:underline">View Profile &rarr;</a>
    </div>
  </div>
  <div class="flex-1 bg-gray-100 rounded-lg overflow-hidden">
    <img src="https://www.spatial.io/_next/static/media/estelle-so.b4aa11ca.png" alt="Box 3 Image" class="w-full h-48 object-cover bg-cover bg-center bg-blue-950"/>
    <div class="p-4">
      <h3 class="text-2xl font-semibold">Estelle So</h3>
      <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem dolorum provident ipsa animi.</p>
      <a href="#" class="text-blue-500 hover:underline">View Profile &rarr;</a>
    </div>
  </div>
</div>
<div className="grid bg-black justify-center align-center p-16 mt-10">
<div class="text-center bg-black w-full h-full">
  <h2 class="text-5xl text-white font-bold my-8 mb-5">Spatial Is Proud to
Partner With</h2>


<div class="container mx-auto px-4">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-bold my-4">SAMSUNG</h3>
    </div>
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-semibold my-4">VOGUE</h3>
    </div>
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-bold my-4">READY PLAYER ME</h3>
    </div>
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-bold my-4">Polygon Studios</h3>
    </div>
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-semibold my-4">THE FABRICANT</h3>
    </div>
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-bold my-4">SuperRare</h3>
    </div>
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-semibold my-4">Box 7 Heading</h3>
    </div>
    <div class="bg-gray-600 text-white rounded-lg overflow-hidden text-center">
      <h3 class="text-lg font-semibold my-4 ">exclusible</h3>
    </div>
  </div>
</div>
</div>
</div>
<hr />

   <hr/>
   </main>


} 

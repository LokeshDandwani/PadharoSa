import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex overflow-hidden flex-col items-center pb-60 pl-16 bg-white max-md:pb-24 max-md:pl-5">
        <div className="self-end w-full max-w-[1748px] max-md:max-w-full">
          <div className="flex gap-5  max-md:flex-col">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-6 w-full max-md:mt-10 max-md:max-w-full">
                <nav className="w-full max-md:mr-2.5 max-md:max-w-full" aria-label="Main navigation">
                  <div className="flex gap-5 max-md:flex-col ">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex overflow-hidden flex-col py-8 pl-3.5 mx-auto w-full bg-white rounded-[51px] max-md:mt-10">
                        <div className="flex gap-3 items-start self-end text-3xl font-extrabold text-black whitespace-nowrap">
                          <div className="grow self-end mt-8">PadharoSa</div>
                          <div className="flex shrink-0 self-start bg-orange-100 h-[31px] rounded-[81px] w-[59px]" role="presentation" aria-hidden="true"></div>
                        </div>
                        <div className="flex gap-5 justify-between mt-6 max-w-full w-[223px]">
                          <div className="flex shrink-0 bg-orange-100 h-[27px] rounded-[81px] w-[53px]" role="presentation" aria-hidden="true"></div>
                          <div className="flex shrink-0 bg-orange-100 h-[27px] rounded-[81px] w-[113px]" role="presentation" aria-hidden="true"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-[250px] w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex gap-10 self-stretch my-auto text-2xl text-gray-800 whitespace-nowrap max-md:mt-10">
                        <a href="#destinations" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Destinations</a>
                        <a href="#hotels" className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Hotels</a>
                      </div>
                    </div>
                  </div>
                </nav>
                <div className="flex flex-col pl-6 mt-24 font-bold max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <h1 className="self-start text-3xl text-red-400 uppercase max-md:max-w-full">Best Destinations around Rajasthan</h1>
                  <p className="mt-8 text-9xl tracking-tighter leading-[118px] text-indigo-950 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    Travel, enjoy<br />and live a new<br />and full life
                  </p>
                  <p className="self-start mt-10 text-xl font-medium leading-10 text-gray-500 max-md:max-w-full">
                    A one-stop <span className="font-extrabold">AI-powered</span> solution to plan, book and enjoy your travel Itenary
                  </p>
                  <div className="flex gap-5">
                    <button className="flex overflow-hidden flex-col justify-center self-center mt-5 max-w-full text-2xl tracking-normal leading-7 text-center text-white bg-amber-500 min-h-[75px] rounded-[100px] w-[211px] hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 p-3" aria-label="Chat with KakoSa">
                        Chat with KakoSa
                      </button>
                      <button className="flex overflow-hidden items-center justify-center self-center mt-5 max-w-full text-2xl tracking-normal leading-7 text-center text-white bg-amber-500 min-h-[75px] rounded-[100px] w-[211px] hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 p-3" aria-label="Find out more">
                        Find out more
                      </button>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col flex-wrap gap-10 items-start pt-16 pr-20 pl-4 w-full text-2xl text-gray-800 min-h-[962px] pb-[846px] max-md:pr-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1a853d47e11d5042d4023b9d313be841c9040216dafedfe757669a2d404af74?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Scenic view of Rajasthan landscape" className="object-cover absolute inset-0 size-full" />
                <nav className="flex relative flex-auto gap-10 items-center max-md:max-w-full m-6 mx-0" aria-label="User navigation">
                  <a href="#flights" className="self-stretch my-auto hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Flights</a>
                  <a href="#bookings" className="self-stretch my-auto hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Bookings</a>
                  <a href="#login" className="self-stretch my-auto font-medium hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Login</a>
                  <a href="#signup" className="self-stretch px-8 py-3 font-medium rounded-md  hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 max-md:px-5">Sign up</a>
                  <button className="hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 mt-2" aria-label="Change language">EN</button>
                  
                </nav>
                <div className="flex absolute gap-2 mt-60  font-medium whitespace-nowrap">
                  
                    <img loading="lazy" src="/src/assets/landing.png" alt="psa" className="object-contain shrink-0 my-auto aspect-[1.63] stroke-[1.33px] stroke-gray-800 w-[1000px]  " aria-hidden="true" />
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      
        {/* <!-- Services Section --> */}
        <section aria-labelledby="services-title">
          <div className="flex flex-wrap gap-5 justify-center mt-80  max-w-full text-center w-[1269px] max-md:mt-10 max-md:mr-2.5">
            <div className="flex flex-col  self-start pl-48  mt-3 max-md:max-w-full">
              <h2 id="services-title" className="self-center text-2xl font-semibold text-gray-500">CATEGORY</h2>
              <p className="mt-3.5 text-7xl font-bold capitalize text-indigo-950 max-md:max-w-full max-md:text-4xl">We Offer Best Services</p>
            </div>
            
          </div>
      
          {/* <!-- Service Cards --> */}
          <div className="mt-3.5 w-full max-w-[1435px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {/* <!-- Activities Card --> */}
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center mt-16 text-center max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8885f1ba5128b7b22c0a8d21def9f4c92342f56182eb12258dd914cbeb28cb96?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Activities icon" className="object-contain max-w-full rounded-none aspect-[1.18] w-[123px]" />
                  <h3 className="mt-8 text-2xl font-semibold text-indigo-950">100+ Activities</h3>
                  <p className="self-stretch mt-7 text-xl font-medium leading-9 text-gray-500">
                    We offer many activities to make your travel experience complete
                  </p>
                </div>
              </div>
      
              {/* <!-- Travel Package Card --> */}
              <div className="mt-3.5 w-full max-w-[1435px] max-md:max-w-full">
                <div className="flex gap-28 ml-16 max-md:flex-col">
                  {/* <!-- Activities Card --> */}
                  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center mt-16 text-center max-md:mt-10">
                      <img loading="lazy" src="src\assets\Group 51.png" alt="Activities icon" className="object-contain max-w-full rounded-none aspect-[1.18] w-[120px]" />
                      <h3 className="mt-5 text-2xl font-semibold text-indigo-950">Best Flights</h3>
                      <p className="self-stretch mt-7 text-xl font-medium leading-9 text-gray-500">
                        You can take our Travel Package to get best flights to your destination
                      </p>
                    </div>
                  </div>



      
              {/* <!-- Local Events Card --> */}
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center mt-14 text-center max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a61ba7a984b8d7f5e6cae18e3b159f548a60ec97ba9a1159e107e5a6e7f87b?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Local events icon" className="object-contain ml-3.5 rounded-none aspect-[0.89] w-[89px]" />
                  <h3 className="mt-8 text-2xl font-semibold text-indigo-950 max-md:mt-10">Local Events</h3>
                  <p className="self-stretch mt-5 text-xl font-medium leading-9 text-gray-500">
                    We Promote variety of Local Events to tourists which encourages diversity
                  </p>
                </div>
              </div>
      
              {/* <!-- Customization Card --> */}
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center mt-20 text-center max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5d09c7f1d0cbd732022f10a57afdbabed4c7fdfbdff59d3a08cb00a5cd7ff1a?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Customization icon" className="object-contain ml-3.5 max-w-full rounded-none aspect-[1.17] w-[103px]" />
                  <h3 className="mt-5 text-2xl font-semibold text-indigo-950">Customization</h3>
                  <p className="self-stretch mt-5 text-xl font-medium leading-9 text-gray-500">
                    We Provide customized travel Itenaries at a reliable cost
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
         </div>
        </section>
      
        {/* <!-- Top Destinations Section --> */}
        <section aria-labelledby="destinations-title">
          <h2 id="destinations-title" className="mt-56 text-2xl font-semibold text-center text-gray-500 max-md:mt-10">Top Selling</h2>
          <p className="mt-2.5 text-7xl font-bold text-center capitalize text-indigo-950 max-md:max-w-full max-md:text-4xl">Top Destinations</p>
          <div className="relative mt-20  flex gap-5 ">
            <img
              data-layer="Rectangle 14"
              className="Rectangle14 w-[417.66px] h-[400.87px] rounded-[31.92px] shadow-lg "
              src="\src\assets\hawa-mahal-6156123_1280.jpg"
              alt="Hawa Mahal"
            />
            <img
              data-layer="Rectangle 14"
              className="Rectangle14 w-[417.66px] h-[400.87px] rounded-[31.92px] shadow-lg"
              src="\src\assets\udpr.jpg"
              alt="Udaipur Lake"
            />
            <img
              data-layer="Rectangle 14"
              className="Rectangle14 w-[417.66px] h-[400.87px] rounded-[31.92px] shadow-lg"
              src="\src\assets\js.jpg"
              alt="Jaisalmer Fort"
            />
          </div>
          {/* <!-- Destination Cards --> */}
          <div className="max-w-[1383px] max-md:mt-10 max-md:max-w-full">
            
              
            <div className="flex gap-5  max-md:flex-col">
              {/* <!-- Jaipur Card --> */}
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-7 pt-9 pb-14 mx-auto w-full font-medium leading-none text-gray-500 bg-white rounded-none max-md:px-5 max-md:mt-10"> 
                    
                  <div className="flex gap-10 text-2xl">
                    
                    <div className="grow shrink w-[199px]">Jaipur, Rajasthan</div>
                    <div>$2.9k</div>
                  </div>
                  <div className="flex gap-5 self-start mt-6 text-xl">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5ff26ae7f740268baac046c97ed10c5066363c09b90e9af527189f35347673d?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain shrink-0 aspect-[0.96] w-[26px]" aria-hidden="true" />
                    <div className="basis-auto">10 Days Trip</div>
                  </div>
                </div>
              </div>
      
              {/* <!-- Udaipur Card --> */}
              <div className="flex flex-col  w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-7 pt-9 pb-14 mx-auto w-full font-medium leading-none text-gray-500 bg-white rounded-none max-md:px-5 max-md:mt-10">
                  <div className="flex gap-10 text-2xl">
                    <div className="grow shrink w-[218px]">Udaipur, Rajasthan</div>
                    <div>$2.5k</div>
                  </div>
                  <div className="flex gap-5 self-start mt-6 text-xl">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed311c0450f4b2b07ba1bb327d24b41571f6fc143f36797d8363113a9cc8e61e?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain shrink-0 aspect-square w-[27px]" aria-hidden="true" />
                    <div className="basis-auto">5 Days Trip</div>
                  </div>
                </div>
              </div>
      
              {/* <!-- Jaisalmer Card --> */}
              <div className="flex flex-col  w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-7 py-12 mx-auto w-full font-medium leading-none text-gray-500 bg-white rounded-none max-md:px-5 max-md:mt-10">
                  <div className="flex gap-10 text-2xl">
                    <div className="flex-auto w-[243px]">Jaisalmer, Rajasthan</div>
                    <div>$1.5k</div>
                  </div>
                  <div className="flex gap-3.5 self-start mt-6 text-xl">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee344d0e01d503396e941ae24443793093d118aae432bbf478afe0d87d4a81ee?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain shrink-0 aspect-square w-[27px]" aria-hidden="true" />
                    <div className="basis-auto">3 Days Trip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* <!-- Booking Steps Section --> */}
        <section aria-labelledby="booking-steps-title" className="mt-60 max-w-full w-[1297px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full text-xl text-gray-500 max-md:mt-10 max-md:max-w-full">
                <h2 id="booking-steps-title" className="text-2xl font-semibold text-center">Easy and Fast</h2>
                <p className="mt-5 text-7xl font-bold capitalize text-indigo-950 max-md:max-w-full max-md:text-4xl">
                  Book your next trip<br />in 3 easy steps
                </p>
                <div className="flex flex-wrap gap-7 mt-11 max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/37c85bb5c526f28d2c68b7f04177883760e98b3c3e7118cf39990cd80489f54b?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Choose destination icon" className="object-contain shrink-0 self-start mt-1.5 rounded-none aspect-[0.98] w-[63px]" />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <h3 className="self-start font-bold leading-none">Choose Destination</h3>
                    <p className="mt-1.5 leading-7 max-md:max-w-full">
                      Browse through our curated list of Rajasthan's top attractions,<br />
                      cultural experiences, activities and travel packages
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-7 self-stretch mt-16 max-md:mt-10">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eb40917d281860f323dedd46e339d4f5cb1ababbb133b91b1acbae4f5f644b8?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Payment icon" className="object-contain shrink-0 self-start mt-1.5 rounded-none aspect-[0.98] w-[63px]" />
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <h3 className="self-start font-bold leading-none">Make Payment</h3>
                    <p className="mt-1.5 leading-7 max-md:max-w-full">
                      Complete your booking with our secure online payment system.<br />
                      Choose from multiple options like credit/debit cards, UPI,<br />
                      net banking
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-7 mt-10 max-w-full text-xl w-[1296px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2cfb45ce41295178d55280f5ef5439817c11b02f3aba64af1e1cf7cbf375c1a?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Airport arrival icon" className="object-contain shrink-0 self-start mt-1.5 rounded-none aspect-[0.98] w-[63px]" />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                      <div className="flex gap-10 w-full leading-none max-md:max-w-full">
                        <h3 className="grow shrink font-bold text-gray-500 w-[333px]">Reach Airport on Selected Date</h3>
                        
                      </div>
                      <p className="self-start mt-2 leading-7 text-gray-500 max-md:max-w-full">
                        Arrive at the designated airport or pickup point on your scheduled<br />
                        date. Our team will be there to assist you with seamless transfers<br />
                        to your destination, ensuring a hassle-free start to your<br />
                        Rajasthan adventure.
                      </p>
                    </div>
                  </div>

              </div>
            </div>
      
            {/* <!-- Trip Preview Card --> */}
            <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
               <div className="border-4 border-black-800 rounded-3xl p-4">
                <div className="flex flex-col  items-start  w-full font-medium leading-none max-md:mt-10 max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/470c7bfb53c1e9e29f100cf41e5ef5ffeb561958981f325aa913bdc5ab72d1e2?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Preview of Jaipur trip" className="object-contain self-stretch w-full aspect-[2] rounded-[32px] max-md:max-w-full" />
                    <div className="ml-3">
                        <h3 className="mt-9 text-2xl tracking-wide text-zinc-950">Trip To Jaipur</h3>
                    <div className="flex gap-2.5 mt-4 text-xl tracking-normal text-slate-500">
                      <div className="flex gap-1">
                        <div className="grow">14-29 June</div>
                        <div className="shrink-0 w-px border border-solid bg-slate-500 border-slate-500 h-[26px]"></div>
                      </div>
                      <div className="basis-auto">curated by- Darshn J.</div>
                    </div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/75ae31c4bc995c373197917fa2362466d7b3dffc7923ff032f84369e7ba82869?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Trip rating" className="object-contain mt-7 max-w-full aspect-[3.86] w-[185px]" />
                    <div className="flex gap-5 mt-5 font-medium tracking-tight text-slate-500">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e19f389325f0d01e95b51dbf12c445dc91e4008a484c6bae56aa4dffeec0442?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain shrink-0 self-start aspect-square w-[21px]" aria-hidden="true" />
                        <div className="basis-auto">24 people going</div>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa29bdcc053c354a049c373f66450a03eda05a206c03acc195295a762e2496fe?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain shrink-0 self-start aspect-[1.08] w-[27px]" aria-hidden="true" />
                    </div>
                    </div>
               </div>
                
                
            </div>
          </div>
          </div>
        </section>
      
        {/* <!-- Airport Instructions -->
       
      
        <!-- Testimonials Section --> */}
        <section aria-labelledby="testimonials-title" className="flex gap-5 justify-between mt-56 ml-16 w-full max-w-[1550px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-start mt-3 max-md:max-w-full">
            <h2 id="testimonials-title" className="self-start text-2xl font-semibold text-gray-500 uppercase">Testimonials</h2>
            <p className="mt-3 text-7xl font-bold capitalize text-indigo-950 max-md:max-w-full max-md:text-4xl">
              What people say<br />about Us.
            </p>
          </div>
          
          
          <div className="flex flex-wrap gap-1 items-start text-2xl text-gray-500">
            <div className="flex flex-wrap gap-1 items-start text-2xl text-gray-500">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed1a3cd78bb5cdab3dc12b80a24e58eb788ebbb119c3e6cf35dbc4a5d84718a5?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="George's profile picture" className="object-contain shrink-0 self-start rounded-full aspect-square w-[91px]" />
            <div className="flex flex-col grow shrink-0  mt-20 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
              <blockquote className="font-medium leading-6 max-md:max-w-full">
                "Our trip to Rajasthan was nothing short of magical! The entire
                process, from booking to exploring, was seamless and stress-free. The
                customized itinerary allowed us to experience the grandeur of Jaipur's
                forts, the serenity of Udaipur's lakes, and the thrill of a desert
                safari in Jaisalmer.."
              </blockquote>
              <cite className="self-start mt-2 font-semibold">George</cite>
            </div>
          </div>


          <div className="flex flex-wrap gap-1 items-start text-2xl text-gray-500">
            <img loading="lazy" src="\src\assets\testimonial.jpg" alt="George's profile picture" className="object-contain shrink-0 self-start rounded-full aspect-square w-[91px]" />
        <div className="flex flex-col grow shrink-0  mt-20 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
          <blockquote className="font-medium leading-6 max-md:max-w-full">
            "Our journey through Rajasthan was an unforgettable adventure! Every aspect, from planning to experiencing, was smooth and hassle-free. The personalized itinerary gave us the chance to marvel at Jaipur's majestic forts, bask in the tranquility of Udaipur's shimmering lakes, and embrace the excitement of a desert safari in Jaisalmer. Truly a trip of a lifetime!"
          </blockquote>
          <cite className="self-start mt-2 font-semibold">Tim </cite>
        </div>
      </div>



            </div>
            
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8444e1eb9bdd396e82884063d732405e29a21d48ef4549c2123e3223346b26?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain shrink-0 self-end mt-48 aspect-[0.2] w-[19px] max-md:mt-10" aria-hidden="true" />
        </section>
      
        {/* <!-- Testimonial Navigation --> */}
        <div className="flex gap-9 self-start mt-10 ml-44 max-md:ml-2.5" role="navigation" aria-label="Testimonial navigation">
          <button className="flex shrink-0 w-4 h-4 rounded-full bg-slate-700" aria-label="Testimonial 1" aria-current="true"></button>
          <button className="flex shrink-0 w-4 h-4 rounded-full bg-neutral-200" aria-label="Testimonial 2"></button>
          <button className="flex shrink-0 w-4 h-4 rounded-full bg-neutral-200" aria-label="Testimonial 3"></button>
        </div>
      
        {/* <!-- Partners Section --> */}
        <div className="flex flex-wrap gap-5 justify-between items-center mt-60 w-full max-w-[1428px] max-md:mt-10 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcecc4343d42758c15f371c6fc1574d65ebceaa71d937f248e371f5c58c9adbf?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Partner logo 1" className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-luminosity aspect-square w-[173px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36bbb8af1fd11ab0fc520aca202c75ae9501ea6a5663307c1ff398404a09c7c8?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Partner logo 2" className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-luminosity aspect-[1.56] w-[230px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f6ad7d4e27bc0a56559647a7fcc438a8ea1488b2f1f2c5f3c7634a165afaab?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Partner logo 3" className="object-contain shrink-0 self-stretch max-w-full aspect-square w-[215px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bafedbd4b48888f97a2d4ba9b2b698633f613624f286f2ef245df3eeab0be34?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Partner logo 4" className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-luminosity aspect-[5.15] w-[216px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed4c6963b2b0007731410519f1a31c1debda63e34947fcdbe36c0130a72a0ec?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Partner logo 5" className="object-contain shrink-0 self-stretch my-auto max-w-full bg-blend-luminosity aspect-[4.46] w-[125px]" />
        </div>
      
        {/* <!-- Newsletter Section --> */}
        <section aria-labelledby="newsletter-title" className="flex flex-wrap gap-5 self-start mt-40 ml-32 max-md:mt-10">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex relative flex-col items-center pb-24 rounded-none ">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45014b26ffc2023ef8f9e7980f22bc192fdde5de5c7a7ff0362065cc35d0b5c6?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-cover absolute inset-0 size-full" aria-hidden="true" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcb919ab3066fe2292129075cf6b483820abf9e8b98708c2de72b080ac7973e2?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain z-10 self-end mt-0 mr-0 aspect-square w-[93px]" aria-hidden="true" />
              <h2 id="newsletter-title" className="relative mt-7 ml-14 text-5xl font-semibold text-center text-gray-500 leading-[72px] max-md:max-w-full">
                Subscribe to get information, latest news and other<br />
                interesting offers about PadharoSa
              </h2>
              <form className="flex relative flex-wrap gap-8 mt-24 mb-0 ml-8 max-w-full w-[831px] max-md:mt-10 max-md:mb-2.5">
                <div className="flex flex-wrap flex-auto gap-5 px-10 py-9 text-xl bg-white rounded-xl text-slate-700 max-md:px-5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/14e6a87f70edce4e0bd536f093d04ea09f3016d92e0e24c2bfbb983606869dfb?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="" className="object-contain shrink-0 w-7 rounded-none aspect-[1.17]" aria-hidden="true" />
                  <label for="email" className="sr-only">Your email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" className="flex-auto max-md:max-w-full bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                </div>
                <button type="submit" className="px-16 py-8 text-2xl font-semibold text-center text-white whitespace-nowrap rounded-xl bg-[linear-gradient(180deg,#FF946D_0%,#FF7D68_100%)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-500 max-md:px-5">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      
        {/* <!-- Footer --> */}
        <footer className="w-full max-w-[1417px] mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between items-end">
            <div className="flex flex-col self-start mt-24">
              <div className="flex overflow-hidden flex-col py-8 pl-3.5 w-full bg-white rounded-[51px] max-md:mr-2">
                <div className="flex gap-3 items-start self-end text-3xl font-extrabold text-black whitespace-nowrap">
                  <div className="grow self-end mt-8">PadharoSa</div>
                  <div className="flex shrink-0 self-start bg-orange-100 h-[31px] rounded-[81px] w-[59px]" role="presentation" aria-hidden="true"></div>
                </div>
                <div className="flex gap-5 justify-between mt-6 max-w-full w-[223px]">
                  <div className="flex shrink-0 bg-orange-100 h-[27px] rounded-[81px] w-[53px]" role="presentation" aria-hidden="true"></div>
                  <div className="flex shrink-0 bg-orange-100 h-[27px] rounded-[81px] w-[113px]" role="presentation" aria-hidden="true"></div>
                </div>
              </div>
              <p className="mt-2 text-lg font-medium leading-6 text-gray-500">
                Book your trip in minute, get full<br />
                Control for much longer.<br />
              </p>
            </div>
      
            <nav className="flex flex-col items-start mt-20 text-2xl font-medium leading-none text-gray-500 whitespace-nowrap max-md:mt-10" aria-label="Company">
              <div className="flex flex-col items-start mt-20 text-2xl font-medium leading-none text-gray-500 whitespace-nowrap max-md:mt-10" aria-label="Company">
              <h3 className="self-stretch text-3xl font-bold text-zinc-950">Company</h3>
              <a href="#about" className="mt-11 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 max-md:mt-10">About</a>
              <a href="#careers" className="mt-4 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Careers</a>
              <a href="#mobile" className="mt-4 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Mobile</a>
              </div> 
            </nav>
      
            <nav className="flex flex-col mt-20 text-2xl font-medium leading-none text-gray-500 whitespace-nowrap max-md:mt-10" aria-label="Contact">
              <h3 className="text-3xl font-bold text-zinc-950">Contact</h3>
              <a href="#help" className="mt-11 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 max-md:mt-10 max-md:mr-1">Help/FAQ</a>
              <a href="#press" className="self-start mt-5 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Press</a>
              <a href="#affiliates" className="self-start mt-4 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Affilates</a>
            </nav>
      
            <nav className="flex flex-col items-start mt-20 text-2xl font-medium leading-none text-gray-500 max-md:mt-10" aria-label="More">
              <h3 className="text-3xl font-bold text-zinc-950">More</h3>
              <a href="#airlinefees" className="mt-11 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 max-md:mt-10">Airlinefees</a>
              <a href="#airline" className="mt-5 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Airline</a>
              <a href="#tips" className="self-stretch mt-4 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500">Low fare tips</a>
            </nav>
      
            <div className="flex flex-col items-start mt-20 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/781bb4966d49bcc75bd20fc58a99a2395b9dd4eb0ddccd7019b30e5488ef29ee?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Social media icons" className="object-contain max-w-full aspect-[3.94] w-[236px]" />
              <h3 className="mt-9 text-3xl font-medium tracking-normal leading-none text-gray-500">Discover our app</h3>
              <div className="flex gap-2.5 self-stretch mt-5">
                <a href="#google-play" className="focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/837969697977294f62ef15c1e26bfa99f876c9e197e1f36d86c350f711db26c1?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Get it on Google Play" className="object-contain shrink-0 max-w-full rounded-none aspect-[3.02] w-[142px]" />
                </a>
                <a href="#app-store" className="focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b81face97a81a6f39d14408110a7f50800657ec277013d07e7c9516367efae?placeholderIfAbsent=true&apiKey=38c9c0f126e441d5a9c575d4d3f86aec" alt="Download on the App Store" className="object-contain shrink-0 max-w-full rounded-none aspect-[2.83] w-[133px]" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
    
  )
}

export default App

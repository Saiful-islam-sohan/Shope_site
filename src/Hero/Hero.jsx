// import ban from '../Components/Assets/banner.jpg'
import arrow from '../Components/Assets/clap.png'
import model from '../Components/Assets/model.jpg'

const Hero = () => {
    return (
        <div className='h-[100%] flex bg-gray-200'>
            <div className='justify-center flex-1 hero-left gap-[20px] pl-[180x] ml-[60px] mt-[60px]'>
                <h2 className='text-gray-950 text-[10px] font-bold'>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='flex items-center gap-[10px]'>
                        <p className='items-center text-[50px] '>new</p>
                        
                        {/* <img src={ban} alt="" className='w-[400px] h-[400px]'/> */}
                        <img src={arrow} alt="" className='w-[40px] h-[40px] ' />
                    </div>
                    <p className='text-[50px]'>Collecltions</p>
                    <p className='text-[50px] mb-[10px]'>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <div className='bg-red-500 w-[135px] p-[5px] border-rose-400 rounded-full'>
                        latest connection
                    </div>
                  
                </div>
            </div>


            <div className='hero-right'>
                <img src={model} alt="" className='w-[400px] h-[400px]' />

            </div>

        </div>
    );
};

export default Hero;
import './Offers.css'
import ban from '../images/model.jpg'

const Offers = () => {
    return (
        <div className='offers bg-slate-500'>

            <div className="flex-col justify-center offers-left mt-[50px] ml-[40px]">
                <h1 className='text-2xl font-bold text-[#171717]'>Exclusive</h1>
                <h1 className='text-2xl font-bold text-[#171717]'>Offers for you</h1>
                <p className='text-xl font-bold text-[#171717]'>Only on best seller product</p>
                <button className='w-[282px] h-[70px] border rounded-full bg-[#ff4141]'>Check now</button>
            </div>
            <div className="flex items-center justify-end">
                <img className='w-[98%] h-[100%] ml-[520px]' src={ban} alt="" />
                
            </div>
        </div>
    );
};

export default Offers;
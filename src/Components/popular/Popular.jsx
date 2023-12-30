import data_product from '../Assets/data';
import Items from '../items/Items';

const Popular = () => {
    return (
        <div className="flex flex-col items-center gap-[10px]">
            <h1 className='text-[30px] text-lg font-medium' >POPULAR IN WOMEN</h1>
            <hr className='w-[200px] h-[6px] border-spacing-52 bg-lime-900'/>
            <div className='popular-item mt-[50px] flex justify-between gap-[20px]'>
                {
                    data_product.map((item, index) => {
                        //console.log(item);
                        return <Items key={index} item={item} />;
                    })
                }
            </div>
        </div>
    );
};

export default Popular;

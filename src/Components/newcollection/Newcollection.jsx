import new_collection from '../Assets/data'
import Items from '../items/Items';

const Newcollection = () => {
    return (
        <div className="new collection flex flex-col items-center gap-[10px]">
            <h1 className='text-[30px] text-lg font-medium'>New Collections</h1>
            <hr />
            <div className='popular-item mt-[50px] flex justify-between gap-[20px]'>
                {
                    new_collection.map((item,index)=>{
                        return <Items key={index} item={item} />;
                        
                    })
                }
                
            </div>
            
        </div>
    );
};

export default Newcollection;
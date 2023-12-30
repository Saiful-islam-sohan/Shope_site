const Items = (props) => {
    console.log(props);
    const { name, image, new_price, old_price } = props.item;

    return (
        <div className="">
            <img src={image} alt="" className="w-[150px] h-[150px]"/>
            <p>{name}</p>
            <div className="flex justify-between gap-[8px] item-pric" >
                <div className="item-price-new">
                    ${new_price}
                </div>
                <div className="item-price-old">
                   ${old_price} {/* Corrected the variable name */}
                </div>
            </div>
        </div>
    );
};

export default Items;



const Items = (props) => {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-price">
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="item-price-old">
                    {
                        props.old_Price
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Items;
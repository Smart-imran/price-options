import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": "$29.99",
            "features": [
                "Access to all gym equipment",
                "1 group class per week",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": "$49.99",
            "features": [
                "Access to all gym equipment",
                "Unlimited group classes",
                "Free personal training session (once a month)",
                "Locker room and sauna access"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": "$69.99",
            "features": [
                "Access to all gym equipment",
                "Unlimited group classes",
                "Weekly personal training sessions",
                "Locker room, sauna, and pool access",
                "Access to exclusive premium areas"
            ]
        },
        
    ];



    return (
        <div className="m-12">
            <h2 className="text-5xl text-center font-extrabold">Best Price in the Town</h2>
            <br />

            <div className="grid md:grid-cols-3 gap-6">
                {

                    priceOptions.map(option => <PriceOption key={option.id}

                    option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": "$29.99/month",
            "features": [
                "Access to all gym equipment",
                "1 group class per week",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": "$49.99/month",
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
            "price": "$69.99/month",
            "features": [
                "Access to all gym equipment",
                "Unlimited group classes",
                "Weekly personal training sessions",
                "Locker room, sauna, and pool access",
                "Access to exclusive premium areas"
            ]
        },
        {
            "id": 4,
            "name": "VIP Plan",
            "price": "$99.99/month",
            "features": [
                "24/7 access to the gym",
                "Unlimited group classes",
                "Personal trainer (twice a week)",
                "Locker room, sauna, pool, and steam room access",
                "Access to exclusive VIP lounge",
                "Free sports drinks and towel service"
            ]
        }
    ];



    return (
        <div>
             <h2 className="text-5xl">Best Price in the Town</h2>
             {
                priceOptions.map(option => <PriceOption  key={option.id}
                
                option={option}
                ></PriceOption>)
             }
        </div>
    );
};

export default PriceOptions;
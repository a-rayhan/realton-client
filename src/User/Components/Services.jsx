import SectionTitleCenter from "./SectionTitleCenter";
import ServicesCard from "./ServicesCard";


const Services = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="px-12">
                <SectionTitleCenter
                    title='See How Realton Can Help'
                    description='Aliquam lacinia diam quis lacus euismod'
                />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServicesCard
                    img='https://homez.ibthemespro.com/images/icon/property-buy.svg'
                    title='Buy a property'
                    description='Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.'
                    button='Find a home'
                />
                <ServicesCard
                    img='https://homez.ibthemespro.com/images/icon/property-sell.svg'
                    title='Sell a property'
                    description='Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.'
                    button='Place an ad'
                />
                <ServicesCard
                    img='https://homez.ibthemespro.com/images/icon/property-rent.svg'
                    title='Rent a property'
                    description='Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.'
                    button='Find a rental'
                />
            </div>
        </div>
    );
};

export default Services;
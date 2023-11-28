import ReviewCard from "./ReviewCard";
import SectionTitle from "./SectionTitle";

const Review = () => {
    return (
        <div className="bg-[#eb67530d]">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div>
                    <SectionTitle
                        title='People Love Living with Realton'
                        description='Aliquam lacinia diam quis lacus euismod'
                    />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </div>
    );
};

export default Review;
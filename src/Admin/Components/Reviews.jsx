import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Reviews
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="px-8 py-5 bg-white rounded-2xl">
                <ReviewsCard />
                <ReviewsCard />
                <ReviewsCard />
                <ReviewsCard />
            </div>
        </div>
    );
};

export default Reviews;
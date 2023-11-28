const BlogCard = () => {
    return (
        <div className="cursor-pointer">
            <div className="h-[272px] w-full relative">
                <img src="https://homez.ibthemespro.com/images/listings/g1-1.jpg" alt="" className="rounded-xl w-full h-full object-cover" />

                <div className="absolute -bottom-6 right-5">
                    <p className="bg-white px-5 py-3 rounded-lg text-sm">
                        July <br />
                        <span className="text-lg font-semibold">28</span>
                    </p>
                </div>
            </div>

            <div className="pt-6 px-2">
                <p className="text-sm mb-1">
                    Living Room
                </p>

                <p className="text-lg font-semibold hover:text-[#eb6753]">
                    Private Contemporary Home Balancing Openness
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
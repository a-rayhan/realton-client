import BlogCard from "./BlogCard";
import SectionTitleCenter from "./SectionTitleCenter";

const Blog = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-24">
            <SectionTitleCenter
                title='From Our Blog'
                description='Aliquam lacinia diam quis lacus euismod'
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            </div>
        </div>
    );
};

export default Blog;
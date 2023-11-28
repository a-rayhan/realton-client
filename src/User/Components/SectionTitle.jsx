const SectionTitle = ({ title, description }) => {
    return (
        <div className="mb-14">
            <p className="text-3xl font-semibold mb-2">
                {title}
            </p>

            <p className="text-sm">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;
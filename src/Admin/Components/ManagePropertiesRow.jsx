const ManagePropertiesRow = () => {
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-24 h-20 rounded-lg">
                            <img src="https://homez.ibthemespro.com/images/listings/g1-1.jpg" alt="Avatar Tailwind CSS Component" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                    <div>
                        <div className="text-base font-medium">Equestrian Family Home</div>
                        <div className="text-sm opacity-80">United States</div>
                        <div className="text-base font-medium">Offered Price: $200k</div>
                    </div>
                </div>
            </td>
            <td>
                Abu Rayhan
                <br />
                <span className="badge badge-ghost badge-sm">aburayhandh@gmail.com</span>
            </td>
            <td>
                <p className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">
                    Accept
                </p>

                <p className="bg-[#fff8dd] px-6 py-2 rounded-full inline-flex text-[#e4b303] cursor-pointer">
                    Reject
                </p>
            </td>
        </tr>
    );
};

export default ManagePropertiesRow;
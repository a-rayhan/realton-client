const AdvertiseTableRow = ({ property, handleAdvertise }) => {
    const { title, price, location, username, useremail, photo, advertise } = property;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-24 h-20 rounded-lg">
                            <img src={photo} alt="Avatar Tailwind CSS Component" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                    <div>
                    <div className="text-base font-medium">{title}</div>
                        <div className="text-sm opacity-80">{location}</div>
                        <div className="text-base font-medium">Offered Price: ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {username}
                <br />
                <span className="badge badge-ghost badge-sm">{useremail}</span>
            </td>
            <td>
                {
                    advertise === 'advertised' ?
                        <>
                            <p className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">
                                Advertised
                            </p>
                        </>
                        :
                        <>
                            <p onClick={() => handleAdvertise(property)} className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">
                                Advertise
                            </p>

                            <p className="bg-[#fff8dd] px-6 py-2 rounded-full inline-flex text-[#e4b303] cursor-pointer">
                                Remove Advertise
                            </p>
                        </>
                }
            </td>
        </tr>
    );
};

export default AdvertiseTableRow;
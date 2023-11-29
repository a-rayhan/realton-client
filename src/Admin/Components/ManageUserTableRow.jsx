const ManageUserTableRow = ({ user, index, handleDeleteUser, handleMakeAdmin, handleMakeAgent }) => {
    const { _id, name, email } = user;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">

                    <div>
                        <div className="text-base font-medium">{name}</div>
                        <div className="text-base font-medium">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {/* <p className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] cursor-pointer">
                    Make an agent
                </p> */}


                {/* {
                    user.role == 'admin' && 'Admin' || <p onClick={() => handleMakeAdmin(user)} className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">Make an admin</p>
                }

                {
                    user.role == 'agent' && 'Agent' || <p onClick={() => handleMakeAgent(user)} className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">Make an agent</p>
                } */}
                {
                    user.role == 'admin' && 'Admin' || user.role == 'agent' && 'Agent' ||
                    <>
                        <p onClick={() => handleMakeAdmin(user)} className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">Make an admin</p>

                        <p onClick={() => handleMakeAgent(user)} className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">Make an agent</p>
                    </>
                }
{/* 
                {
                    user.role == 'agent' && 'Agent' || <p onClick={() => handleMakeAgent(user)} className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">Make an agent</p>
                } */}
            </td>
            <td>
                <p className="bg-[#e5f0fd] px-6 py-2 rounded-full inline-flex text-[#3554d1] mr-3 cursor-pointer">
                    Fraud
                </p>
            </td>
        </tr>
    );
};

export default ManageUserTableRow;
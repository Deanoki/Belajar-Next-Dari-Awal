"use client"

interface ViewUserButtonProps{
    userId : number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleButtonClick = () => alert(`user id: ${userId}`);
    return (
        <>
            <button onClick={handleButtonClick}>lihat user</button>
        </>
    )
} 

export default ViewUserButton
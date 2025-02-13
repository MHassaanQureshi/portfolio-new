import Image from "next/image"
export default function Profile(){
    return(
        <>
        <div className="w-52 bg-white drop-shadow-[8px_8px_10px_rgba(0,0,0,0.5)]">
    <Image src="/images/profile.png" alt="profile" width={200} height={200} /> 
</div>

        </>
    )
}

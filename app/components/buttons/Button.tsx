interface Props {
    text: string;
    // link: string;
}

export default function Button({ text }: Props) {
    return (
       
            <button className="bg-white w-[158px] h-[68px] border-2 border-black text-2xl 
                transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-black 
                hover:text-white active:scale-95">
                {text}
            </button>
    );
}

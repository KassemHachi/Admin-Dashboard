

export default function UserImageSmall() {
    return (
        <div className=' flex items-center gap-0  md:gap-3'>
            <img
                src="https://i.pinimg.com/564x/5a/5d/1d/5a5d1d0a05d050a89b7d836cf63ca35c.jpg"
                className=' w-10 h-auto rounded-full overflow-clip cursor-pointer hover:scale-125 hover:shadow-sm transition-all ease-linear '
            />
            <div className="hidden md:inline">
                <h4 className='text-black font-semibold text-sm md:text-base'>Jahn Doe</h4>
                <h6 className='text-gray-400 font-medium text-xs md:text-sm'>Developer</h6>
            </div>
        </div>
    )
}

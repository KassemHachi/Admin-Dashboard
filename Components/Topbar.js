
import { Input } from "@nextui-org/react";
import { FaSearch } from 'react-icons/fa';
import { RiNotificationLine } from 'react-icons/ri';
export default function Topbar() {
  return (
    <div className='grid grid-cols-4 '>
      <div className='col-span-1'>
        <div className='w-full'><Input
          className='group focus-within:border-blue-600 border-2'
          Placeholder="Search ..."
          width="100%"

          contentLeft={<FaSearch className='group-focus-within:text-blue-600 transition-all ease-linear text-gray-300'

          />}
        /></div>
      </div>
      <div className='col-span-1'>

      </div>
      <div className='col-span-1'>

      </div>
      <div className='col-span-1'>
        <div className='flex gap-5'>

          <RiNotificationLine className='w-7 h-auto text-gray-400  hover:text-[#0d79f5] cursor-pointer hover:scale-125  transition-all ease-linear ' />

          <div className=' flex items-center gap-3'>
            <img
              src="https://i.pinimg.com/564x/5a/5d/1d/5a5d1d0a05d050a89b7d836cf63ca35c.jpg"
              className=' w-10 h-auto rounded-full overflow-clip cursor-pointer hover:scale-125 hover:shadow-sm transition-all ease-linear '
            />
            <div>
              <h4 className='text-black font-semibold text-base'>Jahn Doe</h4>
              <h6 className='text-gray-400 font-medium text-sm'>Developer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

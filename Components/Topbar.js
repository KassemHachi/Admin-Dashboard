import SearchBar from "./SearchBar";
import UserImageSmall from "./UserImageSmall";
import NotificationsMenu from "./NotificationsMenu";

export default function Topbar() {

  return (
    <div className='grid  grid-cols-2 lg:grid-cols-4'>
      <div className='col-span-1'>
        <div className='w-full '>
          <SearchBar />
        </div>
      </div>

      <div className='col-span-1 lg:col-span-3 '>
        <div className='flex gap-5 justify-end'>

          <NotificationsMenu />
          <UserImageSmall />

        </div>
      </div>
    </div>
  )
}

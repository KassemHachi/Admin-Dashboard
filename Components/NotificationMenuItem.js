import { Avatar, Dropdown, Tooltip } from '@nextui-org/react'

export default function NotificationMenuItem(props) {
    return (

        <div className="flex items-center "><Tooltip content={props.TooltipContent} placement="left" arrow>
            <Avatar
                src={props.AvatarSrc}
                size="md"
                className="mr-3"
            /> </Tooltip>
            <div>
                <p>{props.NotifiationText}</p>
                <span className='text-slate-400 text-xs'>{props.NotifiationDate}</span>
            </div>
        </div>



    )
}

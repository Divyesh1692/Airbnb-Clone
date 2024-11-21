'use client';

interface MenuItemsProps{
    onClick:()=>void;
    label:string;

}

const MenuItems: React.FC<MenuItemsProps> = ({onClick,label})=>{
    return (
        <div
            onClick={onClick}
            className="
            px-4
            px-3
            hover:bg-neutral-100
            transition
            font-semibold
            "
        >
            {label}
        </div>
    )
}

export default MenuItems
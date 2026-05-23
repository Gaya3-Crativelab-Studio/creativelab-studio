import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {

const [isOpen,setIsOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);

const navItems=[
{
name:"Home",
path:"/"
},
{
name:"About",
path:"/about"
},
{
name:"Services",
path:"/services"
},
{
name:"Portfolio",
path:"/portfolio"
}
];

const logo="https://res.cloudinary.com/dxfs7qyzm/image/upload/v1779434574/Creative_Lab_sdbuvi.svg";

useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY>40);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

return(

<header
className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
scrolled
? "bg-white backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.15)]"
: "bg-white/5 backdrop-blur-xl"
}`}
>

<div className="absolute inset-0 bg-linear-to-r from-[#6F00FF]/5 via-transparent to-[#C0FF00]/5 pointer-events-none"/>

<nav className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between relative">

<NavLink to="/">

<img
src={logo}
alt="CreativeLab Studio"
className="h-18 sm:h-20 w-auto object-contain"
/>

</NavLink>

<ul className="hidden lg:flex items-center gap-10">

{navItems.map((item)=>(

<li key={item.name}>

<NavLink
to={item.path}
className={({isActive})=>
`relative text-xl font-bold tracking-wide pb-2 transition-all duration-300 ${
isActive
? "text-[#6F00FF]"
: "text-black/80 hover:text-[#6F00FF]"
}`
}
>

{({isActive})=>(

<>

{item.name}

<span
className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-purple-300 to-purple-500 transition-all duration-500 ${
isActive
? "w-full"
: "w-0"
}`}
/>

</>

)}

</NavLink>

</li>

))}

</ul>

<button className="hidden lg:flex items-center px-7 py-3 rounded-full bg-[#6F00FF] hover:bg-[#7B68EE] text-white font-[Nexa] font-medium transition-all duration-300 hover:scale-105 shadow-[0_12px_30px_rgba(111,0,255,0.22)] cursor-pointer">

Contact Us

</button>

<button
onClick={()=>setIsOpen(!isOpen)}
className="lg:hidden text-[#111111] text-3xl"
>

{isOpen?<FiX/>:<FiMenu/>}

</button>

</nav>

<div
className={`fixed top-0 right-0 h-screen w-[85%] max-w-90 bg-white/10 backdrop-blur-3xl border-l border-white/10 transition-all duration-500 lg:hidden ${
isOpen
? "translate-x-0"
: "translate-x-full"
}`}
>

<div className="flex justify-end p-6">

<button
onClick={()=>setIsOpen(false)}
className="text-[#111111] text-3xl"
>

<FiX/>

</button>

</div>

<ul className="flex flex-col px-8 mt-12 gap-8">

{navItems.map((item)=>(

<NavLink
key={item.name}
to={item.path}
onClick={()=>setIsOpen(false)}
className={({isActive})=>
`font-[Nexa] text-lg duration-300 ${
isActive
? "text-[#6F00FF]"
: "text-black/80"
}`
}
>

{item.name}

</NavLink>

))}

<button className="mt-6 bg-[#6F00FF] hover:bg-[#7B68EE] py-4 rounded-full text-white font-[Nexa] duration-300 cursor-pointer">

Contact Us

</button>

</ul>

</div>

{isOpen&&(

<div
onClick={()=>setIsOpen(false)}
className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
/>

)}

</header>

);

};

export default NavBar;
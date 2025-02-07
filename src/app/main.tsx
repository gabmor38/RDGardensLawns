// 'use client'
// import { useState } from "react";
// import * as React from 'react';




// export default function Home() {

//   const [nav, setNav] = useState(false);
// 	const handleClick = () => setNav(!nav);

//   const categories = [
//     {
//       name: 'Home',
//       href: '#home',
//       id: 1,
//     },
//     {
//       name: 'About',
//       href: '#about',
//       id: 2,
//     },
//     {
//       name: 'Services',
//       href: '#services',
//       id: 3,
//     },
//     {
//       name: 'Contact',
//       href: '#contact',
//       id: 4,
//     },
//   ];

//   return (
//     <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-background text-gray-300'>
//       <div>
// 				<a href='/'>
//           <h1>Richard D Softscape Landscaping</h1>
// 					{/* <img src={"/Logo.png"} alt='Arushi Katyal Logo' style={{ width: '75px' }} /> */}
// 				</a>
// 			</div>

//       <ul className='hidden md:flex gap-x-8 gap-y-4'>
//         {categories.map(category => {
//           return (
//             <li key={category.id}>
//               <a href={category.href} className='hover:text-emerald-950'>
//                 {category.name}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   )
// }
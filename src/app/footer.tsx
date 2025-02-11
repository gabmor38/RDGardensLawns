/* eslint-disable @typescript-eslint/no-explicit-any */
 
'use client'
 
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

interface FooterProps {
    handleNavClick:(value: string) => void
  }

export default function Footer({ handleNavClick }: FooterProps) {

    const handleValueChange = (event: any) => {
       handleNavClick(event)
    }



    const categories = [
        {
          name: 'Home',
          href: '#home',
          id: '0',
        },
        {
          name: 'About',
          href: '#about',
          id: '1',
        },
        {
          name: 'Services',
          href: '#services',
          id: '2',
        },
        {
          name: 'Contact',
          href: '#contact',
          id: '3',
        },
      ];;

      
  return (
    <footer>
          <nav className="navbar  flex justify-content-end" style={{background: '#818C78', padding: '20px'}}>
            <div className="container text-center">
                <div className="col col-lg-1">
                  <a href="https://www.facebook.com/profile.php?id=61572609634679" target="_blank" role="button" data-bs-toggle="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </a>

                </div>
                <div className="col">
                  <p className="text-white">Copyright &copy; RD Softscape Landscaping 2025</p>
                </div>
                <div className="col col-lg-3">
                  <ul className='hidden md:flex gap-x-8 gap-y-4'>
                    {categories.map(category => {
                      return (
                        <li key={category.id}>
                          <a id={category.id} href={category.href} className='nav-link text-light' onClick={handleValueChange} style={{textDecoration: 'none'}}>
                            {category.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
            </div>
          </nav>
        </footer>
  );
}
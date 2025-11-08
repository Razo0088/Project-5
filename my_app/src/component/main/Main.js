import React from 'react'
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import Gumwear from '../pages/Gumwear';
import Blazers from '../pages/Blazers';
import Shoes from '../pages/Shoes';
import "./main.scss";
import Subscribe from './subscribe/Subscribe';
import Contact from './Contact/Contact';
import Shirt from '../pages/Shirt';
import Dress from '../pages/Dress';
import Jeans from '../pages/Jeans';
import Jackets from '../pages/Jackets ';
import ExampleCarouselImage from './ExampleCarouselImage';
import Scrol from '../../scrol/Scrol';
import { motion } from 'framer-motion';

export default function Main({ night, sun }) {
    const img = [
        { img: "https://www.w3schools.com/w3images/jeans1.jpg", p: "Ripped Skinn Jeans", price: "$24.99", new: "new" },
        { img: "https://www.w3schools.com/w3images/jeans2.jpg", p: "Mega Ripped Jeans", price: "$19,99", new: "new" },
        { img: "https://www.w3schools.com/w3images/jeans3.jpg", p: "Washed Skinny Jeans", price: "$20.50", new: "new" },
        { img: "https://www.w3schools.com/w3images/jeans4.jpg", p: "Vintage Skinny Jeans", price: "14,99", new: "new" }]
    const img2 = [
        { img: "https://img01.ztat.net/article/spp-media-p1/e9ac7fd1f5854b079b79da6d64460cc8/34243fc3c46e4365b64050d0d11721cf.jpg?imwidth=762", p: "Mega Ripped Jeans", price: "$19.99", sale: "Sale" },
        { img: "https://www.w3schools.com/w3images/jeans1.jpg", p: "Washed Skinny Jeans", price: "$14.99", sale: "Sale" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3yQQilj5eC1OBE1D9-LzLNsA7V2oiqa_6g&s", p: "Ripped Skinny Jeans", price: "$24.99", sale: "Sale" }
        , { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPU0WKjnNdjRWUFxic8gawzWhLTUnp579uA&s", p: "Vintage Skinny Jeans", price: "14.99", sale: "Sale" }]
    const contentRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/" && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <main>
            <section>
                <div className='jeans'> <h3>STYLECORE</h3>
                    <div> {sun ? <span> Dark <FaMoon onClick={() => { night(prev => !prev) }} /></span> : <span >Sun < FaSun onClick={() => { night(prev => !prev) }} /> </span>}
                    </div>
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true, amount: 0.3 }}>

                    <div className='new'>

                        <ExampleCarouselImage />
                        <div ref={contentRef}>
                            <Routes>
                                <Route path="/shirt" element={<Shirt />} />
                                <Route path="/dress" element={<Dress />} />
                                <Route path="/jeans" element={<Jeans />} />
                                <Route path="/jackets" element={<Jackets />} />
                                <Route path="/gumwear" element={<Gumwear />} />
                                <Route path="/blazers" element={<Blazers />} />
                                <Route path="/shoes" element={<Shoes />} />

                            </Routes>
                        </div>
                    </div>
                </motion.div >

                <motion.div 
                    viewport={{ once: true, amount: 0.3 }}
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}>

                    <h5>New-Sali</h5>
                    <div className='shop_jens'>
                        <div className='blok1'>
                            {img.map((elem, index,) => {
                                return < div className='box1' key={index} style={{
                                    backgroundImage: `url(${elem.img})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "100% 80%",

                                }}>  {elem.new ? <div className='new_div'><p>New</p> <button> Buy now<FaShoppingCart /></button></div> : null}  <p>{elem.p}</p><b>{elem.price}</b></div>
                            })}
                        </div>

                        <div className='blok2'>{img2.map((elem, index) => {
                            return <div className='box1' key={index} style={{
                                backgroundImage: `url(${elem.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100% 80%",

                            }} >  {elem.sale ? <div className='new_div'><p>Sale</p> <button> Buy now<FaShoppingCart /></button></div> : null}<p>{elem.p}</p><b>{elem.price}</b></div>
                        })}</div>

                    </div>
                </motion.div>

                <motion.div
                    viewport={{ once: true, amount: 0.3 }}
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}>

                    <section id='subscribe-section'>
                        <Subscribe />
                    </section >

                    <section id='contact-section'>
                        <Contact />
                    </section>
                </motion.div>


                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <div className='foot'>


                        <p>
                            The author of the site is
                            <a
                                href="https://www.linkedin.com/in/%D1%80%D0%B0%D0%B7%D0%BC%D0%B8%D0%BA-%D0%B3%D0%B5%D0%B2%D0%BE%D1%80%D0%B3%D1%8F%D0%BD-98956b242/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn профиль Razmik Gevorgyan"
                            > Razmik Gevorgyan</a>
                        </p>
                    </div>
                    <Scrol />
                </motion.div>

            </section>
        </main>
    )
}

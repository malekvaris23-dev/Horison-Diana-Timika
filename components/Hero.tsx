'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { images, hotelConfig } from './siteData'
import { useRef } from 'react'

export function Hero(){
  const ref=useRef<HTMLDivElement>(null)
  const x=useMotionValue(0), y=useMotionValue(0)
  const sx=useSpring(x,{stiffness:90,damping:18}), sy=useSpring(y,{stiffness:90,damping:18})
  const rx=useTransform(sy,[-.5,.5],[2,-2]), ry=useTransform(sx,[-.5,.5],[-3,3])
  function move(e:React.MouseEvent){if(!ref.current)return;const r=ref.current.getBoundingClientRect();x.set((e.clientX-r.left)/r.width-.5);y.set((e.clientY-r.top)/r.height-.5)}
  return <section ref={ref} onMouseMove={move} className="relative min-h-[94svh] md:min-h-screen overflow-hidden flex items-end px-4 md:px-7 pb-7 md:pb-10 pt-28">
    <motion.div style={{rotateX:rx,rotateY:ry}} className="absolute inset-2 md:inset-4 overflow-hidden rounded-[24px] md:rounded-[34px] [transform-style:preserve-3d]">
      <Image src={images.hero} alt="Horison Diana Timika concept exterior photography" fill priority sizes="100vw" className="object-cover hero-img"/>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,15,17,.08),rgba(5,15,17,.2)_38%,rgba(5,15,17,.94)_100%)]"/>
    </motion.div>
    <div className="relative z-10 max-w-[1460px] w-full mx-auto grid lg:grid-cols-[1fr_auto] gap-8 items-end px-3 md:px-7">
      <div>
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="eyebrow">Timika · Papua Tengah · Indonesia</motion.div>
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:.12,duration:.9,ease:[.22,1,.36,1]}} className="serif mt-5 text-[clamp(48px,8.6vw,128px)] leading-[.8] tracking-[-.055em] max-w-5xl">HORISON DIANA<br/><span className="text-[#B8A47A]">TIMIKA</span></motion.h1>
        <p className="mt-7 max-w-xl text-sm md:text-base text-white/68 leading-6">A refined stay in the heart of Timika. Comfortable spaces for business, leisure and memorable stays in Papua Tengah.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link href="/experience/" className="pill pill-light">EXPLORE THE HOTEL <ArrowUpRight className="inline ml-1" size={14}/></Link><Link href="/location/" className="pill pill-dark">CONTACT HOTEL</Link></div>
      </div>
      <div className="hidden md:block border-l border-white/20 pl-6 mb-2 min-w-40"><div className="text-[#B8A47A] tracking-[.28em] text-sm">★★★★★</div><div className="mt-2 text-2xl font-semibold">{hotelConfig.rating} <span className="text-white/35 text-sm font-normal">/ 5</span></div><div className="text-[11px] text-white/45 mt-1">{hotelConfig.reviewCount} Google reviews</div><div className="mt-8 text-[10px] text-white/45 tracking-[.12em]"><MapPin size={13} className="inline mr-2"/>TIMIKA · PAPUA TENGAH</div></div>
    </div>
    <div className="absolute bottom-7 right-8 hidden md:flex items-center gap-3 text-[9px] tracking-[.25em] text-white/45">SCROLL <ArrowDown size={14}/></div>
  </section>
}

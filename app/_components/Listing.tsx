import { Button } from '@/components/ui/button'
import { Bath, BedDouble, MapPin, Ruler, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import GoogleAddressSearch from './GoogleAddressSearch'

const Listing = ({listing, handleSearchClick, searchedAddress}:any) => {

    const [address, setAddress] = useState();
  return (
    <div>
        <div className='p-3 flex gap-6'>
        <GoogleAddressSearch 
          selectedAddress ={(v)=>{searchedAddress(v);
            setAddress(v)}}
          setCoordinates={(v)=>console.log(v)}
        />
        <Button className='flex gap-2'
          onClick={handleSearchClick}
        >
            <Search className='h-4 w-4'/> Search</Button>
        </div>
        {address&&<div className='px-3'>
            <h2 className='text-lg'>Found {listing.length} Result in <span className='text-primary font-bold'>{address?.label}</span></h2>
        </div>}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {listing.length > 0 ? listing.map((item,index)=>(
                <div className='p-3 hover:border hover:border-primary hover:rounded-md cursor-pointer'>
                    <Image 
                      src={item.listingImages[0].url} 
                      width={800}
                      height={150}
                      className="rounded-lg object-cover h-[170px]"
                      alt=""
                    />
                    <div className='flex mt-2 flex-col gap-2'>
                        <h2 className='font-bold text-xl'>${item.price}</h2>
                        <h2 className='flex gap-2 text-sm text-gray-400'><MapPin className=' text-primary'/>{item.address}</h2>
                    <div className='flex gap-2 mt-2 justify-between'>
                        <h2 className='flex gap-2 w-full text-sm bg-slate-200 round-md p-2 text-gray-500 justify-center'>
                            <BedDouble/>
                            {item.bedroom}
                            </h2>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-200 round-md p-2 text-gray-500 justify-center'>
                            <Bath/>
                            {item.bathroom}
                            </h2>
                            <h2 className='flex gap-2 w-full text-sm bg-slate-200 round-md p-2 text-gray-500 justify-center'>
                            <Ruler/>
                            {item.area}
                            </h2>
                    </div>
                    </div>
                </div>
            )) : [1,2,3,4,5,6,7,8].map((item, index)=>(
                 <div key={index} className='h-[230px] w-full bg-slate-200 animate-pulse rounded-lg'>

                 </div>
            ))}
        </div>
    </div>
  )
}

export default Listing
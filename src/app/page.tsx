"use client"

import Image from "next/image";
import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const isMobile = window.innerWidth <= 425 ? true : false

const containerStyle = {
  width: isMobile ? '375px' : '450px',
  height: '375px',
  zIndex: '90'
};

const center = {
  lat: 52.513449831573695,
  lng: 13.412811853278201
};

export default function Home() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDHVyB-dRW3fhSdUmy3lqoiaNjV9JVUR4M"
  })

  const [maps, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <main className="flex ">
      <div className="py-32 px-2 md:px-12 content-start md:content-center items-center justify-items-center w-full h-screen grid md:grid-cols-2">
        <section>
          <Image
            src="/maps.svg"
            alt="Google Maps"
            width={30}
            height={24}
            priority
          />
          <h3 className="my-4 font-primary font-semibold text-xl">
            Kommen Sie in unsere
            <br />
            Kanzlei im Herzen Berlins
          </h3>
          <p className="font-inter font-semibold">Adresse</p>
          <p className="font-inter mt-1">Wallstraße 52, 10977 Berlin</p>
        </section>
        <section className="mt-6 md:mt-0 z-20 relative">
          <div className="z-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d447.9755068435177!2d13.412662760190079!3d52.51361117602278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c36b0d65e9%3A0xd342fd391176a1ec!2sGansel%20Rechtsanw%C3%A4lte!5e0!3m2!1sen!2sid!4v1695694438336!5m2!1sen!2sid" width="375" height="375" style={{ zIndex: 99, position: 'sticky' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="z-10 absolute top-4 left-4 w-full h-full border border-[#5CD9E1]"></div>
        </section>
      </div>
    </main>
  )
}

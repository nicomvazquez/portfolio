import React from "react";

import django from '../assets/django.svg'
import python from '../assets/python.svg'
import express from '../assets/express.svg'
import mongodb from '../assets/mongodb.svg'
import mysql from '../assets/mysql.svg'
import nodejs from '../assets/nodejs.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import php from '../assets/php.svg'
import laravel from '../assets/laravel.svg'
import postgres from '../assets/postgres.svg'

function Info() {
  return (
    <div className="w-full bg-black">
      <div className="w-4/5 lg:w-3/5 flex flex-col gap-20 m-auto pb-24">
        <h1 className="text-7xl font-bold text-slate-100">
          stack
        </h1>
        <div className="m-auto w-full flex justify-stretch flex-wrap gap-10">
          <img className="w-20" src={nodejs} alt="" />
          <img className="w-20" src={express} alt="" />
          <img className="w-20" src={react} alt="" />
          <img className="w-20" src={python} alt="" />
          <img className="w-20" src={django} alt="" />
          <img className="w-20" src={php} alt="" />
          <img className="w-20" src={laravel} alt="" />
          <img className="w-20" src={mongodb} alt="" />
          <img className="w-20" src={mysql} alt="" />
          <img className="w-20" src={postgres} alt="" />
          <img className="w-20" src={tailwind} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Info;

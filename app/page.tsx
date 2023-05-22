import Image from 'next/image';
import Keyboard from './keyboard';
import { useEffect, useState } from 'react';

export default function Home() {

  return (
    <main className="flex h-screen flex-wrap w-screen bg-black">
      <div className="fixed flex flex-wrap justify-center p-2 h-20 w-full items-center text-black bg-yellow-400 font-medium font-mono">
        <h4 className="mx-3">Home</h4>
        <h4 className="mx-3">About</h4>
        <h4 className="mx-3">Contact</h4>
        <h4 className="mx-3">Examples</h4>
      </div>
        <Keyboard />
    </main>
  );
}

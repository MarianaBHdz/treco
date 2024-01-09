'use client';
import Inicio from "./Inicio/page";
import { SessionProvider } from './components/context/SessionContext'

export default function Home() {
  return (
    <SessionProvider>
      <Inicio/>
    </SessionProvider>
  )
}
import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';
export const metadata:Metadata={title:'Sillon 88 Records — Label indépendant. Lyon.',description:'Électro-soul, house et ambient. Du premier au dernier sillon.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}

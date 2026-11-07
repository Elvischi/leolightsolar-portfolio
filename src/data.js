// Edit this file to change the content of the site.
import Pan1 from './components/image/pan1.jpeg';
import Pan2 from "./components/image/pan2.jpeg";
import Pan3 from "./components/image/pan3.jpeg";
import Pan4 from "./components/image/pan4.jpeg";
import Pan5 from "./components/image/pan5.jpeg";
import Pan6 from "./components/image/pan6.jpeg";
import Inverter from './components/image/inverter.jpeg';

export const NAV_LINKS = [
  ['Home', '/#home'],
  ['Explore Work', '/ExploreWork'],
  ['About', '/#about'],
  // ['Tools', '/#tools'],
  ['Contact', '/#contact'],
]

export const STATS = [
  { value: 6, suffix: '+', label: 'Years of experience' },
  { value: 40, suffix: '+', label: 'Projects delivered' },
  { value: 6, suffix: '', label: 'States reached' },
]

export const PROJECTS = [
  { title: 'Rooftop PV Estate', category: 'Residential', size: '12 kWp', image: Pan5, location: 'Lagos', year: '2025',
    description: 'Grid-tied rooftop array with hybrid inverter for a family estate, cutting generator use to near zero.' },
  { title: 'Commercial Rooftop Array', category: 'Commercial', size: '250 kWp', image: Pan2, location: 'Abuja', year: '2024',
    description: 'Large-scale commercial installation with energy storage for consistent power supply.' },
  { title: 'Clinic Off-Grid Microgrid', category: 'Institutional', size: '40 kWp + storage', image: Pan3, location: 'Kano', year: '2023',
    description: 'Off-grid solution providing reliable power for a rural healthcare facility.' },
  { title: 'Solar Street Lighting', category: 'Public', size: '120 poles', image: Pan4, location: 'Enugu', year: '2022',
    description: 'Sustainable street lighting system reducing dependency on the national grid.' },
  { title: 'Hybrid Inverter & Battery', category: 'Residential', size: '10 kWh', image: Inverter, location: 'Port Harcourt', year: '2021',
    description: 'Integrated system for home energy management with battery backup.' },
  { title: 'Solar Water Pumping', category: 'Agricultural', size: '5 HP', image: Pan6, location: 'Ibadan', year: '2020',
    description: 'Efficient water pumping solution for irrigation in remote areas.' },
]

export const SKILLS = [
  'PV System Design',
  'Load & Yield Analysis',
  'Battery Storage',
  'Grid-Tie & Off-Grid',
  'Site Surveys',
  'Project Coordination',
]

export const QUALIFICATIONS = [
  { title: 'B.Eng. in Electrical Engineering', detail: 'Oko University · 2023' },
  { title: 'Certified PV Installer', detail: 'JP2 Solar company · 2024' },
]

export const TOOLS = ['PVsyst', 'AutoCAD', 'HelioScope', 'SketchUp', 'MATLAB', 'Excel']

export const CONTACT = {
  rows: [
    ['Phone', '+234 708 229 2120'],
    ['Email', 'leolightinnovation@gmail.com'],
    // ['LinkedIn', 'linkedin.com/in/your-name'],
    ['Instagram', '@nwakonuchestanley'],
  ],
  whatsapp: 'https://wa.me/2347082292120?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20solar%20project.',
}

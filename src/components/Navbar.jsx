import Link from "next/link";
import NavbarItem from "./NavbarItem";
import SchoolIcon from '@mui/icons-material/School';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BookIcon from '@mui/icons-material/Book';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import DescriptionIcon from '@mui/icons-material/Description';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    return <nav className="flex flex-col bg-slate-200 h-screen w-80">
      <div className="flex items-center justify-center my-2"><Link className='flex flex-row items-center justify-center text-xl p-5 hover:scale-[1.2] duration-150' href="/"><AddIcon/><span className="font-bold">Studying</span></Link></div>
      <div className="flex flex-col overflow-x-clip h-full overflow-y-scroll">
        <NavbarItem href="/">               <HomeIcon           className="text-xl"/> Home</NavbarItem>
        <NavbarItem href="/plano">          <CardMembershipIcon className="text-xl"/> Plano</NavbarItem>
        <NavbarItem href="/usuario">        <PersonIcon         className="text-xl"/> Usuario</NavbarItem>
        <NavbarItem href="/cronograma">     <CalendarMonthIcon  className="text-xl"/> Cronograma</NavbarItem>
        {/* <NavbarItem href="/gptprompt">      <SmartToyIcon       className="text-xl"/> GptPrompt</NavbarItem> */}
        <NavbarItem href="/materia">        <BookIcon           className="text-xl"/> Materia</NavbarItem>
        <NavbarItem href="/aula">           <SchoolIcon         className="text-xl"/> Aula</NavbarItem>
        <NavbarItem href="/modulo">         <AppsIcon           className="text-xl"/> Modulo</NavbarItem>
        <NavbarItem href="/submodulo">      <ViewModuleIcon     className="text-xl"/> SubModulo</NavbarItem>
        <NavbarItem href="/exercicio">      <DescriptionIcon    className="text-xl"/> Exercicio</NavbarItem>
        <NavbarItem href="/alternativa">    <NoteAddIcon        className="text-xl"/> Alternativa</NavbarItem>
      </div>
  </nav>
}
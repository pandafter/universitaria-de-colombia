import { PrincipalHome } from "@/components/ui/PrincipalHome/PrincipalHome"
import { ProgramasHome } from "@/components/ui/ProgramasHome/ProgramasHome"
import { HeroHome } from "@/components/ui/HeroHome/HeroHome"
import { Sedes } from "@/components/ui/Sedes/Sedes"
import { NoticiasHome } from "@/components/ui/NoticiasHome/NoticiasHome"



export const HomePage = () => {
  return (
    <div style={{justifyContent: 'center'}}>
        <HeroHome/>
        <PrincipalHome/>
        <ProgramasHome/>
        <Sedes/>
        <NoticiasHome/>
    </div>
  )
}

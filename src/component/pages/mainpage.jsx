import { HeaderPage } from "./headerpage";
import { Heroections } from "./herosection";
import { Jumbotran } from "./jumbotran";
import { ServicePage } from "./servicepage";
import { WhyWeBest } from "./whywebest";

export function ResumeMainPage(){
    return(
        <div className="container-fluid">
           
            <HeaderPage/>
            <section>
                <Heroections/>
            </section>
            <section>
                <ServicePage/>
            </section>
            <section>
                <WhyWeBest/>
            </section>
            <section>
                <Jumbotran/>
            </section>
        </div>
    )
}
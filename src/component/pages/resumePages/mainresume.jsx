
import { ResumeHeader } from "./resumeheader";
import '../resumePages/resumecss/resumeheadercss/header.css';



export function MainResume(){
    return(
        <div className="container">
           <div>
            <ResumeHeader/>
           </div>
        </div>
    )
}
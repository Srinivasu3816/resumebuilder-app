import { BrowserRouter, Routes,Route } from "react-router-dom";
import { RegisterForm } from "./registerform";
import { LoginForm } from "./loginform";
import { PagenotFound } from "./pagenotfound";
import { ResumeMainPage } from "./mainpage";

import { MainResume } from "./resumePages/mainresume";
import { ViewResume } from "./resumePages/viewresume";
export function ResumeIndex(){
    return(
        <BrowserRouter>
      
        
        <Routes>
            <Route path="main" element={<ResumeMainPage/>}/>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="login" element={<LoginForm/>}/>
            <Route path="register" element={<RegisterForm/>}/>
            {/* <Route path="newresume" element={<NewResumeBuilder/>}>
                <Route path="mainresume" element={<MainResume/>}/>
            </Route> */}
            <Route path="mainresume" element={<MainResume/>}/>
            <Route path="viewresume" element={<ViewResume/>}/>
            <Route path="*" element={<PagenotFound/>}/>
        </Routes >
        </BrowserRouter>
    )

}
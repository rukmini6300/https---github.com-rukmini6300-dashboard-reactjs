import { useState } from "react"
import Addstory from "./Addstory";

function NavMenu(props: any) {
    const {handleChangeCallback, submitData, inputValue } = props ;
    const [toggle,setToggle]=useState(false);
    const navChange=()=>{
        console.log("test")
        setToggle(!toggle);
    }
    const[storyBox, setStoryBox] = useState(false)
    const storyOpen = () => {
        setStoryBox(!storyBox)
    }
  return (
    <>
        <div  className={`navMenu_head ${toggle ? "expanded" : "collapsed"}`}>
            <a onClick={navChange} className="nav_icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
            </a>
            {toggle ?
                <>
                    <ul className="nav_list">
                        <li >
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/home.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/artificial-intelligence.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list"> 
                                <img src="https://ai.dev.silverile.com/assets/images/sb/sprints.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/defects.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li onClick={storyOpen}>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/stories.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/testcase.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/tasklist.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/home.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/artificial-intelligence.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/home.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/artificial-intelligence.svg"/>
                                <small>Home</small>
                            </a>
                        </li>
                    </ul>
                </>
                    : 
                <>
                    <ul className="nav_list" >
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/home.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/artificial-intelligence.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list"> 
                                <img src="https://ai.dev.silverile.com/assets/images/sb/sprints.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/defects.svg"/>
                            </a>
                        </li>
                        <li onClick={storyOpen}>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/stories.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/testcase.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/tasklist.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/home.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/artificial-intelligence.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list"> 
                                <img src="https://ai.dev.silverile.com/assets/images/sb/sprints.svg"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="submenu_list">
                                <img src="https://ai.dev.silverile.com/assets/images/sb/home.svg"/>
                            </a>
                        </li>
                    
                    </ul>
                </>
            }

        </div>
        {
            storyBox ? <Addstory handleChangeCallback = {handleChangeCallback } submitData = {submitData} inputValue={inputValue} /> : <></>
        }
    </>
  )
}

export default NavMenu

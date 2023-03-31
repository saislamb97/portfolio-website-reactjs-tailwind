import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import {MdPictureAsPdf} from "react-icons/md"

export default function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (<>LinkedIn <FaLinkedin size={30}/></>),
            href: 'https://www.linkedin.com/in/saiful-islam-326373166',
            style: 'rounded-tr-md'
        },

        {
            id: 2,
            child: (<>GitHub <FaGithub size={30}/></>),
            href: 'https://github.com/saislamb97'
        },

        {
            id: 3,
            child: (<>Mail <MdOutlineMail size={30}/></>),
            href: 'mailto:sa.islamb97@gmail.com',
        },

        {
            id: 4,
            child: (<>Resume <MdPictureAsPdf size={30}/></>),
            href: './resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id, child, href, style, download})=>{
                return(
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 roun ${style}`}>
                    <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
                        {child}
                    </a>
                    </li>
                )
            })}
           
        </ul>
    </div>
  )
}

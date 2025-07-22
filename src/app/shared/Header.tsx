import Link from "next/link"

export default function Header(){
    const menulist=[{
    name:"Home",
    path:"/home"
   },{
    name:"About",
    path:"/about"
   },{
    name:"Contact",
    path:"/contact"
   },{
    name:"Resume",
    path:"/resume"
   }]
   return(<>
   <div className="bg-gray-800">
    
    
    <ul className="flex gap-[20px] justify-center">
        
           { menulist.map((item,index)=>{
                return (<li key={index}><Link href={item.path}>{item.name}</Link></li>)
            })}
        
    </ul>
    {/*
    array.map((element,index)=>{statements})
    */}
   </div>
   
   

  </>)
}
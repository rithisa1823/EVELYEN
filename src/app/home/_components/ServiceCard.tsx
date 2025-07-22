import{MonitorSmartphone} from "lucide-react";
import Image from "next/image"; 17.5k (gzipped:6.2k);
export default  function ServiceCard(props)
{
    return(<>
    <div className="flex border-2 border-blue-800">
        <div>
            <Image alt="icon" src={props.icon} />
        </div>
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
    
    
    
    
    </>
    )
}
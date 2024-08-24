import "./EquipmentTitle.css"
import { useRouter } from "next/navigation"
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const EquipmentTitle = (props) => {

    const router = useRouter();

    return(
        <div className="mainEquipmentTitleSection" id="Equipment">
            <div className="EquipmentTitle">EQUIPMENT</div>
            <img className="EquipmentAllButton" onClick={() => router.push("/equipment")} src={'/assets/equipmentAllButton.svg'} alt="" />
        </div>
    );
}; 

export default EquipmentTitle;
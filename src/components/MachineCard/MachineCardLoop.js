import './MachineCard.css';

export default function MachineCardLoop ({addProd}){
    return(
    <div className='machineCardmaster'>
       {addProd.map((el, i) => {
    return (
        <div className='machineCard' key={i}>
            <div className='innerBox'>
                <div className='title'>
                    <div className='titleFont'>{el.title}</div>
                </div>
                <div>
                    <img className='machineImage' src={el.image} alt='MachineImage' />
                </div>
                <div className='description'>
                    <div className='descriptionFont'>{el.description}</div>
                </div>
            </div>
        </div>
    );
})}
    </div>
    )
}
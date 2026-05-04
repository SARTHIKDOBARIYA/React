import React, { useState } from 'react'

function Button({text,color,size,onClick,disable}){
    return (
        <button
        onClick={onClick}
        disabled={disable}
        className={
            `px-6 py-2 rounded-lg font-medium transition-all duration-300 
            ${size === 'small' ? 'text-sm px-4 py-1' : ''}
            ${size === 'large' ? 'text-lg px-4 py-3' : ''}
            ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}
            ${color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 text-white' : ''}
            ${color === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
            ${color === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : ''}
            ${disable ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
        >{text}</button>
    )
}

function BasicProps() {
    const [clickCount,setClickCount] = useState(0)
    return (
        <section className='text-p-8 bg-white rounded-xl shadow-2xl'>
            <h2>BasicProps</h2>
            <p>Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
            <div className='space-y-4'>
                <h3>Different color{clickCount}</h3>
                <div className='flex flex-wrap gap-3'>
                    <Button
                    text = "primary Button"
                    color="primary"
                    size="small"
                    onClick={()=>setClickCount(clickCount+1)}
                    />
                    <Button
                    text = "secondary Button"
                    color="secondary"
                    size="large"
                    disable="true"
                    onClick={()=>setClickCount(clickCount+1)}
                    />
                    <Button
                    text = "danger Button"
                    color="danger"
                    onClick={()=>setClickCount(clickCount+1)}
                    />
                    <Button
                    text = "success Button"
                    color="success"
                    onClick={()=>setClickCount(clickCount+1)}
                    />
                    
                </div>
            </div>
        </section>
    )
}

export default BasicProps
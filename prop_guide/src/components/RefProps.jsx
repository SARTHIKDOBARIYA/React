import {useRef,forwardRef} from 'react'

// Input component that accept ref prop

const CustomInput = forwardRef(({label,placeholder,className},ref)=>{
    return (
        <div className="mb-4">
            <label className={`block text-gray-700 font-medium mb-2`}>{label}</label>
            {/*<input type="text" placeholder={placeholder} className={`border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} />*/}
            <input type="text" placeholder={placeholder} ref={ref} className={`border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} />
        </div>
    )
})

CustomInput.displayName = 'CustomInput'

function RefProps() {

    const InputRef = useRef(null)
    const secondInputRef = useRef(null)

    const focusInput = () => {
        InputRef.current?.focus()
    }

    const getInput = () => {
        if(InputRef.current) {
            alert(InputRef.current.value)
        }
    }

    const clearInput = () => {
        if(InputRef.current){
            InputRef.current.value = ''
            InputRef.current.focus()
        }
    }

    const focusSecondInput = () => {
        secondInputRef.current?.focus()
    }

    return (
        <section className="p-8 bg-white rounded-xl shadow-lg">
            <h2>RefProps</h2>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <div>
                <div>
                    <h3>Try it up</h3>
                    <CustomInput
                    ref={InputRef}
                    label="First input"
                    placeholder="Enter first name"
                    />

                    <CustomInput
                        ref={secondInputRef}
                        label="second input"
                        placeholder="Enter first name"
                    />

                    <div className="flex flex-wrap">
                        <button
                            onClick={focusInput}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >Focus First Input</button>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                        <button
                            onClick={focusSecondInput}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >Focus Second Input</button>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                        <button
                            onClick={getInput}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >Focus getInput Input</button>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                        <button
                            onClick={clearInput}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >Focus clear Input</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default RefProps
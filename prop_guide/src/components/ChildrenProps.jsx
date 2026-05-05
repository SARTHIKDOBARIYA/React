import React from 'react'

function Card({children,title,color='blue'}){
    const colorClass={
        blue:"border-blue-500 bg-blue-500",
        green:"border-green-500 bg-green-500",
        purple:"border-purple-500 bg-purple-500",
        red:"border-red-500 bg-red-500"
    }
    return (
        <div className={`border-l-4 ${colorClass[color]} p-6 rounded-lg shadow-md`}>
            {title && <h3 className='text-xl font-bold mb-3 text-gray-600'>{title}</h3>}
            <div className='text-gray-700'>{children}</div>
        </div>
    )
}

function Container({children,layout='vertical'}){
    const layoutClasses = {
        vertical: "flex flex-col space-y-4",
        horizontal: "flex flex-row flex-wrap gap-4",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-4" 
    }

    return (
        <div className={layoutClasses[layout]}>{children}</div>
    )
}

function ChildrenProps() {
    return (
        <section className='p-8 bg-white rounded-xl shadow-lg'>
            <h2>ChildrenProps</h2>
            <p>Aliquip qui cupidatat magna sint aliquip cupidatat voluptate fugiat consectetur.</p>
            <div className='space-y-6'>
                <div>
                    <h3>Card component</h3>
                    <Container layout='grid'>
                        <Card title="User Profile" color='blue'>
                            <p className='mb-2'>
                                <strong>Name:</strong>Sarthik
                            </p>
                            <p className='mb-2'>
                                <strong>Email:</strong>test@gmail.com
                            </p>
                            <p className='mb-2'>
                                <strong>Role:</strong>Frontend
                            </p>
                        </Card>
                        <Card title="static" color='green'>
                            <p className='mb-2'>
                                <strong>Name:</strong>Mark z
                            </p>
                            <p className='mb-2'>
                                <strong>Email:</strong>mark
                            </p>
                            <p className='mb-2'>
                                <strong>Role:</strong>Founder
                            </p>
                            <button className='px-6 py-2 bg-white text-gray-600 rounded hover:bg-gray-900 hover:text-white transition'>button</button>
                        </Card>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default ChildrenProps
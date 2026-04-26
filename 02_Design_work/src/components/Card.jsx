import Button from "./button";

function Card({title = "Default" , buttonText = "Buy Course"}){
    return (
        <>
            <div className='max-w-sm bg-white border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
            <img src="https://imgs.search.brave.com/3NbWWnw7FPiRsu3YF351QwNPce03TzllNpVPl6U8n-E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/MjEzLzkzNi9zbWFs/bC9haS1nZW5lcmF0/ZWQtYWJzdHJhY3Qt/d2F0ZXItYnViYmxl/cy1jb2xvcmZ1bC1i/YWNrZ3JvdW5kLWRl/c2lnbi1pbWFnZXMt/cGhvdG8uanBn" className='w-full h-48 bg-center'></img>
            <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-800 text-center'>{title}</h2>
                <p className='mt-2 text-gray-600 text-sm mt-4'>lorem Voluptate ad officia quis tempor ut cupidatat esse nisi dolore ipsum qui.</p>
                {/* <Button buttonText={buttonText}/> */}
            </div>
            </div>
        </>
    )
}

export default Card;
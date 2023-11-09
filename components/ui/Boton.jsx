const Boton = ({ children, className = '', ...args }) => {

    return (
        <button 
            className={`rounded-lg py-2 px-4 text-white text-center bg-slate-500 ${className}`} 
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton
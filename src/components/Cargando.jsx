
export default function Cargando() {
    return (
        <div className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center">
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
            <span className="mt-4 text-xl font-semibold">Cargando...</span>
        </div>
    )
}

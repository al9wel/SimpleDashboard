const Card = ({ title }) => {
    return (
        <>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg dark:shadow-sm dark:shadow-gray-600">
                <h1 className="text-xl font-black dark:text-gray-100">{title}</h1>
                <p className="text-lg p-1 text-gray-700 dark:text-gray-400">this is a simple card with darkmode support you can put any content here</p>
            </div>
        </>
    )
}
export default Card